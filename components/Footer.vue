<template>
  <footer class="text-text py-8">
    <div class="lg:container px-3">
      <div
        class="flex flex-col md:flex-row border border-footer rounded-2xl gap-8 px-6 py-10"
      >
        <!-- Right Section: Contact Info -->
        <div class="w-full md:w-[60%] flex flex-col gap-4 md:start-0">
          <div>
            <img
              src="/assets/icons/logo.svg"
              alt="Logo"
              class="mx-auto md:mx-0"
            />
          </div>
          <div class="flex flex-col md:flex-row gap-8 md:gap-16">
            <!-- Numbers -->
            <div class="flex flex-col gap-4">
              <h4 class="font-bold">{{ t("NAV.contact") }}:</h4>
              <div>
                <span>{{ t("NAV.first_number") }} :</span> 0569408703
              </div>
              <div>
                <span>{{ t("NAV.second_number") }} :</span> 0553568831
              </div>
              <div>
                <span>{{ t("NAV.whatsapp") }} :</span>
                {{ t("NAV.whatsapp_number") }}
              </div>
            </div>
            <!-- Address -->
            <div class="flex flex-col gap-4">
              <h4 class="font-bold">{{ t("NAV.main_address") }}:</h4>
              <p>{{ t("NAV.sa_address") }}</p>
            </div>
          </div>
        </div>

        <!--  Links -->
        <div
          class="w-full md:w-[40%] flex justify-center  gap-4 text-center md:text-start"
        >
          <div
            class="w-full sm:w-1/3"
            v-for="(column, columnIndex) in navColumns"
            :key="columnIndex"
          >
            <ul class="lg:text-xl text-text font-medium flex flex-col gap-4">
              <li
                v-for="(link, linkIndex) in column"
                :key="linkIndex"
                class="relative group"
              >
                <nuxt-link
                  :to="localePath(link.path)"
                  class="relative flex items-center gap-2 hover:text-primary transition-all duration-300"
                >
                  {{ t(link.label) }}
                  <span
                    :class="locale === 'ar' ? 'origin-right' : 'origin-left'"
                    class="absolute inset-x-0 -bottom-1 h-[2px] bg-primary scale-x-0 group-hover:scale-x-50 transition-transform"
                  ></span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Footer Bottom Section -->
      <div
        class="w-full flex flex-col md:flex-row justify-between items-center mt-8 text-center md:text-start"
      >
        <p class="text-primary mb-4 md:mb-0">
          {{ t("NAV.all_rights_reserved") }} © {{ t("NAV.company_name") }} 2025
        </p>
        <div class="flex gap-4 text-primary justify-center md:justify-start">
          <nuxt-link to="/terms" class="text-sm">{{
            t("NAV.terms_conditions")
          }}</nuxt-link>
          <nuxt-link to="/privacy" class="text-sm">{{
            t("NAV.privacy_policy")
          }}</nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const localePath = useLocalePath();

const { t,locale } = useI18n();

const navColumns = [
  [
    { path: "/", label: "NAV.home" },
    { path: "/about", label: "NAV.about_us" },
    { path: "/projects", label: "NAV.projects" },
  ],
  [
    { path: "/services", label: "NAV.services" },
    { path: "/clients", label: "NAV.clients" },
    { path: "/gallery", label: "NAV.gallery" },
  ],
  [
    { path: "/contact", label: "NAV.contact_us" },
    { path: "/branches", label: "NAV.branches" },
    { path: "/help", label: "NAV.help" },
  ],
];
</script>

<style lang="scss">
footer {
  background-image: url("/assets/icons/footerBg.svg");
  background-size: cover;
  background-position: center;
}
</style>
