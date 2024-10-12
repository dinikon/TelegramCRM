<template>
  <div ref="telegramWidget"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {useAuthStore} from "@/stores/auth";
import router from "@/router/index";
import useTelegram from "@/core/plugins/telegram";



const telegramWidget = ref(null);

const store = useAuthStore();

if (window.Telegram && window.Telegram.WebApp) {
  const twa = useTelegram();
  twa.expand()

  await store.login(twa.initData);

  await router.push({name: 'dashboard'});

} else {
  console.error('Telegram WebApp не инициализирован');
  window.onTelegramAuth = async function (user) {
    console.log('Полученные данные пользователя:', user);

    try {
      const response = {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        photo_url: user.photo_url,
        auth_date: user.auth_date,
        hash: user.hash
      };
      await store.login(response);

      await router.push({name: 'dashboard'});

    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error.response ? error.response.data : error.message);
    }
  };
  router.push({ name: 'dashboard' });

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

}

// console.log(initData)
// console.log(platform)

onMounted(() => {
  // Определяем глобальную функцию для обработки данных авторизации

});

</script>
