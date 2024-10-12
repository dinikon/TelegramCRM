<script setup lang="ts">

</script>

<template>
  <div class="flex items-center flex-wrap md:flex-nowrap lg:items-end justify-between border-b border-b-gray-200 dark:border-b-coal-100 gap-3 lg:gap-6 mb-5 lg:mb-10">
    <!-- Container -->
    <div class="container-fixed" id="hero_container">
      <div class="grid">
        <div class="scrollable-x-auto">
          <div class="menu gap-3" data-menu="true">
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary here menu-item-dropdown" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">
            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
             Account Home
            </span>
                <span class="menu-arrow">
             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
             </i>
            </span>
              </div>
              <div class="menu-dropdown menu-default py-2 min-w-[200px]" style="">
                <div class="menu-item active">
                  <a class="menu-link" href="html/demo1/account/home/get-started.html" tabindex="0">
              <span class="menu-title">
               Get Started
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/home/user-profile.html" tabindex="0">
              <span class="menu-title">
               User Profile
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/home/company-profile.html" tabindex="0">
              <span class="menu-title">
               Company Profile
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/home/settings-sidebar.html" tabindex="0">
              <span class="menu-title">
               Settings - With Sidebar
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/home/settings-enterprise.html" tabindex="0">
              <span class="menu-title">
               Settings - Enterprise
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/home/settings-plain.html" tabindex="0">
              <span class="menu-title">
               Settings - Plain
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/home/settings-modal.html" tabindex="0">
              <span class="menu-title">
               Settings - Modal
              </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary menu-item-dropdown" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">
            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
             Billing
            </span>
                <span class="menu-arrow">
             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
             </i>
            </span>
              </div>
              <div class="menu-dropdown menu-default py-2 min-w-[200px]">
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/billing/basic.html" tabindex="0">
              <span class="menu-title">
               Billing - Basic
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/billing/enterprise.html" tabindex="0">
              <span class="menu-title">
               Billing - Enterprise
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/billing/plans.html" tabindex="0">
              <span class="menu-title">
               Plans
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/billing/history.html" tabindex="0">
              <span class="menu-title">
               Billing History
              </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary menu-item-dropdown" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">
            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
             Security
            </span>
                <span class="menu-arrow">
             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
             </i>
            </span>
              </div>
              <div class="menu-dropdown menu-default py-2 min-w-[200px]" style="">
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/security/get-started.html" tabindex="0">
              <span class="menu-title">
               Get Started
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/security/overview.html" tabindex="0">
              <span class="menu-title">
               Security Overview
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/security/allowed-ip-addresses.html" tabindex="0">
              <span class="menu-title">
               Allowed IP Addresses
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/security/privacy-settings.html" tabindex="0">
              <span class="menu-title">
               Privacy Settings
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/security/device-management.html" tabindex="0">
              <span class="menu-title">
               Device Management
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/security/backup-and-recovery.html" tabindex="0">
              <span class="menu-title">
               Backup &amp; Recovery
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/security/current-sessions.html" tabindex="0">
              <span class="menu-title">
               Current Sessions
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/security/security-log.html" tabindex="0">
              <span class="menu-title">
               Security Log
              </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary menu-item-dropdown" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">
            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
             Members &amp; Roles
            </span>
                <span class="menu-arrow">
             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
             </i>
            </span>
              </div>
              <div class="menu-dropdown menu-default py-2 min-w-[200px]" style="">
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/members/team-starter.html" tabindex="0">
              <span class="menu-title">
               Teams Starter
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/members/teams.html" tabindex="0">
              <span class="menu-title">
               Teams
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/members/team-info.html" tabindex="0">
              <span class="menu-title">
               Team Info
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/members/members-starter.html" tabindex="0">
              <span class="menu-title">
               Members Starter
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/members/team-members.html" tabindex="0">
              <span class="menu-title">
               Team Members
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/members/import-members.html" tabindex="0">
              <span class="menu-title">
               Import Members
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/members/roles.html" tabindex="0">
              <span class="menu-title">
               Roles
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/members/permissions-toggle.html" tabindex="0">
              <span class="menu-title">
               Permissions - Toggler
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/members/permissions-check.html" tabindex="0">
              <span class="menu-title">
               Permissions - Check
              </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary">
              <a class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" href="html/demo1/account/integrations.html" tabindex="0">
            <span class="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">
             Integrations
            </span>
              </a>
            </div>
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary">
              <a class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" href="html/demo1/account/notifications.html" tabindex="0">
            <span class="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">
             Notifications
            </span>
              </a>
            </div>
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary">
              <a class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" href="html/demo1/account/api-keys.html" tabindex="0">
            <span class="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">
             API Keys
            </span>
              </a>
            </div>
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary menu-item-dropdown" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">
            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
             More
            </span>
                <span class="menu-arrow">
             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
             </i>
            </span>
              </div>
              <div class="menu-dropdown menu-default py-2 min-w-[200px]" style="">
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/appearance.html" tabindex="0">
              <span class="menu-title">
               Appearance
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/invite-a-friend.html" tabindex="0">
              <span class="menu-title">
               Invite a Friend
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/account/activity.html" tabindex="0">
              <span class="menu-title">
               Activity
              </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Container -->
  </div>
  <div class="container-fixed">
    <div class="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
      <div class="flex flex-col justify-center gap-2">
        <h1 class="text-2xl font-semibold leading-none text-gray-900 mb1.5">
          Account
        </h1>
        <div class="flex items-center gap-2 text-sm font-medium">
         <span class="text-gray-800 font-medium">
          Jayson Tatum
         </span>
          <a class="text-gray-700 hover:text-primary" href="mailto:jaytatum@ktstudio.com">
            jaytatum@ktstudio.com
          </a>
          <span class="size-0.75 bg-gray-600 rounded-full">
         </span>
          <a class="font-semibold btn btn-link link" href="html/demo1/account/members/team-info.html">
            Personal Info
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fixed">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5">
      <div class="card p-5 lg:p-7.5 lg:pt-7">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between gap-2">
            <i class="ki-filled ki-badge text-2xl link">
            </i>
            <div class="menu" data-menu="true">
              <div class="menu-item menu-item-dropdown" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                  <i class="ki-filled ki-dots-vertical">
                  </i>
                </button>
                <div class="menu-dropdown menu-default w-full max-w-[200px]" data-menu-dismiss="true" style="">
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/home/settings-enterprise.html">
               <span class="menu-icon">
                <i class="ki-filled ki-setting-3">
                </i>
               </span>
                      <span class="menu-title">
                Settings
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/members/import-members.html">
               <span class="menu-icon">
                <i class="ki-filled ki-some-files">
                </i>
               </span>
                      <span class="menu-title">
                Import
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/activity.html">
               <span class="menu-icon">
                <i class="ki-filled ki-cloud-change">
                </i>
               </span>
                      <span class="menu-title">
                Activity
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" data-modal-toggle="#report_user_modal" href="#">
               <span class="menu-icon">
                <i class="ki-filled ki-dislike">
                </i>
               </span>
                      <span class="menu-title">
                Report
               </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <a class="text-base font-medium leading-none text-gray-900 hover:text-primary-active" href="html/demo1/account/members/team-info.html">
              Personal info
            </a>
            <span class="text-2sm text-gray-700 leading-5">
           We're open to partnerships, guest posts, promo bannersand more.
          </span>
          </div>
        </div>
      </div>
      <div class="card p-5 lg:p-7.5 lg:pt-7">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between gap-2">
            <i class="ki-filled ki-security-user text-2xl link">
            </i>
            <div class="menu" data-menu="true">
              <div class="menu-item menu-item-dropdown" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                  <i class="ki-filled ki-dots-vertical">
                  </i>
                </button>
                <div class="menu-dropdown menu-default w-full max-w-[200px]" data-menu-dismiss="true">
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/home/settings-enterprise.html">
               <span class="menu-icon">
                <i class="ki-filled ki-setting-3">
                </i>
               </span>
                      <span class="menu-title">
                Settings
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/members/import-members.html">
               <span class="menu-icon">
                <i class="ki-filled ki-some-files">
                </i>
               </span>
                      <span class="menu-title">
                Import
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/activity.html">
               <span class="menu-icon">
                <i class="ki-filled ki-cloud-change">
                </i>
               </span>
                      <span class="menu-title">
                Activity
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" data-modal-toggle="#report_user_modal" href="#">
               <span class="menu-icon">
                <i class="ki-filled ki-dislike">
                </i>
               </span>
                      <span class="menu-title">
                Report
               </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <a class="text-base font-medium leading-none text-gray-900 hover:text-primary-active" href="html/demo1/account/security/security-log.html">
              Login &amp; Security
            </a>
            <span class="text-2sm text-gray-700 leading-5">
           Safeguarding your information with strong authentication measures.
          </span>
          </div>
        </div>
      </div>
      <div class="card p-5 lg:p-7.5 lg:pt-7">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between gap-2">
            <i class="ki-filled ki-cheque text-2xl link">
            </i>
            <div class="menu" data-menu="true">
              <div class="menu-item menu-item-dropdown" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                  <i class="ki-filled ki-dots-vertical">
                  </i>
                </button>
                <div class="menu-dropdown menu-default w-full max-w-[200px]" data-menu-dismiss="true">
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/home/settings-enterprise.html">
               <span class="menu-icon">
                <i class="ki-filled ki-setting-3">
                </i>
               </span>
                      <span class="menu-title">
                Settings
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/members/import-members.html">
               <span class="menu-icon">
                <i class="ki-filled ki-some-files">
                </i>
               </span>
                      <span class="menu-title">
                Import
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/activity.html">
               <span class="menu-icon">
                <i class="ki-filled ki-cloud-change">
                </i>
               </span>
                      <span class="menu-title">
                Activity
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" data-modal-toggle="#report_user_modal" href="#">
               <span class="menu-icon">
                <i class="ki-filled ki-dislike">
                </i>
               </span>
                      <span class="menu-title">
                Report
               </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <a class="text-base font-medium leading-none text-gray-900 hover:text-primary-active" href="html/demo1/account/billing/basic.html">
              Billing &amp; Payments
            </a>
            <span class="text-2sm text-gray-700 leading-5">
           Simplify payments today with secure, user-friendly transaction processes.
          </span>
          </div>
        </div>
      </div>
      <div class="card p-5 lg:p-7.5 lg:pt-7">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between gap-2">
            <i class="ki-filled ki-notification-on text-2xl link">
            </i>
            <div class="menu" data-menu="true">
              <div class="menu-item menu-item-dropdown" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                  <i class="ki-filled ki-dots-vertical">
                  </i>
                </button>
                <div class="menu-dropdown menu-default w-full max-w-[200px]" data-menu-dismiss="true">
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/home/settings-enterprise.html">
               <span class="menu-icon">
                <i class="ki-filled ki-setting-3">
                </i>
               </span>
                      <span class="menu-title">
                Settings
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/members/import-members.html">
               <span class="menu-icon">
                <i class="ki-filled ki-some-files">
                </i>
               </span>
                      <span class="menu-title">
                Import
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/activity.html">
               <span class="menu-icon">
                <i class="ki-filled ki-cloud-change">
                </i>
               </span>
                      <span class="menu-title">
                Activity
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" data-modal-toggle="#report_user_modal" href="#">
               <span class="menu-icon">
                <i class="ki-filled ki-dislike">
                </i>
               </span>
                      <span class="menu-title">
                Report
               </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <a class="text-base font-medium leading-none text-gray-900 hover:text-primary-active" href="html/demo1/account/notifications.html">
              Notifications
            </a>
            <span class="text-2sm text-gray-700 leading-5">
           Keep updated with important notices and event reminders.
          </span>
          </div>
        </div>
      </div>
      <div class="card p-5 lg:p-7.5 lg:pt-7">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between gap-2">
            <i class="ki-filled ki-dropbox text-2xl link">
            </i>
            <div class="menu" data-menu="true">
              <div class="menu-item menu-item-dropdown" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                  <i class="ki-filled ki-dots-vertical">
                  </i>
                </button>
                <div class="menu-dropdown menu-default w-full max-w-[200px]" data-menu-dismiss="true">
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/home/settings-enterprise.html">
               <span class="menu-icon">
                <i class="ki-filled ki-setting-3">
                </i>
               </span>
                      <span class="menu-title">
                Settings
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/members/import-members.html">
               <span class="menu-icon">
                <i class="ki-filled ki-some-files">
                </i>
               </span>
                      <span class="menu-title">
                Import
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/activity.html">
               <span class="menu-icon">
                <i class="ki-filled ki-cloud-change">
                </i>
               </span>
                      <span class="menu-title">
                Activity
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" data-modal-toggle="#report_user_modal" href="#">
               <span class="menu-icon">
                <i class="ki-filled ki-dislike">
                </i>
               </span>
                      <span class="menu-title">
                Report
               </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <a class="text-base font-medium leading-none text-gray-900 hover:text-primary-active" href="html/demo1/account/integrations.html">
              Integrations
            </a>
            <span class="text-2sm text-gray-700 leading-5">
           Enhance Workflows with Advanced Integrations.
          </span>
          </div>
        </div>
      </div>
      <div class="card p-5 lg:p-7.5 lg:pt-7">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between gap-2">
            <i class="ki-filled ki-user text-2xl link">
            </i>
            <div class="menu" data-menu="true">
              <div class="menu-item menu-item-dropdown" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                  <i class="ki-filled ki-dots-vertical">
                  </i>
                </button>
                <div class="menu-dropdown menu-default w-full max-w-[200px]" data-menu-dismiss="true">
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/home/settings-enterprise.html">
               <span class="menu-icon">
                <i class="ki-filled ki-setting-3">
                </i>
               </span>
                      <span class="menu-title">
                Settings
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/members/import-members.html">
               <span class="menu-icon">
                <i class="ki-filled ki-some-files">
                </i>
               </span>
                      <span class="menu-title">
                Import
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/activity.html">
               <span class="menu-icon">
                <i class="ki-filled ki-cloud-change">
                </i>
               </span>
                      <span class="menu-title">
                Activity
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" data-modal-toggle="#report_user_modal" href="#">
               <span class="menu-icon">
                <i class="ki-filled ki-dislike">
                </i>
               </span>
                      <span class="menu-title">
                Report
               </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <a class="text-base font-medium leading-none text-gray-900 hover:text-primary-active" href="html/demo1/account/members/roles.html">
              Members, Teams &amp; Roles
            </a>
            <span class="text-2sm text-gray-700 leading-5">
           Efficient management of members, teams, and roles.
          </span>
          </div>
        </div>
      </div>
      <div class="card p-5 lg:p-7.5 lg:pt-7">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between gap-2">
            <i class="ki-filled ki-key-square text-2xl link">
            </i>
            <div class="menu" data-menu="true">
              <div class="menu-item menu-item-dropdown" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                  <i class="ki-filled ki-dots-vertical">
                  </i>
                </button>
                <div class="menu-dropdown menu-default w-full max-w-[200px]" data-menu-dismiss="true">
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/home/settings-enterprise.html">
               <span class="menu-icon">
                <i class="ki-filled ki-setting-3">
                </i>
               </span>
                      <span class="menu-title">
                Settings
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/members/import-members.html">
               <span class="menu-icon">
                <i class="ki-filled ki-some-files">
                </i>
               </span>
                      <span class="menu-title">
                Import
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/activity.html">
               <span class="menu-icon">
                <i class="ki-filled ki-cloud-change">
                </i>
               </span>
                      <span class="menu-title">
                Activity
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" data-modal-toggle="#report_user_modal" href="#">
               <span class="menu-icon">
                <i class="ki-filled ki-dislike">
                </i>
               </span>
                      <span class="menu-title">
                Report
               </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <a class="text-base font-medium leading-none text-gray-900 hover:text-primary-active" href="html/demo1/account/api-keys.html">
              API Keys
            </a>
            <span class="text-2sm text-gray-700 leading-5">
           Secure and manage Your API Keys effectively and efficiently.
          </span>
          </div>
        </div>
      </div>
      <div class="card p-5 lg:p-7.5 lg:pt-7">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between gap-2">
            <i class="ki-filled ki-mouse-square text-2xl link">
            </i>
            <div class="menu" data-menu="true">
              <div class="menu-item menu-item-dropdown" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                  <i class="ki-filled ki-dots-vertical">
                  </i>
                </button>
                <div class="menu-dropdown menu-default w-full max-w-[200px]" data-menu-dismiss="true">
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/home/settings-enterprise.html">
               <span class="menu-icon">
                <i class="ki-filled ki-setting-3">
                </i>
               </span>
                      <span class="menu-title">
                Settings
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/members/import-members.html">
               <span class="menu-icon">
                <i class="ki-filled ki-some-files">
                </i>
               </span>
                      <span class="menu-title">
                Import
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/activity.html">
               <span class="menu-icon">
                <i class="ki-filled ki-cloud-change">
                </i>
               </span>
                      <span class="menu-title">
                Activity
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" data-modal-toggle="#report_user_modal" href="#">
               <span class="menu-icon">
                <i class="ki-filled ki-dislike">
                </i>
               </span>
                      <span class="menu-title">
                Report
               </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <a class="text-base font-medium leading-none text-gray-900 hover:text-primary-active" href="html/demo1/account/appearance.html">
              Appearance
            </a>
            <span class="text-2sm text-gray-700 leading-5">
           Transforming your online presence with flawless appearance.
          </span>
          </div>
        </div>
      </div>
      <div class="card p-5 lg:p-7.5 lg:pt-7">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between gap-2">
            <i class="ki-filled ki-desktop-mobile text-2xl link">
            </i>
            <div class="menu" data-menu="true">
              <div class="menu-item menu-item-dropdown" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                  <i class="ki-filled ki-dots-vertical">
                  </i>
                </button>
                <div class="menu-dropdown menu-default w-full max-w-[200px]" data-menu-dismiss="true">
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/home/settings-enterprise.html">
               <span class="menu-icon">
                <i class="ki-filled ki-setting-3">
                </i>
               </span>
                      <span class="menu-title">
                Settings
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/members/import-members.html">
               <span class="menu-icon">
                <i class="ki-filled ki-some-files">
                </i>
               </span>
                      <span class="menu-title">
                Import
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/activity.html">
               <span class="menu-icon">
                <i class="ki-filled ki-cloud-change">
                </i>
               </span>
                      <span class="menu-title">
                Activity
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" data-modal-toggle="#report_user_modal" href="#">
               <span class="menu-icon">
                <i class="ki-filled ki-dislike">
                </i>
               </span>
                      <span class="menu-title">
                Report
               </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <a class="text-base font-medium leading-none text-gray-900 hover:text-primary-active" href="html/demo1.html">
              Devices
            </a>
            <span class="text-2sm text-gray-700 leading-5">
           Stay ahead with the latest devices and innovations news
          </span>
          </div>
        </div>
      </div>
      <div class="card p-5 lg:p-7.5 lg:pt-7">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between gap-2">
            <i class="ki-filled ki-color-swatch text-2xl link">
            </i>
            <div class="menu" data-menu="true">
              <div class="menu-item menu-item-dropdown" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                  <i class="ki-filled ki-dots-vertical">
                  </i>
                </button>
                <div class="menu-dropdown menu-default w-full max-w-[200px]" data-menu-dismiss="true">
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/home/settings-enterprise.html">
               <span class="menu-icon">
                <i class="ki-filled ki-setting-3">
                </i>
               </span>
                      <span class="menu-title">
                Settings
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/members/import-members.html">
               <span class="menu-icon">
                <i class="ki-filled ki-some-files">
                </i>
               </span>
                      <span class="menu-title">
                Import
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/activity.html">
               <span class="menu-icon">
                <i class="ki-filled ki-cloud-change">
                </i>
               </span>
                      <span class="menu-title">
                Activity
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" data-modal-toggle="#report_user_modal" href="#">
               <span class="menu-icon">
                <i class="ki-filled ki-dislike">
                </i>
               </span>
                      <span class="menu-title">
                Report
               </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <a class="text-base font-medium leading-none text-gray-900 hover:text-primary-active" href="html/demo1/account/invite-a-friend.html">
              Brand
            </a>
            <span class="text-2sm text-gray-700 leading-5">
           Trending brand designs, identities, and logos.
          </span>
          </div>
        </div>
      </div>
      <div class="card p-5 lg:p-7.5 lg:pt-7">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between gap-2">
            <i class="ki-filled ki-chart-line-star text-2xl link">
            </i>
            <div class="menu" data-menu="true">
              <div class="menu-item menu-item-dropdown" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                  <i class="ki-filled ki-dots-vertical">
                  </i>
                </button>
                <div class="menu-dropdown menu-default w-full max-w-[200px]" data-menu-dismiss="true">
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/home/settings-enterprise.html">
               <span class="menu-icon">
                <i class="ki-filled ki-setting-3">
                </i>
               </span>
                      <span class="menu-title">
                Settings
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/members/import-members.html">
               <span class="menu-icon">
                <i class="ki-filled ki-some-files">
                </i>
               </span>
                      <span class="menu-title">
                Import
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" href="html/demo1/account/activity.html">
               <span class="menu-icon">
                <i class="ki-filled ki-cloud-change">
                </i>
               </span>
                      <span class="menu-title">
                Activity
               </span>
                    </a>
                  </div>
                  <div class="menu-item">
                    <a class="menu-link" data-modal-toggle="#report_user_modal" href="#">
               <span class="menu-icon">
                <i class="ki-filled ki-dislike">
                </i>
               </span>
                      <span class="menu-title">
                Report
               </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <a class="text-base font-medium leading-none text-gray-900 hover:text-primary-active" href="html/demo1/account/activity.html">
              Activity
            </a>
            <span class="text-2sm text-gray-700 leading-5">
           Central Hub for Personal Customization.
          </span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex grow justify-center pt-5 lg:pt-7.5">
      <a class="btn btn-link" href="#">
        More Account Options
      </a>
    </div>
  </div>
</template>