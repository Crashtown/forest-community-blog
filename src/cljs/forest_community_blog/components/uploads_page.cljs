(ns cljs.forest-community-blog.components.uploads-page
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.forest-community-blog.state :refer [app-state]]
            [reagent.core :as r]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [cljs.forest-community-blog.cfg :refer [api-uri]]))

;; STATE
(defonce uploads-state (r/atom []))

(def endpoint (str api-uri "/uploads"))

;; EFFECTs
(defn fetch-uploads! []
  (go (let [auth (@app-state :auth)
            resp (<! (http/get endpoint
                               {:with-credentials? false
                                :headers {"content-type" "applicaiton/json"
                                          "auth-code" auth}}))]
        (reset! uploads-state (:uploads (:body resp))))))

(defn upload! []
  (go (let [auth (@app-state :auth)
            file (-> (.getElementById js/document "file-upload")
                     .-files
                     (aget 0))
            resp (<! (http/post endpoint
                                {:with-credentials? false
                                 :headers {"auth-code" auth}
                                 :multipart-params [["file" file]]}))]
        (fetch-uploads!))))

;; COMPONENTs
(defn uploads []
  (fetch-uploads!)
  (fn []
    [:div.container
     [:div.row.row-centered
      [:div.input-group
       [:span.input-group-btn
        [:button.btn.btn-default {:type "button"
                                  :on-click upload!} "Upload"]
        [:input#file-upload.form-control {:type "file"}]]]]
     [:div.row
      [:div.col-md-8.col-md-offset-2
       (for [upload @uploads-state]
         ^{:key upload} [:p [:a {:href upload} upload]])]]]))
