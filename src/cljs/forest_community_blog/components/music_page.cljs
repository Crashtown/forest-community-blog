(ns forest-community-blog.components.music-page
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [re-frame.core :as rf]
            [cljs.core.async :refer [<!]]
            [forest-community-blog.config :as config]
            [forest-community-blog.entities :refer [raw->Track]]
            [cljs-http.client :as http]))

(defn track-entry [track]
  [:div.row
   [:p.vertical-align
    [:audio {:controls true
             :src (:uri track)}]
    (:title track)]])

(defn tracklist [tracks]
  [:div.col-md-8.col-md-offset-2
   (for [track tracks]
     ^{:key (:id track)} [track-entry track])])

(defn music []
  (rf/dispatch [:fetch-tracks])
  (let [tracks (rf/subscribe [:tracks])]
    (fn []
      [:div.container
       [tracklist @tracks]])))
