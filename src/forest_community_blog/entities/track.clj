(ns forest-community-blog.entities.track
  (:require [forest-community-blog.db :refer [db]]
            [clojure.java.jdbc :as sql]))

(defrecord Track [id title image description uri created-at updated-at])

(defn- db->Track [db-track]
  (-> db-track
      (clojure.set/rename-keys {:created_at :created-at
                                :updated_at :updated-at})
      (map->Track)))

(defn- Track->db [track]
  (clojure.set/rename-keys track {:created-at :created_at
                                  :updated-at :updated_at}))

(defn- timestamp []
  (java.sql.Timestamp. (.getTime (java.util.Date.))))

(defn all []
  (map db->Track (sql/query db ["select * from tracks;"])))

(defn get [id]
  (if-let [track (->
                  (sql/query db [(str "select * from trackss where id = " id ";")])
                  first)]
    (db->Track track)))

(defn create [track]
  (let [track-data (-> track
                       Track->db
                       (dissoc :id)
                       (assoc :created_at (timestamp)
                              :updated_at (timestamp)))]
    (db->Track (first (sql/insert! db
                                   :tracks
                                   track-data)))))

(defn update [id track]
  (let [track-data (-> track
                       Track->db
                       (dissoc :id :created_at)
                       (assoc :updated_at (timestamp)))]
    (sql/update! db
                 :tracks
                 track-data
                 ["id = ?" id])))

(defn delete [id]
  (sql/delete! db :tracks ["id = ?" id]))
