#!/bin/bash

npm install
npm run build
npm install -g http-server 
cd build 
http-server -p 8080 &