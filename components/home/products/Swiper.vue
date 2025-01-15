<template>
  <div class="w-48 h-52 ms-auto me-6">
    <Swiper
      v-if="thumbsSwiper"
      :slidesPerView="1"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="[SwiperThumbs, SwiperEffectCards, SwiperAutoplay]"
      class="size-48"
      dir="ltr"
      :autoplay="true"
      effect="cards"
      :creativeEffect="{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          shadow: true,
          translate: [0, 0, -400],
        },
      }"
    >
      <Swiper-Slide
        class="w-48 h-52 rounded-3xl shadow-lg"
        v-for="product in products"
        :key="product.id"
      >
        <nuxt-img
          :src="product.image"
          :alt="product.title"
          width="192"
          height="208"
          alt="image"
          format="webp"
          class="w-48 h-52 object-cover rounded-3xl shadow-lg"
        />
      </Swiper-Slide>
    </Swiper>
  </div>
  <div class="mt-5">
    <Swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="1"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="[SwiperFreeMode, SwiperThumbs]"
    >
      <Swiper-Slide
        class="text-center text-white"
        v-for="(product, indx) in products"
        :key="product.id"
      >
        {{ product.title }}
      </Swiper-Slide>
    </Swiper>
  </div>
</template>
<script setup>
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

defineProps({
  products: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = null;
  setTimeout(() => (thumbsSwiper.value = swiper), 300);
};
</script>
<style></style>
