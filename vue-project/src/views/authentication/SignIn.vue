<template>
  <div ref="telegramWidget"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const telegramWidget = ref(null);

console.log('Init')

onMounted(() => {
  // Определяем глобальную функцию для обработки данных авторизации
  window.onTelegramAuth = async function (user) {
    console.log('Полученные данные пользователя:', user);

    try {
      const response = await axios.post('https://api.inikon.com.ua/api/v1/auth/login', {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        photo_url: user.photo_url,
        auth_date: user.auth_date,
        hash: user.hash
      });

      console.log('Ответ от сервера:', response.data);
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error.response ? error.response.data : error.message);
    }
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://telegram.org/js/telegram-widget.js?22';
  script.setAttribute('data-telegram-login', 'inikon_dev_bot');
  script.setAttribute('data-size', 'large');
  script.setAttribute('data-onauth', 'onTelegramAuth(user)');
  script.setAttribute('data-request-access', 'write');

  if (telegramWidget.value) {
    telegramWidget.value.appendChild(script);
  }
});
</script>
