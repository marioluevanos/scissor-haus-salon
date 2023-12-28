<script setup lang="ts">
import { useUtilityStore } from "@/pinia/useUtilityStore";

export type InstagramPost = {
  externalLink: string;
  mediaUrl: string;
};

const instagramPosts: InstagramPost[] = [
  {
    externalLink: "https://www.instagram.com/p/Cz9nVDHSqkT/",
    mediaUrl: "/instagram/holidays.mp4",
  },
  {
    externalLink: "https://www.instagram.com/reel/CzmJskJPTJ7/",
    mediaUrl: "/instagram/texas_friend.mp4",
  },
  {
    externalLink: "https://www.instagram.com/reel/CzPlq2zrWAx/",
    mediaUrl: "/instagram/babe_waves.mp4",
  },
  {
    externalLink: "https://www.instagram.com/reel/CyTtX4OxmFO/",
    mediaUrl: "/instagram/color.mp4",
  },
  {
    externalLink: "https://www.instagram.com/",
    mediaUrl: "/instagram/logo_patio.jpg",
  },
  {
    externalLink: "https://www.instagram.com/",
    mediaUrl: "/instagram/ruthie.jpg",
  },
];

const utilityStore = useUtilityStore();

function onMediaClick(event: MouseEvent) {
  if (event?.target && "dataset" in event.target) {
    const dataset = event.target.dataset as DOMStringMap;
    const index = Number(dataset?.index || 0);

    utilityStore.openModal("modal-instagram", instagramPosts[index].mediaUrl);
  }
}
</script>

<template>
  <article class="root" data-instagram>
    <header class="header">
      <h3 class="title">Follow us on Instagram</h3>
      <p class="subtitle">See our way of life.</p>
    </header>
    <section class="posts">
      <figure
        class="post"
        v-for="(item, index) in instagramPosts"
        :key="index"
        :data-index="index"
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
