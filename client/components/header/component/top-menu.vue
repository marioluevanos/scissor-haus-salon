<template>
  <div class="tp-header-top-menu d-flex align-items-center justify-content-end">
    <div class="tp-header-top-menu-item tp-header-lang">
      <span
        @click="handleActive('lang')"
        class="tp-header-lang-toggle"
        id="tp-header-lang-toggle"
        >English</span
      >
      <ul :class="`${isActive === 'lang' ? 'tp-lang-list-open' : ''}`">
        <li>
          <a href="#">Spanish</a>
        </li>
        <li>
          <a href="#">Russian</a>
        </li>
        <li>
          <a href="#">Portuguese</a>
        </li>
      </ul>
    </div>
    <div class="tp-header-top-menu-item tp-header-currency">
      <span
        @click="handleActive('currency')"
        class="tp-header-currency-toggle"
        id="tp-header-currency-toggle"
        >USD</span
      >
    </div>
    <div class="tp-header-top-menu-item tp-header-setting">
      <span
        @click="handleActive('setting')"
        class="tp-header-setting-toggle"
        id="tp-header-setting-toggle"
        >Setting</span
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let isActive = ref<string>("");
// handle active
const handleActive = (type: string) => {
  if (type === isActive.value) {
    isActive.value = "";
  } else {
    isActive.value = type;
  }
};
</script>
