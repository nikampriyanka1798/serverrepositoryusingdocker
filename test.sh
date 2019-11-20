#!/bin/bash

# install the anuglar dependency
# npm install

# build the application


# ng build --prod

# remove the container if exists or running
if [ $(sudo docker container ls -q -a --filter name=backend_container) != '' ]; then
    sudo docker container stop backend_container
    sudo docker container rm backend_container
fi

# remove the image if exists
if [ $(sudo docker image ls -q --filter reference=backend_image) != '' ]; then
    sudo docker image rm backend_image
fi

# build the image
sudo docker build -t backend_image .

# start the container
sudo docker run -itd -p 8000:4000 --name backend_container backend_image
