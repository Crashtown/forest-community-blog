(ns forest-community-blog.events
  (:require [re-frame.core :as rf]
            [forest-community-blog.db :refer [default-db]]
            [ajax.core :as ajax]
            [forest-community-blog.entities :refer [raw->Post
                                                    raw->Track]]
            [forest-community-blog.config :as config]))

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   default-db))

(rf/reg-event-db
 :set-page
 (fn [db [_ page]]
   (assoc db :current-page page)))

(rf/reg-event-db
 :set-auth
 (fn [db [_ auth]]
   (assoc db :auth auth)))

(rf/reg-event-fx
 :fetch-posts
 (fn [{db :db} _]
   {:db (assoc db :loading? true)
    :http-xhrio {:method :get
                 :uri (str config/api-uri "/posts")
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:fetch-posts-success]
                 :on-failure [:fetch-failure]}}))

(rf/reg-event-db
 :fetch-posts-success
 (fn [db [_ raw-posts]]
   (let [posts (map raw->Post raw-posts)]
     (assoc db
            :loading? false
            :posts posts))))

(rf/reg-event-fx
 :fetch-tracks
 (fn [{db :db} _]
   {:db (assoc db :loading? true)
    :http-xhrio {:method :get
                 :uri (str config/api-uri "/tracks")
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:fetch-tracks-success]
                 :on-failure [:fetch-failure]}}))

(rf/reg-event-db
 :fetch-tracks-success
 (fn [db [_ raw-tracks]]
   (let [tracks (map raw->Track raw-tracks)]
     (assoc db
            :loading? false
            :tracks tracks))))

(rf/reg-event-fx
 :fetch-failure
 (fn [_ [_ err]]
   (js/alert err)))


