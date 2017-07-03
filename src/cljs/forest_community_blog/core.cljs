(ns cljs.forest-community-blog.core
  (:require-macros [cljs.core.match :refer [match]])
  (:require [reagent.core :as r]
            [cljs.core.match]
            [cljs.forest-community-blog.routes :as routes]
            [cljs.forest-community-blog.state :refer [app-state get-posts!]]
            [cljs.forest-community-blog.components.edit-page :refer [edit]]
            [cljs.forest-community-blog.components.post-page :refer [post]]
            [cljs.forest-community-blog.components.index-page :refer [index]]
            [cljs.forest-community-blog.components.about-page :refer [about]]
            [cljs.forest-community-blog.components.login-page :refer [login]]
            [cljs.forest-community-blog.components.navigation :refer [navigation]]))

(declare current-page)

(defn root-component []
  (get-posts!)
  (fn []
    [:div.root
     [navigation]
     [current-page]]))

(defn current-page []
  (let [page (@app-state :page)]
    (match page
           :index [index]
           [:post id] [post id]
           :about [about]
           :login [login]
           [:edit id] [edit id]
           :else [:div])))

(defn ^:export init! []
  (r/render [root-component]
            (js/document.getElementById "app")))

(.addEventListener js/window "DOMContentLoaded" init!)

(enable-console-print!)
(println "Loading forest-community blog...")

(routes/init!)
