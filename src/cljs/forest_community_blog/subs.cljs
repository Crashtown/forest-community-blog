(ns forest-community-blog.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :current-page
 (fn [{current-page :current-page} _]
   current-page))

(rf/reg-sub
 :posts
 (fn [{posts :posts} _]
   posts))

(rf/reg-sub
 :tracks
 (fn [{tracks :tracks} _]
   tracks))


