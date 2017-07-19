(ns forest-community-blog.handler
  (:require
   [compojure.core :refer :all]
   [compojure.route :as route]
   [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
   [ring.middleware.cors :refer [wrap-cors]]
   [ring.middleware.content-type :refer [wrap-content-type]]
   [ring.middleware.not-modified :refer [wrap-not-modified]]
   [ring.middleware.multipart-params :refer [wrap-multipart-params]]
   [ring.logger :refer [wrap-with-logger]]
   [ring.util.response :refer [response status content-type file-response]]
   [clojure.java.io :as io]
   [forest-community-blog.entities.post :as post]
   [clojure.tools.nrepl.server :refer [start-server]]))

;; STARTS nREPL server
(defonce repl-server (start-server :port
                                   (or (System/getenv "FOREST_COMMUNITY_BLOG_REPL_PORT")
                                       3388)))

;; AUTH CODE
(defonce auth-code (or (System/getenv "FOREST_COMMUNITY_BLOG_AUTH_CODE")
                       "secret"))

(defonce uploads-dir (or (System/getenv "FOREST_COMMUNITY_BLOG_UPLOADS_DIR")
                         "resources/public/uploads"))

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
  (response {:uploads (->> uploads-dir
                           io/file
                           file-seq
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

(defroutes uploads-routes
  (->
   (POST "/"
         {{{tempfile :tempfile filename :filename} "file"} :params}
         (io/copy tempfile (io/file uploads-dir filename))
         (response {:success (str "uploads/" filename)}))
   (wrap-routes (comp wrap-multipart-params authenticate)))
  (->
   (GET "/" [] (index-uploads))
   (wrap-routes authenticate)))

(defroutes app-routes
  (context "/api" []
           (context "/uploads" []
                    uploads-routes)
           (context "/posts" []
                    posts-routes)))

(def app
  (-> app-routes
      (wrap-with-logger)
      (wrap-json-body {:keywords? true :bigdecimals? true})
      (wrap-json-response)
      (wrap-cors :access-control-allow-origin [#"http://127.0.0.1"
                                               #"http://localhost:3449"
                                               #"http://forest-community.org"]
                 :access-control-allow-methods [:get :put :post :delete])))
