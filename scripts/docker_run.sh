#!/bin/bash
sudo docker run -it \
                --rm \
                --network=host \
                --name=mos-frontend \
                tomastinoco/mos-frontend