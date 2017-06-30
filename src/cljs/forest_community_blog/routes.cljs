(ns cljs.forest-community-blog.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.History)
  (:require [goog.events :as events]
            [goog.history.EventType :as EventType]
            [secretary.core :as secretary]
            [cljs.forest-community-blog.state :refer [app-state]]))

(defn set-page! [page]
  (swap! app-state assoc :page page))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defroute index-path "/index" [] (set-page! :index))
(defroute blog-path "/" [] (secretary/dispatch! (index-path)))
(defroute about-path "/about" [] (set-page! :about))
(defroute post-path "/posts/:id" [id] (set-page! [:post id]))
(defroute "/login" [] (set-page! :login))
(defroute "/new-post" [] (set-page! :new-post))

(defn init! []
  (secretary/set-config! :prefix "#")
  (hook-browser-navigation!))
