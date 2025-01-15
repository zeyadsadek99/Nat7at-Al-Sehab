<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

defineProps({
  blogs: {
    type: Array,
    required: true,
  },
  hideTitle: {
    type: Boolean,
    default: false,
  },
  simpleCard: {
    type: Boolean,
    default: false,
  },
});

const config = {
  //   autoplay: 3000,
  //   wrapAround: true,
  pauseAutoplayOnHover: true,
  transition: 3000,
  itemsToShow: 1,
  gap: 10,
  snapAlign: "center",
  breakpointMode: "carousel",
  breakpoints: {
    300: {
      itemsToShow: 2,
      snapAlign: "center",
    },

    992: {
      itemsToShow: 3,
      snapAlign: "start",
    },
    1200: {
      itemsToShow: 4,
      snapAlign: "start",
    },
  },
};
</script>

<template>
  <div class="px-3 lg:container">
    <Section-title title="Blogs" v-if="!hideTitle" />
    <Carousel v-bind="config">
      <Slide class="py-3 px-1" v-for="blog in blogs" :key="blog.id">
        <BlogsCardSimple :blog="blog" v-if="simpleCard" />
        <BlogsCard v-else :blog="blog" />
      </Slide>
    </Carousel>
  </div>
</template>

<style lang="scss" scoped></style>
