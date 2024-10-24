<script setup lang="ts">
import ApiService from "@/core/services/ApiService.ts";

function GetWorkspace() {
  ApiService.setHeader();
  ApiService.get(`/api/v1/shop`)
      .then(({ data }) => {
        console.log('Данные:', data);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log('Ошибка:', error.response.data.errors);
        } else {
          console.log("Неизвестная ошибка:", error);
        }
      });
}

function Refresh() {
  ApiService.setHeader();
  ApiService.post(`/api/v1/auth/refresh`, {})
      .then(({ data }) => {
        console.log('Данные:', data);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log('Ошибка:', error.response.data.errors);
        } else {
          console.log("Неизвестная ошибка:", error);
        }
      });
}


</script>

<template>
  <button v-on:click="GetWorkspace">Click</button>
  <div class="container-fixed" id="content_container"></div>
  <div class="container-fixed" id="content_container">
    <div class="grid">
      <div class="card card-grid min-w-full">
        <div class="card-header py-5 flex-wrap">
          <h3 class="card-title">
            Workspace
          </h3>
          <div class="flex gap-6">
            <div class="relative">
              <i class="ki-outline ki-magnifier leading-none text-md text-gray-500 absolute top-1/2 left-0 -translate-y-1/2 ml-3">
              </i>
              <input class="input input-sm pl-8" placeholder="Search Members" type="text"/>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div data-datatable="true" data-datatable-page-size="5">
            <div class="scrollable-x-auto">
              <table class="table table-auto table-border" data-datatable-table="true" id="grid_table">
                <thead>
                <tr>
                  <th class="w-[60px]">
                    <input class="checkbox checkbox-sm" data-datatable-check="true" type="checkbox"/>
                  </th>
                  <th class="min-w-[175px]">
                    <span class="sort asc">
                      <span class="sort-label">
                        Member
                      </span>
                      <span class="sort-icon">
                      </span>
                    </span>
                  </th>
                  <th class="min-w-[150px]">
                    <span class="sort">
                      <span class="sort-label">
                        Location
                      </span>
                      <span class="sort-icon">

                      </span>
                    </span>
                  </th>
                  <th class="min-w-[125px]">
                    <span class="sort">
                      <span class="sort-label">
                        Status
                      </span>
                      <span class="sort-icon">

                      </span>
                    </span>
                  </th>
                  <th class="w-[80px]">
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <input class="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="1"/>
                  </td>
                  <td>
                    <div class="flex items-center gap-2.5">
                      <img alt="" class="h-9 rounded-full" src="/media/avatars/300-3.png"/>
                      <div class="flex flex-col gap-0.5">
                        <a class="leading-none font-semibold text-sm text-gray-900 hover:text-primary" href="#">
                          Tyler Hero
                        </a>
                        <span class="text-2sm text-gray-600">
                          26 tasks
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center gap-1.5">
                      <img alt="flag" class="h-4 rounded-full" src="/media/flags/estonia.svg"/>
                      <span class="leading-none text-gray-700">
                        Estonia
                      </span>
                    </div>
                  </td>
                  <td>
                    <span class="badge badge-sm badge-outline badge-success">
                      Active
                    </span>
                  </td>
                  <td class="text-left">
                    <div class="menu" data-menu="true">
                      <div class="menu-item" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                        <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                          <i class="ki-filled ki-dots-vertical">
                          </i>
                        </button>
                        <div class="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">
                          <div class="menu-item">
                            <a class="menu-link" href="#">
                    <span class="menu-icon">
                     <i class="ki-filled ki-search-list">
                     </i>
                    </span>
                              <span class="menu-title">
                     View
                    </span>
                            </a>
                          </div>
                          <div class="menu-item">
                            <a class="menu-link" href="#">
                    <span class="menu-icon">
                     <i class="ki-filled ki-file-up">
                     </i>
                    </span>
                              <span class="menu-title">
                     Export
                    </span>
                            </a>
                          </div>
                          <div class="menu-separator">
                          </div>
                          <div class="menu-item">
                            <a class="menu-link" href="#">
                    <span class="menu-icon">
                     <i class="ki-filled ki-pencil">
                     </i>
                    </span>
                              <span class="menu-title">
                     Edit
                    </span>
                            </a>
                          </div>
                          <div class="menu-item">
                            <a class="menu-link" href="#">
                    <span class="menu-icon">
                     <i class="ki-filled ki-copy">
                     </i>
                    </span>
                              <span class="menu-title">
                     Make a copy
                    </span>
                            </a>
                          </div>
                          <div class="menu-separator">
                          </div>
                          <div class="menu-item">
                            <a class="menu-link" href="#">
                    <span class="menu-icon">
                     <i class="ki-filled ki-trash">
                     </i>
                    </span>
                              <span class="menu-title">
                     Remove
                    </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer justify-center md:justify-between flex-col md:flex-row gap-3 text-gray-600 text-2sm font-medium">
              <div class="flex items-center gap-2">
                Show
                <select class="select select-sm w-16" data-datatable-size="true" name="perpage">
                </select>
                per page
              </div>
              <div class="flex items-center gap-4">
      <span data-datatable-info="true">
      </span>
                <div class="pagination" data-datatable-pagination="true">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>