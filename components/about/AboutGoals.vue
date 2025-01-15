<template>
  <section class="py-16 text-center">
    <div
      class="px-3 lg:container text-primary max-w-3xl mx-auto space-y-14"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <!-- Goals Section -->
      <div
        class="space-y-9 bg-secondary py-7 px-3 lg:px-32"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <div
          class="flex items-center text-center justify-center gap-3"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <component :is="goals.icon" class="size-8" />
          <h1 class="text-2xl lg:text-3xl font-medium">
            {{ goals.title }}
          </h1>
        </div>
        <div>
          <p
            v-for="(desc, index) in goals.descriptions"
            :key="index"
            class="text-base text-textsub"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            {{ desc }}
          </p>
        </div>
      </div>

      <!-- Vision Section -->
      <div
        class="space-y-9 bg-secondary py-7 px-3 lg:px-32"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <div
          class="flex items-center justify-center gap-3"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <component :is="vision.icon" class="size-8" />
          <span class="text-2xl lg:text-3xl font-medium">
            {{ vision.title }}
          </span>
        </div>
        <p
          class="text-base text-textsub"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {{ vision.description }}
        </p>
      </div>

      <!-- Values Section -->
      <div
        class="space-y-9 bg-secondary py-7 px-3 lg:px-16"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <div
          class="flex items-center justify-center gap-3"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <component :is="values.icon" class="size-8" />
          <span class="text-2xl lg:text-3xl font-medium">
            {{ values.title }}
          </span>
        </div>
        <div
          class="grid-cols-2 grid lg:grid-cols-4 text-[#0A0D18] place-items-center  bg-white gap-3  lg:gap-6 py-5 px-3 lg:container mt-4"
        >
          <div
            v-for="(value, index) in values.items"
            :key="index"
            class="flex flex-row justify-center items-center px-3 lg:px-6 py-4 gap-4"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <component :is="value.icon" class="size-10 lg:size-12" />
            <p class="lg:text-lg mb-2">{{ value.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
defineProps({
  goals: {
    type: Object,
    required: true,
  },
  vision: {
    type: Object,
    required: true,
  },
  values: {
    type: Object,
    required: true,
  },
});
</script>


<style scoped>
img {
  object-fit: cover;
}
</style>
