<script setup lang="ts">
import { useUtilityStore } from "@/pinia/useUtilityStore";

const utilsStore = useUtilityStore();
const route = useRoute();

watch(
  () => route.path,
  () => {
    utilsStore.closeModal();
  }
);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <ModalInstagram />
  </NuxtLayout>
</template>
