(ns clj.html.core
	)

(defn view []
  [:div {:on-click #(.log js/console "test")} "Hola C!w!!"])