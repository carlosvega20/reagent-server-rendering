(ns cljs.core
 (:require [reagent.core :as reagent :refer [atom]]))

(.log js/console "df")
(defn app-view []
	[:div.sample "hello world"])

(reagent/render-component [:div "d"] (.getElementById js/document "app"))
