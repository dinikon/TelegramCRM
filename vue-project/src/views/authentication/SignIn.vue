<template>
  <div ref="telegramWidget"></div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {useAuthStore} from "@/stores/auth";
import router from "@/router/index";
import useTelegram from "@/core/plugins/telegram";

const telegramWidget = ref(null);
const store = useAuthStore();

const twa = useTelegram();

onMounted(async () => {
  // Проверка наличия Telegram WebApp
  if (twa.platform && twa.initData) {
    const twa = useTelegram();
    twa.expand();

    console.log(twa.initData)
    console.log(twa.initDataUnsafe)

    try {
      // Получаем данные Telegram WebApp в виде строки запроса
      const initData = twa.initData;

      // Парсим строку запроса в объект
      const params = new URLSearchParams(initData);

      // Получаем пользователя из параметра `user`, декодируем JSON
      const user = JSON.parse(decodeURIComponent(params.get('user')));

      // Формируем объект данных, похожий на то, что приходит из виджета Telegram
      const response = {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        photo_url: user.photo_url,
        auth_date: user.auth_date,
        hash: user.hash
      };

      // Авторизация через хранилище
      await store.login(response);

      // Перенаправляем на dashboard
      await router.push({ name: 'dashboard' });
    } catch (error) {
      console.error("Ошибка авторизации через Telegram WebApp:", error);
    }

  } else {
    console.error('Telegram WebApp не инициализирован');

    // Логика для виджета Telegram...
    window.onTelegramAuth = async function (user) {
      console.log('Полученные данные пользователя:', user);

      try {
        // Формируем объект данных пользователя
        const response = {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          photo_url: user.photo_url,
          auth_date: user.auth_date,
          hash: user.hash
        };

        // Авторизация через хранилище
        await store.login(response);

        // Перенаправление на dashboard после успешной авторизации
        await router.push({ name: 'dashboard' });

      } catch (error) {
        console.error('Ошибка при отправке данных на сервер:', error.response ? error.response.data : error.message);
      }
    };

    // Добавление виджета Telegram в DOM
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
});


</script>
