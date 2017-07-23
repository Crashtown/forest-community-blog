(ns forest-community-blog.db
  (:require [clojure.java.jdbc :as sql]
            [clojure.java.io :as io]
            [ragtime.jdbc :as jdbc]
            [ragtime.repl :as repl]))

(def db (or (System/getenv "DATABASE_URL")
            "postgresql://localhost:5432/forest_community_blog"))

(defn load-config []
  {:datastore  (jdbc/sql-database db)
   :migrations (jdbc/load-resources "migrations")})

(defn migrate []
  (repl/migrate (load-config)))

(defn rollback []
  (repl/rollback (load-config)))

(defn generate-migration [name]
  (let [ts (.getTime (java.util.Date.))
        migrations-path (.getPath (io/resource "migrations"))
        base-name (str ts "-" name)
        up-name (str base-name ".up.sql")
        down-name (str base-name ".down.sql")
        full-up-name (str migrations-path "/" up-name)
        full-down-name (str migrations-path "/" down-name)]
    (spit full-up-name
          (str "-- " up-name "\n"))
    (spit full-down-name
          (str "-- " down-name "\n"))))

(defn -main [command]
  (cond
    (= command "migrate")
    (do (println "Migrating the database!")
        (migrate))
    (= command "rollback")
    (do (println "Rollback the database!")
        (rollback))
    :otherwise
    (println (str "Command \"" command "\" is not recognised"))))
