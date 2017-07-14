#!/bin/bash

cd ..

echo [info] Building server jar
lein ring uberjar

echo [info] Move static from resources to target/static
rm -rf target/static
mkdir -p target/static
cp -R resources/public target/static
rm -rf target/static/public/js/out

echo [info] Building client
lein cljsbuild once prod

