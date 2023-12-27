<script setup lang="ts">
import { useUtilityStore } from "@/pinia/useUtilityStore";
const utilityStore = useUtilityStore();
</script>

<template>
  <div
    v-if="utilityStore.modalId"
    :id="utilityStore.modalId"
    tabindex="-1"
    class="modal"
    :aria-labelledby="utilityStore.modalId"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <button
          type="button"
          class="tp-product-modal-close-btn"
          data-bs-toggle="modal"
          :data-bs-target="`#${utilityStore.modalId}`"
        >
          X
        </button>
        test
      </div>
    </div>
  </div>
</template>
