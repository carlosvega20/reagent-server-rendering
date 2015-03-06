(ns cljs.client
  (:require [reagent.core :as reagent :refer [atom]]
  			[cljs.core :as core]))

(reagent/render-component [core/app-view] (.getElementById js/document "app"))