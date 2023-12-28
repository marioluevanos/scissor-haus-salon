<script setup lang="ts">
definePageMeta({});
</script>

<template>
  <hero-default />

  <header class="header">
    <h3 class="title">Follow us on Instagram</h3>
    <p class="subtitle">See our way of life.</p>
    <instagram-default />
  </header>
  <section class="testimonials">
    <h2 class="title">What our Clients say</h2>
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

.title {
  font-size: var(--heading-xsmall);
  font-weight: 400;
  margin-bottom: 1.5rem;
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

.title {
  font-size: var(--heading-xsmall);
  font-weight: 400;
}
</style>

<style>
.cta {
  text-align: center;
  margin: 2.5rem auto 5rem;
}

.button {
  margin: auto;
}
</style>
