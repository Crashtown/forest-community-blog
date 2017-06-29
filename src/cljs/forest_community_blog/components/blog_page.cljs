(ns cljs.forest-community-blog.components.blog-page
  (:require [cljs.forest-community-blog.routes :as routes]
            [cljs.forest-community-blog.state :refer [app-state]]))

(defn blog-entry [post]
  [:div
   [:h2
    [:a {:href (routes/post-path {:id (:id post)})}
     (:title post)]]
   [:p
    [:span.glyphicon.glyphicon-time] (:created_at post)]
   (when-let [img (:head_image post)]
     [:img.img-responsive {:src img :alt ""}])
   [:p (:body post)]
   [:a.btn.btn-primary {:href (routes/post-path {:id (:id post)})}
    "Read More"
    [:span.glyphicon.glyphicon-chevron-right]]])

(defn blog-entries [posts]
  [:div.col-md-8.col-md-offset-2
   (for [post posts]
     ^{:key (:id post)} [blog-entry post])])

(defn blog []
  (let [posts (@app-state :posts)]
    [:div.container
     [:div.row
      [blog-entries posts]]]))
