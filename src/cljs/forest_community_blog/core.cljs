(ns forest-community-blog.core
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [day8.re-frame.http-fx]
            [re-frisk.core :refer [enable-re-frisk!]]
            [forest-community-blog.routes :as routes]
            [forest-community-blog.db]
            [forest-community-blog.events]
            [forest-community-blog.subs]
            [forest-community-blog.views :as views]
            [forest-community-blog.config :as config]
            [cljsjs.react]
            [cljsjs.react.dom]
            [cljsjs.bootstrap]
            [cljsjs.highlight]
            [cljsjs.highlight.langs.clojure]
            [cljsjs.marked]))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (enable-re-frisk!)
    (println "dev mode")))

(defn mount-root []
  (rf/clear-subscription-cache!)
  (r/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (dev-setup)
  (rf/dispatch-sync [:initialize-db])
  (mount-root))
