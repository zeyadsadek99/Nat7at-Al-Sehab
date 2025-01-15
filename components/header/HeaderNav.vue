<script lang="ts" setup>
import IconsTiktok from "@/components/icons/tiktok.vue";
import IconsYoutube from "@/components/icons/youtube.vue";
import IconsTwitter from "@/components/icons/twitter.vue";
import IconsInstagram from "@/components/icons/instagram.vue";
import IconsFacebook from "@/components/icons/facebook.vue";
import IconsWhatsapp from "@/components/icons/whatsapp.vue";
const localePath = useLocalePath();
const { t } = useI18n();
const sidebar = ref<boolean>(false);
const switchLocalePath = useSwitchLocalePath();

const navLinks = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "projects", path: "/projects" },
  { name: "gallery", path: "/gallery" },
  { name: "goals", path: "/goals" },
  { name: "values", path: "/values" },
  { name: "clients", path: "/clients" },
  { name: "about_us", path: "/about" },
];

const socialIcons = [
  { component: IconsTiktok, link: "#" },
  { component: IconsWhatsapp, link: "#" },
  { component: IconsYoutube, link: "#" },
  { component: IconsTwitter, link: "#" },
  { component: IconsInstagram, link: "#" },
  { component: IconsFacebook, link: "#" },
];
const route = useRoute();

function isActive(link: any) {
  const currentPath = route.path;
  const targetPath = localePath(`${link.path}`);

  // Special case for "home"
  if (link.path === "/") {
    return currentPath === targetPath;
  }

  // For other links, check if the current path starts with the target path
  return currentPath.startsWith(targetPath);
}
</script>

<template>
  <div
    class="lg:container px-3 text-sub flex justify-between gap-4 items-center pb-3"
  >
    <!-- Logo -->
    <div class="leftp flex items-center gap-10">
      <nuxt-link :to="localePath('/')">
        <img src="/public/logo.svg" alt="Logo" class="w-20 lg:w-24" />
      </nuxt-link>

      <!--  Links -->
      <ul class="hidden items-center lg:flex gap-8">
        <li v-for="link in navLinks" :key="link.path" class="relative">
          <nuxt-link
            :class="{ 'active-link': isActive(link) }"
            :to="localePath(`${link.path}`)"
            class="flex items-center font-medium text-sub hover:text-primary"
          >
            {{ t(`NAV.${link.name}`) }}
          </nuxt-link>
        </li>
      </ul>
    </div>

    <!-- Contact -->
    <div>
      <nuxt-link
        class="hidden lg:flex bg-white font-medium border whitespace-nowrap border-border rounded-full px-[30px] lg:px-[60px] py-[10px] hover:bg-primary hover:text-white transition-colors duration-300"
        :class="{
          'active-linkkk': isActive({ name: 'contact', path: '/contact' }),
        }"
        :to="localePath('/contact')"
      >
        {{ t("NAV.contact_us") }}
      </nuxt-link>
    </div>

    <!-- side menu  -->
    <button @click="sidebar = true" class=" lg:hidden text-primary">
      <IconsHamburger />
    </button>
  </div>

  <!-- side menu -->
  <teleport to="body">
    <transition name="fade">
      <div
        v-if="sidebar"
        class="fixed inset-0 bg-black bg-opacity-50 z-50"
        @click="sidebar = false"
      >
        <nav class="bg-white w-[70%] h-full p-6 flex flex-col" @click.stop>
          <button @click="sidebar = false" class="self-end text-primary">
            <IconsClose />
          </button>
          <nuxt-link :to="localePath('/')" @click="sidebar = false">
            <img src="/public/logo.svg" alt="Logo" class="w-20 lg:w-24" />
          </nuxt-link>
          <ul class="mt-6 flex flex-col gap-4">
            <li v-for="item in navLinks" :key="item.name">
              <nuxt-link
                class="font-medium text-primary"
                :to="localePath(`${item.path}`)"
                @click="sidebar = false"
                >{{ t(`NAV.${item.name}`) }}</nuxt-link
              >
            </li>
          </ul>

          <!-- Mobile Contact Us Button -->
          <div
            class="mb-6 mt-14 font-medium bg-white border w-60 border-primary rounded-full whitespace-nowrap py-[10px] text-primary text-center hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <nuxt-link :to="localePath('/contact')" @click="sidebar = false">{{
              t("NAV.contact_us")
            }}</nuxt-link>
          </div>
          <div class="flex flex-wrap gap-2 lg:gap-4 justify-center">
            <div
              v-for="(icon, index) in socialIcons"
              :key="index"
              class="size-8 rounded-full flex justify-center items-center text-primary bg-white"
            >
              <a :href="icon.link" @click="sidebar = false" class="block">
                <component :is="icon.component" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
div {
  .leftp {
    ul {
      li {
        position: relative;
        .active-link {
          color: var(--color-primary);
          font-weight: 700;
          margin-inline-start: 18px;
        }
        .active-link::before {
          content: "•";
          position: absolute;
          // left: 100px;
          color: var(--primary-color);
          font-weight: bold;
          inset-inline-start: 0;
        }
      }
    }
  }
}
.active-linkkk {
  background-color: var(--color-primary);
  color: white;
  font-weight: 700;
}
</style>
