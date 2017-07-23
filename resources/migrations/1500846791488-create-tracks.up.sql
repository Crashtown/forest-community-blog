-- 1500846791488-create-tracks.up.sql
CREATE TABLE tracks(
       id serial,
       title varchar(256),
       image varchar(256),
       description text,
       uri varchar(256),
       created_at timestamp,
       updated_at timestamp
);
