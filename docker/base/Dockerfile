# Указываем базовый образ Node.js для сборки приложения
FROM node:20.12.2 AS build-stage

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY vue-project/package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальной исходный код
COPY vue-project .

# Собираем приложение
RUN npm run build-only

# Указываем базовый образ Nginx для сервера
FROM nginx:stable-alpine AS production-stage

# Копируем файлы сборки из предыдущего этапа в директорию Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Копируем конфигурацию Nginx
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 8080

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
