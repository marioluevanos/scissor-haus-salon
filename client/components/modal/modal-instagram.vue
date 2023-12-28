<script setup lang="ts">
import { useUtilityStore } from "@/pinia/useUtilityStore";
const utilityStore = useUtilityStore();
const video = ref<HTMLVideoElement | null>(null);

function onModalClose() {
  utilityStore.closeModal();
}

watch(
  () => video.value,
  () => {
    if (video.value && "play" in video.value) {
      video.value?.play();
    }
  }
);
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
    <div class="content">
      <video
        v-if="utilityStore.modalMediaUrl.endsWith('.mp4')"
        ref="video"
        :src="utilityStore.modalMediaUrl"
        class="media"
        loop
        controls
      ></video>
      <img v-else :src="utilityStore.modalMediaUrl" alt="" class="media" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./modal.scss";
</style>
