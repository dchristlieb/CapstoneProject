FROM nginx
COPY . /usr/share/nginx/html
options:
  logging: CLOUD_LOGGING_ONLY