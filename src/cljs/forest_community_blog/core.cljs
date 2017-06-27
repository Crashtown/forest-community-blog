(ns cljs.forest-community-blog.core
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [secretary.core :refer [defroute]]
                   [cljs.core.match :refer [match]])
  (:import goog.History)
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [secretary.core :as secretary]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [cljs.core.match]))

(declare current-page
         post
         about-path
         blog-path
         post-path)

(.log js/console "Loading forest-community blog...")


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; STATE

(defonce posts (r/atom []))
(defonce app-state (r/atom {:page :blog}))
(defonce current-post (r/atom nil))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; EFFECTS

(defn get-posts! []
  (go (let [response (<! (http/get "http://localhost:3000/posts"
                                   {:with-credentials? false
                                    :headers {"content-type" "application/json"}}))]
        (reset! posts (:body response)))))

(defn get-post! [id]
  (go (let [response (<! (http/get (str "http://localhost:3000/posts/" id)
                                   {:with-credentials? false
                                    :headers {"content-type" "application/json"}}))]
        (reset! current-post (:body response)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; COMPONENTS

(defn navigation []
  [:nav.navbar.navbar-inverse.navbar-fixed-top {:role "navigation"}
   [:div.container
    [:div.navbar-header
     [:button.navbar-toggle {:type "button"
                             :data-toggle "collapse"
                             :data-target "#bs-example-navbar-collapse-1"}
      [:span.sr-only "Toggle navigation"]
      [:span.icon-bar]
      [:span.icon-bar]
      [:span.icon-bar]]
     [:a.navbar-brand {:href (blog-path)}
      "Forest Сommunity"]]
    [:div#bs-example-navbar-collapse-1.collapse.navbar-collapse
     [:ul.nav.navbar-nav
      [:li [:a {:href (about-path)} "About"]]]]]])

(defn pager []
  [:ul.pager
   [:li.previous
    [:a {:href "#"} "Older"]]
   [:li.next
    [:a {:href "#"} "Newer"]]])

(defn blog-entry [{:keys [body
                         title
                         created_at
                         updated_at
                         head_image
                         id]}]
  [:div
   [:h2 [:a {:href "#"} title]]
   [:p.lead ["by" [:a {:href "#"} "Anton"]]]
   [:p
    [:span.glyphicon.glyphicon-time] created_at]
   (when head_image [:img.img-responsive {:src head_image :alt ""}])
   [:p body]
   [:a.btn.btn-primary {:href (post-path {:id id})}
    "Read More"
    [:span.glyphicon.glyphicon-chevron-right]]
   [:hr]])

(defn blog-entries []
  [:div.col-md-8.col-md-offset-2
   (for [post @posts]
     ^{:key (:id post)} [blog-entry post])])

(defn search []
  [:div.well
   [:h4 "Blog Search"]
   [:div.input-group
    [:input.form-control {:type "text"}]
    [:span.input-group-btn
     [:button.btn.btn-default {:type "button"}
      [:span.glyphicon.glyphicon-search]]]]])

(defn categories []
  [:div.well
   [:h4 "Blog Categories"]
   [:div.row
    [:div.col-lg-6
     [:ul.list-unstyled
      [:li [:a {:href "#"} "Development"]]]]
    [:div.col-lg-6
     [:ul.list-unstyled
      [:li [:a {:href "#"} "Music"]]]]]])

(defn sidebar-widgets-column []
  [:div.col-md-4
   [search]
   [categories]])

(defn about []
  [:div [:h1 "About Page"]])

(defn blog []
  (get-posts!)
  [:div.container
   [:div.row
    [blog-entries]
    ]])

(defn post [id]
  [:div (str "POST # " id)])

(defn root-component []
  [:div.root
   [navigation]
   [current-page]])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ROUTING

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(hook-browser-navigation!)

(secretary/set-config! :prefix "#")

(defroute blog-path "/" []
  (swap! app-state assoc :page :blog))
(defroute  about-path "/about" []
  (swap! app-state assoc :page :about))
(defroute  post-path "/posts/:id" [id]
  (swap! app-state assoc :page [:post id]))

(defn current-page []
  (let [page (@app-state :page)]
    (match page
           :blog [blog]
           [:post id] [post id]
           :about [about]
           :else [:div])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; INIT

(defn ^:export init []
  (r/render [root-component]
            (js/document.getElementById "app")))

(.addEventListener js/window "DOMContentLoaded" init)
