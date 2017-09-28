(ns forest-community-blog.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.History)
  (:require [re-frame.core :as rf]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [secretary.core :as secretary]))

(declare login-path)

(defn set-page! [page]
  (rf/dispatch [:set-page page]))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn check-auth-present! []
  (if-not (rf/subscribe [:auth])
    (set! (.-location js/window) (login-path))))

(defroute blog-path "/blog" [] (set-page! :blog))
(defroute music-path "/music" [] (set-page! :music))
(defroute home-path "/" [] (set! (.-location js/window) (blog-path)))
(defroute about-path "/about" [] (set-page! :about))
(defroute "/posts/edit" []
  (do (check-auth-present!)
      (set-page! [:edit nil])))
(defroute "/posts/:id/edit" [id]
  (do (check-auth-present!)
      (set-page! [:edit (js/parseInt id)])))
(defroute post-path "/posts/:id" [id] (set-page! [:post (js/parseInt id)]))
(defroute track-path "/tracks/:id" [id] (set-page! [:track (js/parseInt id)]))
(defroute login-path "/login" [] (set-page! :login))
(defroute "/uploads" [] (do (check-auth-present!)
                            (set-page! :uploads)))

(defn app-routes []
  (secretary/set-config! :prefix "#")
  (hook-browser-navigation!))
