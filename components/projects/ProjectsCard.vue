<template>
  <div
    class="flex flex-col lg:flex-row bg-secondary items-center gap-16 px-6 lg:px-20 py-36"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <!-- Image Section -->
    <img
      :src="card.image"
      alt="Project"
      class="w-full max-w-[598px] rounded-[24px] object-cover h-auto"
      data-aos="zoom-in"
      data-aos-delay="300"
    />
    
    <!-- Text Section -->
    <div
      class="max-lg:text-center w-full max-w-[450px] text-text relative lg:start-0"
      data-aos="fade-right"
      data-aos-delay="500"
    >
      <h1 class="text-[36px] font-bold" data-aos="fade-down" data-aos-delay="600">
        {{ card.title }}
      </h1>
      <p class="text-[17px] mt-4" data-aos="fade-up" data-aos-delay="700">
        {{ card.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props =defineProps({
  card: {
    type: Object,
    required: true,
  },
});
// const props = defineProps({
//   title: {
//     required: true,
//   },
//   description: {
//     required: true,
//   },
//   image: {
//     required: true,
//     default: "/assets/icons/logo.svg",
//   },
//   //   label: {
//   //     type: String,
//   //     required: false,
//   //   },
//   //   optionLabel: {
//   //     default: "name",
//   //     required: false,
//   //   },
//   //   id: {
//   //     type: String,
//   //     required: true,
//   //   },
//   //   placeholder: {
//   //     required: true,
//   //   },
//   //   itemValue: {
//   //     requred: true,
//   //   },
// });
//     type Props = {
//   blog: Blog;
// };

const { locale, t } = useI18n();
const localePath = useLocalePath();

// defineProps<Props>();
</script>

<style scoped></style>
