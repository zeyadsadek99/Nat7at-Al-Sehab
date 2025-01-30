<script lang="ts" setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import IconsTiktok from "@/components/icons/tiktok.vue";
import IconsYoutube from "@/components/icons/youtube.vue";
import IconsTwitter from "@/components/icons/twitter.vue";
import IconsInstagram from "@/components/icons/instagram.vue";
import IconsFacebook from "@/components/icons/facebook.vue";
import IconsWhatsapp from "@/components/icons/whatsapp.vue";
import IconsArrow from "@/components/icons/arrow.vue";
import IconsFlag from "@/components/icons/flag.vue";
import IconsSaudi from "@/components/icons/saudi.vue";

const { t, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const isDropdownOpen = ref(false);

const locales = [
  {
    code: "en",
    label: "English",
    icon: IconsFlag,
  },
  {
    code: "ar",
    label: "العربية",
    icon: IconsSaudi,
  },
];
const targetLocale = computed(() => {
  return locales.find((l) => l.code !== locale.value);
});
const targetLocaleIcon = computed(() => {
  return targetLocale.value?.icon || IconsFlag; // Default to IconsFlag if target locale not found
});
// Computed property to get the current locale's icon
// const currentLocaleIcon = computed(() => {
//   const current = locales.find((l) => l.code === locale.value);
//   return current?.icon || IconsFlag; // Default to IconsFlag if locale not found
// });

// Social Icons
const socialIcons = [
  { component: IconsTiktok, link: "#" },
  { component: IconsWhatsapp, link: "#" },
  { component: IconsYoutube, link: "#" },
  { component: IconsTwitter, link: "#" },
  { component: IconsInstagram, link: "#" },
  { component: IconsFacebook, link: "#" },
];
</script>

<template>
  <div class="bg-primary mb-3">
    <div
      class="lg:container flex flex-wrap justify-center lg:justify-between items-center p-3 gap-4 lg:gap-0"
    >
      <!-- Call Us and Phone -->
      <div
        class="flex items-center lg:text-lg gap-x-5 border border-white/10 rounded-full py-2 px-3 text-white transition-all duration-300 hover:bg-white hover:text-primary hover:shadow-lg"
      >
        <p class="mb-1">{{ t("NAV.call_us") }} :</p>
        <a
          href="tel:966569408703"
          class="flex gap-1 lg:text-lg items-center font-montserrat font-bold transition-transform duration-300 hover:scale-105"
        >
          +966569408703
          <IconsPhone class="hover:animate-pulse" />
        </a>
      </div>

      <!-- Lang and Social -->
      <div
        class="flex justify-center lg:flex-row lg:gap-8 w-full lg:w-auto items-center gap-4"
      >
        <!-- Lang Dropdown -->
        <div class="relative">
          <!-- Dropdown Button -->
          <button
            @click="isDropdownOpen = !isDropdownOpen"
            class="flex items-center gap-2 text-white focus:outline-none"
          >
            <!-- Icon for the target locale -->
            <component :is="targetLocaleIcon" class="w-5 h-5" />
            <!-- Name of the target locale -->
            <p class="text-white text-base font-switzer">
              {{ t(`locale.${locale}`) }}
            </p>
            <!-- <component :is="currentLocaleIcon" class="w-5 h-5" />
            <p class="text-white text-base font-switzer">
              {{ t(`locale.${locale}`) }}
            </p> -->
            <IconsArrow :class="isDropdownOpen ? 'rotate-180' : ''" />
          </button>

          <!-- Dropdown Menu -->
          <div
            v-if="isDropdownOpen"
            class="absolute top-full mt-2 right-0 bg-white text-primary rounded-lg shadow-lg py-1 z-50"
          >
            <nuxt-link
              v-for="localeItem in locales"
              :key="localeItem.code"
              :to="switchLocalePath(localeItem.code as 'en' | 'ar')"
              class="items-center gap-2 px-4 py-2 flex hover:bg-primary hover:text-white"
              :class="{
                'bg-primary text-white font-bold': localeItem.code === locale, // Highlight active locale
              }"
              @click="isDropdownOpen = false"
            >
              <component :is="localeItem.icon" class="w-5 h-5" />
              <p>{{ localeItem.label }}</p>
            </nuxt-link>
          </div>
        </div>

        <!-- Social Icons -->
        <div class="flex flex-wrap gap-2 lg:gap-4 justify-center">
          <div
            v-for="(icon, index) in socialIcons"
            :key="index"
            class="size-8 rounded-full flex justify-center items-center text-primary bg-white transition-transform duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg"
          >
            <a :href="icon.link" class="block">
              <component :is="icon.component" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Add hover rotation for the arrow icon */
.rotate-180 {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}
</style>
