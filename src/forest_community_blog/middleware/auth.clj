(ns forest-community-blog.middleware.auth
  (:require
   [ring.util.response :refer [response status]]))

(def auth-code (or (System/getenv "FOREST_COMMUNITY_BLOG_AUTH_CODE")
                   "secret"))

(defn wrap-auth [handler]
  (fn [request]
    (let [auth (get-in request [:headers "auth-code"])]
      (if (= auth auth-code)
        (handler request)
        (-> {:fail "unauthenticated"}
            (response)
            (status 401))))))
