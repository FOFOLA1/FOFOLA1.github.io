# Use the official Nginx image as the base.
FROM nginx:latest

# Remove the default Nginx index.html file to avoid conflicts.
RUN rm /usr/share/nginx/html/index.html

# Copy all your project files into the Nginx web server directory.
# The .dockerignore file ensures that the excluded files are not copied.
COPY . /usr/share/nginx/html