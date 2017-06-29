(ns cljs.forest-community-blog.components.new-post-page
  (:require [cljs.forest-community-blog.components.markdown :refer [markdown-component]]
            [reagent.core :as r]))

(defn preview [content]
  (when (not-empty @content)
    [markdown-component @content]))

(defn editor [content]
  [:textarea.form-control
   {:value     @content
    :on-change #(reset! content (-> % .-target .-value))}])

(defn new-post []
  (let [content (r/atom nil)]
    (fn []
      [:div
       [:h1 "Create new post"]
       [:div.container-fluid
        [:div.row
         [:div.col-sm-6
          [:h3 "Editor"]
          [editor content]]
         [:div.col-sm-6
          [:h3 "Preview"]
          [preview content]]]]])))
