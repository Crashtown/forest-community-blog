(ns cljs.forest-community-blog.components.login-page
  (:require [cljs.forest-community-blog.state :refer [app-state]]))

(defn login []
  [:div.container
   [:div.row
    [:div.col-md-8.col-md-offset-2
     [:p
      "Auth code:"
      [:input {:type "password"
               :value (@app-state :auth)
               :on-change #(swap! app-state assoc :auth (-> % .-target .-value))}]]]]])
