(ns forest-community-blog.components.music-page
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [re-frame.core :as rf]
            [cljs.core.async :refer [<!]]
            [forest-community-blog.config :as config]
            [forest-community-blog.entities :refer [raw->Track]]
            [cljs-http.client :as http]))


;; EFFECTs
(defn fetch-tracks! []
  (go (let [response (<! (http/get (str config/api-uri "/tracks")
                                   {:with-credentials? false
                                    :headers {"content-type" "application/json"}}))
            raw-tracks (:body response)
            tracks (map raw->Track raw-tracks)]
        (rf/dispatch [:set-tracks tracks]))))

;; COMPONENTs
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
  (fetch-tracks!)
  (let [tracks (rf/subscribe [:tracks])]
    (fn []
      [:div.container
       [tracklist @tracks]])))
