(ns cljs.forest-community-blog.components.music-page
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<!]]
            [cljs.forest-community-blog.cfg :refer [api-uri]]
            [cljs.forest-community-blog.entities :refer [raw->Track]]
            [cljs.forest-community-blog.state :refer [app-state]]
            [cljs-http.client :as http]))


;; EFFECTs
(defn fetch-tracks! []
  (go (let [response (<! (http/get (str api-uri "/tracks")
                                   {:with-credentials? false
                                    :headers {"content-type" "application/json"}}))
            raw-tracks (:body response)
            tracks (map raw->Track raw-tracks)]
        (swap! app-state assoc :tracks tracks))))

;; COMPONENTs
(defn track-entry [track]
  [:div.row
   [:p.vertical-align
    (:title track)
    [:audio {:controls true
             :src (:uri track)}]]])

(defn tracklist [tracks]
  [:div.col-md-8.col-md-offset-2
   (for [track tracks]
     ^{:key (:id track)} [track-entry track])])

(defn music []
  (fetch-tracks!)
  (fn []
    (let [tracks (@app-state :tracks)]
      [:div.container
        [tracklist tracks]])))
