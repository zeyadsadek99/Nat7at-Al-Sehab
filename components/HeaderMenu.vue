<template>
  <div class="popup-mobile-menu">
    <div class="inner !bg-[#f3f1e9] !p-5 xs:!px-10 xs:!py-[25px]" @click.stop>
      <div class="menu-top">
        <div class="menu-header">
          <nuxt-link :to="localePath('/')">
            <img
              v-if="settings?.logo"
              :src="settings?.logo"
              alt=" logo"
              width="178"
              height="60"
          /></nuxt-link>
          <div class="close-button h-11 w-11" @click="emit('close')">
            <button class="close-menu-activation close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="content">
        <ul class="flex flex-col gap-4 font-medium text-text">
          <li>
            <nuxt-link @click="emit('close')" :to="localePath('/')">{{
              t("NAV.home")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link @click="emit('close')" :to="localePath('/products')">{{
              t("NAV.products")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link @click="emit('close')" :to="localePath('/quote')">{{
              t("NAV.getQuote")
            }}</nuxt-link>
          </li>

          <li>
            <nuxt-link
              :to="switchLocalePath(locale == 'ar' ? 'en' : 'ar')"
              class="text-primary flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-world"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M3.6 9h16.8" />
                <path d="M3.6 15h16.8" />
                <path d="M11.5 3a17 17 0 0 0 0 18" />
                <path d="M12.5 3a17 17 0 0 1 0 18" />
              </svg>
              {{ $t(`locale.${locale}`) }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

type Props = {
  settings: {
    logo: string;
    // Add more settings as needed
  } | null;
};
defineProps<Props>();

const emit = defineEmits(["close"]);

const { t, locale } = useI18n();
</script>

<style lang="scss">
.popup-mobile-menu {
  z-index: 9999;
  position: fixed;
  content: "";
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s ease-out;
  &.menu-open {
    visibility: visible;
    opacity: 1;
    .inner {
      opacity: 1;
      inset-inline-start: 0;
      overflow-y: auto;
    }
  }
  .inner {
    padding: 25px 40px;
    width: min(90vw, 400px);
    overflow-y: auto;
    z-index: 999;
    position: absolute;
    background: white;
    height: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.7);
    opacity: 0;
    inset-inline-start: -150px;
    transition: all 0.5s ease-out;
    .menu-top {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 20px;
      .menu-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .close-button {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          cursor: pointer;
          .close {
            opacity: 1;
            width: max-content;
            padding: 0;
            background-color: transparent;
            border: 0;
            svg {
              color: white;
              height: auto;
            }
            &::after {
              position: absolute;
              content: "";
              padding: 22px;
              background: #002a20;
              left: 50%;
              top: 50%;
              border-radius: 50%;
              transform: translate(-50%, -50%);
              z-index: -1;
            }
          }
        }
      }
      p.discription {
        font-size: 16px;
        line-height: 29px;
        margin-top: 20px;
        color: #878e99;
        padding-right: 0;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      .primary-menu {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        padding-left: 0;
        li {
          display: block;
          margin: 8px 0;
          font-size: 18px;
          line-height: 1.5;
          a {
            color: #c4cfde;
            position: relative;
            transition: all;
            transition-duration: 0.4s;
            font-size: 14px;
            text-transform: uppercase;
            margin: 0;
            padding: 0;
            display: inline;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
