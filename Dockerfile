FROM ubuntu:18.04

LABEL "app.name"="MOS Frontend"

# General
RUN apt-get update && apt-get install -y curl
RUN apt install -y build-essential

# Node
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

# Angular CLI
RUN npm install -g @angular/cli@8

# MOS frontend files
ADD . /mos-frontend
WORKDIR /mos-frontend

# Dependencies
RUN npm ci

# Entrypoint
ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0"]