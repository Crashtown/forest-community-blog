(ns cljs.forest-community-blog.components.about-page)

(defn about []
  [:div.container
   [:div.row
    [:div.col-md-8.col-md-offset-2
     [:h1 "About"]
     [:p (str "\tHello, my name is Anton Žiliuk.\n"
              "I am systems engineer who interested in declarative programming. "
              "At my free time I compose electronic music and techno. "
              "This page contains my thoughts, experiments, records.")]
     [:p "Any feedback is appreciated!"]
     [:p "crashtown.pal@gmail.com"]]]])
