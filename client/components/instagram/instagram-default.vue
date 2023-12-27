<script setup lang="ts">
import { useUtilityStore } from "@/pinia/useUtilityStore";

const utilityStore = useUtilityStore();

function onMediaClick(event: MouseEvent) {
  console.log(event, utilityStore.handleOpenModal);
  utilityStore.handleOpenModal(`product-modal-ass`);
}

type InstagramPost = {
  id: number;
  externalLink: string;
  mediaUrl: string;
};

const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    externalLink: "https://www.instagram.com/p/Cz9nVDHSqkT/",
    mediaUrl: "/instagram/holidays.mp4",
  },
  {
    id: 2,
    externalLink: "https://www.instagram.com/reel/CzmJskJPTJ7/",
    mediaUrl: "/instagram/texas_friend.mp4",
  },
  {
    id: 3,
    externalLink: "https://www.instagram.com/reel/CzPlq2zrWAx/",
    mediaUrl: "/instagram/babe_waves.mp4",
  },
  {
    id: 4,
    externalLink: "https://www.instagram.com/reel/CyTtX4OxmFO/",
    mediaUrl: "/instagram/color.mp4",
  },
  {
    id: 5,
    externalLink: "https://www.instagram.com/",
    mediaUrl: "/instagram/logo_patio.jpg",
  },
  {
    id: 6,
    externalLink: "https://www.instagram.com/",
    mediaUrl: "/instagram/ruthie.jpg",
  },
];
</script>

<template>
  <article class="root">
    <header class="header">
      <h3 class="title">Follow us on Instagram</h3>
      <p class="subtitle">See our way of life.</p>
    </header>
    <section class="posts">
      <figure
        class="post"
        v-for="item in instagramPosts"
        :key="item.id"
        @click="onMediaClick"
      >
        <video
          v-if="item.mediaUrl.endsWith('.mp4')"
          :src="item.mediaUrl"
          class="media"
          type="video/mp4"
        />
        <img v-else :src="item.mediaUrl" alt="media" class="media" />
        <a
          :href="item.externalLink"
          class="icon"
          target="_blank"
          rel="noopener"
        >
          <SvgInstagram />
        </a>
      </figure>
    </section>
  </article>
</template>

<style scoped lang="scss">
@import "./instagram.scss";
</style>
