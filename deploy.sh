#!/usr/bin/env bash

cd `dirname $BASH_SOURCE`

ls

cd - > /dev/null
# cd `profile_v2`
# git pull
# npm i
# npm run build
# cp -r build/* /var/www/html