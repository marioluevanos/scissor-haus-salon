<script setup lang="ts">
definePageMeta({});
</script>

<template>
  <hero-default />
  <header class="header">
    <Text tag="h2" weight="400" size="heading-xsmall"
      >Follow us on Instagram</Text
    >
    <p class="subtitle">See our way of life.</p>
    <instagram-default />
  </header>
  <section class="testimonials">
    <Text tag="h2" weight="400" size="heading-xsmall"
      >What our Clients say</Text
    >
    <testimonial-default />
  </section>
  <div class="cta">
    <nuxt-link href="/services" class="button">See Our Services</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.header {
  text-align: center;
  padding: var(--ui-section-p) var(--ui-gutter);
  max-width: var(--ui-maxw-xlarge);
  width: 100%;
  display: block;
  margin: 1.5rem auto 0;
}

.subtitle {
  color: var(--color-text2);
  margin-bottom: 2rem;
}

.testimonials {
  text-align: center;
  padding: var(--ui-section-p) var(--ui-gutter);
  max-width: var(--ui-maxw-medium);
  margin: 0 auto;
}
</style>
