(ns forest-community-blog.routes.uploads
  (:require
   [compojure.core :refer :all]
   [ring.util.response :refer [response status]]
   [forest-community-blog.middleware.auth :refer [wrap-auth]]
   [ring.middleware.multipart-params :refer [wrap-multipart-params]]
   [clojure.java.io :as io]))

(def uploads-dir (or (System/getenv "FOREST_COMMUNITY_BLOG_UPLOADS_DIR")
                     "resources/public/uploads"))

(defn index-uploads []
  (response {:uploads (->> uploads-dir
                           io/file
                           file-seq
                           (drop 1)
                           (map #(str "uploads/" (.getName %))))}))

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

