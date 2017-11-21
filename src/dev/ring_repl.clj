(ns ring-repl
  (:use [ring.adapter.jetty]
        [forest-community-blog.handler]))

(defn start
  ([]
   (start 3000))
  ([port]
   (run-jetty app {:port port})))