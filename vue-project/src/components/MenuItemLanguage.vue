<script setup lang="ts">

import {useI18n} from "vue-i18n";

const { t, locale } = useI18n({ useScope: 'global' });

const switchLang = (lang: string) => {
  locale.value = lang;
  localStorage.setItem('lang', locale.value);
};

</script>
<template>
  <div class="menu-item" data-menu-item-offset="-10px, 0" data-menu-item-placement="left-start"
       data-menu-item-toggle="dropdown" data-menu-item-trigger="click|sm:hover">
    <div class="menu-link">
                    <span class="menu-icon">
                      <i class="ki-filled ki-icon"></i>
                    </span>
      <span class="menu-title">
                      Language
                    </span>
      <div
          class="flex items-center gap-1.5 rounded-md border border-gray-300 text-gray-600 p-1.5 text-2xs font-medium shrink-0">
        <span v-if="locale === 'en'">English</span>
        <img v-if="locale === 'en'" alt="en" class="inline-block size-3.5 rounded-full"
             src="/media/flags/united-states.svg"/>

        <span v-if="locale === 'ua'">Ukrainian</span>
        <img v-if="locale === 'ua'" alt="ua" class="inline-block size-3.5 rounded-full" src="/media/flags/ukraine.svg"/>
      </div>
    </div>
    <div class="menu-dropdown menu-default light:border-gray-300 w-full max-w-[170px]">
      <!-- English Language Option -->
      <div class="menu-item" :class="{ active: locale === 'en' }" @click="switchLang('en')">
        <div class="menu-link h-10">
                        <span class="menu-icon">
                          <img alt="" class="inline-block size-4 rounded-full" src="/media/flags/united-states.svg"/>
                        </span>
          <span class="menu-title">English</span>
          <span class="menu-badge" v-if="locale === 'en'">
                          <i class="ki-solid ki-check-circle text-success text-base"></i>
                        </span>
        </div>
      </div>
      <!-- Ukrainian Language Option -->
      <div class="menu-item" :class="{ active: locale === 'ua' }" @click="switchLang('ua')">
        <div class="menu-link h-10">
                        <span class="menu-icon">
                          <img alt="" class="inline-block size-4 rounded-full" src="/media/flags/ukraine.svg"/>
                        </span>
          <span class="menu-title">Ukrainian</span>
          <span class="menu-badge" v-if="locale === 'ua'">
                          <i class="ki-solid ki-check-circle text-success text-base"></i>
                        </span>
        </div>
      </div>
    </div>
  </div>
</template>