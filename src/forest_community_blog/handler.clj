(ns forest-community-blog.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.content-type :refer [wrap-content-type]]
            [ring.middleware.not-modified :refer [wrap-not-modified]]
            [ring.middleware.multipart-params :refer [wrap-multipart-params]]
            [ring.logger :refer [wrap-with-logger]]
            [ring.util.response :refer [response status content-type file-response resource-response]]
            [clojure.java.io :as io]
            [forest-community-blog.entities.post :as post]))

(def auth-code (or (System/getenv "FOREST_COMMUNITY_BLOG_SECRET")
                   "secret"))

(defn authenticate [handler]
  (fn [request]
    (let [auth (get-in request [:headers "auth-code"])]
      (if (= auth auth-code)
        (do (println "Authenticated")
            (handler request))
        (-> {:fail "unauthenticated"}
            (response)
            (status 401))))))

(defn get-posts []
  (response (post/all)))
(defn get-post [id]
  (if-let [post (post/get id)]
    (response post)
    (-> {:fail (str "post #" id " is not found")}
        (response)
        (status 404))))
(defn create-post [post]
  (response (post/create post)))
(defn update-post [id post]
  (post/update id post)
  (response (post/get id)))
(defn delete-post [id]
  (post/delete id)
  (response {:success (str "deleted post #" id)}))
(defn index-uploads []
  (response {:uploads (->> "public/uploads/"
                           (io/resource)
                           (.getPath)
                           (io/file)
                           (file-seq)
                           (drop 1)
                           (map #(str "uploads/" (.getName %))))}))

(defn post-routes [id]
  (routes
   (GET "/" [] (get-post id))
   (->
    (PUT "/" {post :body} (update-post id post))
    (wrap-routes authenticate))
   (->
    (DELETE "/" [] (delete-post id))
    (wrap-routes authenticate))))

(defroutes posts-routes
  (GET "/" [] (get-posts))
  (->
   (POST "/" {post :body} (create-post post))
   (wrap-routes authenticate))
  (context "/:id" [id] (post-routes (Integer. id))))

(defroutes app-routes
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (->
   (route/resources "/")
   (wrap-routes (comp wrap-content-type wrap-not-modified)))
  (->
   (POST "/uploads"
         {{{tempfile :tempfile filename :filename} "file"} :params}
         (io/copy tempfile (io/file "resources" "public" "uploads" filename))
         (response {:success (str "uploads/" filename)}))
   (wrap-routes (comp wrap-multipart-params authenticate)))
  (->
   (GET "/uploads" [] (index-uploads))
   (wrap-routes authenticate))
  (context "/posts" [] posts-routes))

(def app
  (-> app-routes
      (wrap-with-logger)
      (wrap-json-body {:keywords? true :bigdecimals? true})
      (wrap-json-response)
      (wrap-cors :access-control-allow-origin [#"http://localhost:3449"]
                 :access-control-allow-methods [:get :put :post :delete])))
