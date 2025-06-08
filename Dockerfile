FROM nginx:alpine3.17


COPY ./dist/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN chmod -R 755 /usr/share/nginx/html