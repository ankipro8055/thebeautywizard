# Use lightweight Nginx alpine image as the base
FROM nginx:alpine

# Copy the static web application files to Nginx's default html serving directory
COPY index.html index.js index.css gallery.html /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets

# Adjust Nginx configuration to listen on port 8080 instead of 80
# Google Cloud Run expects container instances to serve requests on port 8080 by default.
RUN sed -i 's/listen\(.*\)80;/listen 8080;/g' /etc/nginx/conf.d/default.conf

# Expose port 8080
EXPOSE 8080

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
