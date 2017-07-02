(ns cljs.forest-community-blog.components.edit-page
  (:require [cljs.forest-community-blog.components.markdown :refer [markdown-component]]
            [cljs.forest-community-blog.state :refer [app-state]]
            [cljs.forest-community-blog.entities :refer [->Post]]
            [reagent.core :as r]))

(defn body-preview [post]
  (when (not-empty (:body @post))
    [markdown-component (:body @post)]))

(defn body-editor [post]
  [:textarea.form-control
   {:value     (:body @post)
    :on-change #(swap! post assoc :body (-> % .-target .-value))}])

(defn edit [id]
  (let [posts (@app-state :posts)
        post (first (filterv #(= (:id %) id) posts))
        editable-post (r/atom (or (:body post) (->Post)))]
    (fn []
      [:div
       [:div.container-fluid
        [:div.row.row-centered
         [:h1 "Create new post"]
         [:div.col-md-8.col-md-offset-2
          [:div.input-group.input-group-lg
           [:span.input-group-addon {:id "sizing-addon1"} "Title"]
           [:input.form-control {:type "text"
                                 :placeholder "Title"
                                 :aria-describedby "sizing-addon1"}]]]]
        [:div.row
         [:div.col-sm-6
          [:h3 "Editor"]
          [body-editor editable-post]]
         [:div.col-sm-6
          [:h3 "Preview"]
          [body-preview editable-post]]]]])))
