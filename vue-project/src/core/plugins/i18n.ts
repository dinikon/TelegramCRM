import { createI18n } from 'vue-i18n';

const sidebar = {
  ua: {
    sidebar_dashboard: "Дашборд",
  },
  en: {
    sidebar_dashboard: "Dashboard",
  },
};

const messages = {
  ua: {
    dashboard: "Дашборд",
  },
  en: {
    dashboard: "Dashboard",
  },
};

// Объединяем словари
const combinedMessages = {
  ua: {
    ...sidebar.ua,
    ...messages.ua,
  },
  en: {
    ...sidebar.en,
    ...messages.en,
  },
};

const i18n = createI18n({
  legacy: false,
  locale: 'ua',
  globalInjection: true,
  messages: combinedMessages,
});

export default i18n;
