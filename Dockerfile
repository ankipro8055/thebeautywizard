# Use lightweight Nginx alpine image as the base
FROM nginx:alpine

# Copy the static web application files to Nginx's default html serving directory
COPY index.html index.js index.css gallery.html /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets

# Copy our custom Nginx configuration which listens on port 8080
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080
EXPOSE 8080

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
