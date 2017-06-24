(ns forest-community-blog.handler-test
  (:require [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [forest-community-blog.handler :refer :all]
            [cheshire.core :refer [generate-string
                                   parse-string]]))

(defn db-fixture [f]
  (reset-db)
  (f))

(use-fixtures :each db-fixture)

(defn- call-create-post [body]
  (app (-> (mock/request :post "/posts")
           (mock/header "content-type" "application/json")
           (mock/body (generate-string {:body body})))))

(defn- call-get-posts []
  (app (-> (mock/request :get "/posts")
           (mock/header "content-type" "application/json"))))

(defn- call-get-post [id]
  (app (-> (mock/request :get (str "/posts/" id))
           (mock/header "content-type" "application/json"))))

(defn- call-update-post [id body]
  (app (-> (mock/request :put (str "/posts/" id))
           (mock/header "content-type" "application/json")
           (mock/body (generate-string {:body body})))))

(defn- call-delete-post [id]
  (app (-> (mock/request :delete (str "/posts/" id))
           (mock/header "content-type" "applocation/json"))))

(deftest test-create-post
  (let [{:keys [body status]} (call-create-post "post about love")]
    (is (= status 200))
    (is (= (:body (parse-string body true)) "post about love"))))

(deftest test-get-posts
  (let [post1 (create-post "love post 1")
        post2 (create-post "love post 2")
        resp (call-get-posts)
        posts (parse-string (:body resp) true)]
    (is (= (:status resp) 200))
    (is (= (:body (first posts)) "love post 1"))))

(deftest test-get-post
  (let [post (create-post "post about love")
        resp (call-get-post (:id post))
        post (parse-string (:body resp) true)
        status (:status resp)]
    (is (= status 200))
    (is (= (:body post) "post about love"))))

(deftest test-update-post
  (let [post (create-post "post about love")
        resp (call-update-post (:id post) "no love today boy")
        updated-post (parse-string (:body resp) true)
        status (:status resp)]
    (is (= status 200))
    (is (= (:id post) (:id updated-post)))
    (is (= (:body updated-post) "no love today boy"))))

(deftest test-delete-post
  (let [post (create-post "post about love")
        delete-resp (call-delete-post (:id post))
        lookup-resp (call-get-post (:id post))]
    (is (= (:status delete-resp) 200))
    (is (= (:status lookup-resp) 404))))

(deftest test-not-found-route
  (let [response (app (mock/request :get "/invalid"))]
    (is (= (:status response) 404))))
