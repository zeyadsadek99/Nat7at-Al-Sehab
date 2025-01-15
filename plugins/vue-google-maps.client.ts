import { defineNuxtPlugin } from "#app";
import VueGoogleMaps from "@fawmi/vue-google-maps";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyDRymdCLWxCwLHFnwv36iieKAMjiwk8sdc",
      libraries: ["places"],
    },
    autobindAllEvents: true,
  });
});