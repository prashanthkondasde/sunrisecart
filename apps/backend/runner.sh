#!/bin/sh
cd /home/ubuntu/msnwalk/msnwalk_back
eval `ssh-agent -s`
ssh-add ~/.ssh/msn
git add .
git stash
git pull 
chmod +x runner.sh
docker stop $(docker ps -a -q --filter="name=msnwalk-back")
docker rm $(docker ps -a -q --filter="name=msnwalk-back")
docker image rm msnwalk-back
docker build -t msnwalk-back .
docker run -d -p 4000:80 --name msnwalk-back msnwalk-back