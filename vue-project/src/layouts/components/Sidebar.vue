<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n();
</script>

<template>
  <div class="sidebar dark:bg-coal-600 bg-light border-r border-r-gray-200 dark:border-r-coal-100 fixed top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0"
      data-drawer="true" data-drawer-class="drawer drawer-start top-0 bottom-0" data-drawer-enable="true|lg:false"
      id="sidebar">
    <div class="sidebar-header hidden lg:flex items-center relative justify-between px-3 lg:px-6 shrink-0"
         id="sidebar_header">
      <router-link class="dark:hidden" to="/">
        <img class="default-logo min-h-[22px] max-w-none" src="/media/app/default-logo.svg"/>
        <img class="small-logo min-h-[22px] max-w-none" src="/media/app/mini-logo.svg"/>
      </router-link>
      <router-link class="hidden dark:block" to="/">
        <img class="default-logo min-h-[22px] max-w-none" src="/media/app/default-logo-dark.svg"/>
        <img class="small-logo min-h-[22px] max-w-none" src="/media/app/mini-logo.svg"/>
      </router-link>
      <button
          class="btn btn-icon btn-icon-md size-[30px] rounded-lg border border-gray-200 dark:border-gray-300 bg-light text-gray-500 hover:text-gray-700 toggle absolute left-full top-2/4 -translate-x-2/4 -translate-y-2/4"
          data-toggle="body" data-toggle-class="sidebar-collapse" id="sidebar_toggle">
        <i class="ki-filled ki-black-left-line toggle-active:rotate-180 transition-all duration-300"></i>
      </button>
    </div>
<!--    <div class="flex flex-col gap-2.5" id="sidebar_header">-->
<!--      <div class="flex items-center gap-2.5 px-3.5 h-[70px]">-->
<!--        <a href="html/demo10/index.html">-->
<!--          <img class="size-[34px]" src="/media/app/mini-logo-circle-success.svg"/>-->
<!--        </a>-->
<!--        <div class="menu menu-default grow" data-menu="true">-->
<!--          <div class="menu-item grow" data-menu-item-offset="0, 15px" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="hover">-->
<!--            <div class="menu-label cursor-pointer text-gray-900 font-medium grow justify-between">-->
<!--          <span class="text-lg font-medium text-inverse grow">-->
<!--           Metronic-->
<!--          </span>-->
<!--              <div class="flex flex-col text-gray-900 font-medium">-->
<!--           <span class="menu-arrow">-->
<!--            <i class="ki-filled ki-up">-->
<!--            </i>-->
<!--           </span>-->
<!--                <span class="menu-arrow">-->
<!--            <i class="ki-filled ki-down">-->
<!--            </i>-->
<!--           </span>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="menu-dropdown w-48 py-2">-->
<!--              <div class="menu-item">-->
<!--                <a class="menu-link" href="html/demo10/public-profile/profiles/default.html" tabindex="0">-->
<!--            <span class="menu-icon">-->
<!--             <i class="ki-filled ki-profile-circle">-->
<!--             </i>-->
<!--            </span>-->
<!--                  <span class="menu-title">-->
<!--             Public Profile-->
<!--            </span>-->
<!--                </a>-->
<!--              </div>-->
<!--              <div class="menu-item">-->
<!--                <a class="menu-link" href="html/demo10.html" tabindex="0">-->
<!--            <span class="menu-icon">-->
<!--             <i class="ki-filled ki-setting-2">-->
<!--             </i>-->
<!--            </span>-->
<!--                  <span class="menu-title">-->
<!--             Account-->
<!--            </span>-->
<!--                </a>-->
<!--              </div>-->
<!--              <div class="menu-item">-->
<!--                <a class="menu-link" href="html/demo10/network/get-started.html" tabindex="0">-->
<!--            <span class="menu-icon">-->
<!--             <i class="ki-filled ki-users">-->
<!--             </i>-->
<!--            </span>-->
<!--                  <span class="menu-title">-->
<!--             Network-->
<!--            </span>-->
<!--                </a>-->
<!--              </div>-->
<!--              <div class="menu-item">-->
<!--                <a class="menu-link" href="html/demo10/authentication/get-started.html" tabindex="0">-->
<!--            <span class="menu-icon">-->
<!--             <i class="ki-filled ki-security-user">-->
<!--             </i>-->
<!--            </span>-->
<!--                  <span class="menu-title">-->
<!--             Authentication-->
<!--            </span>-->
<!--                </a>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--&lt;!&ndash;      <div class="flex items-center gap-2.5 px-3.5">&ndash;&gt;-->
<!--&lt;!&ndash;        &lt;!&ndash; Input &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;        <a class="btn btn-dark btn-sm justify-center min-w-[198px]" href="html/demo10/public-profile/projects/3-columns.html">&ndash;&gt;-->
<!--&lt;!&ndash;          <i class="ki-filled ki-plus">&ndash;&gt;-->
<!--&lt;!&ndash;          </i>&ndash;&gt;-->
<!--&lt;!&ndash;          Add New&ndash;&gt;-->
<!--&lt;!&ndash;        </a>&ndash;&gt;-->
<!--&lt;!&ndash;        &lt;!&ndash; End of Input &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;        <button class="btn btn-icon btn-dark btn-icon-lg size-8 hover:text-primary" data-modal-toggle="#search_modal">&ndash;&gt;-->
<!--&lt;!&ndash;          <i class="ki-filled ki-magnifier">&ndash;&gt;-->
<!--&lt;!&ndash;          </i>&ndash;&gt;-->
<!--&lt;!&ndash;        </button>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--    </div>-->
    <div class="sidebar-content flex grow shrink-0 py-5 pr-2" id="sidebar_content">
      <div class="scrollable-y-hover grow shrink-0 flex pl-2 lg:pl-5 pr-1 lg:pr-3" data-scrollable="true"
           data-scrollable-dependencies="#sidebar_header" data-scrollable-height="auto" data-scrollable-offset="0px"
           data-scrollable-wrappers="#sidebar_content" id="sidebar_scrollable">

        <!-- Sidebar Menu -->
        <div class="menu flex flex-col grow gap-0.5" data-menu="true" data-menu-accordion-expand-all="false"
             id="sidebar_menu">

          <!-- Sidebar Menu -->
          <div class="menu-item pt-2.25 pb-px">
            <span class="menu-heading uppercase text-2sm font-medium text-gray-500 pl-[10px] pr-[10px]">
              {{ $t('sidebar.crm') }}
            </span>
          </div>
          <div class="menu-item">
            <router-link
                class="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
                to="/crm/deals" tabindex="0">
              <span class="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                <i class="ki-filled ki-note-2 text-lg"></i>
              </span>
              <span
                  class="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                {{ $t('sidebar.leads') }}
              </span>
              <span class="menu-badge mr-[-10px]">
                <span class="badge badge-xs">
                  {{ $t('common.soon') }}
                </span>
              </span>
            </router-link>
          </div>
          <div class="menu-item">
            <router-link
                class="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
                to="/crm/deals" tabindex="0">
              <span class="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                <i class="ki-filled ki-note-2 text-lg"></i>
              </span>
              <span
                  class="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                {{ $t('sidebar.deals') }}
              </span>
              <span class="menu-badge mr-[-10px]">
                <span class="badge badge-xs">
                  {{ $t('common.soon') }}
                </span>
              </span>
            </router-link>
          </div>
          <div class="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
            <div
                class="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
                tabindex="0">
              <span class="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                <i class="ki-filled ki-users text-lg"></i>
              </span>
              <span
                  class="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                {{ $t('sidebar.contacts') }}
              </span>
              <span class="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
                <i class="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                <i class="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
              </span>
            </div>
            <div
                class="menu-accordion gap-0.5 pl-[10px] relative before:absolute before:left-[20px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
              <div class="menu-item">
                <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                   href="html/demo1/network/get-started.html" tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                  <span
                      class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                    {{ $t('sidebar.contacts') }}
                  </span>
                </a>
              </div>
              <div class="menu-item">
                <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                   href="html/demo1/network/get-started.html" tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                  <span
                      class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                    {{ $t('sidebar.company') }}
                  </span>
                </a>
              </div>
              <div class="menu-item">
                <div
                    class="menu-label border border-transparent items-center grow gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                    href="#" tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                  <span class="menu-title text-2sm font-normal text-gray-800">
                    {{ $t('sidebar.contact_center') }}
                  </span>
                  <span class="menu-badge mr-[-10px]">
                    <span class="badge badge-xs">
                      {{ $t('common.soon') }}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="menu-item">
            <router-link
                class="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
                to="/crm/deals" tabindex="0">
              <span class="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                <i class="ki-filled ki-note-2 text-lg"></i>
              </span>
              <span
                  class="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                {{ $t('sidebar.invoice') }}
              </span>
              <span class="menu-badge mr-[-10px]">
                <span class="badge badge-xs">
                  {{ $t('common.soon') }}
                </span>
              </span>
            </router-link>
          </div>
          <div class="menu-item">
            <router-link
                class="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
                to="/crm/deals" tabindex="0">
              <span class="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                <i class="ki-filled ki-note-2 text-lg"></i>
              </span>
              <span
                  class="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                {{ $t('sidebar.estimates') }}
              </span>
              <span class="menu-badge mr-[-10px]">
                <span class="badge badge-xs">
                  {{ $t('common.soon') }}
                </span>
              </span>
            </router-link>
          </div>


          <div class="menu-item pt-2.25 pb-px">
            <span class="menu-heading uppercase text-2sm font-medium text-gray-500 pl-[10px] pr-[10px]">
              {{ $t('sidebar.warehouse') }}
            </span>
          </div>
          <div class="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
            <div
                class="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
                tabindex="0">
              <span class="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                <i class="ki-filled ki-users text-lg"></i>
              </span>
              <span
                  class="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                {{ $t('sidebar.catalog') }}
              </span>
              <span class="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
                <i class="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                <i class="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
              </span>
            </div>
            <div
                class="menu-accordion gap-0.5 pl-[10px] relative before:absolute before:left-[20px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
              <div class="menu-item">
                <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                   href="html/demo1/network/get-started.html" tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                  <span
                      class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                    {{ $t('sidebar.products') }}
                  </span>
                </a>
              </div>
              <div class="menu-item">
                <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                   href="html/demo1/network/get-started.html" tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                  <span
                      class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                    {{ $t('sidebar.publications') }}
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
            <div
                class="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
                tabindex="0">
              <span class="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                <i class="ki-filled ki-users text-lg"></i>
              </span>
              <span
                  class="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                {{ $t('sidebar.documents') }}
              </span>
              <span class="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
                <i class="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                <i class="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
              </span>
            </div>
            <div
                class="menu-accordion gap-0.5 pl-[10px] relative before:absolute before:left-[20px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
              <div class="menu-item">
                <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                   href="html/demo1/network/get-started.html" tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                  <span
                      class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                    {{ $t('sidebar.inventory') }}
                  </span>
                </a>
              </div>
              <div class="menu-item">
                <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                   href="html/demo1/network/get-started.html" tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                  <span
                      class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                    {{ $t('sidebar.sale_order') }}
                  </span>
                </a>
              </div>
              <div class="menu-item">
                <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                   href="html/demo1/network/get-started.html" tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                  <span
                      class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                    {{ $t('sidebar.transfers') }}
                  </span>
                </a>
              </div>
              <div class="menu-item">
                <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                   href="html/demo1/network/get-started.html" tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                  <span
                      class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                    {{ $t('sidebar.write_offs') }}
                  </span>
                </a>
              </div>
              <div class="menu-item flex-col-reverse" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <div
                    class="menu-link border border-transparent grow cursor-pointer gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                    tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                  </span>
                  <span class="menu-title text-2sm font-normal text-gray-600 dark:text-gray-500">
                    <span class="hidden menu-item-show:!flex">
                      {{ $t('common.show_less') }}
                    </span>
                    <span class="flex menu-item-show:hidden">
                      {{ $t('common.show_more') }}
                    </span>
                  </span>
                  <span class="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
                    <i class="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                    <i class="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                  </span>
                </div>
                <div class="menu-accordion gap-0.5">
                  <div class="menu-item">
                    <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                       href="html/demo1/public-profile/campaigns/card.html" tabindex="0">
                      <span
                          class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                      <span
                          class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        {{ $t('sidebar.warehouse') }}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
            <div
                class="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
                tabindex="0">
              <span class="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                <i class="ki-filled ki-users text-lg"></i>
              </span>
              <span
                  class="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                {{ $t('sidebar.shipper') }}
              </span>
              <span class="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
                <i class="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                <i class="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
              </span>
            </div>
            <div
                class="menu-accordion gap-0.5 pl-[10px] relative before:absolute before:left-[20px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
              <div class="menu-item">
                <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                   href="html/demo1/network/get-started.html" tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                  <span
                      class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                    {{ $t('sidebar.contacts') }}
                  </span>
                </a>
              </div>
              <div class="menu-item">
                <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                   href="html/demo1/network/get-started.html" tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                  <span
                      class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                    {{ $t('sidebar.company') }}
                  </span>
                </a>
              </div>
              <div class="menu-item flex-col-reverse" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <div
                    class="menu-link border border-transparent grow cursor-pointer gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                    tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                  </span>
                  <span class="menu-title text-2sm font-normal text-gray-600 dark:text-gray-500">
                    <span class="hidden menu-item-show:!flex">
                      {{ $t('common.show_less') }}
                    </span>
                    <span class="flex menu-item-show:hidden">
                      {{ $t('common.show_more') }}
                    </span>
                  </span>
                  <span class="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
                    <i class="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                    <i class="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                  </span>
                </div>
                <div class="menu-accordion gap-0.5">
                  <div class="menu-item">
                    <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                       href="html/demo1/public-profile/campaigns/card.html" tabindex="0">
                      <span
                          class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                      <span
                          class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        {{ $t('sidebar.vendor_order') }}
                      </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                       href="html/demo1/public-profile/campaigns/list.html" tabindex="0">
                      <span
                          class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                      <span
                          class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        {{ $t('sidebar.price_list') }}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Продажі -->
          <div class="menu-item pt-2.25 pb-px">
            <span class="menu-heading uppercase pl-[10px] pr-[10px] text-2sm font-semibold text-gray-500">
              {{ $t('sidebar.commerce') }}
            </span>
          </div>

          <!-- Продажі -> Магазин и сайті -->
          <div class="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
            <div
                class="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
                tabindex="0">
                  <span class="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                  <i class="ki-filled ki-profile-circle text-lg">
                  </i>
                  </span>
              <span
                  class="menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
                  {{ $t('sidebar.shop_and_site') }}
                  </span>
              <span class="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
                  <i class="ki-filled ki-plus text-2xs menu-item-show:hidden">
                  </i>
                  <i class="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                  </i>
                  </span>
            </div>
            <div
                class="menu-accordion gap-0.5 pl-[10px] relative before:absolute before:left-[20px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
              <div class="menu-item">
                <router-link class="menu-link gap-[14px] pl-[10px] pr-[10px] py-[8px] border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg"
                   to="/commerce/sale-center" tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                  </span>
                  <span
                      class="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                    {{ $t('sidebar.sale_center') }}
                  </span>
                </router-link>
              </div>
              <div class="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <div
                    class="menu-link border border-transparent gap-[14px] pl-[10px] pr-[10px] py-[8px] grow cursor-pointer"
                    tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                  </span>
                  <span
                      class="menu-title text-2sm font-medium mr-1 text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                    {{ $t('sidebar.payment_and_delivery') }}
                  </span>
                  <span class="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
                    <i class="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                    <i class="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                  </span>
                </div>
                <div
                    class="menu-accordion gap-0.5 relative before:absolute before:left-[32px] pl-[22px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
                  <div class="menu-item">
                    <a class="menu-link gap-[5px] pl-[10px] pr-[10px] py-[8px] border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg"
                       href="html/demo1/authentication/classic/sign-in.html"
                       tabindex="0">
                      <span
                          class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span
                          class="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        {{ $t('sidebar.delivery_service') }}
                      </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link gap-[5px] pl-[10px] pr-[10px] py-[8px] border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg"
                       href="html/demo1/authentication/classic/sign-in.html"
                       tabindex="0">
                      <span
                          class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span
                          class="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        {{ $t('sidebar.payment_service') }}
                      </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link gap-[5px] pl-[10px] pr-[10px] py-[8px] border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg"
                       href="html/demo1/authentication/classic/sign-in.html"
                       tabindex="0">
                      <span
                          class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span
                          class="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        {{ $t('sidebar.acquiring') }}
                      </span>
                    </a>
                  </div>
                  <div class="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                    <div
                        class="menu-link border border-transparent gap-[5px] pl-[10px] pr-[10px] py-[8px] grow cursor-pointer"
                        tabindex="0">
                      <span
                          class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                      </span>
                      <span
                          class="menu-title text-2sm font-medium mr-1 text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        {{ $t('sidebar.fiscalization') }}
                      </span>
                      <span class="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
                        <i class="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                        <i class="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                      </span>
                    </div>
                    <div
                        class="menu-accordion gap-0.5 relative before:absolute before:left-[32px] pl-[22px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
                      <div class="menu-item">
                        <a class="menu-link gap-[5px] pl-[10px] pr-[10px] py-[8px] border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg"
                           href="html/demo1/authentication/classic/reset-password/enter-email.html" tabindex="0">
                          <span
                              class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span
                              class="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            {{ $t('sidebar.cash_register') }}
                          </span>
                        </a>
                      </div>
                      <div class="menu-item">
                        <a class="menu-link gap-[5px] pl-[10px] pr-[10px] py-[8px] border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg"
                           href="html/demo1/authentication/classic/reset-password/enter-email.html" tabindex="0">
                          <span
                              class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary">
                          </span>
                          <span
                              class="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                            {{ $t('sidebar.receipt') }}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <div
                    class="menu-link border border-transparent grow cursor-pointer gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                    tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                  <span
                      class="menu-title text-2sm font-normal mr-1 text-gray-800 menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary">
                    {{ $t('sidebar.shop_marketing') }}
                  </span>
                  <span class="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
                    <i class="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                    <i class="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                  </span>
                </div>
                <div
                    class="menu-accordion gap-0.5 relative before:absolute before:left-[32px] pl-[22px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
                  <div class="menu-item">
                    <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                       href="html/demo1/public-profile/projects/3-columns.html" tabindex="0">
                      <span
                          class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                      <span
                          class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        {{ $t('sidebar.promo') }}
                      </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                       href="html/demo1/public-profile/projects/2-columns.html" tabindex="0">
                      <span
                          class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                      <span
                          class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        {{ $t('sidebar.sale_and_discount') }}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <div
                    class="menu-link border border-transparent grow cursor-pointer gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                    tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                  <span
                      class="menu-title text-2sm font-normal mr-1 text-gray-800 menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary">
                    {{ $t('sidebar.customers') }}
                  </span>
                  <span class="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
                    <i class="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                    <i class="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                  </span>
                </div>
                <div
                    class="menu-accordion gap-0.5 relative before:absolute before:left-[32px] pl-[22px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
                  <div class="menu-item">
                    <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                       href="html/demo1/public-profile/projects/3-columns.html" tabindex="0">
                      <span
                          class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                      <span
                          class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        {{ $t('sidebar.customers_list') }}
                      </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                       href="html/demo1/public-profile/projects/2-columns.html" tabindex="0">
                      <span
                          class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                      <span
                          class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        {{ $t('sidebar.transactions') }}
                      </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                       href="html/demo1/public-profile/projects/2-columns.html" tabindex="0">
                      <span
                          class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                      <span
                          class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        {{ $t('sidebar.accounts') }}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="menu-item" data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <div
                    class="menu-link border border-transparent grow cursor-pointer gap-[14px] pl-[10px] pr-[10px] py-[8px]"
                    tabindex="0">
                  <span
                      class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                  <span
                      class="menu-title text-2sm font-normal mr-1 text-gray-800 menu-item-active:text-primary menu-item-active:font-medium menu-link-hover:!text-primary">
                    {{ $t('sidebar.product_catalog') }}
                  </span>
                  <span class="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
                    <i class="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                    <i class="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                  </span>
                </div>
                <div
                    class="menu-accordion gap-0.5 relative before:absolute before:left-[32px] pl-[22px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
                  <div class="menu-item">
                    <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                       href="html/demo1/public-profile/projects/3-columns.html" tabindex="0">
                      <span
                          class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                      <span
                          class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        {{ $t('sidebar.product_category') }}
                      </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                       href="html/demo1/public-profile/projects/2-columns.html" tabindex="0">
                      <span
                          class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                      <span
                          class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        {{ $t('sidebar.product_properties') }}
                      </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[5px] pl-[10px] pr-[10px] py-[8px]"
                       href="html/demo1/public-profile/projects/2-columns.html" tabindex="0">
                      <span
                          class="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                      <span
                          class="menu-title text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                        {{ $t('sidebar.price_list') }}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Sidebar Menu -->
      </div>
    </div>
  </div>
</template>