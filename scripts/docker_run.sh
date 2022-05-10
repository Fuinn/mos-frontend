#!/bin/bash
sudo docker run -it \
                --rm \
                --network=host \
                --name=mos-demo-frontend \
                tomastinoco/mos-demo-frontend