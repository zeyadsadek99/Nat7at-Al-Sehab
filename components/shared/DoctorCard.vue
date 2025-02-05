<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <img
        :src="card?.image"
        :alt="card?.title"
        class="w-full h-48 object-cover"
      />

      <div class="p-4">
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <div class="flex-1">
              <h3 class="text-lg font-semibold">{{ card?.title }}</h3>
              <p class="text-gray-600 text-sm mb-3">{{ card?.subtitle }}</p>
              <div class="flex gap-2">
                <div
                  v-for="(item, itemIndex) in card.items"
                  :key="itemIndex"
                  class="px-2 py-1 bg-gray-100 rounded text-sm"
                >
                  {{ item }}
                </div>
              </div>
            </div>
            <p class="px-1 py-1 bg-gray-100 rounded text-sm">
              {{ card?.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  cards: {
    type: Array ,
    required: true,
  },
});
</script>

<style scoped></style>
