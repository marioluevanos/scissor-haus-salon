<script setup lang="ts">
useSeoMeta({ title: "Error Page" });
defineProps(["error"]);
</script>

<template>
  <nuxt-layout name="default">
    <section style="padding: 90px 1rem">
      <h5 class="tp-error-title">{{ error.statusCode }} {{ error.message }}</h5>
      <p>
        Whoops, this is embarassing. Looks like the page you were looking for
        wasn't found.
      </p>
    </section>
  </nuxt-layout>
</template>
