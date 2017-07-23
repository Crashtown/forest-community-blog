(ns forest-community-blog.routes.posts
  (:require
   [forest-community-blog.entities.post :as post]
   [ring.util.response :refer [response status]]
   [compojure.core :refer :all]
   [forest-community-blog.middleware.auth :refer [wrap-auth]]))

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

(defn post-routes [id]
  (routes
   (GET "/" [] (get-post id))
   (->
    (PUT "/" {post :body} (update-post id post))
    (wrap-routes wrap-auth))
   (->
    (DELETE "/" [] (delete-post id))
    (wrap-routes wrap-auth))))

(defroutes posts-routes
  (GET "/" [] (get-posts))
  (->
   (POST "/" {post :body} (create-post post))
   (wrap-routes wrap-auth))
  (context "/:id" [id] (post-routes (Integer. id))))
