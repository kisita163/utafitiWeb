# Use an official Python runtime as a parent image
FROM nginx

# Set the working directory to .
WORKDIR /usr/share/nginx/www

# Copy the current directory contents into the container
COPY . /usr/share/nginx/www

# Copy nginx conf
COPY default.conf /etc/nginx/conf.d/


# Make port 80 available to the world outside this container
EXPOSE 80



