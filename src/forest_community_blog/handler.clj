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
   [ring.util.response :refer [response status content-type]]
   [clojure.java.io :as io]
   [clojure.tools.nrepl.server :refer [start-server]]
   [forest-community-blog.routes.posts :refer [posts-routes]]
   [forest-community-blog.middleware.auth :refer [wrap-auth]]))

;; STARTS nREPL server
(defonce repl-server (start-server :port
                                   (or (System/getenv "FOREST_COMMUNITY_BLOG_REPL_PORT")
                                       3388)))

(defonce uploads-dir (or (System/getenv "FOREST_COMMUNITY_BLOG_UPLOADS_DIR")
                         "resources/public/uploads"))

(defn index-uploads []
  (response {:uploads (->> uploads-dir
                           io/file
                           file-seq
                           (drop 1)
                           (map #(str "uploads/" (.getName %))))}))


;; (defroutes tracks-routes
;;   (GET "/" [] (get-tracks))
;;   (->
;;    (POST "/" {track :body} (create-track track))
;;    (wrap-routes wrap-auth))
;;   (context "/:id" [id] (track-routes (Integer. id))))

(defroutes uploads-routes
  (->
   (POST "/"
         {{{tempfile :tempfile filename :filename} "file"} :params}
         (io/copy tempfile (io/file uploads-dir filename))
         (response {:success (str "uploads/" filename)}))
   (wrap-routes (comp wrap-multipart-params wrap-auth)))
  (->
   (GET "/" [] (index-uploads))
   (wrap-routes wrap-auth)))

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
