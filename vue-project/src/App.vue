<template>
  <div class="flex grow">
    <Sidebar />
    <div class="wrapper flex grow flex-col">
      <Header />
      <main class="grow content pt-5" id="content" role="content">
        <div class="container-fixed">
          <RouterView />
        </div>
      </main>
      <Footer />
    </div>
  </div>
  <SearchModal />
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import SearchModal from "./components/SearchModal.vue";
import { nextTick, onMounted } from 'vue';
import KTComponent from './metronic/core/index';
import KTLayout from './metronic/app/layouts/demo1.js';

import {useI18n} from "vue-i18n";

const { locale } = useI18n();

function changeLanguage(language: string) {
  locale.value = language;
}

onMounted(() => {
  nextTick(() => {
    KTComponent.init();
    KTLayout.init();
  });
});

</script>
