(defproject hello-ring "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-ring "0.8.13"]
            [lein-cljsbuild "1.0.5"]]
  :ring {:handler clj.core/app}
  :dependencies [[org.clojure/clojure "1.6.0"]
  				 [org.clojure/clojurescript "0.0-2913"]
                 [reagent "0.5.0-alpha3"]
                 [cljs-ajax "0.3.10"]
                 [hiccup "1.0.4"]
                 [compojure "1.3.1"]
                 [ring/ring-defaults "0.1.2"]]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:optimizations :none
                                   :output-to "resources/public/dev/app.js"
                                   :output-dir "resources/public/dev/"
                                   :source-map true}}
                       ]}
  :min-lein-version "2.5.0")
