<template>
  <RouterView />
</template>

<script lang="ts" setup>
import {nextTick, onMounted} from "vue";
import KTComponent from "@/metronic/core";
import KTLayout from "@/metronic/app/layouts/demo1";

// onMounted(() => {
//   nextTick(() => {
//     KTComponent.init();
//     KTLayout.init();
//   });
// });

</script>
