<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref } from "vue";

type Props = {
  blogs: Blog[];
};

const { t } = useI18n();
const localePath = useLocalePath();

defineProps<Props>();

const currentSlide = ref(0);

const slideTo = (nextSlide: number) => (currentSlide.value = nextSlide);

const galleryConfig = {
  itemsToShow: 1,

  mouseDrag: false,
  touchDrag: false,

  transition: 3000,
};

const thumbnailsConfig = {
  itemsToShow: 2.5,
  wrapAround: true,
  gap: 20,
  autoplay: 6000,
  pauseAutoplayOnHover: true,
  transition: 1000,
};
</script>

<template>
  <div class="px-3 lg:container">
    <div
      class="h-[400px] xl:h-[calc(100vh_-_110px)] flex items-center relative"
    >
      <Carousel
        id="gallery"
        class="w-full"
        v-bind="galleryConfig"
        v-model="currentSlide"
      >
        <Slide v-for="blog in blogs" :key="blog.id">
          <div
            class="carousel__item rounded-2xl overflow-hidden top_slider h-[400px] xl:h-[calc(100vh_-_110px)] !w-full flex items-center"
          >
            <div
              class="relative z-10 w-full lg:w-1/2 px-6 lg:px-10 flex flex-col"
            >
              <h2
                data-aos="fade-up"
                class="text-lg text-white font-semibold text-start mb-6 capitalize"
              >
                {{ blog.title }}
              </h2>
              <p
                data-aos="fade-up"
                class="text-sm text-white uppercase text-start mb-11 line-clamp-4"
              >
                {{ blog.short_desc }}
              </p>
              <nuxt-link
                :to="localePath(`/blogs/${blog.slug}`)"
                class="btn text-text font-semibold bg-white border border-text rounded-lg py-3 px-7 block w-fit me-auto"
              >
                {{ t("BUTTONS.ReadMore") }}
              </nuxt-link>
            </div>
            <nuxt-img
              :src="blog.image"
              alt="Gallery Image"
              class="gallery-image rounded-2xl object-cover h-[400px] xl:h-[calc(100vh_-_110px)] !w-full absolute inset-0"
              width="400"
              height="500"
              format="webp"
            />
          </div>
        </Slide>
      </Carousel>
      <Carousel
        id="thumbnails"
        v-bind="thumbnailsConfig"
        v-model="currentSlide"
        class="absolute carousel__item_thum w-3/4 bottom-0 lg:w-1/2 end-3 lg:bottom-11"
      >
        <Slide
          v-for="(blog, index) in blogs"
          :key="blog.id"
          class="h-[100px] md:h-full"
        >
          <div class="carousel__item mx-3 w-full" @click="slideTo(index - 1)">
            <nuxt-img
              width="150"
              height="150"
              :src="blog.image"
              alt="Thumbnail Image"
              class="thumbnail-image h-[100px] w-full md:h-[150px] lg:h-[180px] object-cover"
            />
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<style lang="scss">
.carousel__item_thum {
  .carousel__track {
    @apply items-center;
  }
  .carousel__slide {
    &.carousel__slide--active {
      @apply h-[200px] border border-white rounded-md overflow-hidden;
      .carousel__item {
        @apply mx-0;
      }
      img {
        @apply size-full;
      }
    }
  }
}
.top_slider {
  @apply relative;

  &::before {
    content: "";
    @apply absolute inset-0 w-full h-full bg-black/30 z-10;
  }
}
</style>
