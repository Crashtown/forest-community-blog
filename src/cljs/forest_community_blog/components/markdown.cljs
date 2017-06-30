(ns cljs.forest-community-blog.components.markdown
  (:require [reagent.core :as r]))

(defn markdown-render [content]
  [:div {:dangerouslySetInnerHTML
         {:__html (-> content str js/marked)}}])

(defn highlight-code [html-node]
  (let [nodes (.querySelectorAll html-node "pre code")]
    (loop [i (.-length nodes)]
      (when-not (neg? i)
        (when-let [item (.item nodes i)]
          (.highlightBlock js/hljs item))
        (recur (dec i))))))

(defn markdown-did-mount [this]
  (let [node (r/dom-node this)]
    (highlight-code node)))

(defn markdown-component [content]
  (.log js/console content)
  (r/create-class
   {:reagent-render      markdown-render
    :component-did-mount markdown-did-mount}))
