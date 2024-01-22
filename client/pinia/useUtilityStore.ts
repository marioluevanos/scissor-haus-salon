import { ref, watch } from "vue";
import { defineStore } from "pinia";
import { InstagramPost } from "components/instagram/index.vue";

export const useUtilityStore = defineStore("utility", () => {
  const route = useRoute();
  let modalId = ref<string | null>(null);
  let content = ref<InstagramPost[]>([]);

  /**
   * Open the modal
   */
  const openModal = (id: string, posts: InstagramPost[], index: number) => {
    modalId.value = id;
    content.value = posts;
    document.documentElement.setAttribute("data-modal-active", `${index}`);
  };

  /**
   * Close the modal
   */
  const closeModal = () => {
    modalId.value = null;
    document.documentElement.removeAttribute("data-modal-active");
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
    content,
  };
});
