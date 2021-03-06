(ns forest-community-blog.components.edit-page
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [re-frame.core :as rf]
            [forest-community-blog.components.markdown :refer [markdown-component]]
            [forest-community-blog.routes :refer [set-page!]]
            [forest-community-blog.entities :refer [map->Post]]
            [reagent.core :as r]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [forest-community-blog.config :as config]))

; STATE
(defonce post-edit-state (r/atom (map->Post {})))

; EFFECTs
(defn set-state! [state]
  (reset! post-edit-state state))

(defn fetch-post! [id]
  (go (let [resp (<! (http/get (str config/api-uri "/posts/" id)
                               {:with-credentials? false
                                :headers {"content-type" "application/json"}}))
            post (:body resp)]
        ;; TODO: Handle not found there
        (set-state! post))))

(defn update-post! [id post]
  (go (let [auth @(rf/subscribe [:auth])
            response (<! (http/put (str config/api-uri "/posts/" id)
                                   {:with-credentials? false
                                    :headers {"content-type" "application/json"
                                              "auth-code" auth}
                                    :json-params post}))
            post (:body response)]
        (println post)
        (set-state! post))))

(defn create-post! [post]
  (go (let [auth @(rf/subscribe [:auth])
            response (<! (http/post (str config/api-uri "/posts")
                                    {:with-credentials? false
                                     :headers {"content-type" "application/json"
                                               "auth-code" auth}
                                     :json-params post}))
            post (:body response)]
        (println post)
        (set-state! post))))

(defn submit []
  (let [post @post-edit-state
        id (:id post)]
    (if id
      (update-post! id post)
      (create-post! post))))

;; COMPONENTs
(defn inputs []
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
       :on-change #(swap! post-edit-state assoc :description (-> % .-target .-value))}]]]])

(defn body-preview []
  (when (not-empty (:body @post-edit-state))
    [markdown-component (:body @post-edit-state)]))

(defn body-editor []
  [:textarea.form-control
   {:value     (:body @post-edit-state)
    :on-change #(swap! post-edit-state assoc :body (-> % .-target .-value))}])

(defn edit [id]
  (if id
    (fetch-post! id)
    (set-state! (map->Post {})))
  (let [auth @(rf/subscribe [:auth])]
    (fn []
      (if auth
        [:div
         [:div.container-fluid
          [inputs]
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
           "Submit"]]]
        [:h1 "AUTH?"]))))
