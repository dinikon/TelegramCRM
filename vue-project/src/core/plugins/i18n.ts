import { createI18n } from 'vue-i18n';

import enSidebar from '@/locale/en/sidebar.ts'
import uaSidebar from '@/locale/ua/sidebar.ts'

import enRouter from '@/locale/en/router.ts'
import uaRouter from '@/locale/ua/router.ts'

const messages = {
  en: {
    sidebar: enSidebar,
    router: enRouter,
  },
  ua: {
    sidebar: uaSidebar,
    router: uaRouter,
  },
};

const savedLocale = localStorage.getItem('lang') || 'ua';  // По умолчанию 'ua'

const i18n = createI18n({
  legacy: false,
  locale: savedLocale, // Устанавливаем язык при инициализации
  globalInjection: true,
  messages: messages,
});

export default i18n;
