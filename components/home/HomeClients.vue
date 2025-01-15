<template>
  <div style="width: 100%; height: 100%" class="bg-secondary pb-14">
    <!-- Animated Global Title -->
    <GlobalTitle
      :title="t('NAV.clients')"
      :show-button="true"
      :path="'/clients'"
      data-aos="fade-down"
      data-aos-duration="800"
    />

    <!-- Swiper Section -->
    <div
      class="px-3 lg:container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
    <!-- :autoplay="{
          delay: 800,
          disableOnInteraction: false,
        }" -->
      <swiper
        :modules="modules"
        :loop="true"
        :watch-slides-progress="true"
        
        :breakpoints="breakpoints"
        :space-between="24"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          class="flex justify-center items-center"
        
        >
          <div
            class="slide-item bg-white p-2 h-40 rounded overflow-hidden flex flex-col items-center justify-center"
          >
            <img
              :src="slide.background"
              class="object-cover w-full rounded filter grayscale transition-all duration-300 hover:grayscale-0"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Navigation Buttons -->
    <div
      class="flex justify-center mt-10 gap-5"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="200"
    >
      <div
        class="custom-button-next flex justify-center items-center size-10 text-primary border border-primary rounded-full cursor-pointer"
        @click="goToPrevSlide"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <lazy-icons-rightarrow
          class="size-5"
          :class="locale === 'ar' ? '' : 'transform rotate-180'"
        />
      </div>
      <div
        class="custom-button-prev flex justify-center items-center size-10 text-primary border border-primary rounded-full cursor-pointer"
        @click="goToNextSlide"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <lazy-icons-rightarrow
          class="size-5"
          :class="locale === 'ar' ? 'transform rotate-180' : ''"
        />
      </div>
    </div>
  </div>
</template>


<script setup>
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const { locale, t } = useI18n();

defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

const breakpoints = {
  0: {
    slidesPerView: 2,
  },
  576: {
    slidesPerView: 3,
  },
  992: {
    slidesPerView: 4,
  },
  1200: {
    slidesPerView: 6,
  },
};

let swiperInstance = null;

const onSwiper = (swiper) => {
  swiperInstance = swiper;
};

const onSlideChange = () => {
  // console.log("Slide changed");
};

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

const modules = [Navigation, Pagination, Scrollbar, Autoplay];
</script>


<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
