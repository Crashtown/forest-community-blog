(ns forest-community-blog.components.blog-page
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [re-frame.core :as rf]
            [forest-community-blog.routes :as routes]
            [forest-community-blog.components.util.time-format :refer [format-time]]
            [forest-community-blog.entities :refer [raw->Post]]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]))

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

(defn blog []
  (rf/dispatch [:fetch-posts])
  (let [posts (rf/subscribe [:posts])]
    (fn []
      [:div.container
       [:div.row
        [blog-entries @posts]]])))
