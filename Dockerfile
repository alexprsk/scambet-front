FROM nginx:alpine3.17

COPY ./dist/assets /usr/share/nginx/html/

COPY ./dist/index.html /usr/share/nginx/html/