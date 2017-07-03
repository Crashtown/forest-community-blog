(ns cljs.forest-community-blog.state
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [cljs.forest-community-blog.entities :refer [map->Post]]))

(defonce app-state (r/atom {:page :index
                            :posts []
                            :auth nil}))

(defn- raw->Post [raw]
  (-> raw
      (map->Post)
      (update :created-at #(js/Date. %))
      (update :updated-at #(js/Date. %))))

(defn ^:export get-posts! []
  (go (let [response (<! (http/get "http://localhost:3000/posts"
                                   {:with-credentials? false
                                    :headers {"content-type" "application/json"}}))
            raw-posts (:body response)
            posts (map raw->Post raw-posts)]
        (swap! app-state assoc :posts posts))))

(defn update-post! [id post]
  (go (let [response (<! (http/put (str "http://localhost:3000/posts/" id)
                                   {:with-credentials? false
                                    :headers {"content-type" "application/json"}
                                    :json-params post}))]
        (.log js/console (str (:body response)))))
  (get-posts!))

(defn create-post! [post]
  (go (let [response (<! (http/post "http://localhost:3000/posts"
                                    {:with-credentials? false
                                     :headers {"content-type" "application/json"}
                                     :json-params post}))]
        (.log js/console (str (:body response)))))
  (get-posts!))
