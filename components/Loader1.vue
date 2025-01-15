<template>
  <div class="flex h-[300px] items-center justify-center">
    <nuxt-img
   
      src="/logo.svg"
      width="300"
      height="150"
      class="logo_icon loading_logo object-contain"
    />
  </div>
</template>

<script setup>
const appStore = useAppStore();
</script>

<style lang="scss">
.loading_logo {
  transform: scale(1);
  animation: scale_in 1.5s ease-in-out infinite;
}

@keyframes scale_in {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
