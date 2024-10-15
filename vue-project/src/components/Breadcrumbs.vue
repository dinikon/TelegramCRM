<template>
  <div
      class="flex [.header_&]:below-lg:hidden items-center gap-1.25 text-xs lg:text-sm font-medium mb-2.5 lg:mb-0"
      data-reparent="true"
      data-reparent-mode="prepend|lg:prepend"
      data-reparent-target="#content_container|lg:#header_container"
  >
    <span
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="text-gray-700"
    >
      <!-- Если это не последний элемент, делаем его ссылкой -->
      <router-link
          v-if="index !== breadcrumbs.length - 1"
          :to="getPathForCrumb(index)"
          class="hover:underline"
      >
        {{ $t(crumb) }}
      </router-link>

      <!-- Если последний элемент, просто выводим текст -->
      <span v-else>{{ $t(crumb) }}</span>

      <!-- Добавляем иконку-стрелку после каждой крошки, кроме последней -->
      <i v-if="index !== breadcrumbs.length - 1" class="ki-filled ki-right text-gray-500 text-3xs"></i>
    </span>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import {useI18n} from 'vue-i18n';
import Breadcrumbs from "@/components/Breadcrumbs.vue";

// Используем vue-router и vue-i18n
const route = useRoute();
const { t } = useI18n(); // функция для перевода

// Вычисляем крошки из meta маршрута
const breadcrumbs = computed(() => route.meta.breadcrumbs || []);

// Метод для генерации пути для каждой крошки (если нужно сделать их кликабельными)
const getPathForCrumb = (index: number) => {
  const paths = route.matched.map(route => route.path);
  return paths.slice(0, index + 1).join('/');
};
</script>