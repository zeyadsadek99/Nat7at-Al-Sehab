<template>
  <section class="bg-secondary">
    <div
      :class="[
        'container flex flex-col lg:flex-row items-center gap-6 lg:gap-11 py-10 lg:py-20 justify-between',
        values.reversed ? 'lg:flex-row-reverse' : '',
      ]"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <!-- Image Section -->
      <div
        class="flex-shrink-0 w-full max-lg:justify-center lg:w-auto"
        data-aos="zoom-in"
        :data-aos-delay="values.reversed ? 300 : 0"
        data-aos-duration="800"
      >
        <img
          :src="values.imgSrc"
          alt="Dynamic Image"
          class="w-full max-w-[537px] h-auto lg:w-[537px] lg:h-[460px] object-cover rounded-2xl"
        />
      </div>

      <!-- Text Section -->
      <div
        class="flex flex-col gap-4 lg:gap-6 max-lg:text-center"
        data-aos="fade-up"
        :data-aos-delay="values.reversed ? 0 : 300"
        data-aos-duration="800"
      >
        <h1
          class="text-3xl lg:text-[2.225rem] font-bold mb-2"
          data-aos="fade-right"
          :data-aos-delay="values.reversed ? 300 : 0"
        >
          {{ values.title }}
        </h1>
        <p
          class="text-base lg:text-lg mb-1"
          data-aos="fade-left"
          :data-aos-delay="values.reversed ? 400 : 500"
        >
          {{ values.paragraph1 }}
        </p>
        <p
          v-if="values.paragraph2"
          class="lg:text-lg mb-1"
          data-aos="fade-left"
          :data-aos-delay="values.reversed ? 500 : 600"
        >
          {{ values.paragraph2 }}
        </p>
        <p
          v-if="values.paragraph3"
          class="lg:text-lg"
          data-aos="fade-left"
          :data-aos-delay="values.reversed ? 600 : 700"
        >
          {{values.paragraph3 }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  values: {
    type: Object,
    required: true,
  },
});
// defineProps({
//   imgSrc: {
//     type: String,
//     required: true,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   paragraph1: {
//     type: String,
//     required: true,
//   },
//   paragraph2: {
//     type: String,
//     required: false,
//   },
//   paragraph3: {
//     type: String,
//     required: false,
//   },
//   reversed: {
//     type: Boolean,
//     default: false, // Default value is false, meaning the image will be on the right
//   },
// });
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
