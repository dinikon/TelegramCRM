import "./style.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from "@/core/plugins/i18n";

import ApiService from "@/core/services/ApiService.ts";

const app = createApp(App)

app.use(createPinia());
app.use(router);

ApiService.init(app);

app.use(i18n);

app.mount('#app')
