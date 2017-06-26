(ns cljs.forest-community-blog.core
  (:require [reagent.core :as r]))

(.log js/console "Zdarova chuvachok")

(defn cool-component []
  [:div
   [:h1 "Coolest component ever"]])

(defn ^:export start []
  (r/render [cool-component]
            (js/document.getElementById "app")))

(.addEventListener js/window "DOMContentLoaded" start)
