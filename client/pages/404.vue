<template>
  <h2>Oops! Page not found</h2>
  <p>
    Whoops, this is embarassing. Looks like the page you were looking for wasn't
    found.
  </p>
  <nuxt-link href="/">Back to Home</nuxt-link>
</template>

<script setup lang="ts">
useSeoMeta({ title: "404 Page" });
</script>
