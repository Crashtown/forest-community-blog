(ns cljs.forest-community-blog.components.post-page
  (:require [cljs.forest-community-blog.state :refer [app-state]]))

(defn post [id0]
  (let [id (js/parseInt id0)
        posts (@app-state :posts)
        post (first (filterv #(= (:id %) id) posts))]
    [:div.container
     [:div.row
      [:div.col-md-8.col-md-offset-2
       [:h2
        (:title post)]
       [:p
        [:span.glyphicon.glyphicon-time] (:created_at post)]
       (when-let [img (:head-image post)]
         [:img.img-responsive {:src img :alt ""}])
       [:p (:body post)]]]]))
