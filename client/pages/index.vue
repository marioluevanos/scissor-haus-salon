<script setup lang="ts">
definePageMeta({});
</script>

<template>
  <Hero />
  <Instagram />
  <Testimonials />
  <div class="cta">
    <nuxt-link href="/services" class="button">See Our Services</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.cta {
  margin: 6rem auto;
}
</style>
