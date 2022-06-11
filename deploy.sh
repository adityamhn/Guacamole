#! /bin/bash

docker stop joltapi && docker rm -f joltapi

docker pull hackerbone/jolteon:latest

docker run -p 8010:8010 -d --name joltapi hackerbone/jolteon:latest

