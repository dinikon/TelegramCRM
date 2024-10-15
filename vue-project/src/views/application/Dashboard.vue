<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n(); // t - это функция для перевода
</script>

<template>
  <div class="container-fixed">
    <div class="card p-8 lg:p-12">
      <div class="card-body">
        <div class="grid justify-center py-5">
          <img alt="" class="dark:hidden max-h-[170px]" src="/media/illustrations/21.svg"/>
          <img alt="" class="light:hidden max-h-[170px]" src="/media/illustrations/21-dark.svg"/>
        </div>
        <div class="text-lg font-medium text-gray-900 text-center">
          Upload Item to Get Started
        </div>
        <div class="text-sm text-gray-700 text-center gap-1">
          Begin by crafting your inaugural list in minutes.
          <a class="text-sm font-medium link" href="html/demo1/account/billing/plans.html">
            {{ t('sidebar.welcome_message') }}
          </a>
        </div>
      </div>
    </div>
    <div class="flex grow justify-center pt-5 lg:pt-7.5">
      <a class="btn btn-link" href="html/demo1/public-profile/profiles/default.html">
        Check ready Templates
      </a>
    </div>
  </div>
</template>