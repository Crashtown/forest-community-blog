(ns forest-community-blog.events
  (:require [re-frame.core :as rf]
            [forest-community-blog.db :refer [default-db]]))

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   default-db))

(rf/reg-event-db
 :set-page
 (fn [db [_ page]]
   (assoc db :current-page page)))

(rf/reg-event-db
 :set-posts
 (fn [db [_ posts]]
   (assoc db :posts posts)))

(rf/reg-event-db
 :set-tracks
 (fn [db [_ tracks]]
   (assoc db :tracks tracks)))
