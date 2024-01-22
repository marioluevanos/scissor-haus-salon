<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  document.body.classList.add("hasHero");
});

onUnmounted(() => {
  document.body.classList.remove("hasHero");
});
</script>

<template>
  <section class="root" data-hero>
    <div class="text">
      <Text tag="h2" size="heading-medium" class="title"
        >Elevate your charming look</Text
      >
      <nuxt-link href="/about" class="button">Read More</nuxt-link>
    </div>
    <figure class="bg">
      <img src="/about/about-big-1.jpg" alt="Hero" />
    </figure>
  </section>
</template>

<style lang="scss" scoped>
@import "./hero.scss";
</style>
