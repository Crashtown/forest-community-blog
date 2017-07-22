-- 1500664866459-create-posts.up.sql
CREATE TABLE posts(
       id serial,
       title varchar(256),
       image varchar(256),
       description text,
       reading_time integer,
       body text,
       created_at timestamp,
       updated_at timestamp
);
