<script setup lang="ts">
import { useUtilityStore } from "@/pinia/useUtilityStore";

const { isSticky } = useSticky();
const utilityStore = useUtilityStore();
</script>

<style scoped lang="scss">
.root {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  border-bottom: 1px solid rgba(white, 0.16);
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: inherit;
}
.logo {
  display: block;
  margin: auto;
  max-width: 12rem;
  position: absolute;
  left: 0;
  right: 0;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.nav {
  display: none;
  position: absolute;
  right: 1rem;
  @media (min-width: 768px) {
    display: flex;
  }
}

.nav ul {
  display: flex;
  color: white;
  grid-gap: 1rem;
  list-style: none;
}

.menu {
  position: absolute;
  left: 1rem;
  z-index: 1;
  color: white;
  @media (min-width: 768px) {
    display: flex;
  }
}
</style>

<template>
  <header
    id="header-sticky"
    :class="`root tp-header-area tp-header-style-transparent-white tp-header-transparent tp-header-sticky has-dark-logo tp-header-height ${
      isSticky ? 'header-sticky' : ''
    }`"
  >
    <div class="container">
      <nav class="nav">
        <!-- menus start -->
        <header-component-menus />
        <!-- menus end -->
      </nav>
      <nuxt-link href="/" class="logo">
        <img class="logo-light" src="/img/logo/logo-white.svg" alt="logo" />
        <img class="logo-dark" src="/img/logo/logo.svg" alt="logo" />
      </nuxt-link>
      <button
        @click="utilityStore.handleOpenMobileMenu()"
        type="button"
        class="menu"
      >
        <svg-menu-icon />
      </button>
    </div>
  </header>
  <!-- search bar start -->
  <header-component-search3 />
  <!-- search bar end -->

  <!-- cart offcanvas start -->
  <offcanvas-cart-sidebar />
  <!-- cart offcanvas end -->

  <!-- cart offcanvas start -->
  <offcanvas-mobile-sidebar product-type="beauty" />
  <!-- cart offcanvas end -->
</template>
