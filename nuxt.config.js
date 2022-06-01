export default {
   // Global page headers: https://go.nuxtjs.dev/config-head
   target: "static",

   head: {
      title: "RI Movie",
      htmlAttrs: {
         lang: "en",
      },
      meta: [
         { charset: "utf-8" },
         { name: "viewport", content: "width=device-width, initial-scale=1" },
         { hid: "description", name: "description", content: "" },
         { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
   },

   // Global CSS: https://go.nuxtjs.dev/config-css
   css: ["@assets/css/index.css"],

   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
   plugins: [],

   // Auto import components: https://go.nuxtjs.dev/config-components
   components: true,

   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
   buildModules: [
      // https://go.nuxtjs.dev/tailwindcss
      "@nuxtjs/tailwindcss",
      "@nuxtjs/fontawesome",
      
   ],

   fontawesome: {
      icons: {
         solid: true,
      },
   },

   // Modules: https://go.nuxtjs.dev/config-modules
   modules: [
      // https://go.nuxtjs.dev/axios
      "@nuxtjs/axios",
      "@nuxtjs/pwa",
   ],

   // Axios module configuration: https://go.nuxtjs.dev/config-axios
   axios: {
      // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
      baseURL: "/",
   },

   // PWA module
      pwa: {
         meta : {
            title: 'Ri Movies',
            author: 'Rauliqbal'
         },
         manifest : {
            name : 'Ri Movies',
            short_name: 'Ri Movies',
            description: 'RI Movies Streaming Movies Online',
         },
         icon : {
            fileName : 'android-chrome-512x512.png',
            sizes :[64, 120, 144, 152, 192, 384, 512]
         }
        
      },


   // Build Configuration: https://go.nuxtjs.dev/config-build
   build: {
      postcss: {
         plugins: {
            tailwindcss: {},
            autoprefixer: {},
         },
      },
   },

   
};
