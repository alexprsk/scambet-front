FROM nginx:alpine3.17


COPY ./dist/ /usr/share/nginx/html/

RUN chmod -R 755 /usr/share/nginx/html