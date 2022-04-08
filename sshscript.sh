#!/usr/bin/expect -f
spawn ssh root@139.59.229.139 
send "yes\r"
expect "Password:*"
send "bvNam98hy\r"

expect {
    -re ".*es.*o.*" {
        exp_send "yes\r"
        exp_continue
    }
    -re ".*sword.*" {
        exp_send "$pass\r"
    }
}
exp_send "ls\r"
exp_send "exit\r"
expect {
    eof {puts "Connection closed"}
    timeout {puts "Connection timed out"}
}
interact

