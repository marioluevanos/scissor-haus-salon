<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useUtilityStore } from "@/pinia/useUtilityStore";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

const utilityStore = useUtilityStore();
const videos = ref<HTMLVideoElement[]>([]);

function onModalClose() {
  utilityStore.closeModal();
}

function onSlideStart({}: {
  slidingToIndex: number;
  currentSlideIndex: number;
  prevSlideIndex: number;
  slidesCount: number;
}) {
  videos.value.forEach((video) => {
    video.pause();
  });
}

function onSlideEnd({
  currentSlideIndex,
}: {
  currentSlideIndex: number;
  prevSlideIndex: number;
  slidesCount: number;
}) {
  console.log({ videos });
  const currentVideo = videos.value[currentSlideIndex];
  if (currentVideo) currentVideo.play();
}

function onSlideInit() {
  const initialIndex = Number(document.body.dataset.modalActive || 0);
  playVideo(initialIndex);
}

function playVideo(index: number) {
  const video = videos.value[index];
  if (video) {
    video.play();
  }
}

onMounted(() => {
  //
});

onUnmounted(() => {
  //
});
</script>

<template>
  <div
    v-if="utilityStore.modalId"
    :id="utilityStore.modalId"
    tabindex="-1"
    class="root"
    :aria-labelledby="utilityStore.modalId"
    aria-hidden="true"
  >
    <div class="overlay" @click="onModalClose"></div>
    <button
      type="button"
      class="close-button icon-button"
      @click="onModalClose"
      :data-modal-id="`#${utilityStore.modalId}`"
    >
      <SvgClose />
    </button>

    <Carousel
      :items-to-show="1"
      class="content"
      @init="onSlideInit"
      @slide-start="onSlideStart"
      @slide-end="onSlideEnd"
    >
      <Slide v-for="(slide, index) in utilityStore.content" :key="index">
        <video
          v-if="slide.mediaUrl.endsWith('.mp4')"
          :ref="(el) => el && (videos[index] = (el as HTMLVideoElement))"
          :src="slide.mediaUrl"
          class="media"
          loop
          controls
        />
        <img v-else :src="slide.mediaUrl" alt="" class="media" />
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss" scoped>
@import "./modal.scss";
</style>

<style>
.carousel__viewport,
.carousel__track {
  height: inherit;
}
.carousel__pagination {
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 60px;
  z-index: 100000;
  left: 0;
  right: 0px;
  width: 100vw;
}
</style>
