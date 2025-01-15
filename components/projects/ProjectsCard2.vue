<template>
  <div class="bg-secondary">
    <div
      class="flex flex-col lg:flex-row items-center justify-center mt-28 gap-16 px-3 lg:container py-28"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <!-- Image Section -->
      <img
        :src="image"
        alt="image"
        class="w-full max-w-[745px] max-h-[425px] rounded-[24px] object-cover"
        data-aos="zoom-in"
        data-aos-delay="300"
      />

      <!-- Content Section -->
      <div
        class="max-lg:text-center text-text flex flex-col gap-8"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <div class="grid grid-cols-2 gap-8">
          <div
            v-for="(stat, index) in statistics"
            :key="index"
            class="text-center"
            data-aos="fade-up"
            :data-aos-delay="index * 200"
          >
            <h1
              class="text-[36px] font-bold font-montserrat"
              data-aos="fade-down"
              :data-aos-delay="index * 250"
            >
              {{ stat.value }}
            </h1>
            <p
              class="text-[18px] font-medium"
              data-aos="fade-up"
              :data-aos-delay="index * 300"
            >
              {{ t(`LABELS.${stat.label}`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  
  statistics: {
    type: Array as () => any[], // Explicitly declare the array type to hold any type
    required: true,
    default: () => [],
  },
});

  </script>
  
  <style scoped>

  </style>
  