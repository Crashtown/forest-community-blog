(ns cljs.forest-community-blog.components.edit-page
  (:require [cljs.forest-community-blog.components.markdown :refer [markdown-component]]
            [cljs.forest-community-blog.state :refer [app-state update-post! create-post!]]
            [cljs.forest-community-blog.routes :refer [set-page!]]
            [cljs.forest-community-blog.entities :refer [map->Post]]
            [reagent.core :as r]))

; STATE
(defonce post-edit-state (r/atom (map->Post {})))

; EFFECTs
(defn get-post! [id]
  (println id)
  (let [posts (@app-state :posts)]
    (first (filterv #(= (:id %) id) posts))))

(defn set-post-edit! [post]
  (if post
    (do (println post) (reset! post-edit-state post))
    (reset! post-edit-state (map->Post {}))))

(defn submit []
  (let [post @post-edit-state
        id (:id post)]
    (if id
      (do (update-post! id post)
          (set-post-edit! post))
      (let [created-post (create-post! post)]
        (set-post-edit! created-post)))))

(defn set-post-state! [id]
  (let [post (get-post! id)]
    (set-post-edit! post)))

; COMPONENTs

(defn body-preview []
  (when (not-empty (:body @post-edit-state))
    [markdown-component (:body @post-edit-state)]))

(defn body-editor []
  [:textarea.form-control
   {:value     (:body @post-edit-state)
    :on-change #(swap! post-edit-state assoc :body (-> % .-target .-value))}])

(defn edit [id]
  (set-post-state! id)
  (fn []
    [:div
     [:div.container-fluid
      [:div.row.row-centered
       [:h1 "Create new post"]
       [:div.col-md-8.col-md-offset-2
        [:div.input-group.input-group-lg
         [:span.input-group-addon {:id "sizing-addon1"} "Title"]
         [:input.form-control
          {:type "text"
           :aria-describedby "sizing-addon1"
           :value (:title @post-edit-state)
           :on-change #(swap! post-edit-state assoc :title (-> % .-target .-value))}]]
        [:div.input-group.input-group-lg
         [:span.input-group-addon {:id "sizing-addon1"} "Reading time, minutes"]
         [:input.form-control
          {:type "number"
           :aria-describedby "sizing-addon1"
           :value (:reading-time @post-edit-state)
           :on-change #(swap!
                        post-edit-state
                        assoc
                        :reading-time
                        (-> % .-target .-value js/parseInt))}]]
        [:div.input-group.input-group-lg
         [:span.input-group-addon {:id "sizing-addon1"} "Description"]
         [:input.form-control
          {:type "text"
           :aria-describedby "sizing-addon1"
           :value (:description @post-edit-state)
           :on-change #(swap! post-edit-state assoc :description (-> % .-target .-value))}]]]]
      [:div.row
       [:div.col-sm-6
        [:h3 "Editor"]
        [body-editor]]
       [:div.col-sm-6
        [:h3 "Preview"]
        [body-preview]]]]
     [:div.row.row-centered
      [:button.btn.btn-default
       {:type "submit"
        :on-click submit}
       "Submit"]]]))
