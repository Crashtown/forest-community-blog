(ns cljs.forest-community-blog.state
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]))

(defonce app-state (r/atom {:page :index
                            :posts []
                            :auth nil}))

(defn ->post [raw-post]
  {:id (:id raw-post)
   :body (:body raw-post)
   :created-at (if-let [created-at (:created_at raw-post)] (js/Date. created-at))
   :updated-at (if-let [updated-at (:updated_at raw-post)] (js/Date. updated-at))
   :title (:title raw-post)
   :description (:description raw-post)
   :image (:image raw-post)
   :reading-time (:reading_time raw-post)})

(defn ^:export get-posts! []
  (go (let [response(<! (http/get "http://localhost:3000/posts"
                                   {:with-credentials? false
                                    :headers {"content-type" "application/json"}}))
            raw-posts (:body response)
            posts (map ->post raw-posts)]
        (swap! app-state assoc :posts posts))))
