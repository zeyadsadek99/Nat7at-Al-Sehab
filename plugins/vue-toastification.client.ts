import { defineNuxtPlugin } from "#app";
// import Toast from "vue-toastification";
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css"; // if needed
const options: PluginOptions = {
    timeout: 2000
}
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Toast, options);
});