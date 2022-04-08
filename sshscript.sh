#!/usr/bin/expect -f
spawn ssh root@139.59.229.139
send "yes\r"
expect "Password:*"
send "bvNam98hy\r"
expect "$ "
ls
interact