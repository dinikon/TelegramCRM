<script setup lang="ts">

</script>

<template>
  <!-- Container -->
  <div class="container-fixed" id="content_container">
  </div>
  <!-- End of Container -->
<!--  <div class="flex items-center flex-wrap md:flex-nowrap lg:items-end justify-between border-b border-b-gray-200 dark:border-b-coal-100 gap-3 lg:gap-6 mb-5 lg:mb-10">-->
<!--    &lt;!&ndash; Container &ndash;&gt;-->
<!--    <div class="container-fixed" id="hero_container">-->
<!--      <div class="grid">-->
<!--        <div class="scrollable-x-auto">-->
<!--          <div class="menu gap-3" data-menu="true">-->
<!--            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary here" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">-->
<!--              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">-->
<!--            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">-->
<!--             Account Home-->
<!--            </span>-->
<!--                <span class="menu-arrow">-->
<!--             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">-->
<!--             </i>-->
<!--            </span>-->
<!--              </div>-->
<!--              <div class="menu-dropdown menu-default py-2 min-w-[200px]">-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/home/get-started.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Get Started-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item active">-->
<!--                  <a class="menu-link" href="html/demo1/account/home/user-profile.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               User Profile-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/home/company-profile.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Company Profile-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/home/settings-sidebar.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Settings - With Sidebar-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/home/settings-enterprise.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Settings - Enterprise-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/home/settings-plain.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Settings - Plain-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/home/settings-modal.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Settings - Modal-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">-->
<!--              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">-->
<!--            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">-->
<!--             Billing-->
<!--            </span>-->
<!--                <span class="menu-arrow">-->
<!--             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">-->
<!--             </i>-->
<!--            </span>-->
<!--              </div>-->
<!--              <div class="menu-dropdown menu-default py-2 min-w-[200px]">-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/billing/basic.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Billing - Basic-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/billing/enterprise.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Billing - Enterprise-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/billing/plans.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Plans-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/billing/history.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Billing History-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">-->
<!--              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">-->
<!--            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">-->
<!--             Security-->
<!--            </span>-->
<!--                <span class="menu-arrow">-->
<!--             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">-->
<!--             </i>-->
<!--            </span>-->
<!--              </div>-->
<!--              <div class="menu-dropdown menu-default py-2 min-w-[200px]">-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/security/get-started.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Get Started-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/security/overview.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Security Overview-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/security/allowed-ip-addresses.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Allowed IP Addresses-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/security/privacy-settings.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Privacy Settings-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/security/device-management.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Device Management-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/security/backup-and-recovery.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Backup & Recovery-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/security/current-sessions.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Current Sessions-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/security/security-log.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Security Log-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">-->
<!--              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">-->
<!--            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">-->
<!--             Members & Roles-->
<!--            </span>-->
<!--                <span class="menu-arrow">-->
<!--             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">-->
<!--             </i>-->
<!--            </span>-->
<!--              </div>-->
<!--              <div class="menu-dropdown menu-default py-2 min-w-[200px]">-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/members/team-starter.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Teams Starter-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/members/teams.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Teams-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/members/team-info.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Team Info-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/members/members-starter.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Members Starter-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/members/team-members.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Team Members-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/members/import-members.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Import Members-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/members/roles.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Roles-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/members/permissions-toggle.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Permissions - Toggler-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/members/permissions-check.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Permissions - Check-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary">-->
<!--              <a class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" href="html/demo1/account/integrations.html" tabindex="0">-->
<!--            <span class="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">-->
<!--             Integrations-->
<!--            </span>-->
<!--              </a>-->
<!--            </div>-->
<!--            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary">-->
<!--              <a class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" href="html/demo1/account/notifications.html" tabindex="0">-->
<!--            <span class="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">-->
<!--             Notifications-->
<!--            </span>-->
<!--              </a>-->
<!--            </div>-->
<!--            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary">-->
<!--              <a class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" href="html/demo1/account/api-keys.html" tabindex="0">-->
<!--            <span class="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">-->
<!--             API Keys-->
<!--            </span>-->
<!--              </a>-->
<!--            </div>-->
<!--            <div class="menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary" data-menu-item-placement="bottom-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">-->
<!--              <div class="menu-link gap-1.5 pb-2 lg:pb-4 px-2" tabindex="0">-->
<!--            <span class="menu-title text-nowrap text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-medium menu-item-here:text-primary menu-item-here:font-medium menu-item-show:text-primary menu-link-hover:text-primary">-->
<!--             More-->
<!--            </span>-->
<!--                <span class="menu-arrow">-->
<!--             <i class="ki-filled ki-down text-2xs text-gray-500 menu-item-active:text-primary menu-item-here:text-primary menu-item-show:text-primary menu-link-hover:text-primary">-->
<!--             </i>-->
<!--            </span>-->
<!--              </div>-->
<!--              <div class="menu-dropdown menu-default py-2 min-w-[200px]">-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/appearance.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Appearance-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/invite-a-friend.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Invite a Friend-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--                <div class="menu-item">-->
<!--                  <a class="menu-link" href="html/demo1/account/activity.html" tabindex="0">-->
<!--              <span class="menu-title">-->
<!--               Activity-->
<!--              </span>-->
<!--                  </a>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    &lt;!&ndash; End of Container &ndash;&gt;-->
<!--  </div>-->
  <!-- Container -->
  <div class="container-fixed">
    <div class="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
      <div class="flex flex-col justify-center gap-2">
        <h1 class="text-xl font-medium leading-none text-gray-900">
          User Profile
        </h1>
        <div class="flex items-center gap-2 text-sm font-normal text-gray-700">
          Central Hub for Personal Customization
        </div>
      </div>
<!--      <div class="flex items-center gap-2.5">-->
<!--        <a class="btn btn-sm btn-light" href="#">-->
<!--          Public Profile-->
<!--        </a>-->
<!--        <a class="btn btn-sm btn-primary" href="#">-->
<!--          Account Settings-->
<!--        </a>-->
<!--      </div>-->
    </div>
  </div>
  <!-- End of Container -->
  <!-- Container -->
  <div class="container-fixed">
    <!-- begin: grid -->
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-7.5">
      <div class="col-span-1">
        <div class="grid gap-5 lg:gap-7.5">
          <div class="card pb-2.5">
            <div class="card-header" id="basic_settings">
              <h3 class="card-title">
                General Settings
              </h3>
              <div class="flex items-center gap-2">
                <label class="switch switch-sm">
                  <span class="switch-label">
                    Public Profile
                  </span>
                  <input name="check" type="checkbox" value="1" />
                </label>
              </div>
            </div>
            <div class="card-body grid gap-5">
              <div class="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                <label class="form-label max-w-56">
                  Photo
                </label>
                <div class="flex items-center justify-between flex-wrap grow gap-2.5">
                  <span class="text-2sm">
                    150x150px JPEG, PNG Image
                  </span>
                  <div class="image-input size-16" data-image-input="true">
                    <input accept=".png, .jpg, .jpeg" name="avatar" type="file"/>
                    <input name="avatar_remove" type="hidden"/>
                    <div class="btn btn-icon btn-icon-xs btn-light shadow-default absolute z-1 size-5 -top-0.5 -right-0.5 rounded-full" data-image-input-remove="" data-tooltip="#image_input_tooltip" data-tooltip-trigger="hover">
                      <i class="ki-filled ki-cross">
                      </i>
                    </div>
                    <span class="tooltip" id="image_input_tooltip">
                      Click to remove or revert
                    </span>
                    <div class="image-input-placeholder rounded-full border-2 border-success image-input-empty:border-gray-300" style="background-image:url(/media/avatars/blank.png)">
                      <div class="image-input-preview rounded-full" style="background-image:url(/media/avatars/300-2.png)"></div>
                      <div class="flex items-center justify-center cursor-pointer h-5 left-0 right-0 bottom-0 bg-dark-clarity absolute">
                        <svg class="fill-light opacity-80" height="12" viewbox="0 0 14 12" width="14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6665 2.64585H11.2232C11.0873 2.64749 10.9538 2.61053 10.8382 2.53928C10.7225 2.46803 10.6295 2.36541 10.5698 2.24335L10.0448 1.19918C9.91266 0.931853 9.70808 0.707007 9.45438 0.550249C9.20068 0.393491 8.90806 0.311121 8.60984 0.312517H5.38984C5.09162 0.311121 4.799 0.393491 4.5453 0.550249C4.2916 0.707007 4.08701 0.931853 3.95484 1.19918L3.42984 2.24335C3.37021 2.36541 3.27716 2.46803 3.1615 2.53928C3.04584 2.61053 2.91234 2.64749 2.7765 2.64585H2.33317C1.90772 2.64585 1.49969 2.81486 1.19885 3.1157C0.898014 3.41654 0.729004 3.82457 0.729004 4.25002V10.0834C0.729004 10.5088 0.898014 10.9168 1.19885 11.2177C1.49969 11.5185 1.90772 11.6875 2.33317 11.6875H11.6665C12.092 11.6875 12.5 11.5185 12.8008 11.2177C13.1017 10.9168 13.2707 10.5088 13.2707 10.0834V4.25002C13.2707 3.82457 13.1017 3.41654 12.8008 3.1157C12.5 2.81486 12.092 2.64585 11.6665 2.64585ZM6.99984 9.64585C6.39413 9.64585 5.80203 9.46624 5.2984 9.12973C4.79478 8.79321 4.40225 8.31492 4.17046 7.75532C3.93866 7.19572 3.87802 6.57995 3.99618 5.98589C4.11435 5.39182 4.40602 4.84613 4.83432 4.41784C5.26262 3.98954 5.80831 3.69786 6.40237 3.5797C6.99644 3.46153 7.61221 3.52218 8.1718 3.75397C8.7314 3.98576 9.2097 4.37829 9.54621 4.88192C9.88272 5.38554 10.0623 5.97765 10.0623 6.58335C10.0608 7.3951 9.73765 8.17317 9.16365 8.74716C8.58965 9.32116 7.81159 9.64431 6.99984 9.64585Z" fill="">
                          </path>
                          <path d="M7 8.77087C8.20812 8.77087 9.1875 7.7915 9.1875 6.58337C9.1875 5.37525 8.20812 4.39587 7 4.39587C5.79188 4.39587 4.8125 5.37525 4.8125 6.58337C4.8125 7.7915 5.79188 8.77087 7 8.77087Z" fill="">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                <label class="form-label max-w-56">
                  Name
                </label>
                <input class="input" type="text" value="Jason Tatum"/>
              </div>
              <div class="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                <label class="form-label max-w-56">
                  Phone number
                </label>
                <input class="input" placeholder="Phone number" type="text" value=""/>
              </div>
              <div class="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                <label class="form-label max-w-56">
                  Email
                </label>
                <input class="input" type="text" value="jason@studio.io"/>
              </div>
              <div class="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                <label class="form-label max-w-56">
                  Address
                </label>
                <input class="input" placeholder="" type="text" value="Avinguda Imaginària, 789"/>
              </div>
              <div class="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                <label class="form-label max-w-56">
                  Country
                </label>
                <select class="select">
                  <option>
                    Spain
                  </option>
                  <option>
                    Option 2
                  </option>
                  <option>
                    Option 3
                  </option>
                </select>
              </div>
              <div class="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                <label class="form-label max-w-56">
                  State
                </label>
                <input class="input" placeholder="State" type="text" value=""/>
              </div>
              <div class="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
                <label class="form-label max-w-56">
                  City
                </label>
                <input class="input" type="text" value="Barcelona"/>
              </div>
              <div class="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 mb-2.5">
                <label class="form-label max-w-56">
                  Postcode
                </label>
                <input class="input" type="text" value="08012"/>
              </div>
              <div class="flex justify-end">
                <button class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="delete_account">
              <h3 class="card-title">
                Delete Account
              </h3>
            </div>
            <div class="card-body lg:py-7.5 lg:gap-7.5 gap-5">
              <div class="flex flex-col gap-5">
                <div class="text-2sm text-gray-800">
                  We regret to see you leave. Confirm account deletion below. Your data will be permanently removed. Thank you for being part of our
                  community. Please check our
                  <a class="link" href="#">
                    Setup Guidelines
                  </a>
                  if you still wish continue.
                </div>
                <label class="checkbox-group">
                  <input class="checkbox checkbox-sm" name="delete" type="checkbox" value="1" />
                  <span class="checkbox-label">
                    Confirm deleting account
                  </span>
                </label>
              </div>
              <div class="flex justify-end gap-2.5">
                <button class="btn btn-light">
                  Deactivate Instead
                </button>
                <button class="btn btn-danger">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--      <div class="col-span-1">-->
<!--        <div class="grid gap-5 lg:gap-7.5">-->
<!--          <div class="card min-w-full">-->
<!--            <div class="card-header">-->
<!--              <h3 class="card-title">-->
<!--                Personal Info-->
<!--              </h3>-->
<!--            </div>-->
<!--            <div class="card-table scrollable-x-auto pb-3">-->
<!--              <table class="table align-middle text-sm text-gray-500">-->
<!--                <tr>-->
<!--                  <td class="py-2 min-w-28 text-gray-600 font-normal">-->
<!--                    Photo-->
<!--                  </td>-->
<!--                  <td class="py-2 text-gray700 font-normal min-w-32 text-2sm">-->
<!--                    150x150px JPEG, PNG Image-->
<!--                  </td>-->
<!--                  <td class="py-2 text-center">-->
<!--                    <div class="flex justify-center items-center">-->
<!--                      <div class="image-input size-16" data-image-input="true">-->
<!--                        <input accept=".png, .jpg, .jpeg" name="avatar" type="file">-->
<!--                        <input name="avatar_remove" type="hidden">-->
<!--                        <div class="btn btn-icon btn-icon-xs btn-light shadow-default absolute z-1 size-5 -top-0.5 -right-0.5 rounded-full" data-image-input-remove="" data-tooltip="#image_input_tooltip" data-tooltip-trigger="hover">-->
<!--                          <i class="ki-filled ki-cross">-->
<!--                          </i>-->
<!--                        </div>-->
<!--                        <span class="tooltip" id="image_input_tooltip">-->
<!--                   Click to remove or revert-->
<!--                  </span>-->
<!--                        <div class="image-input-placeholder rounded-full border-2 border-success image-input-empty:border-gray-300" style="background-image:url(/media/avatars/blank.png)">-->
<!--                          <div class="image-input-preview rounded-full" style="background-image:url(/media/avatars/300-2.png)">-->
<!--                          </div>-->
<!--                          <div class="flex items-center justify-center cursor-pointer h-5 left-0 right-0 bottom-0 bg-dark-clarity absolute">-->
<!--                            <svg class="fill-light opacity-80" height="12" viewbox="0 0 14 12" width="14" xmlns="http://www.w3.org/2000/svg">-->
<!--                              <path d="M11.6665 2.64585H11.2232C11.0873 2.64749 10.9538 2.61053 10.8382 2.53928C10.7225 2.46803 10.6295 2.36541 10.5698 2.24335L10.0448 1.19918C9.91266 0.931853 9.70808 0.707007 9.45438 0.550249C9.20068 0.393491 8.90806 0.311121 8.60984 0.312517H5.38984C5.09162 0.311121 4.799 0.393491 4.5453 0.550249C4.2916 0.707007 4.08701 0.931853 3.95484 1.19918L3.42984 2.24335C3.37021 2.36541 3.27716 2.46803 3.1615 2.53928C3.04584 2.61053 2.91234 2.64749 2.7765 2.64585H2.33317C1.90772 2.64585 1.49969 2.81486 1.19885 3.1157C0.898014 3.41654 0.729004 3.82457 0.729004 4.25002V10.0834C0.729004 10.5088 0.898014 10.9168 1.19885 11.2177C1.49969 11.5185 1.90772 11.6875 2.33317 11.6875H11.6665C12.092 11.6875 12.5 11.5185 12.8008 11.2177C13.1017 10.9168 13.2707 10.5088 13.2707 10.0834V4.25002C13.2707 3.82457 13.1017 3.41654 12.8008 3.1157C12.5 2.81486 12.092 2.64585 11.6665 2.64585ZM6.99984 9.64585C6.39413 9.64585 5.80203 9.46624 5.2984 9.12973C4.79478 8.79321 4.40225 8.31492 4.17046 7.75532C3.93866 7.19572 3.87802 6.57995 3.99618 5.98589C4.11435 5.39182 4.40602 4.84613 4.83432 4.41784C5.26262 3.98954 5.80831 3.69786 6.40237 3.5797C6.99644 3.46153 7.61221 3.52218 8.1718 3.75397C8.7314 3.98576 9.2097 4.37829 9.54621 4.88192C9.88272 5.38554 10.0623 5.97765 10.0623 6.58335C10.0608 7.3951 9.73765 8.17317 9.16365 8.74716C8.58965 9.32116 7.81159 9.64431 6.99984 9.64585Z" fill="">-->
<!--                              </path>-->
<!--                              <path d="M7 8.77087C8.20812 8.77087 9.1875 7.7915 9.1875 6.58337C9.1875 5.37525 8.20812 4.39587 7 4.39587C5.79188 4.39587 4.8125 5.37525 4.8125 6.58337C4.8125 7.7915 5.79188 8.77087 7 8.77087Z" fill="">-->
<!--                              </path>-->
<!--                            </svg>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                        </input>-->
<!--                        </input>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="py-2 text-gray-600 font-normal">-->
<!--                    Name-->
<!--                  </td>-->
<!--                  <td class="py-2 text-gray-800 font-normaltext-sm">-->
<!--                    Jason Tatum-->
<!--                  </td>-->
<!--                  <td class="py-2 text-center">-->
<!--                    <a class="btn btn-sm btn-icon btn-clear btn-primary" href="#">-->
<!--                      <i class="ki-filled ki-notepad-edit">-->
<!--                      </i>-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="py-3 text-gray-600 font-normal">-->
<!--                    Availability-->
<!--                  </td>-->
<!--                  <td class="py-3 text-gray-800 font-normal">-->
<!--              <span class="badge badge-sm badge-outline badge-success">-->
<!--               Available now-->
<!--              </span>-->
<!--                  </td>-->
<!--                  <td class="py-3 text-center">-->
<!--                    <a class="btn btn-sm btn-icon btn-clear btn-primary" href="#">-->
<!--                      <i class="ki-filled ki-notepad-edit">-->
<!--                      </i>-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="py-3 text-gray-600 font-normal">-->
<!--                    Birthday-->
<!--                  </td>-->
<!--                  <td class="py-3 text-gray-700 text-sm font-normal">-->
<!--                    28 May 1996-->
<!--                  </td>-->
<!--                  <td class="py-3 text-center">-->
<!--                    <a class="btn btn-sm btn-icon btn-clear btn-primary" href="#">-->
<!--                      <i class="ki-filled ki-notepad-edit">-->
<!--                      </i>-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="py-3 text-gray-600 font-normal">-->
<!--                    Gender-->
<!--                  </td>-->
<!--                  <td class="py-3 text-gray-700 text-sm font-normal">-->
<!--                    Male-->
<!--                  </td>-->
<!--                  <td class="py-3 text-center">-->
<!--                    <a class="btn btn-sm btn-icon btn-clear btn-primary" href="#">-->
<!--                      <i class="ki-filled ki-notepad-edit">-->
<!--                      </i>-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="py-3">-->
<!--                    Address-->
<!--                  </td>-->
<!--                  <td class="py-3 text-gray-700 text-2sm font-normal">-->
<!--                    You have no an address yet-->
<!--                  </td>-->
<!--                  <td class="py-3 text-center">-->
<!--                    <a class="btn btn-link btn-sm" href="#">-->
<!--                      Add-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--              </table>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="card min-w-full">-->
<!--            <div class="card-header">-->
<!--              <h3 class="card-title">-->
<!--                Basic Settings-->
<!--              </h3>-->
<!--              <div class="flex items-center gap-2">-->
<!--                <label class="switch switch-sm">-->
<!--             <span class="switch-label">-->
<!--              Public Profile-->
<!--             </span>-->
<!--                  <input checked="" name="check" type="checkbox" value="1"/>-->
<!--                </label>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="card-table scrollable-x-auto pb-3">-->
<!--              <table class="table align-middle text-sm text-gray-500">-->
<!--                <tr>-->
<!--                  <td class="py-2 min-w-36 text-gray-600 font-normal">-->
<!--                    Email-->
<!--                  </td>-->
<!--                  <td class="py-2 min-w-60">-->
<!--                    <a class="text-gray-800 font-normal text-sm hover:text-primary-active" href="#">-->
<!--                      jasontt@studio.co-->
<!--                    </a>-->
<!--                  </td>-->
<!--                  <td class="py-2 max-w-16 text-right">-->
<!--                    <a class="btn btn-sm btn-icon btn-clear btn-primary" href="#">-->
<!--                      <i class="ki-filled ki-notepad-edit">-->
<!--                      </i>-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="py-2text-gray-600 font-normal">-->
<!--                    Password-->
<!--                  </td>-->
<!--                  <td class="py-2 text-gray-700 font-normal">-->
<!--                    Password last changed 2 months ago-->
<!--                  </td>-->
<!--                  <td class="py-2 text-right">-->
<!--                    <a class="btn btn-sm btn-icon btn-clear btn-primary" href="#">-->
<!--                      <i class="ki-filled ki-notepad-edit">-->
<!--                      </i>-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="py-3.5text-gray-600 font-normal">-->
<!--                    2FA-->
<!--                  </td>-->
<!--                  <td class="py-3.5 text-gray-700 font-normal">-->
<!--                    To be set-->
<!--                  </td>-->
<!--                  <td class="py-3 text-right">-->
<!--                    <a class="btn btn-link btn-sm" href="#">-->
<!--                      Setup-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="py-2text-gray-600 font-normal">-->
<!--                    Sign-in with-->
<!--                  </td>-->
<!--                  <td class="py-0.5">-->
<!--                    <div class="flex items-center gap-2.5">-->
<!--                      <a class="flex items-center justify-center size-8 bg-light rounded-full border border-gray-300" href="#">-->
<!--                        <img alt="" class="size-4" src="/media/brand-logos/google.svg"/>-->
<!--                      </a>-->
<!--                      <a class="flex items-center justify-center size-8 bg-light rounded-full border border-gray-300" href="#">-->
<!--                        <img alt="" class="size-4" src="/media/brand-logos/facebook.svg"/>-->
<!--                      </a>-->
<!--                      <a class="flex items-center justify-center size-8 bg-light rounded-full border border-gray-300" href="#">-->
<!--                        <img alt="product logo" class="dark:hidden h-4" src="/media/brand-logos/apple-black.svg"/>-->
<!--                        <img alt="product logo" class="light:hidden h-4" src="/media/brand-logos/apple-white.svg"/>-->
<!--                      </a>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td class="py-2 text-right">-->
<!--                    <a class="btn btn-sm btn-icon btn-clear btn-primary" href="#">-->
<!--                      <i class="ki-filled ki-notepad-edit">-->
<!--                      </i>-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="py-3text-gray-600 font-normal">-->
<!--                    Team Account-->
<!--                  </td>-->
<!--                  <td class="py-3 text-gray-700 font-normal">-->
<!--                    To be set-->
<!--                  </td>-->
<!--                  <td class="py-3 text-right">-->
<!--                    <a class="btn btn-link btn-sm" href="#">-->
<!--                      Setup-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="py-2 text-gray-600 font-normal">-->
<!--                    Social Profiles-->
<!--                  </td>-->
<!--                  <td class="py-0.5">-->
<!--                    <div class="flex items-center gap-2.5">-->
<!--                      <a class="flex items-center justify-center size-8 bg-light rounded-full border border-gray-300" href="#">-->
<!--                        <img alt="" class="size-4" src="/media/brand-logos/linkedin.svg"/>-->
<!--                      </a>-->
<!--                      <a class="flex items-center justify-center size-8 bg-light rounded-full border border-gray-300" href="#">-->
<!--                        <img alt="" class="size-4" src="/media/brand-logos/twitch-purple.svg"/>-->
<!--                      </a>-->
<!--                      <a class="flex items-center justify-center size-8 bg-light rounded-full border border-gray-300" href="#">-->
<!--                        <img alt="" class="dark:hidden size-4" src="/media/brand-logos/x.svg"/>-->
<!--                        <img alt="" class="light:hidden size-4" src="/media/brand-logos/x-dark.svg"/>-->
<!--                      </a>-->
<!--                      <a class="flex items-center justify-center size-8 bg-light rounded-full border border-gray-300" href="#">-->
<!--                        <img alt="" class="size-4" src="/media/brand-logos/dribbble.svg"/>-->
<!--                      </a>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td class="py-2 text-right">-->
<!--                    <a class="btn btn-sm btn-icon btn-clear btn-primary" href="#">-->
<!--                      <i class="ki-filled ki-notepad-edit">-->
<!--                      </i>-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="py-3 text-gray-600 text-sm font-normal">-->
<!--                    Referral Link-->
<!--                  </td>-->
<!--                  <td class="py-3 text-gray-700 text-2sm font-normal">-->
<!--                    <div class="flex items-center gap-0.5">-->
<!--                      <a class="text-gray-800 text-sm hover:text-primary-active" href="#">-->
<!--                        https://studio.co/W3gvQOI35dt-->
<!--                      </a>-->
<!--                      <button class="btn btn-xs btn-light btn-clear btn-icon">-->
<!--                        <i class="ki-filled ki-copy text-gray-500 text-sm">-->
<!--                        </i>-->
<!--                      </button>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td class="py-3 text-right">-->
<!--                    <a class="btn btn-link btn-sm" href="#">-->
<!--                      Re-create-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--              </table>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="card min-w-full">-->
<!--            <div class="card-header">-->
<!--              <h3 class="card-title">-->
<!--                Work-->
<!--              </h3>-->
<!--              <div class="flex items-center gap-2">-->
<!--                <label class="switch">-->
<!--             <span class="switch-label">-->
<!--              Available now-->
<!--             </span>-->
<!--                  <input name="check" type="checkbox" value="1"/>-->
<!--                </label>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="card-table scrollable-x-auto pb-3">-->
<!--              <table class="table align-middle text-sm text-gray-500">-->
<!--                <tr>-->
<!--                  <td class="py-2 min-w-36text-gray-600 font-normal">-->
<!--                    Language-->
<!--                  </td>-->
<!--                  <td class="py-2 min-w-72 w-full text-gray-800 font-normal">-->
<!--                    English-->
<!--                    <span class="text-gray-600 font-normal">-->
<!--               -Fluent-->
<!--              </span>-->
<!--                  </td>-->
<!--                  <td class="py-2 text-right min-w-24">-->
<!--                    <a class="btn btn-sm btn-icon btn-clear btn-primary" href="#">-->
<!--                      <i class="ki-filled ki-notepad-edit">-->
<!--                      </i>-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="py-2 text-gray-600 font-normal">-->
<!--                    Hourly Rate-->
<!--                  </td>-->
<!--                  <td class="py-2 text-gray-800 font-normal">-->
<!--                    $28 / hour-->
<!--                  </td>-->
<!--                  <td class="py-2 text-right">-->
<!--                    <a class="btn btn-sm btn-icon btn-clear btn-primary" href="#">-->
<!--                      <i class="ki-filled ki-notepad-edit">-->
<!--                      </i>-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="py-2text-gray-600 font-normal">-->
<!--                    Avaibilaty-->
<!--                  </td>-->
<!--                  <td class="py-2 text-gray-800 font-normal">-->
<!--                    32 hours a week-->
<!--                  </td>-->
<!--                  <td class="py-2 text-right">-->
<!--                    <a class="btn btn-sm btn-icon btn-clear btn-primary" href="#">-->
<!--                      <i class="ki-filled ki-notepad-edit">-->
<!--                      </i>-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="py-3 text-gray-600 font-normal">-->
<!--                    Skills-->
<!--                  </td>-->
<!--                  <td class="py-3 text-gray-700">-->
<!--                    <div class="flex flex-wrap gap-2.5">-->
<!--               <span class="badge badge-sm badge-gray-200">-->
<!--                Web Design-->
<!--               </span>-->
<!--                      <span class="badge badge-sm badge-gray-200">-->
<!--                Code Review-->
<!--               </span>-->
<!--                      <span class="badge badge-sm badge-gray-200">-->
<!--                noCode-->
<!--               </span>-->
<!--                      <span class="badge badge-sm badge-gray-200">-->
<!--                UX-->
<!--               </span>-->
<!--                      <span class="badge badge-sm badge-gray-200">-->
<!--                Figma-->
<!--               </span>-->
<!--                      <span class="badge badge-sm badge-gray-200">-->
<!--                Webflow-->
<!--               </span>-->
<!--                      <span class="badge badge-sm badge-gray-200">-->
<!--                AI-->
<!--               </span>-->
<!--                      <span class="badge badge-sm badge-gray-200">-->
<!--                Management-->
<!--               </span>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td class="py-3 text-right">-->
<!--                    <a class="btn btn-sm btn-icon btn-clear btn-primary" href="#">-->
<!--                      <i class="ki-filled ki-notepad-edit">-->
<!--                      </i>-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td class="py-4 text-gray-600 font-normal">-->
<!--                    About-->
<!--                  </td>-->
<!--                  <td class="py-4 text-gray-800 font-normal">-->
<!--                    We're open to partnerships, guest posts, and-->
<!--                    <br/>-->
<!--                    more. Join us to share your insights and grow-->
<!--                    <br/>-->
<!--                    your audience.-->
<!--                  </td>-->
<!--                  <td class="py-4 text-right">-->
<!--                    <a class="btn btn-sm btn-icon btn-clear btn-primary" href="#">-->
<!--                      <i class="ki-filled ki-notepad-edit">-->
<!--                      </i>-->
<!--                    </a>-->
<!--                  </td>-->
<!--                </tr>-->
<!--              </table>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="card">-->
<!--            <div class="card-header gap-2">-->
<!--              <h3 class="card-title">-->
<!--                Badges-->
<!--              </h3>-->
<!--              <div class="btn btn-sm btn-icon btn-icon-lg text-gray-500 hover:text-primary-active">-->
<!--                <i class="ki-filled ki-information-2">-->
<!--                </i>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="card-body pb-7.5">-->
<!--              <div class="grid gap-2.5">-->
<!--                <div class="flex items-center justify-between flex-wrap group border border-gray-200 rounded-xl gap-2 px-3.5 py-2.5">-->
<!--                  <div class="flex items-center flex-wrap gap-2.5">-->
<!--                    <div class="relative size-[50px] shrink-0">-->
<!--                      <svg class="w-full h-full stroke-primary-clarity fill-primary-light" fill="none" height="48" viewbox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">-->
<!--                        <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506-->
<!--			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937-->
<!--			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">-->
<!--                        </path>-->
<!--                        <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506-->
<!--			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937-->
<!--			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">-->
<!--                        </path>-->
<!--                      </svg>-->
<!--                      <div class="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">-->
<!--                        <i class="ki-filled ki-abstract-39 text-1.5xl ps-px text-primary">-->
<!--                        </i>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <span class="text-gray-900 text-sm font-medium">-->
<!--               Expert Contributor Badge-->
<!--              </span>-->
<!--                  </div>-->
<!--                  <div class="btn btn-sm btn-icon text-gray-300 group-hover:text-primary-active">-->
<!--                    <svg class="size-6" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--                      <rect fill="currentColor" height="3" rx="1.5" width="18" x="3" y="14.5">-->
<!--                      </rect>-->
<!--                      <rect fill="currentColor" height="3" rx="1.5" width="18" x="3" y="6.5">-->
<!--                      </rect>-->
<!--                    </svg>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="flex items-center justify-between flex-wrap group border border-gray-200 rounded-xl gap-2 px-3.5 py-2.5">-->
<!--                  <div class="flex items-center flex-wrap gap-2.5">-->
<!--                    <div class="relative size-[50px] shrink-0">-->
<!--                      <svg class="w-full h-full stroke-brand-clarity fill-brand-light" fill="none" height="48" viewbox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">-->
<!--                        <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506-->
<!--			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937-->
<!--			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">-->
<!--                        </path>-->
<!--                        <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506-->
<!--			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937-->
<!--			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">-->
<!--                        </path>-->
<!--                      </svg>-->
<!--                      <div class="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">-->
<!--                        <i class="ki-filled ki-abstract-44 text-1.5xl ps-px text-brand">-->
<!--                        </i>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <span class="text-gray-900 text-sm font-medium">-->
<!--               Innovation Trailblazer-->
<!--              </span>-->
<!--                  </div>-->
<!--                  <div class="btn btn-sm btn-icon text-gray-300 group-hover:text-primary-active">-->
<!--                    <svg class="size-6" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--                      <rect fill="currentColor" height="3" rx="1.5" width="18" x="3" y="14.5">-->
<!--                      </rect>-->
<!--                      <rect fill="currentColor" height="3" rx="1.5" width="18" x="3" y="6.5">-->
<!--                      </rect>-->
<!--                    </svg>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="flex items-center justify-between flex-wrap group border border-gray-200 rounded-xl gap-2 px-3.5 py-2.5">-->
<!--                  <div class="flex items-center flex-wrap gap-2.5">-->
<!--                    <div class="relative size-[50px] shrink-0">-->
<!--                      <svg class="w-full h-full stroke-success-clarity fill-success-light" fill="none" height="48" viewbox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">-->
<!--                        <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506-->
<!--			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937-->
<!--			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">-->
<!--                        </path>-->
<!--                        <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506-->
<!--			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937-->
<!--			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">-->
<!--                        </path>-->
<!--                      </svg>-->
<!--                      <div class="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">-->
<!--                        <i class="ki-filled ki-abstract-25 text-1.5xl ps-px text-success">-->
<!--                        </i>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <span class="text-gray-900 text-sm font-medium">-->
<!--               Impact Recognition-->
<!--              </span>-->
<!--                  </div>-->
<!--                  <div class="btn btn-sm btn-icon text-gray-300 group-hover:text-primary-active">-->
<!--                    <svg class="size-6" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--                      <rect fill="currentColor" height="3" rx="1.5" width="18" x="3" y="14.5">-->
<!--                      </rect>-->
<!--                      <rect fill="currentColor" height="3" rx="1.5" width="18" x="3" y="6.5">-->
<!--                      </rect>-->
<!--                    </svg>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="flex items-center justify-between flex-wrap group border border-gray-200 rounded-xl gap-2 px-3.5 py-2.5">-->
<!--                  <div class="flex items-center flex-wrap gap-2.5">-->
<!--                    <div class="relative size-[50px] shrink-0">-->
<!--                      <svg class="w-full h-full stroke-info-clarity fill-info-light" fill="none" height="48" viewbox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">-->
<!--                        <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506-->
<!--			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937-->
<!--			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">-->
<!--                        </path>-->
<!--                        <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506-->
<!--			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937-->
<!--			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">-->
<!--                        </path>-->
<!--                      </svg>-->
<!--                      <div class="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">-->
<!--                        <i class="ki-filled ki-delivery-24 text-1.5xl ps-px text-info">-->
<!--                        </i>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <span class="text-gray-900 text-sm font-medium">-->
<!--               Performance Honor-->
<!--              </span>-->
<!--                  </div>-->
<!--                  <div class="btn btn-sm btn-icon text-gray-300 group-hover:text-primary-active">-->
<!--                    <svg class="size-6" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--                      <rect fill="currentColor" height="3" rx="1.5" width="18" x="3" y="14.5">-->
<!--                      </rect>-->
<!--                      <rect fill="currentColor" height="3" rx="1.5" width="18" x="3" y="6.5">-->
<!--                      </rect>-->
<!--                    </svg>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="col-span-1">-->
<!--        <div class="grid gap-5 lg:gap-7.5">-->
<!--          <div class="card flex-col gap-5 justify-between bg-[center_top_1.3rem] bg-no-repeat pt-5 lg:pt-10 px-5 start-now-bg bg-[length:700px]">-->
<!--            <div class="text-center">-->
<!--              <h3 class="text-gray-900 text-lg font-semibold leading-6 mb-1.5">-->
<!--                Individually Tailored-->
<!--                <br/>-->
<!--                Deals for Personal Satisfaction-->
<!--              </h3>-->
<!--              <span class="text-gray-700 text-sm block mb-5">-->
<!--            Discover promotions crafted to match your preferences.-->
<!--           </span>-->
<!--              <a class="btn btn-dark btn-sm" href="html/demo1/network/user-table/visitors.html">-->
<!--                Start Now-->
<!--              </a>-->
<!--            </div>-->
<!--            <div class="text-center">-->
<!--              <img alt="" class="dark:hidden max-h-[300px]" src="/media/images/2600x1200/3.png"/>-->
<!--              <img alt="" class="light:hidden max-h-[300px]" src="/media/images/2600x1200/3-dark.png"/>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="card">-->
<!--            <div class="card-header">-->
<!--              <h3 class="card-title">-->
<!--                Calendar Accounts-->
<!--                <span class="text-gray-600 font-medium text-2sm">-->
<!--             1/5-->
<!--            </span>-->
<!--              </h3>-->
<!--              <button class="btn btn-light btn-sm">-->
<!--                <i class="ki-filled ki-calendar-remove">-->
<!--                </i>-->
<!--                Add New-->
<!--              </button>-->
<!--            </div>-->
<!--            <div class="card-body">-->
<!--              <div class="grid gap-2.5">-->
<!--                <div class="flex items-center justify-between flex-wrap border border-gray-200 rounded-xl gap-2 px-3.5 py-2.5">-->
<!--                  <div class="flex items-center flex-wrap gap-3.5">-->
<!--                    <img alt="" class="size-6 shrink-0" src="/media/brand-logos/google-calendar.svg"/>-->
<!--                    <div class="flex flex-col">-->
<!--                      <a class="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">-->
<!--                        Google-->
<!--                      </a>-->
<!--                      <a class="text-2sm text-gray-700 hover:text-primary-active" href="#">-->
<!--                        jasontt@studio.co-->
<!--                      </a>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="btn btn-sm btn-icon btn-clear btn-light">-->
<!--                    <i class="ki-filled ki-trash">-->
<!--                    </i>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="flex items-center justify-between flex-wrap border border-gray-200 rounded-xl gap-2 px-3.5 py-2.5">-->
<!--                  <div class="flex items-center flex-wrap gap-3.5">-->
<!--                    <img alt="" class="size-6 shrink-0" src="/media/brand-logos/monday.svg"/>-->
<!--                    <div class="flex flex-col">-->
<!--                      <a class="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">-->
<!--                        Monday-->
<!--                      </a>-->
<!--                      <a class="text-2sm text-gray-700 hover:text-primary-active" href="#">-->
<!--                        jasontatum@keenthemes.com-->
<!--                      </a>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="btn btn-sm btn-icon btn-clear btn-light">-->
<!--                    <i class="ki-filled ki-trash">-->
<!--                    </i>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="card min-w-full">-->
<!--            <div class="card-header">-->
<!--              <h3 class="card-title">-->
<!--                Connections-->
<!--              </h3>-->
<!--              <div class="menu" data-menu="true">-->
<!--                <div class="menu-item" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">-->
<!--                  <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">-->
<!--                    <i class="ki-filled ki-dots-vertical">-->
<!--                    </i>-->
<!--                  </button>-->
<!--                  <div class="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">-->
<!--                    <div class="menu-item">-->
<!--                      <a class="menu-link" href="html/demo1/account/home/settings-plain.html">-->
<!--                <span class="menu-icon">-->
<!--                 <i class="ki-filled ki-add-files">-->
<!--                 </i>-->
<!--                </span>-->
<!--                        <span class="menu-title">-->
<!--                 Add-->
<!--                </span>-->
<!--                      </a>-->
<!--                    </div>-->
<!--                    <div class="menu-item">-->
<!--                      <a class="menu-link" href="html/demo1/account/members/import-members.html">-->
<!--                <span class="menu-icon">-->
<!--                 <i class="ki-filled ki-file-down">-->
<!--                 </i>-->
<!--                </span>-->
<!--                        <span class="menu-title">-->
<!--                 Import-->
<!--                </span>-->
<!--                      </a>-->
<!--                    </div>-->
<!--                    <div class="menu-item" data-menu-item-offset="-15px, 0" data-menu-item-placement="right-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">-->
<!--                      <div class="menu-link">-->
<!--                <span class="menu-icon">-->
<!--                 <i class="ki-filled ki-file-up">-->
<!--                 </i>-->
<!--                </span>-->
<!--                        <span class="menu-title">-->
<!--                 Export-->
<!--                </span>-->
<!--                        <span class="menu-arrow">-->
<!--                 <i class="ki-filled ki-right text-3xs">-->
<!--                 </i>-->
<!--                </span>-->
<!--                      </div>-->
<!--                      <div class="menu-dropdown menu-default w-full max-w-[125px]">-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" href="html/demo1/account/home/settings-sidebar.html">-->
<!--                  <span class="menu-title">-->
<!--                   PDF-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" href="html/demo1/account/home/settings-sidebar.html">-->
<!--                  <span class="menu-title">-->
<!--                   CVS-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" href="html/demo1/account/home/settings-sidebar.html">-->
<!--                  <span class="menu-title">-->
<!--                   Excel-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="menu-item">-->
<!--                      <a class="menu-link" href="html/demo1/account/security/privacy-settings.html">-->
<!--                <span class="menu-icon">-->
<!--                 <i class="ki-filled ki-setting-3">-->
<!--                 </i>-->
<!--                </span>-->
<!--                        <span class="menu-title">-->
<!--                 Settings-->
<!--                </span>-->
<!--                      </a>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="card-table scrollable-x-auto">-->
<!--              <div class="scrollable-auto">-->
<!--                <table class="table align-middle text-2sm text-gray-600">-->
<!--                  <tr class="bg-gray-100">-->
<!--                    <th class="text-start font-normal min-w-48 py-2.5">-->
<!--                      Name-->
<!--                    </th>-->
<!--                    <th class="text-right font-normal min-w-20 py-2.5">-->
<!--                      Joint Links-->
<!--                    </th>-->
<!--                    <th class="text-right font-normal min-w-20 py-2.5">-->
<!--                      Status-->
<!--                    </th>-->
<!--                    <th class="min-w-16">-->
<!--                    </th>-->
<!--                  </tr>-->
<!--                  <tr>-->
<!--                    <td>-->
<!--                      <div class="flex items-center grow gap-2.5">-->
<!--                        <img alt="" class="rounded-full size-9 shrink-0" src="/media/avatars/300-3.png"/>-->
<!--                        <div class="flex flex-col gap-1">-->
<!--                          <a class="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="html/demo1/public-profile/profiles/creator.html">-->
<!--                            Tyler Hero-->
<!--                          </a>-->
<!--                          <span class="text-xs font-normal text-gray-700 leading-3">-->
<!--                  26 connections-->
<!--                 </span>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </td>-->
<!--                    <td class="py-2 text-right">-->
<!--                      6-->
<!--                    </td>-->
<!--                    <td class="py-2 text-right">-->
<!--                      <button class="btn btn-xs btn-icon btn-primary btn-outline rounded-full active">-->
<!--                        <i class="ki-filled ki-check">-->
<!--                        </i>-->
<!--                      </button>-->
<!--                    </td>-->
<!--                    <td class="text-right">-->
<!--                      <div class="menu inline-flex" data-menu="true">-->
<!--                        <div class="menu-item" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">-->
<!--                          <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">-->
<!--                            <i class="ki-filled ki-dots-vertical">-->
<!--                            </i>-->
<!--                          </button>-->
<!--                          <div class="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-search-list">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     View-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-file-up">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Export-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-separator">-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-pencil">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Edit-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-copy">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Make a copy-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-separator">-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-trash">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Remove-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </td>-->
<!--                  </tr>-->
<!--                  <tr>-->
<!--                    <td>-->
<!--                      <div class="flex items-center grow gap-2.5">-->
<!--                        <img alt="" class="rounded-full size-9 shrink-0" src="/media/avatars/300-1.png"/>-->
<!--                        <div class="flex flex-col gap-1">-->
<!--                          <a class="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="html/demo1/public-profile/profiles/creator.html">-->
<!--                            Esther Howard-->
<!--                          </a>-->
<!--                          <span class="text-xs font-normal text-gray-700 leading-3">-->
<!--                  639 connections-->
<!--                 </span>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </td>-->
<!--                    <td class="py-2 text-right">-->
<!--                      none-->
<!--                    </td>-->
<!--                    <td class="py-2 text-right">-->
<!--                      <button class="btn btn-xs btn-icon btn-primary btn-outline rounded-full">-->
<!--                        <i class="ki-filled ki-plus">-->
<!--                        </i>-->
<!--                      </button>-->
<!--                    </td>-->
<!--                    <td class="text-right">-->
<!--                      <div class="menu inline-flex" data-menu="true">-->
<!--                        <div class="menu-item" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">-->
<!--                          <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">-->
<!--                            <i class="ki-filled ki-dots-vertical">-->
<!--                            </i>-->
<!--                          </button>-->
<!--                          <div class="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-search-list">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     View-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-file-up">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Export-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-separator">-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-pencil">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Edit-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-copy">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Make a copy-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-separator">-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-trash">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Remove-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </td>-->
<!--                  </tr>-->
<!--                  <tr>-->
<!--                    <td>-->
<!--                      <div class="flex items-center grow gap-2.5">-->
<!--                        <img alt="" class="rounded-full size-9 shrink-0" src="/media/avatars/300-11.png"/>-->
<!--                        <div class="flex flex-col gap-1">-->
<!--                          <a class="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="html/demo1/public-profile/profiles/creator.html">-->
<!--                            Jacob Jones-->
<!--                          </a>-->
<!--                          <span class="text-xs font-normal text-gray-700 leading-3">-->
<!--                  125 connections-->
<!--                 </span>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </td>-->
<!--                    <td class="py-2 text-right">-->
<!--                      19-->
<!--                    </td>-->
<!--                    <td class="py-2 text-right">-->
<!--                      <button class="btn btn-xs btn-icon btn-primary btn-outline rounded-full">-->
<!--                        <i class="ki-filled ki-plus">-->
<!--                        </i>-->
<!--                      </button>-->
<!--                    </td>-->
<!--                    <td class="text-right">-->
<!--                      <div class="menu inline-flex" data-menu="true">-->
<!--                        <div class="menu-item" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">-->
<!--                          <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">-->
<!--                            <i class="ki-filled ki-dots-vertical">-->
<!--                            </i>-->
<!--                          </button>-->
<!--                          <div class="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-search-list">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     View-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-file-up">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Export-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-separator">-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-pencil">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Edit-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-copy">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Make a copy-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-separator">-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-trash">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Remove-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </td>-->
<!--                  </tr>-->
<!--                  <tr>-->
<!--                    <td>-->
<!--                      <div class="flex items-center grow gap-2.5">-->
<!--                        <img alt="" class="rounded-full size-9 shrink-0" src="/media/avatars/300-2.png"/>-->
<!--                        <div class="flex flex-col gap-1">-->
<!--                          <a class="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="html/demo1/public-profile/profiles/creator.html">-->
<!--                            Cody Fisher-->
<!--                          </a>-->
<!--                          <span class="text-xs font-normal text-gray-700 leading-3">-->
<!--                  81 connections-->
<!--                 </span>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </td>-->
<!--                    <td class="py-2 text-right">-->
<!--                      none-->
<!--                    </td>-->
<!--                    <td class="py-2 text-right">-->
<!--                      <button class="btn btn-xs btn-icon btn-primary btn-outline rounded-full active">-->
<!--                        <i class="ki-filled ki-check">-->
<!--                        </i>-->
<!--                      </button>-->
<!--                    </td>-->
<!--                    <td class="text-right">-->
<!--                      <div class="menu inline-flex" data-menu="true">-->
<!--                        <div class="menu-item" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">-->
<!--                          <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">-->
<!--                            <i class="ki-filled ki-dots-vertical">-->
<!--                            </i>-->
<!--                          </button>-->
<!--                          <div class="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-search-list">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     View-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-file-up">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Export-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-separator">-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-pencil">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Edit-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-copy">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Make a copy-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-separator">-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-trash">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Remove-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </td>-->
<!--                  </tr>-->
<!--                  <tr>-->
<!--                    <td>-->
<!--                      <div class="flex items-center grow gap-2.5">-->
<!--                        <img alt="" class="rounded-full size-9 shrink-0" src="/media/avatars/300-5.png"/>-->
<!--                        <div class="flex flex-col gap-1">-->
<!--                          <a class="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="html/demo1/public-profile/profiles/creator.html">-->
<!--                            Leslie Alexander-->
<!--                          </a>-->
<!--                          <span class="text-xs font-normal text-gray-700 leading-3">-->
<!--                  1203 connections-->
<!--                 </span>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </td>-->
<!--                    <td class="py-2 text-right">-->
<!--                      2-->
<!--                    </td>-->
<!--                    <td class="py-2 text-right">-->
<!--                      <button class="btn btn-xs btn-icon btn-primary btn-outline rounded-full">-->
<!--                        <i class="ki-filled ki-plus">-->
<!--                        </i>-->
<!--                      </button>-->
<!--                    </td>-->
<!--                    <td class="text-right">-->
<!--                      <div class="menu inline-flex" data-menu="true">-->
<!--                        <div class="menu-item" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">-->
<!--                          <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">-->
<!--                            <i class="ki-filled ki-dots-vertical">-->
<!--                            </i>-->
<!--                          </button>-->
<!--                          <div class="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-search-list">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     View-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-file-up">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Export-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-separator">-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-pencil">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Edit-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-copy">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Make a copy-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-separator">-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-trash">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Remove-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </td>-->
<!--                  </tr>-->
<!--                  <tr>-->
<!--                    <td>-->
<!--                      <div class="flex items-center grow gap-2.5">-->
<!--                        <img alt="" class="rounded-full size-9 shrink-0" src="/media/avatars/300-9.png"/>-->
<!--                        <div class="flex flex-col gap-1">-->
<!--                          <a class="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="html/demo1/public-profile/profiles/creator.html">-->
<!--                            Guy Hawkins-->
<!--                          </a>-->
<!--                          <span class="text-xs font-normal text-gray-700 leading-3">-->
<!--                  2 connections-->
<!--                 </span>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </td>-->
<!--                    <td class="py-2 text-right">-->
<!--                      none-->
<!--                    </td>-->
<!--                    <td class="py-2 text-right">-->
<!--                      <button class="btn btn-xs btn-icon btn-primary btn-outline rounded-full active">-->
<!--                        <i class="ki-filled ki-check">-->
<!--                        </i>-->
<!--                      </button>-->
<!--                    </td>-->
<!--                    <td class="text-right">-->
<!--                      <div class="menu inline-flex" data-menu="true">-->
<!--                        <div class="menu-item" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">-->
<!--                          <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">-->
<!--                            <i class="ki-filled ki-dots-vertical">-->
<!--                            </i>-->
<!--                          </button>-->
<!--                          <div class="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-search-list">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     View-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-file-up">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Export-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-separator">-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-pencil">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Edit-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-copy">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Make a copy-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                            <div class="menu-separator">-->
<!--                            </div>-->
<!--                            <div class="menu-item">-->
<!--                              <a class="menu-link" href="#">-->
<!--                    <span class="menu-icon">-->
<!--                     <i class="ki-filled ki-trash">-->
<!--                     </i>-->
<!--                    </span>-->
<!--                                <span class="menu-title">-->
<!--                     Remove-->
<!--                    </span>-->
<!--                              </a>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </td>-->
<!--                  </tr>-->
<!--                </table>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="card-footer justify-center">-->
<!--              <a class="btn btn-link" href="">-->
<!--                View 64 more-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="card">-->
<!--            <div class="card-header">-->
<!--              <h3 class="card-title">-->
<!--                My Files-->
<!--              </h3>-->
<!--              <div class="menu" data-menu="true">-->
<!--                <div class="menu-item" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">-->
<!--                  <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">-->
<!--                    <i class="ki-filled ki-dots-vertical">-->
<!--                    </i>-->
<!--                  </button>-->
<!--                  <div class="menu-dropdown menu-default w-full max-w-[200px]" data-menu-dismiss="true">-->
<!--                    <div class="menu-item">-->
<!--                      <a class="menu-link" href="html/demo1/account/activity.html">-->
<!--                <span class="menu-icon">-->
<!--                 <i class="ki-filled ki-cloud-change">-->
<!--                 </i>-->
<!--                </span>-->
<!--                        <span class="menu-title">-->
<!--                 Activity-->
<!--                </span>-->
<!--                      </a>-->
<!--                    </div>-->
<!--                    <div class="menu-item">-->
<!--                      <a class="menu-link" data-modal-toggle="#share_profile_modal" href="#">-->
<!--                <span class="menu-icon">-->
<!--                 <i class="ki-filled ki-share">-->
<!--                 </i>-->
<!--                </span>-->
<!--                        <span class="menu-title">-->
<!--                 Share-->
<!--                </span>-->
<!--                      </a>-->
<!--                    </div>-->
<!--                    <div class="menu-item" data-menu-item-offset="-15px, 0" data-menu-item-placement="right-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">-->
<!--                      <div class="menu-link">-->
<!--                <span class="menu-icon">-->
<!--                 <i class="ki-filled ki-notification-status">-->
<!--                 </i>-->
<!--                </span>-->
<!--                        <span class="menu-title">-->
<!--                 Notifications-->
<!--                </span>-->
<!--                        <span class="menu-arrow">-->
<!--                 <i class="ki-filled ki-right text-3xs">-->
<!--                 </i>-->
<!--                </span>-->
<!--                      </div>-->
<!--                      <div class="menu-dropdown menu-default w-full max-w-[175px]">-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" href="html/demo1/account/home/settings-sidebar.html">-->
<!--                  <span class="menu-icon">-->
<!--                   <i class="ki-filled ki-sms">-->
<!--                   </i>-->
<!--                  </span>-->
<!--                            <span class="menu-title">-->
<!--                   Email-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" href="html/demo1/account/home/settings-sidebar.html">-->
<!--                  <span class="menu-icon">-->
<!--                   <i class="ki-filled ki-message-notify">-->
<!--                   </i>-->
<!--                  </span>-->
<!--                            <span class="menu-title">-->
<!--                   SMS-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" href="html/demo1/account/home/settings-sidebar.html">-->
<!--                  <span class="menu-icon">-->
<!--                   <i class="ki-filled ki-notification-status">-->
<!--                   </i>-->
<!--                  </span>-->
<!--                            <span class="menu-title">-->
<!--                   Push-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="menu-item">-->
<!--                      <a class="menu-link" data-modal-toggle="#report_user_modal" href="#">-->
<!--                <span class="menu-icon">-->
<!--                 <i class="ki-filled ki-dislike">-->
<!--                 </i>-->
<!--                </span>-->
<!--                        <span class="menu-title">-->
<!--                 Report-->
<!--                </span>-->
<!--                      </a>-->
<!--                    </div>-->
<!--                    <div class="menu-separator">-->
<!--                    </div>-->
<!--                    <div class="menu-item">-->
<!--                      <a class="menu-link" href="html/demo1/account/home/settings-enterprise.html">-->
<!--                <span class="menu-icon">-->
<!--                 <i class="ki-filled ki-setting-3">-->
<!--                 </i>-->
<!--                </span>-->
<!--                        <span class="menu-title">-->
<!--                 Settings-->
<!--                </span>-->
<!--                      </a>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="card-body">-->
<!--              <div class="grid gap-2.5 lg:gap-5">-->
<!--                <div class="flex items-center gap-3">-->
<!--                  <div class="flex items-center grow gap-2.5">-->
<!--                    <img src="/media/file-types/pdf.svg"/>-->
<!--                    <div class="flex flex-col">-->
<!--               <span class="text-sm font-medium text-gray-900 cursor-pointer hover:text-primary mb-px">-->
<!--                Project-pitch.pdf-->
<!--               </span>-->
<!--                      <span class="text-xs text-gray-700">-->
<!--                4.7 MB 26 Sep 2024 3:20 PM-->
<!--               </span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="menu" data-menu="true">-->
<!--                    <div class="menu-item" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">-->
<!--                      <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">-->
<!--                        <i class="ki-filled ki-dots-vertical">-->
<!--                        </i>-->
<!--                      </button>-->
<!--                      <div class="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" href="#">-->
<!--                  <span class="menu-icon">-->
<!--                   <i class="ki-filled ki-document">-->
<!--                   </i>-->
<!--                  </span>-->
<!--                            <span class="menu-title">-->
<!--                   Details-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" data-modal-toggle="#share_profile_modal" href="#">-->
<!--                  <span class="menu-icon">-->
<!--                   <i class="ki-filled ki-share">-->
<!--                   </i>-->
<!--                  </span>-->
<!--                            <span class="menu-title">-->
<!--                   Share-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" href="#">-->
<!--                  <span class="menu-icon">-->
<!--                   <i class="ki-filled ki-file-up">-->
<!--                   </i>-->
<!--                  </span>-->
<!--                            <span class="menu-title">-->
<!--                   Export-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="flex items-center gap-3">-->
<!--                  <div class="flex items-center grow gap-2.5">-->
<!--                    <img src="/media/file-types/doc.svg"/>-->
<!--                    <div class="flex flex-col">-->
<!--               <span class="text-sm font-medium text-gray-900 cursor-pointer hover:text-primary mb-px">-->
<!--                Report-v1.docx-->
<!--               </span>-->
<!--                      <span class="text-xs text-gray-700">-->
<!--                2.3 MB 1 Oct 2024 12:00 PM-->
<!--               </span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="menu" data-menu="true">-->
<!--                    <div class="menu-item" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">-->
<!--                      <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">-->
<!--                        <i class="ki-filled ki-dots-vertical">-->
<!--                        </i>-->
<!--                      </button>-->
<!--                      <div class="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" href="#">-->
<!--                  <span class="menu-icon">-->
<!--                   <i class="ki-filled ki-document">-->
<!--                   </i>-->
<!--                  </span>-->
<!--                            <span class="menu-title">-->
<!--                   Details-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" data-modal-toggle="#share_profile_modal" href="#">-->
<!--                  <span class="menu-icon">-->
<!--                   <i class="ki-filled ki-share">-->
<!--                   </i>-->
<!--                  </span>-->
<!--                            <span class="menu-title">-->
<!--                   Share-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" href="#">-->
<!--                  <span class="menu-icon">-->
<!--                   <i class="ki-filled ki-file-up">-->
<!--                   </i>-->
<!--                  </span>-->
<!--                            <span class="menu-title">-->
<!--                   Export-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="flex items-center gap-3">-->
<!--                  <div class="flex items-center grow gap-2.5">-->
<!--                    <img src="/media/file-types/ai.svg"/>-->
<!--                    <div class="flex flex-col">-->
<!--               <span class="text-sm font-medium text-gray-900 cursor-pointer hover:text-primary mb-px">-->
<!--                Framework-App.js-->
<!--               </span>-->
<!--                      <span class="text-xs text-gray-700">-->
<!--                0.8 MB 17 Oct 2024 6:46 PM-->
<!--               </span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="menu" data-menu="true">-->
<!--                    <div class="menu-item" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">-->
<!--                      <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">-->
<!--                        <i class="ki-filled ki-dots-vertical">-->
<!--                        </i>-->
<!--                      </button>-->
<!--                      <div class="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" href="#">-->
<!--                  <span class="menu-icon">-->
<!--                   <i class="ki-filled ki-document">-->
<!--                   </i>-->
<!--                  </span>-->
<!--                            <span class="menu-title">-->
<!--                   Details-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" data-modal-toggle="#share_profile_modal" href="#">-->
<!--                  <span class="menu-icon">-->
<!--                   <i class="ki-filled ki-share">-->
<!--                   </i>-->
<!--                  </span>-->
<!--                            <span class="menu-title">-->
<!--                   Share-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" href="#">-->
<!--                  <span class="menu-icon">-->
<!--                   <i class="ki-filled ki-file-up">-->
<!--                   </i>-->
<!--                  </span>-->
<!--                            <span class="menu-title">-->
<!--                   Export-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="flex items-center gap-3">-->
<!--                  <div class="flex items-center grow gap-2.5">-->
<!--                    <img src="/media/file-types/js.svg"/>-->
<!--                    <div class="flex flex-col">-->
<!--               <span class="text-sm font-medium text-gray-900 cursor-pointer hover:text-primary mb-px">-->
<!--                Mobile-logo.ai-->
<!--               </span>-->
<!--                      <span class="text-xs text-gray-700">-->
<!--                0.2 MB 4 Nov 2024 11:30 AM-->
<!--               </span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="menu" data-menu="true">-->
<!--                    <div class="menu-item" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">-->
<!--                      <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">-->
<!--                        <i class="ki-filled ki-dots-vertical">-->
<!--                        </i>-->
<!--                      </button>-->
<!--                      <div class="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" href="#">-->
<!--                  <span class="menu-icon">-->
<!--                   <i class="ki-filled ki-document">-->
<!--                   </i>-->
<!--                  </span>-->
<!--                            <span class="menu-title">-->
<!--                   Details-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" data-modal-toggle="#share_profile_modal" href="#">-->
<!--                  <span class="menu-icon">-->
<!--                   <i class="ki-filled ki-share">-->
<!--                   </i>-->
<!--                  </span>-->
<!--                            <span class="menu-title">-->
<!--                   Share-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                        <div class="menu-item">-->
<!--                          <a class="menu-link" href="#">-->
<!--                  <span class="menu-icon">-->
<!--                   <i class="ki-filled ki-file-up">-->
<!--                   </i>-->
<!--                  </span>-->
<!--                            <span class="menu-title">-->
<!--                   Export-->
<!--                  </span>-->
<!--                          </a>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="card-footer justify-center">-->
<!--              <a class="btn btn-link" href="html/demo1/account/integrations.html">-->
<!--                All Files-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <!-- end: grid -->
  </div>
  <!-- End of Container -->
</template>

<style>
.start-now-bg {
  background-image: url('/media/images/2600x1200/bg-5.png');
}
.dark .start-now-bg {
  background-image: url('/media/images/2600x1200/bg-5-dark.png');
}
</style>