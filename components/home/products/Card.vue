<script lang="ts" setup>
type Props = {
  title: string;
  products: {
    id: number;
    name: string;
    image: string;
  }[];
};

defineProps<Props>();
</script>

<template>
  <div class="bg-[#0B3A4A] p-4 rounded-3xl pb-8">
    <h3 class="text-center text-2xl text-white mb-4">{{ title }}</h3>
    <HomeProductsSwiper :products="products" />
  </div>
</template>

<style lang="scss" scoped></style>
