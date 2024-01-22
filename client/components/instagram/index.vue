<script setup lang="ts">
import { useUtilityStore } from "@/pinia/useUtilityStore";

export type InstagramPost = {
  externalLink: string;
  mediaUrl: string;
  posterUrl: string;
};

const instagramPosts: InstagramPost[] = [
  {
    externalLink: "https://www.instagram.com/p/Cz9nVDHSqkT/",
    mediaUrl: "/instagram/holidays.mp4",
    posterUrl: "/instagram/holidays.webp",
  },
  {
    externalLink: "https://www.instagram.com/reel/CzmJskJPTJ7/",
    mediaUrl: "/instagram/texas_friend.mp4",
    posterUrl: "/instagram/texas_friend.webp",
  },
  {
    externalLink: "https://www.instagram.com/reel/CzPlq2zrWAx/",
    mediaUrl: "/instagram/babe_waves.mp4",
    posterUrl: "/instagram/babe_waves.webp",
  },
  {
    externalLink: "https://www.instagram.com/reel/CyTtX4OxmFO/",
    mediaUrl: "/instagram/color.mp4",
    posterUrl: "/instagram/color.webp",
  },
  {
    externalLink: "https://www.instagram.com/",
    mediaUrl: "/instagram/logo_patio.jpg",
    posterUrl: "/instagram/logo_patio.webp",
  },
  {
    externalLink: "https://www.instagram.com/",
    mediaUrl: "/instagram/ruthie.jpg",
    posterUrl: "/instagram/ruthie.webp",
  },
];

const utilityStore = useUtilityStore();

function onMediaClick(event: MouseEvent) {
  if (event?.target && "dataset" in event.target) {
    const dataset = event.target.dataset as DOMStringMap;
    const index = Number(dataset?.index || 0);

    utilityStore.openModal("modal-instagram", instagramPosts, index);
  }
}
</script>

<template>
  <section class="root instagram">
    <Text tag="h2" weight="400" size="heading-xsmall"
      >Follow us on Instagram</Text
    >
    <p class="subtitle">See our way of life.</p>
    <div class="posts">
      <figure
        class="post"
        v-for="(item, index) in instagramPosts"
        :key="index"
        :data-index="index"
        @click="onMediaClick"
      >
        <img :src="item.posterUrl" alt="media" class="media" />
        <a
          :href="item.externalLink"
          class="icon"
          target="_blank"
          rel="noopener"
        >
          <SvgInstagram />
        </a>
      </figure>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "./instagram.scss";
</style>
