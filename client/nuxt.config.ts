// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      apiKey: "AIzaSyBv-1cWvwpm5fe72VNxY6k4Xv9IUEBy7u4",
      authDomain: "scissor-haus-salon.firebaseapp.com",
      projectId: "scissor-haus-salon",
      storageBucket: "scissor-haus-salon.appspot.com",
      messagingSenderId: "343665580399",
      appId: "1:343665580399:web:39622d0f42ffca1e5ef09a",
      measurementId: "G-TZHJHV9PFY",
    },
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
  ],
  app: {
    head: {
      title: "Scissor Haus Salon - Pasadena, CA",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,500;1,6..96,500&family=Jost:wght@400;700&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/styles/variables.scss"; 
            @import "@/styles/mixins.scss";
          `,
        },
      },
    },
  },
  css: ["@/styles/index.scss"],
});
