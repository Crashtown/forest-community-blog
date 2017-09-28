(ns forest-community-blog.views
  (:require-macros [cljs.core.match :refer [match]])
  (:require [re-frame.core :as rf]
            [cljs.core.match]
            [forest-community-blog.components.edit-page :refer [edit]]
            [forest-community-blog.components.post-page :refer [post]]
            [forest-community-blog.components.music-page :refer [music]]
            [forest-community-blog.components.blog-page :refer [blog]]
            [forest-community-blog.components.about-page :refer [about]]
            [forest-community-blog.components.login-page :refer [login]]
            [forest-community-blog.components.navigation :refer [navigation]]
            [forest-community-blog.components.uploads-page :refer [uploads]]))

(defn current-page []
  (let [page @(rf/subscribe [:current-page])]
    (match page
           :blog [blog]
           :music [music]
           [:post id] [post id]
           :about [about]
           :login [login]
           [:edit id] [edit id]
           :uploads [uploads]
           :else [:div])))

(defn main-panel []
  [:div.root
   [navigation]
   [current-page]])

