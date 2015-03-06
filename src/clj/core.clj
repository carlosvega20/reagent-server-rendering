(ns clj.core
	(:use 
		[hiccup.page :only (html5 include-css include-js)]
		[hiccup.form]
        [hiccup.element :only (link-to)])
	(:require [compojure.core :refer :all]
            [compojure.route :as route]))

(defn application [title & content]
  (html5 {:lang "en" :charset "utf-8"}
  		 [:meta {:name "viewport"
                 :content "width=device-width, initial-scale=1.0"}]
         [:head
          [:title title]
          [:script {:type "text/javascript" :src "//fb.me/react-0.12.2.min.js"}]
    	  [:script {:type "text/javascript" :src "dev/goog/base.js"}]
    	  [:script {:type "text/javascript" :src "dev/app.js"}]
    	  [:script {:type "text/javascript"} "goog.require('cljs.client');"]
   		 [:body [:div#app content]]]))

(defroutes app
  (route/resources "/")
  (GET "/" [] (application "home" "2. Hola clj server site"))
  (ANY "*" [] (route/not-found (application "NOT-FOUND" "Page not found"))))