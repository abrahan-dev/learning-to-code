# STAGE 0: Installing composer dependencies
FROM composer AS backend
WORKDIR /app

COPY composer.json composer.lock /app/
RUN composer install \
    --ignore-platform-reqs \
    --no-ansi \
    --no-autoloader \
    --no-dev \
    --no-interaction \
    --no-scripts

COPY . /app/
RUN composer dump-autoload --no-dev --optimize --classmap-authoritative
RUN rm /app/hello.log
RUN rm /app/composer.json
RUN rm /app/composer.lock
RUN rm /app/Dockerfile

# STAGE 1: Installing system dependencies and copying the code
FROM php:7.2-apache

LABEL maintainer="juan@google.com"
LABEL application="docker-hello-world"

RUN pecl install xdebug-2.6.0 \
    && docker-php-ext-enable xdebug \
    && docker-php-ext-install pdo pdo_mysql

ENV DISPLAY_ERRORS="Off"

WORKDIR /app
COPY --from=backend /app /var/www/html/
COPY php.ini /usr/local/etc/php/
RUN rm /var/www/html/php.ini
