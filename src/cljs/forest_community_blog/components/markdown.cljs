(ns forest-community-blog.components.markdown
  (:require [reagent.core :as r]))

(defn markdown-render [content]
  [:div {:dangerouslySetInnerHTML
         {:__html (-> content str js/marked)}}])

(defn highlight-code [html-node]
  (let [node-list (.querySelectorAll html-node "code")]
    (.forEach node-list
              (fn [node]
                (.highlightBlock js/hljs node)))))

(defn markdown-did-update [this]
  (let [node (r/dom-node this)]
    (highlight-code node)))

(defn markdown-component [content]
  (r/create-class
   {:reagent-render       markdown-render
    :component-did-mount  markdown-did-update
    :component-did-update markdown-did-update}))
