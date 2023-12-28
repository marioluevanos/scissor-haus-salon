<script setup lang="ts">
useSeoMeta({ title: "Stylist Page" });
</script>

<template>
  <div>
    {{ $route.params.name }}
  </div>
</template>
