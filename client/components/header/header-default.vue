<script setup lang="ts">
import { menuLinks } from "@/data/menu-data";
const { isSticky } = useSticky();
</script>

<template>
  <header id="header-sticky" :class="`root ${isSticky ? 'header-sticky' : ''}`">
    <div class="container">
      <nuxt-link href="/" class="logo">
        <header-logo />
      </nuxt-link>
      <nav class="nav">
        <nuxt-link v-for="(item, i) in menuLinks" :key="i" :href="item.link">{{
          item.title
        }}</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "./header.scss";
</style>
