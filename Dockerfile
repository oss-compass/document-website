FROM nginx:1.12.0-alpine

COPY nginx.conf /etc/nginx
COPY build /usr/share/nginx/html/docs

CMD ["nginx", "-g", "daemon off;"]
