(ns cljs.forest-community-blog.components.post-page
  (:require [cljs.forest-community-blog.state :refer [app-state]]
            [cljs.forest-community-blog.components.util.time-format :refer [format-time]]
            [cljs.forest-community-blog.components.markdown :refer [markdown-component]]))

(defn post [id0]
  (let [id (js/parseInt id0)
        posts (@app-state :posts)
        post (first (filterv #(= (:id %) id) posts))]
    [:div.container
     [:div.row
      (when post
        [:div.col-md-8.col-md-offset-2
         [:h2
          (:title post)]
         [:p
          [:span.glyphicon.glyphicon-time]
          (format-time (:created-at post))]
         (when-let [mins (:reading-time post)]
           [:p (str "Reading: " mins " minutes")])
         (when-let [img (:image post)]
           [:img.img-responsive {:src img :alt ""}])
         (when-let [desc (:description post)]
           [:p (:description post)])
         [markdown-component (:body post)]])]]))
