(ns forest-community-blog.handler
  (:require
   [compojure.core :refer :all]
   [compojure.route :as route]
   [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
   [ring.middleware.cors :refer [wrap-cors]]

   [ring.logger :refer [wrap-with-logger]]
   [ring.util.response :refer [response status]]
   [clojure.tools.nrepl.server :refer [start-server]]
   [forest-community-blog.routes.posts :refer [posts-routes]]
   [forest-community-blog.routes.tracks :refer [tracks-routes]]
   [forest-community-blog.routes.uploads :refer [uploads-routes]]
   [forest-community-blog.middleware.auth :refer [wrap-auth]]))

;; STARTS nREPL server
(defonce repl-server (start-server :port
                                   (or (System/getenv "FOREST_COMMUNITY_BLOG_REPL_PORT")
                                       3388)))

(defroutes app-routes
  (context "/api" []
           (context "/uploads" [] uploads-routes)
           (context "/posts" [] posts-routes)
           (context "/tracks" [] tracks-routes)))

(def app
  (-> app-routes
      (wrap-with-logger)
      (wrap-json-body {:keywords? true :bigdecimals? true})
      (wrap-json-response)
      (wrap-cors :access-control-allow-origin [#"http://127.0.0.1"
                                               #"http://localhost:3449"
                                               #"http://forest-community.org"]
                 :access-control-allow-methods [:get :put :post :delete])))
