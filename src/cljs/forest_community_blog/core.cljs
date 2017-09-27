(ns cljs.forest-community-blog.core
  (:require-macros [cljs.core.match :refer [match]])
  (:require [reagent.core :as r]
            [cljs.core.match]
            [cljs.forest-community-blog.state :refer [app-state]]
            [cljs.forest-community-blog.routes :as routes]
            [cljs.forest-community-blog.components.edit-page :refer [edit]]
            [cljs.forest-community-blog.components.post-page :refer [post]]
            [cljs.forest-community-blog.components.music-page :refer [music]]
            [cljs.forest-community-blog.components.blog-page :refer [blog]]
            [cljs.forest-community-blog.components.about-page :refer [about]]
            [cljs.forest-community-blog.components.login-page :refer [login]]
            [cljs.forest-community-blog.components.navigation :refer [navigation]]
            [cljs.forest-community-blog.components.uploads-page :refer [uploads]]
            [cljs.forest-community-blog.cfg :refer [api-uri]]
            [cljsjs.bootstrap]
            [cljsjs.highlight]
            [cljsjs.highlight.langs.clojure]
            [cljsjs.marked]))

(declare current-page)

;; COMPONENTs
(defn root-component []
  [:div.root
   [navigation]
   [current-page]])

(defn current-page []
  (let [page (@app-state :page)]
    (match page
           :blog [blog]
           :music [music]
           [:post id] [post id]
           :about [about]
           :login [login]
           [:edit id] [edit id]
           :uploads [uploads]
           :else [:div])))

;; INIT
(defn ^:export init! []
  (r/render [root-component]
            (js/document.getElementById "app")))

(.addEventListener js/window "DOMContentLoaded" init!)
(enable-console-print!)
(println "Loading forest-community blog...")
(println api-uri)
(routes/init!)
