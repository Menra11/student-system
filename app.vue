<template>
  <div>
    <NuxtPage />
    <Notice :notice-data="notificationStore.notice" />
  </div>
</template>

<script setup lang="ts" >
import Notice from "@/components/Notice.vue";
import { useMyNotificationStore } from "@/stores/notification";
const notificationStore = useMyNotificationStore();

watch(
  () => notificationStore.notice.show,
  (notice) => {
    if (notice) {
      notificationStore.showNotification();
    }
  }
); 
// onMounted(async() => {
//   const res = await $fetch("http://127.0.0.1:5800/api/test", {
//       method: "get",
//     });
//   console.log(res);
  
// });
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>