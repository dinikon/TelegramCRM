<template>
  <div ref="telegramWidget"></div>
  <div>
    <button class="button" v-on:click="LoginDomoAccount" >Test Account</button>
  </div>
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
    twa.expand();

    console.log(twa.initData)
    console.log(twa.initDataUnsafe.user)

    try {
      // Получаем данные Telegram WebApp в виде строки запроса
      const initData = twa.initData;

      // Формируем объект данных для отправки на сервер с ключом 'data'
      const response = {
        data: initData
      };

      // Авторизация через хранилище
      await store.login(response);

      // Перенаправляем на dashboard
      await router.push({name: 'dashboard'});
    } catch (error) {
      console.error("Ошибка авторизации через Telegram WebApp:", error);
    }

  } else {
    console.error('Telegram WebApp не инициализирован');

    // Логика для виджета Telegram...
    window.onTelegramAuth = async function (user) {
      console.log('Полученные данные пользователя:', user);

      try {
        // Формируем объект данных пользователя с ключом 'data'
        const response = {
          data: {
            id: user.id,
            first_name: user.first_name,
            username: user.username,
            photo_url: user.photo_url || null, // Проверка на наличие photo_url
            auth_date: user.auth_date, // auth_date уже присутствует в объекте user
            hash: user.hash            // hash уже присутствует в объекте user
          }
        };

        // Авторизация через хранилище
        await store.login(response);

        // Перенаправление на dashboard после успешной авторизации
        await router.push({name: 'dashboard'});

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

const login_data = {
  "data": {
    "id": 428637115,
    "first_name": "Денис",
    "username": "iNikon",
    "photo_url": "https://t.me/i/userpic/320/hB8OnBYYd9OBpFQxOTLb1EXMJlMw5pKpJ8xNpGpigO8.jpg",
    "auth_date": 1728739528,
    "hash": "56b783a7b8600ee1da4666e529c46bc4d6ce5096caa3158b672c869fb88d6934"
  }
}

async function LoginDomoAccount() {
  try {
    await store.login(login_data);  // Ожидание завершения логина
    router.push({ name: 'workspace' });
  } catch (error) {
    console.log("Error: ", error);
  }
}

</script>