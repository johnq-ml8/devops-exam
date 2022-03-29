#!/bin/sh
exec > debug.txt 2>&1
cat debug.log.1 >> $1
while true
do
  printf "1 " >> $1
done
