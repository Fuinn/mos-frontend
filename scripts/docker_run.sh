#!/bin/bash
sudo docker run -it \
                --rm \
                --network=host \
                --name mos-frontend \
                mos-frontend