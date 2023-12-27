import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useUtilityStore = defineStore("utility", () => {
  const route = useRoute();
  let openSearchBar = ref<boolean>(false);
  let openMobileMenus = ref<boolean>(false);
  // product modal
  let modalId = ref<string | null>(null);
  // video modal
  const videoUrl = ref<string>("");
  const isVideoOpen: Ref<boolean> = ref(false);
  let iframeElement: HTMLIFrameElement | null = null;

  // handle image active
  const handleOpenSearchBar = () => {
    openSearchBar.value = !openSearchBar.value;
  };

  // handle image active
  const handleOpenMobileMenu = () => {
    openMobileMenus.value = !openMobileMenus.value;
  };

  // modal video play
  const playVideo = (videoId: string) => {
    const videoOverlay = document.querySelector("#video-overlay");
    videoUrl.value = `https://www.youtube.com/embed/${videoId}`;
    if (!iframeElement) {
      iframeElement = document.createElement("iframe");
      iframeElement.setAttribute("src", videoUrl.value);
      iframeElement.style.width = "60%";
      iframeElement.style.height = "80%";
    }

    isVideoOpen.value = true;
    videoOverlay?.classList.add("open");
    videoOverlay?.appendChild(iframeElement);
  };
  // close modal video
  const closeVideo = () => {
    const videoOverlay = document.querySelector("#video-overlay.open");

    if (iframeElement) {
      iframeElement.remove();
      iframeElement = null;
    }

    isVideoOpen.value = false;
    videoOverlay?.classList.remove("open");
  };

  // handle Open Modal
  const handleOpenModal = (id: string) => {
    modalId.value = id;
    console.log("handleOpenModal", id, modalId);
    // product.value = item;
    // productStore.handleImageActive(item.img);
    // cartStore.initialOrderQuantity();
  };

  const removeBackdrop = () => {
    const modalBackdrop = document.querySelector(".modal-backdrop");
    if (modalBackdrop) {
      modalBackdrop.remove();
      document.body.classList.remove("modal-open");
      document.body.removeAttribute("style");
    }
  };

  watch(
    () => route.path,
    () => {
      openSearchBar.value = false;
      openMobileMenus.value = false;
    }
  );

  return {
    handleOpenSearchBar,
    openSearchBar,
    handleOpenModal,
    modalId,
    openMobileMenus,
    handleOpenMobileMenu,
    playVideo,
    isVideoOpen,
    iframeElement,
    closeVideo,
    removeBackdrop,
  };
});
