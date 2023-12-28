<script setup lang="ts">
useSeoMeta({ title: "Our Services" });

definePageMeta({
  layout: "default",
});

const services = [
  { text: "Women’s haircuts", link: "" },
  { text: "Mens haircuts", link: "" },
  { text: "Men’s cleanups ", link: "" },
  { text: "Bang trims", link: "" },
  { text: "Blowdry", link: "" },
  { text: "Styling ", link: "" },
  { text: "Updos", link: "" },
  { text: "Color blending", link: "" },
  { text: "Color Retouch", link: "" },
  { text: "Full Color", link: "" },
  { text: "Mini highlights/ Balayge ", link: "" },
  { text: "Partial highlights ", link: "" },
  { text: "Full highlights ", link: "" },
  { text: "Color gloss", link: "" },
  { text: "Fantasy colors ", link: "" },
  { text: "Color corrections", link: "" },
  { text: "Oil Scalp treatments", link: "" },
  { text: "Clarifying scalp treatments", link: "" },
  { text: "Sugar waxing", link: "https://www.pinksugarandwax.com/" },
  { text: "Facials ", link: "" },
];
</script>

<template>
  <section class="services">
    <header class="header">
      <h2 class="title">Our Services</h2>
    </header>
    <div class="grid">
      <p v-for="s in services" :key="s.text" class="service">
        <nuxt-link v-if="s.link" :href="s.link" target="_blank" rel="noopener"
          >{{ s.text }}
          <svg-right-arrow />
        </nuxt-link>
        <span v-else>{{ s.text }}</span>
      </p>
    </div>
    <div class="cta">
      <nuxt-link href="/about" class="button">Learn More</nuxt-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.title {
  color: var(--color-primary);
  font-size: var(--heading-xsmall);
  font-weight: 400;
  margin-bottom: 1rem;
}

.header {
  padding: 4rem 0 2.5rem;
}

.services {
  max-width: 768px;
  margin: auto;
  color: var(--color-text);
  padding: 90px 1rem 4rem;
  margin: auto;
  min-height: 100vh;
}

.service {
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: 400;
  margin: 0;
  background: var(--color-bg);
  padding: 1rem 1rem;
  @include font-smoothing;
  display: flex;
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--color-border);
  border: 1px solid var(--color-border);
  grid-gap: 1px;

  span,
  a {
    display: block;
  }
}
</style>
