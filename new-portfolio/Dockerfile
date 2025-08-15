FROM php:8.1-apache

RUN a2enmod rewrite

COPY . /var/www/html/

RUN chown -R www-data:www-data /var/www/html

# Change Apache to listen on 5000
RUN sed -i 's/80/5000/g' /etc/apache2/ports.conf /etc/apache2/sites-available/000-default.conf

EXPOSE 5000
