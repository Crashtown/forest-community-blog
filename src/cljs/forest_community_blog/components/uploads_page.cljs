(ns cljs.forest-community-blog.components.uploads-page
  (:require [cljs.forest-community-blog.state :refer [app-state]]))

(defn uploads []
  (let [auth (:auth @app-state)]
    (fn []
      (if auth
        [:div "uploads index"]
        [:h1 "AUTH?"]))))
