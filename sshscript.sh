#!/usr/bin/expect -f
spawn ssh root@139.59.229.139 'ls'
send "yes\r"
expect "Password:*"
send "bvNam98hy\r"
expect "$ "

interact

