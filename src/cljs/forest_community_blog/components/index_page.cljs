(ns cljs.forest-community-blog.components.index-page
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.forest-community-blog.routes :as routes]
            [cljs.forest-community-blog.state :refer [app-state]]
            [cljs.forest-community-blog.components.util.time-format :refer [format-time]]
            [cljs.forest-community-blog.entities :refer [raw->Post]]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [cljs.forest-community-blog.cfg :refer [api-uri]]))

;; EFFECTs

(defn fetch-posts! []
  (go (let [response (<! (http/get (str api-uri "/posts")
                                   {:with-credentials? false
                                    :headers {"content-type" "application/json"}}))
            raw-posts (:body response)
            posts (map raw->Post raw-posts)]
        (swap! app-state assoc :posts posts))))


;; COMPONENTs
(defn blog-entry [post]
  [:div
   [:h2
    [:a {:href (routes/post-path {:id (:id post)})}
     (:title post)]]
   [:p
    [:span.glyphicon.glyphicon-time]
    (format-time (:created-at post))]
   (when-let [mins (:reading-time post)]
     [:p (str "Reading: " mins " minutes")])
   (when-let [img (:image post)]
     [:img.img-responsive {:src img :alt ""}])
   (when-let [desc (:description post)]
     [:p (:description post)])])

(defn blog-entries [posts]
  [:div.col-md-8.col-md-offset-2
   (for [post posts]
     ^{:key (:id post)} [blog-entry post])])

(defn index []
  (fetch-posts!)
  (fn []
    (let [posts (@app-state :posts)]
      [:div.container
       [:div.row
        [blog-entries posts]]])))
