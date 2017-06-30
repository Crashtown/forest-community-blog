(ns cljs.forest-community-blog.components.util.time-format)

(def months
  ["January", "February", "March",
   "April", "May", "June", "July",
   "August", "September", "October",
   "November", "December"])

(defn format-time [date]
  (let [day (.getDate date)
        month (get months (.getMonth date))
        year (.getFullYear date)]
    (str day " " month " " year)))
