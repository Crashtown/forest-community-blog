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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; STATE

(defonce app-state (r/atom {:page :blog
                            :posts []
                            :auth nil}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; EFFECTS

(defn get-posts! []
  (go (let [response (<! (http/get "http://localhost:3000/posts"
                                   {:with-credentials? false
                                    :headers {"content-type" "application/json"}}))]
        (swap! app-state assoc :posts (:body response)))))

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

(defn blog-entry [post]
  [:div
   [:h2
    [:a {:href (post-path {:id (:id post)})}
     (:title post)]]
   [:p
    [:span.glyphicon.glyphicon-time] (:created_at post)]
   (when-let [img (:head_image post)]
     [:img.img-responsive {:src img :alt ""}])
   [:p (:body post)]
   [:a.btn.btn-primary {:href (post-path {:id (:id post)})}
    "Read More"
    [:span.glyphicon.glyphicon-chevron-right]]])

(defn blog-entries [posts]
  [:div.col-md-8.col-md-offset-2
   (for [post posts]
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
  [:div.container
   [:div.row
    [:div.col-md-8.col-md-offset-2
     [:h1 "About"]
     [:p (str "Hello, my name is Anton Žiliuk. "
              "I am systems engineer who interested in declarative programming. "
              "At my free time I compose electronic music and techno. "
              "This page contains my thoughts, experiments, records. "
              "My favorite styles are Ambient Techno, Hardtek/tribe and Dub. "
              "Papabless! And any feedback is appreciated! ")]

      [:p "crashtown.pal@gmail.com"]]]])

(defn blog []
  (let [posts (@app-state :posts)]
    [:div.container
     [:div.row
      [blog-entries posts]]]))

(defn post [id0]
  (let [id (js/parseInt id0)
        posts (@app-state :posts)
        post (first (filterv #(= (:id %) id) posts))]
    [:div.container
     [:div.row
      [:div.col-md-8.col-md-offset-2
       [:p (:body post)]]]]))

(defn login-form []
  [:input {:type "password"
           :value (@app-state :auth)
           :on-change #(swap! app-state assoc :auth (-> % .-target .-value))}])

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

(defroute blog-path "/" []
  (swap! app-state assoc :page :blog))
(defroute  about-path "/about" []
  (swap! app-state assoc :page :about))
(defroute  post-path "/posts/:id" [id]
  (swap! app-state assoc :page [:post id]))
(defroute "/login" []
  (swap! app-state assoc :page :login))

(defn current-page []
  (let [page (@app-state :page)]
    (match page
           :blog [blog]
           [:post id] [post id]
           :about [about]
           :login [login-form]
           :else [:div])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; INIT

(defn ^:export init []
  (r/render [root-component]
            (js/document.getElementById "app")))

(hook-browser-navigation!)

(secretary/set-config! :prefix "#")

(get-posts!)

(.log js/console "Loading forest-community blog...")

(.addEventListener js/window "DOMContentLoaded" init)
