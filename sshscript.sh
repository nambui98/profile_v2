#!/usr/bin/expect -f
spawn ssh root@139.59.229.139 
send "yes\r"
expect "root@139.59.229.139's password:"
send "bvNam98hy\r"

interact


