<template>
  <div
    class="px-3 lg:container pb-10"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div
      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-y-20"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="slide-item bg-white p-2 h-44 lg:h-60 rounded overflow-hidden flex flex-col items-center justify-center"
        data-aos="zoom-in"
        :data-aos-delay="index * 50"
        data-aos-duration="600"
      >
        <img
          :src="image"
          alt="Image"
          class="object-cover w-full rounded filter grayscale transition-all duration-300 hover:grayscale-0"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="">
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
