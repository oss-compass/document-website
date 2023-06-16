FROM nginx:1.23.2-alpine

COPY build /usr/share/nginx/html/build
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]
