(ns forest-community-blog.entities.post
  (:require [forest-community-blog.db :refer [db]]
            [clojure.java.jdbc :as sql]))

(defrecord Post [id body created-at updated-at title description image reading-time])

(defn- db->Post [db-post]
  (-> db-post
      (clojure.set/rename-keys {:created_at :created-at
                                :updated_at :updated-at
                                :reading_time :reading-time})
      (map->Post)))

(defn- Post->db [post]
  (clojure.set/rename-keys post {:created-at :created_at
                                 :updated-at :updated_at
                                 :reading-time :reading_time}))

(defn- timestamp []
  (java.sql.Timestamp. (.getTime (java.util.Date.))))

(defn all []
  (map db->Post (sql/query db ["select * from posts;"])))

(defn get [id]
  (if-let [post (->
                 (sql/query db [(str "select * from posts where id = " id ";")])
                 (first))]
    (db->Post post)))

(defn create [post]
  (let [post-data (-> post
                      (Post->db)
                      (dissoc :id)
                      (assoc :created_at (timestamp)
                             :updated_at (timestamp)))]
    (db->Post (first (sql/insert! db
                                  :posts
                                  post-data)))))

(defn update [id post]
  (let [post-data (-> post
                      (Post->db)
                      (dissoc :id :created_at)
                      (assoc :updated_at (timestamp)))]
    (sql/update! db
                 :posts
                 post-data
                 ["id = ?" id])))

(defn delete [id]
  (sql/delete! db :posts ["id = ?" id]))
