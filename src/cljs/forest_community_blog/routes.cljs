(ns cljs.forest-community-blog.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.History)
  (:require [goog.events :as events]
            [goog.history.EventType :as EventType]
            [secretary.core :as secretary]
            [cljs.forest-community-blog.state :as state]))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defroute blog-path "/" [] (state/set-page! :blog))
(defroute about-path "/about" [] (state/set-page! :about))
(defroute post-path "/posts/:id" [id] (state/set-page! [:post id]))
(defroute "/login" [] (state/set-page! :login))
(defroute "/new-post" [] (state/set-page! :new-post))

(defn init! []
  (secretary/set-config! :prefix "#")
  (hook-browser-navigation!))
