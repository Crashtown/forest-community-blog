(ns cljs.forest-community-blog.state
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]))

(defonce app-state (r/atom {:page :blog
                            :posts []
                            :auth nil}))

;; EFFECTS

(defn ^:export get-posts! []
  (go (let [response(<! (http/get "http://localhost:3000/posts"
                                   {:with-credentials? false
                                    :headers {"content-type" "application/json"}}))]
        (swap! app-state assoc :posts (:body response)))))

(defn set-page! [page]
  (swap! app-state assoc :page page))
