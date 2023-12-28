<script setup lang="ts">
definePageMeta({});
</script>

<template>
  <hero-default />
  <instagram-default />
  <section class="testimonials">
    <h2 class="title">What our Clients say</h2>
    <testimonial-quote />
  </section>
</template>

<style lang="scss" scoped>
.testimonials {
  padding: var(--ui-section-p) var(--ui-gutter);
  max-width: var(--ui-maxw-medium);
  margin: auto;
}

.title {
  font-size: var(--heading-xsmall);
  font-weight: 400;
}
</style>
