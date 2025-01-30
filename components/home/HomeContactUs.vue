<template>
  <section class="py-8">
    <!-- Top Div -->
    <div
      class="text-center mb-8"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <div
        class="flex justify-center mb-4"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <NuxtLink :to="localePath('/contact')">
          <component :is="contactItems.topIcon" />

        </NuxtLink>
      </div>
      <h1
        class="text-2xl font-bold"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        {{ contactItems.title }}
      </h1>
    </div>

    <!-- Bottom Div -->
    <div
      class="px-3 lg:container grid grid-cols-1 md:grid-cols-3 gap-5 items-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        v-for="(item, index) in contactItems.items"
        :key="index"
        class="p-1 bg-white rounded flex flex-col items-center"
        data-aos="fade-up"
        :data-aos-delay="index * 200"
        data-aos-duration="800"
      >
        <component :is="item.icon" class="mb-4" data-aos="zoom-in" />
        <h3
          class="text-lg font-bold mb-2"
          data-aos="fade-right"
          data-aos-duration="800"
          :data-aos-delay="index * 150"
        >
          {{ item.title }}
        </h3>
        <p
          v-for="(paragraph, pIndex) in item.content"
          :key="pIndex"
          class="text-sm"
          :class="{ 'mt-3': pIndex > 0 }"
          data-aos="fade-left"
          :data-aos-delay="(index * 200) + (pIndex * 100)"
          data-aos-duration="800"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();
const localePath = useLocalePath();
defineProps({
  contactItems: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
