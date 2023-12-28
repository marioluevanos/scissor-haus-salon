<template>
  <about-area />
  <div class="cta">
    <nuxt-link href="/services" class="button">See Our Services</nuxt-link>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "About Us" });

definePageMeta({
  layout: "default",
});
</script>

<style>
.cta {
  text-align: center;
  margin: 2.5rem auto 5rem;
}

.button {
  margin: auto;
}
</style>
