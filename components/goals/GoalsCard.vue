<template>
  <section class=" ">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="[
        'px-3 lg:container flex flex-col lg:flex-row items-center gap-6 lg:gap-11 py-10 lg:py-20 justify-between',
        item.reversed ? 'lg:flex-row-reverse' : '',
      ]"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <!-- Image -->
      <div
        class="flex-shrink-0 max-w-[632px] max-lg:justify-center lg:w-auto"
        data-aos="zoom-in"
        data-aos-duration="800"
        :data-aos-delay="index * 200"
      >
        <img
          :src="item.imgSrc"
          alt="Dynamic Image"
          class="w-full h-auto lg:max-h-[460px] object-cover rounded-2xl"
        />
      </div>

      <!-- Text Content -->
      <div
        class="flex flex-col gap-4 lg:gap-6 max-lg:text-center"
        data-aos="fade-up"
        data-aos-duration="600"
        :data-aos-delay="300"
      >
        <h1
          class="text-xl lg:text-[2.225rem] leading-[50px] font-bold mb-2"
          data-aos="fade-right"
          :data-aos-delay="300"
        >
          {{ item.title }}
        </h1>
        <p
          class="text-base lg:text-lg mb-1"
          data-aos="fade-left"
          :data-aos-delay="300"
        >
          {{ item.paragraph1 }}
        </p>
        <p
          v-if="item.paragraph2"
          class="text-base lg:text-lg mb-1"
          data-aos="fade-left"
          :data-aos-delay="400"
        >
          {{ item.paragraph2 }}
        </p>
        <p
          v-if="item.paragraph3"
          class="text-base lg:text-lg"
          data-aos="fade-left"
          :data-aos-delay="500"
        >
          {{ item.paragraph3 }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  items: {
    type: Array as () => {
      imgSrc: string;
      title: string;
      paragraph1: string;
      paragraph2?: string;
      paragraph3?: string;
      reversed?: boolean;
    }[],
    required: true,
  },
});
</script>
