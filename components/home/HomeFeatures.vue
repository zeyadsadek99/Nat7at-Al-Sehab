<template>
  <div class="px-3 lg:container py-16">
    <section class="bg-primaryOpacity4 py-8 rounded-[20px]">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex flex-col items-center"
          data-aos="fade-up"
          :data-aos-delay="index * 200"
        >
          <div
            class="size-16 flex items-center justify-center rounded-full mb-4"
            data-aos="zoom-in"
            :data-aos-delay="index * 200"
          >
            <component :is="item.icon" />
          </div>
          <h1
            class="text-lg font-bold text-text text-center"
            data-aos="fade-up"
            :data-aos-delay="(index * 200) + 100"
          >
            {{ item.title }}
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
