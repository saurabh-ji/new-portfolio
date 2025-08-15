FROM nginx:1.25-alpine

# Install basic debugging tools
RUN apk add --no-cache curl bind-tools

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom config
COPY nginx.conf /etc/nginx/conf.d/

# Copy website files
COPY . /usr/share/nginx/html/

# Set permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

EXPOSE 5000
CMD ["nginx", "-g", "daemon off;"]
