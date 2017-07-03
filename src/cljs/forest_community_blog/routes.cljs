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

(defn check-auth-present! []
  (if-not (:auth @app-state)
    (set! (.-location js/window) "/#/login")))

(defroute index-path "/index" [] (set-page! :index))
(defroute blog-path "/" [] (secretary/dispatch! (index-path)))
(defroute about-path "/about" [] (set-page! :about))
(defroute post-path "/posts/:id" [id] (set-page! [:post (js/parseInt id)]))

(defroute "/login" [] (set-page! :login))

(defroute "/edit" [] (do (check-auth-present!)
                         (set-page! [:edit nil])))
(defroute "/edit/:id" [id] (do (check-auth-present!)
                               (set-page! [:edit (js/parseInt id)])))
(defroute "/uploads" [] (do (check-auth-present!)
                            (set-page! :uploads)))

(defn init! []
  (secretary/set-config! :prefix "#")
  (hook-browser-navigation!))
