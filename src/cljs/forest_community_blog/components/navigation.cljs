(ns forest-community-blog.components.navigation
  (:require [forest-community-blog.routes :as routes]))

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
     [:a.navbar-brand {:href (routes/home-path)}
      "Forest Сommunity"]]
    [:div#bs-example-navbar-collapse-1.collapse.navbar-collapse
     [:ul.nav.navbar-nav
      [:li [:a {:href (routes/about-path)} "About"]]
      [:li [:a {:href (routes/blog-path)} "Blog"]]
      [:li [:a {:href (routes/music-path)} "Music"]]]]]])
