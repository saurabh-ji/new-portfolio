FROM nginx:1.25-alpine  # Explicitly use Nginx

# Install curl for debugging
RUN apk add --no-cache curl

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Add your custom config
COPY nginx.conf /etc/nginx/conf.d/

# Copy website files
COPY . /usr/share/nginx/html/

# Set permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

EXPOSE 5000
CMD ["nginx", "-g", "daemon off;"]  # Explicit Nginx command
