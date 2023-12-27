<script setup lang="ts">
// data type
type IInstagram = {
  id: number;
  externalLink: string;
  mediaUrl: string;
};
// instagram data
const instagram_data: IInstagram[] = [
  {
    id: 1,
    externalLink: "https://www.instagram.com/p/Cz9nVDHSqkT/",
    mediaUrl: "/img/instagram/holidays.mp4",
  },
  {
    id: 2,
    externalLink: "https://www.instagram.com/reel/CzmJskJPTJ7/",
    mediaUrl: "/img/instagram/texas_friend.mp4",
  },
  {
    id: 3,
    externalLink: "https://www.instagram.com/reel/CzPlq2zrWAx/",
    mediaUrl: "/img/instagram/babe_waves.mp4",
  },
  {
    id: 4,
    externalLink: "https://www.instagram.com/reel/CyTtX4OxmFO/",
    mediaUrl: "/img/instagram/color.mp4",
  },
  {
    id: 5,
    externalLink: "https://www.instagram.com/",
    mediaUrl: "/img/instagram/logo_patio.jpg",
  },
  {
    id: 6,
    externalLink: "https://www.instagram.com/",
    mediaUrl: "/img/instagram/ruthie.jpg",
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
      <figure class="post" v-for="item in instagram_data" :key="item.id">
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
          <i class="fa-brands fa-instagram"></i>
        </a>
      </figure>
    </section>
  </article>
</template>

<style scoped lang="scss">
@import "../../assets/scss/utils/_mixins.scss";

.root {
  padding: 4rem 0 3rem;
}

.header {
  text-align: center;
  padding-bottom: 1.5rem;
}

.posts {
  grid-gap: 1rem;
  padding: 0 1rem;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @include media(1-up) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include media(3-up) {
    grid-template-columns: repeat(6, 1fr);
  }
}

.post {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  flex: 1;
  margin: 0;
}

.media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.icon {
  width: 1rem;
  width: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: white;
  z-index: 1;
}
</style>
