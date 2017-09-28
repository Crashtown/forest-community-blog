(ns forest-community-blog.entities)

(defrecord Post [id body created-at updated-at title description image reading-time])

(defrecord Track [id title image description uri created-at updated-at])

(defn raw->Post [raw]
  (-> raw
      map->Post
      (update :created-at #(js/Date. %))
      (update :updated-at #(js/Date. %))))

(defn raw->Track [raw]
  (-> raw
      map->Track
      (update :created-at #(js/Date. %))
      (update :created-at #(js/Date. %))))

