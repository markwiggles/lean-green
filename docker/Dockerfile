FROM nginx:1.9
MAINTAINER Kyle Mathews "mathews.kyle@gmail.com"

RUN rm /etc/nginx/nginx.conf /etc/nginx/mime.types
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types

COPY default /etc/nginx/sites-enabled/default

COPY dist/ /var/www



# RUN mkdir /etc/nginx/ssl
# COPY default-ssl /etc/nginx/sites-available/default-ssl

# expose both the HTTP (80) and HTTPS (443) ports
EXPOSE 80 443

CMD ["nginx"]
