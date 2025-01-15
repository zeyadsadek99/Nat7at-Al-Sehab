<template>
  <div style="width: 100%" class="hero">
    <swiper
      :modules="modules"
      :loop="true"
      :dir="langDirection ? 'ltr' : 'rtl'"
      :key="langDirection"
      :slides-per-view="1"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div
          class="zoz relative bg-cover bg-center bg-no-repeat w-full h-[calc(100vh-186px)] flex items-center justify-center text-center overflow-hidden"
          :style="{ backgroundImage: `url(${slide.background})` }"
        >
          <!-- Content Section -->
          <div
            class="content lg:container lg:px-52 px-6 relative z-1 text-white text-center"
          >
            <h1
              v-if="slide.title"
              class="text-[28px] md:text-[36px] lg:text-[42px] font-bold"
            >
              {{ slide.title }}
            </h1>
            <!-- <h2
              v-else
              class="text-[28px] md:text-[36px] lg:text-[45px] font-bold leading-tight"
            >
              {{ slide.title }}
            </h2> -->
            <p 
              v-if="slide.description"
              class="mt-2 px-11 text-[16px] md:text-[20px] lg:text-[24px]"
              data-aos="fade-up"
            >
              {{ slide.description }}
            </p>
          </div>
          <!-- Navigation Buttons -->
        </div>
      </swiper-slide>
      <div>
        <div
          class="custom-button-prev absolute z-10 flex justify-center items-center size-10 bg-[#FFFFFF33] text-[#F5F5FC] border border-[#F5F5FC] rounded-full cursor-pointer right-4 md:right-12 top-1/2"
          @click="goToPrevSlide"
        >
          <lazy-icons-rightarrow />
        </div>
        <div
          class="custom-button-next absolute z-10 flex justify-center items-center size-10 bg-[#FFFFFF33] text-[#F5F5FC] border border-[#F5F5FC] rounded-full cursor-pointer left-4 md:left-12 top-1/2 transform rotate-180"
          @click="goToNextSlide"
        >
          <lazy-icons-rightarrow />
        </div>
      </div>
    </swiper>
  </div>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";

defineProps({
  slides: {
    type: Array,
    required: true,
  },
});
const langDirection = ref(false); // Set to `true` for LTR or `false` for RTL

let swiperInstance = null;

const onSwiper = (swiper) => {
  swiperInstance = swiper;
};

const onSlideChange = () => {};

const goToNextSlide = () => {
  if (swiperInstance) {
    swiperInstance.slideNext();
  }
};

const goToPrevSlide = () => {
  if (swiperInstance) {
    swiperInstance.slidePrev();
  }
};

const modules = [Navigation, Pagination, Scrollbar];
</script>

<style scoped>
.hero {
  height: calc(100vh - 217px);
  @media (min-width: 992px) {
    height: calc(100vh - 186px);
  }
}
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.zoz::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 0;
  background-color: #0e276580;
}
</style>
