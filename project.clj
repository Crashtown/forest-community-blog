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
                 [cheshire "5.7.1"]
                 [reagent "0.6.2"]
                 [cljs-http "0.1.43"]
                 [ring-cors "0.1.11"]
                 [secretary "1.2.3"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [ring-logger "0.7.7"]]
  :plugins [[lein-ring "0.9.7"]
            [lein-figwheel "0.5.10"]
            [lein-cljsbuild "1.1.6"]]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel true
                        :compiler {:main "cljs.forest-community-blog.core"
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/out"}}
                       {:id "prod"
                        :source-paths ["src/cljs"]
                        :compiler {:main "cljs.forest-community-blog.core"
                                   :optimizations :advanced
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/main.js"}}]}
  :ring {:handler forest-community-blog.handler/app}
  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring/ring-mock "0.3.0"]]}})
