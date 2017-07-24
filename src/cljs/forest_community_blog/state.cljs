(ns cljs.forest-community-blog.state
  (:require [reagent.core :as r]))

;; GLOBAL STATE
(defonce app-state (r/atom {:page :index
                            :posts ()
                            :tracks ()
                            :auth nil}))
