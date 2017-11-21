(defproject forest-community-blog "0.1.0-SNAPSHOT"
  :description "Forest community home page"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.562"]
                 [org.clojure/java.jdbc "0.6.1"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [compojure "1.5.1"]
                 [ring/ring-core "1.6.3"]
                 [ring/ring-jetty-adapter "1.6.3"]
                 [ring/ring-defaults "0.2.1"]
                 [ring/ring-json "0.4.0"]
                 [org.postgresql/postgresql "9.4-1201-jdbc41"]
                 [cheshire "5.7.1"]
                 [re-frame "0.10.1"]
                 [day8.re-frame/http-fx "0.1.4"]
                 [cljs-http "0.1.43"]
                 [ring-cors "0.1.11"]
                 [secretary "1.2.3"]
                 [ring-logger "0.7.7"]
                 [ragtime "0.6.0"]
                 [cljsjs/bootstrap "3.3.6-1"]
                 [cljsjs/marked "0.3.5-0"]
                 [cljsjs/highlight "9.12.0-0"]
                 [figwheel-sidecar "0.5.14"]]
  :plugins [[lein-ring "0.9.7"]
            [lein-cljsbuild "1.1.6"]
            [deraen/lein-sass4clj "0.3.1"]]
  :source-paths ["src/clj"
                 "src/dev"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel true
                        :compiler {:main "forest-community-blog.core"
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/out"
                                   :foreign-libs [{:file "https://cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/1.4.0/wavesurfer.min.js"
                                                   :provides ["foreign-js.wavesurfer"]}]
                                   :preloads [devtools.preload]}}
                       {:id "prod"
                        :source-paths ["src/cljs"]
                        :compiler {:main "forest-community-blog.core"
                                   :optimizations :advanced
                                   :output-to "target/static/public/js/main.js"
                                   :closure-defines {forest-community-blog.config/api-uri "http://forest-community.org/api"
                                                     goog.DEBUG false}}}]}
  :ring {:handler forest-community-blog.handler/app}
  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring/ring-mock "0.3.0"]
                                  [binaryage/devtools "0.9.4"]
                                  [re-frisk "0.5.0"]]}}
  :sass {:target-path "resources/public/css"
         :source-paths ["resources/public/sass"
                        "src/sass"]}
  :jar-name "server.jar"
  :uberjar-name "server-standalone.jar"
  :aliases {"migrate"  ["run" "-m" "forest-community-blog.db" "migrate"]
            "rollback" ["run" "-m" "forest-community-blog.db" "rollback"]
            "generate-migration" ["run" "-m" "forest-community-blog.db/generate-migration"]})
