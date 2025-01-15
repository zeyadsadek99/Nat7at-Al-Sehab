<script lang="ts" setup>
const switchLocalePath = useSwitchLocalePath();

const { t, locale } = useI18n();
const i18n = useI18n();

const isScrolled = ref<boolean>(false);

onMounted(() => {
  document.addEventListener("scroll", scorlled);
  if (window.scrollY > 300) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
});

const scorlled = () => {
  isScrolled.value = window.scrollY > 300;
};
</script>

<template>
  <header
    class="bg-white w-full flex flex-col !transition !ease-in-out !duration-500"
    :class="{
      'isScrolled fade-in opacity-0 translate-y-4 fixed top-0 left-0':
        isScrolled,
    }"
  >
    <!-- top  -->
    <header-top />
    <!-- Navs  -->
    <header-nav />
  </header>
</template>

<style lang="scss">
header {
  @apply relative z-30;

  .container {
    @apply w-full max-w-[1200px];
  }

  img {
    @apply object-contain;
  }

  button {
    @apply focus:outline-none;
  }

  

  .nav_items {
    @apply hidden lg:flex flex-wrap items-center gap-2 capitalize;

    li {
      @apply p-1;

      a {
        @apply relative overflow-hidden text-text transition ease-linear;

        &:hover {
          &::before {
            @apply w-full;
          }

          @apply text-primary;
        }
      }
    }
  }
}
</style>
