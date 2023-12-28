<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  document.body.classList.add("has-hero");
});

onUnmounted(() => {
  document.body.classList.remove("has-hero");
});
</script>

<template>
  <section class="root" data-hero>
    <figure class="bg">
      <img src="/about/about-big-1.jpg" alt="Hero" />
    </figure>
    <div class="text">
      <Text size="heading-small" class="title"
        >Unlock Your Hair's Potential</Text
      >
      <nuxt-link href="/about" class="button">Read More</nuxt-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "./hero.scss";
</style>
