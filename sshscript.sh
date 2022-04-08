#!/usr/bin/expect -f
spawn ssh root@139.59.229.139 '#!/usr/bin/env bash

cd `dirname $BASH_SOURCE`

ls

cd - > /dev/null'
send "yes\r"
expect "Password:*"
send "bvNam98hy\r"
expect "$ "

# interact

