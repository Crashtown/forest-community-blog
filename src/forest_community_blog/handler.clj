(ns forest-community-blog.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.util.response :refer [response status]]
            [clojure.java.jdbc :as sql]
            [clj-time.core :as t]))


(def db (or (System/getenv "DATABASE_URL")
            "postgresql://localhost:5432/forest_community_blog"))

(defn migrate-db []
  "eval migrations"
  (sql/db-do-commands db
                      [(sql/create-table-ddl :posts
                                             [[:id :serial]
                                              [:title :varchar]
                                              [:body :text]
                                              [:created_at :timestamp]
                                              [:updated_at :timestamp]])]))

(defn drop-db []
  (sql/db-do-commands db [(sql/drop-table-ddl :posts)]))

(defn reset-db []
  (do (drop-db)
      (migrate-db)))

(defn timestamp []
  (java.sql.Timestamp. (.getTime (java.util.Date.))))

(defn get-posts []
  (sql/query db ["select * from posts;"]))

(defn get-post [id]
  (first (sql/query db [(str "select * from posts where id = " id ";")])))

(defn create-post [post]
  (first (sql/insert! db
                      :posts
                      {:title (:title post)
                       :body (:body post)
                       :created_at (timestamp)
                       :updated_at (timestamp)})))

(defn update-post [id post]
  (sql/update! db
               :posts
               {:body (:body post)
                :title (:title post)}
               ["id = ?" id]))

(defn delete-post [id]
  (sql/delete! db :posts ["id = ?" id]))

(defn post-routes [id]
  (routes
   (GET    "/" []
           (if-let [post (get-post id)]
             (response post)
             (response {:fail (str "post #" id " is not found")} 404)))
   (PUT    "/" {post :body}
           (do (update-post (Integer. id) post)
               (response (get-post id))))
   (DELETE "/" []
           (do (delete-post (Integer. id))
               (response {:success (str "deleted post #" id)})))))

(defroutes posts-routes
  (GET     "/" []
           (response (get-posts)))
  (POST    "/" {post :body}
           (response (create-post post)))
  (context "/:id" [id] (post-routes id)))

(defroutes app-routes
  (route/resources "/")
  (context "/posts" [] posts-routes)
  (route/not-found "Not Found"))

(def app
  (-> app-routes
     ;; (wrap-defaults site-defaults)
      (wrap-json-body {:keywords? true :bigdecimals? true})
      (wrap-json-response)
      (wrap-cors :access-control-allow-origin [#"http://localhost:3449"]
                 :access-control-allow-methods [:get :put :post :delete])))
