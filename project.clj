(defproject forest-community-blog "0.1.0-SNAPSHOT"
  :description "Forest community home page"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.562"]
                 [compojure "1.5.1"]
                 [ring/ring-defaults "0.2.1"]
                 [ring/ring-json "0.4.0"]
                 [org.clojure/java.jdbc "0.6.1"]
                 [org.postgresql/postgresql "9.4-1201-jdbc41"]
                 [clj-time "0.8.0"]
                 [cheshire "5.7.1"]
                 [reagent "0.6.2"]
                 [cljs-http "0.1.43"]
                 [ring-cors "0.1.11"]
                 [secretary "1.2.3"]
                 [org.clojure/core.match "0.3.0-alpha4"]]
  :plugins [[lein-ring "0.9.7"]
            [lein-figwheel "0.5.10"]]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel true
                        :compiler {:main "cljs.forest-community-blog.core"
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/out"}}]}
  :ring {:handler forest-community-blog.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}})
