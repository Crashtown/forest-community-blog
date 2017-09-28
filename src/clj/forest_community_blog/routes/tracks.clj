(ns forest-community-blog.routes.tracks
  (:require
   [forest-community-blog.entities.track :as track]
   [compojure.core :refer :all]
   [ring.util.response :refer [response status]]
   [forest-community-blog.middleware.auth :refer [wrap-auth]]))

(defn get-tracks []
  (response (track/all)))
(defn get-track [id]
  (if-let [track (track/get id)]
    (response track)
    (-> {:fail (str "track #" id " is not found")}
        (response)
        (status 404))))
(defn create-track [track]
  (response (track/create track)))
(defn update-track [id track]
  (track/update id track)
  (response (track/get id)))
(defn delete-track [id]
  (track/delete id)
  (response {:success (str "deleted track #" id)}))

(defn track-routes [id]
  (routes
   (GET "/" [] (get-track id))
   (->
    (PUT "/" {track :body} (update-track id track))
    (wrap-routes wrap-auth))
   (->
    (DELETE "/" [] (delete-track id))
    (wrap-routes wrap-auth))))

(defroutes tracks-routes
  (GET "/" [] (get-tracks))
  (->
   (POST "/" {track :body} (create-track track))
   (wrap-routes wrap-auth))
  (context "/:id" [id] (track-routes (Integer. id))))
