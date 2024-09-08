#!/bin/bash
pm2 stop my-global-routes

git pull

yarn install

yarn build

pm2 save

pm2 start dist/src/main.js --name my-global-routes