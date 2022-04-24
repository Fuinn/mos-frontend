FROM node:12

LABEL "app.name"="MOS Frontend"

# Angular CLI
RUN npm install -g @angular/cli@8

# MOS frontend files
ADD . /mos-frontend
WORKDIR /mos-frontend

# Dependencies
RUN npm ci

# Entrypoint
ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0"]