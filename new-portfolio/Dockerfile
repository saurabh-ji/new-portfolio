#tage 1: Build environment
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
# If you're using a build tool like Webpack or Parcel
# RUN npm run build

# Stage 2: Production image
FROM nginx:1.23-alpine

# Copy built assets from builder
COPY --from=builder /app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy individual HTML files and assets
COPY index.html about.html projects.html contact.html /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets/

# Expose port 5000
EXPOSE 5000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
