<template>
  <div
    class="flex flex-col items-center justify-center lg:flex-row gap-8"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <!-- Cards -->
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="flex flex-col items-center text-center gap-4 bg-white p-6 rounded-lg"
      data-aos="zoom-in"
      :data-aos-delay="index * 200"
    >
      <!-- Icon -->
      <component
        :is="card.icon"
        data-aos="fade-down"
        :data-aos-delay="index * 250"
      />

      <!-- Title -->
      <h1
        class="font-bold text-lg"
        data-aos="fade-up"
        :data-aos-delay="index * 300"
      >
        {{ card.title }}
      </h1>

      <!-- Buttons -->
      <div class="flex gap-2">
        <button
          v-for="(button, btnIndex) in card.buttons"
          :key="btnIndex"
          class="bg-primary text-white px-9 py-3 rounded-lg flex items-center gap-2  transition-all duration-300 transform hover:scale-105 hover:bg-[#14275A] hover:shadow-md shadow-sm"
          data-aos="zoom-in"
          :data-aos-delay="btnIndex * 150"
        >
          <component :is="button.icon" class="text-white text-lg" />
          <p class="font-medium mb-1">{{ button.text }}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  cards: {
    type: Array as () => any[], // Explicitly declare the array type to hold any type
    required: true,
  },
});

const { t } = useI18n();
</script>
