#!/bin/bash

cd ..

echo [info] Building server jar
lein ring uberjar

echo [info] Move static from resources to target/static
rm -rf target/static
mkdir -p target/static
cp -R resources/public target/static
rm -rf target/static/public/js/out
rm -rf target/static/public/uploads
rm target/static/public/js/main.js

echo [info] Building client
lein cljsbuild once prod

echo [info] Compress client.tar.gz
cd target
tar -zcvf client.tar.gz static

