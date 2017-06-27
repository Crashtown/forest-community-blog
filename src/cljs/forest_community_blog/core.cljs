(ns cljs.forest-community-blog.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(.log js/console "Zdarova chuvachok")

(defonce posts (r/atom []))

(defn get-posts! []
  (go (let [response (<! (http/get "http://localhost:3000/posts"
                                   {:with-credentials? false
                                    :headers {"content-type" "application/json"}}))]
        (reset! posts (:body response)))))

(get-posts!)

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
     [:a.navbar-brand {:href "#"}
      "Forest community"]]
    [:div#bs-example-navbar-collapse-1.collapse.navbar-collapse
     [:ul.nav.navbar-nav
      [:li [:a {:href "#"} "About"]]
      [:li [:a {:href "#"} "Software Development"]]
      [:li [:a {:href "#"} "Music Production"]]]]]])

(defn pager []
  [:ul.pager
   [:li.previous
    [:a {:href "#"} "Older"]]
   [:li.next
    [:a {:href "#"} "Newer"]]])

(defn blog-post [{:keys [body
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
   [:a.btn.btn-primary {:href "#"}
    "Read More"
    [:span.glyphicon.glyphicon-chevron-right]]
   [:hr]])

(defn blog-entries-column []
  [:div.col-md-8.col-md-offset-2
   (for [post @posts]
     ^{:key (:id post)} [blog-post post])])

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

(defn page-content []
  [:div.container
   [:div.row
    [blog-entries-column]
    ]])

(defn root-component []
  [:div.root
   [navigation]
   [page-content]])

(defn ^:export start []
  (r/render [root-component]
            (js/document.getElementById "app")))

(.addEventListener js/window "DOMContentLoaded" start)
