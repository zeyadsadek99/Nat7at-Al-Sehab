<script setup>
const containerRef = ref(null);
const thumbsSwiper = ref(null);

const slides = ref(Array.from({ length: 10 }));
useSwiper(thumbsSwiper, {
  effect: "cards",
  loop: true,

  freeMode: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
});
useSwiper(containerRef, {
  loop: true,

  thumbs: { swiper: thumbsSwiper },
});
</script>

<template>
  <div class="size-48 ms-auto pe-4">
    <ClientOnly>
      <swiper-container ref="thumbsSwiper" :init="false">
        <swiper-slide
          class="size-48"
          v-for="(slide, idx) in slides"
          :key="idx"
          style="background-color: rgb(32, 233, 70); color: white"
        >
          Slide {{ idx + 1 }}
        </swiper-slide>
      </swiper-container>
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide
          v-for="(slide, idx) in slides"
          :key="idx"
          style="background-color: rgb(32, 233, 70); color: white"
        >
          Slide {{ idx + 1 }}
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style lang="css"></style>
