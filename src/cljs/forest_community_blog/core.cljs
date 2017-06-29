(ns cljs.forest-community-blog.core
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [cljs.core.match :refer [match]])
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cljs.core.match]
            [cljs.forest-community-blog.routes :as routes]
            [cljs.forest-community-blog.state :refer [app-state get-posts!]]))

(declare current-page)

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
     [:a.navbar-brand {:href (routes/blog-path)}
      "Forest Сommunity"]]
    [:div#bs-example-navbar-collapse-1.collapse.navbar-collapse
     [:ul.nav.navbar-nav
      [:li [:a {:href (routes/about-path)} "About"]]]]]])

(defn pager []
  [:ul.pager
   [:li.previous
    [:a {:href "#"} "Older"]]
   [:li.next
    [:a {:href "#"} "Newer"]]])

(defn blog-entry [post]
  [:div
   [:h2
    [:a {:href (routes/post-path {:id (:id post)})}
     (:title post)]]
   [:p
    [:span.glyphicon.glyphicon-time] (:created_at post)]
   (when-let [img (:head_image post)]
     [:img.img-responsive {:src img :alt ""}])
   [:p (:body post)]
   [:a.btn.btn-primary {:href (routes/post-path {:id (:id post)})}
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
       [:h2
        (:title post)]
       [:p
        [:span.glyphicon.glyphicon-time] (:created_at post)]
       (when-let [img (:head-image post)]
         [:img.img-responsive {:src img :alt ""}])
       [:p (:body post)]]]]))

(defn login-form []
  [:div.container
   [:div.row
    [:div.col-md-8.col-md-offset-2
     [:p
      "Auth code:"
      [:input {:type "password"
               :value (@app-state :auth)
               :on-change #(swap! app-state assoc :auth (-> % .-target .-value))}]]]]])

(defn markdown-render [content]
  [:div {:dangerouslySetInnerHTML
         {:__html (-> content str js/marked)}}])

(defn highlight-code [html-node]
  (let [nodes (.querySelectorAll html-node "pre code")]
    (loop [i (.-length nodes)]
      (when-not (neg? i)
        (when-let [item (.item nodes i)]
          (.highlightBlock js/hljs item))
        (recur (dec i))))))

(defn markdown-did-mount [this]
  (let [node (r/dom-node this)]
    (highlight-code node)))

(defn markdown-component [content]
  (r/create-class
   {:reagent-render      markdown-render
    :component-did-mount markdown-did-mount}))

(defn preview [content]
  (when (not-empty @content)
    [markdown-component @content]))

(defn editor [content]
  [:textarea.form-control
   {:value     @content
    :on-change #(reset! content (-> % .-target .-value))}])

(defn new-post []
  (let [content (r/atom nil)]
    (fn []
      [:div
       [:h1 "Create new post"]
       [:div.container-fluid
        [:div.row
         [:div.col-sm-6
          [:h3 "Editor"]
          [editor content]]
         [:div.col-sm-6
          [:h3 "Preview"]
          [preview content]]]]])))

(defn root-component []
  [:div.root
   [navigation]
   [current-page]])

(defn current-page []
  (let [page (@app-state :page)]
    (match page
           :blog [blog]
           [:post id] [post id]
           :about [about]
           :login [login-form]
           :new-post [new-post]
           :else [:div])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; INIT

(defn ^:export init! []
  (r/render [root-component]
            (js/document.getElementById "app")))

(.addEventListener js/window "DOMContentLoaded" init!)

(.log js/console "Loading forest-community blog...")

(get-posts!)
(routes/init!)
