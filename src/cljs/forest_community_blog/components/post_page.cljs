(ns forest-community-blog.components.post-page
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [forest-community-blog.components.util.time-format :refer [format-time]]
            [forest-community-blog.components.markdown :refer [markdown-component]]
            [forest-community-blog.entities :refer [raw->Post]]
            [reagent.core :as r]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [forest-community-blog.config :as config]))

; STATE
(defonce post-state (r/atom (raw->Post {})))

; EFFECTs
(defn set-state! [state]
  (reset! post-state state))

(defn fetch-post! [id]
  (go (let [resp (<! (http/get (str config/api-uri "/posts/" id)
                               {:with-credentials? false
                                :headers {"content-type" "application/json"}}))
            post (:body resp)]
        ;; TODO: Handle not found there
        (set-state! (raw->Post post)))))

(defn post [id]
  (fetch-post! id)
  (fn []
    [:div.container
     [:div.row
      [:div.col-md-8.col-md-offset-2
       [:h2
        (:title @post-state)]
       (when-let [created-at (:created-at @post-state)]
         [:p
          [:span.glyphicon.glyphicon-time]
          (format-time created-at)])
       (when-let [mins (:reading-time @post-state)]
         [:p (str "Reading: " mins " minutes")])
       (when-let [img (:image @post-state)]
         [:img.img-responsive {:src img :alt ""}])
       (when-let [desc (:description @post-state)]
         [:p (:description @post-state)])
       [markdown-component (:body @post-state)]]]]))
