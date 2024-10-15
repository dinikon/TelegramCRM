<script setup lang="ts">
</script>

<template>
  <div class="flex items-center flex-wrap md:flex-nowrap lg:items-end justify-between border-b border-b-gray-200 dark:border-b-coal-100 gap-3 lg:gap-6 mb-5 lg:mb-10">
    <!-- Container -->
    <div class="container-fixed" id="hero_container">
      <div class="grid">
        <div class="scrollable-x-auto">
          <div class="menu gap-3" data-menu="true">
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary here" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">
            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
             Account Home
            </span>
                <span class="menu-arrow">
             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
             </i>
            </span>
              </div>
              <div class="menu-dropdown menu-default py-2 min-w-[200px]">
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
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
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
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">
            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
             Security
            </span>
                <span class="menu-arrow">
             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
             </i>
            </span>
              </div>
              <div class="menu-dropdown menu-default py-2 min-w-[200px]">
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
               Backup & Recovery
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
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">
            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
             Members & Roles
            </span>
                <span class="menu-arrow">
             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
             </i>
            </span>
              </div>
              <div class="menu-dropdown menu-default py-2 min-w-[200px]">
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
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">
            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
             More
            </span>
                <span class="menu-arrow">
             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
             </i>
            </span>
              </div>
              <div class="menu-dropdown menu-default py-2 min-w-[200px]">
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
  <!-- Container -->
  <div class="container-fixed">
    <div class="flex items-center flex-wrap md:flex-nowrap lg:items-end justify-between border-b border-b-gray-200 dark:border-b-coal-100 gap-3 lg:gap-6 mb-5 lg:mb-10">
      <div class="grid">
        <div class="scrollable-x-auto">
          <div class="menu gap-3" data-menu="true">
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">
            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
             Profiles
            </span>
                <span class="menu-arrow">
             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
             </i>
            </span>
              </div>
              <div class="menu-dropdown menu-default py-2 min-w-[200px]">
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/public-profile/profiles/default.html" tabindex="0">
              <span class="menu-title">
               Default
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/public-profile/profiles/creator.html" tabindex="0">
              <span class="menu-title">
               Creator
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/public-profile/profiles/company.html" tabindex="0">
              <span class="menu-title">
               Company
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/public-profile/profiles/nft.html" tabindex="0">
              <span class="menu-title">
               NFT
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/public-profile/profiles/blogger.html" tabindex="0">
              <span class="menu-title">
               Blogger
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/public-profile/profiles/crm.html" tabindex="0">
              <span class="menu-title">
               CRM
              </span>
                  </a>
                </div>
                <div class="menu-item" data-menu-item-offset="-10px, 0" data-menu-item-overflow="true" data-menu-item-placement="right-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
                  <div class="menu-link" tabindex="0">
              <span class="menu-title">
               More
              </span>
                    <span class="menu-arrow">
               <i class="ki-filled ki-down text-2xs [.menu-dropdown_&]:-rotate-90">
               </i>
              </span>
                  </div>
                  <div class="menu-dropdown menu-default py min-w-[200px]">
                    <div class="menu-item">
                      <a class="menu-link" href="html/demo1/public-profile/profiles/gamer.html" tabindex="0">
                <span class="menu-title">
                 Gamer
                </span>
                      </a>
                    </div>
                    <div class="menu-item">
                      <a class="menu-link" href="html/demo1/public-profile/profiles/feeds.html" tabindex="0">
                <span class="menu-title">
                 Feeds
                </span>
                      </a>
                    </div>
                    <div class="menu-item">
                      <a class="menu-link" href="html/demo1/public-profile/profiles/plain.html" tabindex="0">
                <span class="menu-title">
                 Plain
                </span>
                      </a>
                    </div>
                    <div class="menu-item">
                      <a class="menu-link" href="html/demo1/public-profile/profiles/modal.html" tabindex="0">
                <span class="menu-title">
                 Modal
                </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">
            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
             Projects
            </span>
                <span class="menu-arrow">
             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
             </i>
            </span>
              </div>
              <div class="menu-dropdown menu-default py-2 min-w-[200px]">
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/public-profile/projects/3-columns.html" tabindex="0">
              <span class="menu-title">
               3 Columns
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/public-profile/projects/2-columns.html" tabindex="0">
              <span class="menu-title">
               2 Columns
              </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary">
              <a class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" href="html/demo1/public-profile/works.html" tabindex="0">
            <span class="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">
             Works
            </span>
              </a>
            </div>
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary">
              <a class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" href="html/demo1/public-profile/teams.html" tabindex="0">
            <span class="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">
             Teams
            </span>
              </a>
            </div>
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary">
              <a class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" href="html/demo1/public-profile/network.html" tabindex="0">
            <span class="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">
             Network
            </span>
              </a>
            </div>
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary">
              <a class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" href="html/demo1/public-profile/activity.html" tabindex="0">
            <span class="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">
             Activity
            </span>
              </a>
            </div>
            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary here" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">
            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">
             More
            </span>
                <span class="menu-arrow">
             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">
             </i>
            </span>
              </div>
              <div class="menu-dropdown menu-default py-2 min-w-[200px]">
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/public-profile/campaigns/card.html" tabindex="0">
              <span class="menu-title">
               Campaigns - Card
              </span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="html/demo1/public-profile/campaigns/list.html" tabindex="0">
              <span class="menu-title">
               Campaigns - List
              </span>
                  </a>
                </div>
                <div class="menu-item active">
                  <a class="menu-link" href="html/demo1/public-profile/empty.html" tabindex="0">
              <span class="menu-title">
               Empty
              </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end grow lg:grow-0 lg:pb-4 gap-2.5 mb-3 lg:mb-0">
        <div class="dropdown" data-dropdown="true" data-dropdown-placement="bottom-end" data-dropdown-trigger="click">
          <button class="dropdown-toggle btn btn-sm btn-primary">
            <i class="ki-filled ki-users">
            </i>
            Connect
          </button>
          <div class="dropdown-content menu-default w-full max-w-[220px]">
            <div class="menu-item" data-dropdown-dismiss="true">
              <button class="menu-link" data-modal-toggle="#share_profile_modal">
            <span class="menu-icon">
             <i class="ki-filled ki-coffee">
             </i>
            </span>
                <span class="menu-title">
             Share Profile
            </span>
              </button>
            </div>
            <div class="menu-item" data-dropdown-dismiss="true">
              <a class="menu-link" data-modal-toggle="#give_award_modal" href="#">
            <span class="menu-icon">
             <i class="ki-filled ki-award">
             </i>
            </span>
                <span class="menu-title">
             Give Award
            </span>
              </a>
            </div>
            <div class="menu-item" data-dropdown-dismiss="true">
              <button class="menu-link">
            <span class="menu-icon">
             <i class="ki-filled ki-chart-line">
             </i>
            </span>
                <span class="menu-title">
             Stay Updated
            </span>
                <label class="switch switch-sm">
                  <input name="check" type="checkbox" value="1">
                  </input>
                </label>
              </button>
            </div>
            <div class="menu-item" data-dropdown-dismiss="true">
              <button class="menu-link" data-modal-toggle="#report_user_modal">
            <span class="menu-icon">
             <i class="ki-filled ki-information-2">
             </i>
            </span>
                <span class="menu-title">
             Report User
            </span>
              </button>
            </div>
          </div>
        </div>
        <button class="btn btn-sm btn-icon btn-light">
          <i class="ki-filled ki-messages">
          </i>
        </button>
        <button class="btn btn-sm btn-icon btn-light">
          <i class="ki-filled ki-dots-vertical">
          </i>
        </button>
      </div>
    </div>
  </div>
  <!-- End of Container -->
  <!-- Container -->
  <div class="container-fixed">
    <div class="card p-8 lg:p-12">
      <div class="card-body">
        <div class="grid justify-center py-5">
          <img alt="" class="dark:hidden max-h-[170px]" src="/media/illustrations/11.svg"/>
          <img alt="" class="light:hidden max-h-[170px]" src="/media/illustrations/11-dark.svg"/>
        </div>
        <div class="text-lg font-medium text-gray-900 text-center">
          Upload Item to Get Started
        </div>
        <div class="text-sm text-gray-700 text-center gap-1">
          Begin by crafting your inaugural list in minutes.
          <a class="text-sm font-medium link" href="html/demo1/account/billing/plans.html">
            Get Started!
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