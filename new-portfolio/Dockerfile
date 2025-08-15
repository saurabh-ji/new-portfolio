# Use official lightweight Nginx image
FROM nginx:1.25-alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d

# Copy all static files (HTML, CSS, JS, images)
COPY . .

# Set proper permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Expose port 5000 (matches your APP_PORT in Jenkins)
EXPOSE 5000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
