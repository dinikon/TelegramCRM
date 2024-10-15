import { createI18n } from 'vue-i18n';

const sidebar = {
  ua: {
    sidebar_dashboard: "Дашборд",
    welcome_message: "Upload Item to Get Started2"
  },
  en: {
    sidebar_dashboard: "Dashboard",
    welcome_message: "Upload Item to Get Started2"
  },
};

const messages = {
  ua: {
    dashboard: "Дашборд",
    welcome_message: "Upload Item to Get Started"
  },
  en: {
    dashboard: "Dashboard",
    welcome_message: "Upload Item to Get Started"
  },
};

// Объединяем словари
const combinedMessages = {
  ua: {
    messages: {
      ...messages.ua,
    },
    sidebar: {
      ...sidebar.ua,
    },
  },
  en: {
    messages: {
      ...messages.en,
    },
    sidebar: {
      ...sidebar.en,
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: 'ua',
  globalInjection: true,
  messages: combinedMessages,
});

export default i18n;
