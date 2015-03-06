(ns cljs.core)
; (:require [reagent.core :as reagent :refer [atom]]))

(defn app-view []
	[:div.sample "hello world"])

;(defn ^:export render-page []
;  (reagent/render-to-static-markup (template {:title "title" :body app-view})))