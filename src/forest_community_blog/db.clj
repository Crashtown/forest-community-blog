(ns forest-community-blog.db
  (:require [clojure.java.jdbc :as sql]))

(def db (or (System/getenv "DATABASE_URL")
            "postgresql://localhost:5432/forest_community_blog"))

(defn migrate-db []
  "eval migrations"
  (sql/db-do-commands db
                      [(sql/create-table-ddl :posts
                                             [[:id :serial]
                                              [:title :varchar]
                                              [:description :text]
                                              [:reading_time :integer]
                                              [:body :text]
                                              [:created_at :timestamp]
                                              [:updated_at :timestamp]])]))

(defn drop-db []
  "drop database"
  (sql/db-do-commands db [(sql/drop-table-ddl :posts)]))

(defn reset-db []
  (do (drop-db)
      (migrate-db)))
