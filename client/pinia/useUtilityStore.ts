import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useUtilityStore = defineStore("utility", () => {
  const route = useRoute();
  let modalId = ref<string | null>(null);
  let modalMediaUrl = ref<string>("");

  /**
   * Open the modal
   */
  const openModal = (id: string, mediaUrl: string) => {
    modalId.value = id;
    modalMediaUrl.value = mediaUrl;
    document.documentElement.classList.add("modal-active");
  };

  /**
   * Close the modal
   */
  const closeModal = () => {
    modalId.value = null;
    document.documentElement.classList.remove("modal-active");
  };

  watch(
    () => route.path,
    () => {
      modalId.value = null;
    }
  );

  return {
    openModal,
    closeModal,
    modalId,
    modalMediaUrl,
  };
});
