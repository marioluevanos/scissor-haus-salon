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
      <img src="/img/about/about-big-1.jpg" alt="Hero" />
    </figure>
    <div class="text">
      <h1 class="title">Unlock Your Hair's Potential</h1>
      <nuxt-link href="/about" class="button">Read More</nuxt-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/utils/_mixins.scss";

.root {
  position: relative;
  z-index: 1;
  width: 100%;
  padding-top: 90px;

  @include media(3-up) {
    min-height: 100vh;
  }
}

.bg {
  overflow: hidden;
  inset: 0;
  margin: 0;
  position: relative;
  background: black;

  @include media(3-up) {
    position: absolute;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        transparent 30%,
        rgba(black, 0.66) 100%
      );
      z-index: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;

    @include media(3-up) {
      opacity: 0.9;
      position: absolute;
    }
  }
}

.text {
  z-index: 1;
  text-align: center;
  position: relative;
  padding: 1.5rem 1rem;
  color: black;

  @include media(3-up) {
    color: white;
    position: absolute;
    bottom: 0;
    min-height: 66vh;
    left: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    color: currentColor;

    @include media(3-up) {
      font-size: 72px;
      font-weight: 600;
    }
  }

  .button {
    display: inline-block;
    margin: 1rem 0;
    border: 1px solid var(--tp-theme-brown);
    background: var(--tp-theme-brown);
    color: white;
    padding: 0.5rem 2rem;

    @include media(3-up) {
      border-color: currentColor;
      background-color: transparent;
    }
  }
}
</style>
