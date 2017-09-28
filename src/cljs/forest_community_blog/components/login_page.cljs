(ns forest-community-blog.components.login-page
  (:require [re-frame.core :as rf]))

(defn login []
  (let [auth (rf/subscribe [:auth])]
    [:div.container
     [:div.row
      [:div.col-md-8.col-md-offset-2
       [:p
        "Auth code:"
        [:input {:type "password"
                 :value @auth
                 :on-change #(rf/dispatch [:set-auth (-> % .-target .-value)])}]]]]]))
