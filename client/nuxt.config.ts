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
    },
  },
  css: ["swiper/css/bundle", "@/styles/main.scss"],
});
