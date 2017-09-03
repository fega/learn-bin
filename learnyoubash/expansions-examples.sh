echo beg{i,a,u}n # begin began begun
echo {0..5} # 0 1 2 3 4 5
echo number: {0..5} # number: 0 1 2 3 4 5
echo number:{0..5} # number:0 number:1 number:2 number:3 number:4 number:5
echo {00..8..2} # 00 02 04 06 08


now=`date +%T`
# or
now=$(date +%T)
echo $now # 19:08:26


result=$(( ((10 + 5*3) - 7) / 2 ))
echo $result # 9
