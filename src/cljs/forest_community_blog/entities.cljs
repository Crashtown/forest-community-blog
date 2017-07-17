(ns cljs.forest-community-blog.entities)

(defrecord Post [id body created-at updated-at title description image reading-time])

(defn raw->Post [raw]
  (-> raw
      (map->Post)
      (update :created-at #(js/Date. %))
      (update :updated-at #(js/Date. %))))

