#!/bin/sh
ssh root@139.59.229.139<<EOF
   cd /var/www/html/
   git pull origin master
   npm install --production
   pm2 restart all
   exit
EOF