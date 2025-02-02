<template>
  <section class="relative px-3 lg:container py-16">
    <div
      class=" flex flex-col lg:h-[480px] lg:flex-row bg-white overflow-hidden"
    >
      <!-- Left -->
      <div
        :class="[
          'lg:w-1/2 w-full bg-custom-gradient px-8 lg:px-28 py-12  lg:py-16 gap-2   text-white flex flex-col max-lg:items-center justify-center ',
          isSwitched
            ? 'lg:order-2 lg:rounded-e-2xl'
            : 'lg:order-1 lg:rounded-s-2xl',
        ]"
      >
        <div
          class="content-container flex flex-col text-center lg:text-start items-center justify-center"
          style="min-height: 240px"
        >
          <h1
            v-if="!isSwitched"
            class="text-[20px] lg:text-[30px] font-medium text-center mb-4"
          >
            {{ numbers.title }}
          </h1>
          <p class="text-sm lg:text-[19px] leading-8 font-medium">
            {{ currentDescription }}
          </p>
        </div>
        <NuxtLink
          :to="localePath(numbers.link)"
          class="group mt-2 px-6 py-1 max-w-[137px] bg-white text-primary rounded-lg flex items-center gap-2"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <p class="mb-2 whitespace-nowrap">{{ t("view_more") }}</p>
          <IconsRightarrow
            class="size-4 transition-transform duration-300 ease-in-out"
            :class="
              locale === 'ar'
                ? ' rotate-180 group-hover:-translate-x-1'
                : 'group-hover:translate-x-1'
            "
          />
        </NuxtLink>
      </div>

      <!-- Right -->
      <div
        :class="[
          'lg:w-1/2 w-full overflow-hidden max-lg:h-[264px]',
          isSwitched
            ? 'lg:order-1 lg:rounded-s-2xl'
            : 'lg:order-2 lg:rounded-e-2xl',
        ]"
        @click="switchContent"
      >
        <img
          :src="currentImageSrc"
          :alt="numbers.imageAlt"
          class="size-full object-cover cursor-pointer"
        />
      </div>
    </div>

    <!-- Bottom Overlay -->
    <div
      class="relative lg:-mt-9 bg-white rounded-full px-10 lg:px-36 py-8 z-10"
      style="border-radius: 50% 50% 60% 60%"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <div class="grid grid-cols-2 md:grid-cols-4 gap-[70px] text-center">
        <div
          v-for="(item, index) in numbers.stats"
          :key="index"
          class="flex flex-col gap-1 items-center"
          data-aos="fade-up"
          :data-aos-delay="index * 200"
        >
          <h3
            class="text-3xl lg:text-[41px] font-bold text-primary font-montserrat"
          >
            {{ item.number }}
          </h3>
          <p class="lg:text-xl text-text whitespace-nowrap">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();
const localePath = useLocalePath();

// const props = defineProps({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   imageSrc: {
//     type: String,
//     required: true,
//   },
//   imageAlt: {
//     type: String,
//     default: "Section Image",
//   },
//   stats: {
//     type: Array as () => any[], // Explicitly declare the array type to hold any type
//     required: true,
//   },
//   alternateDescription: {
//     type: String,
//     required: true,
//   },
//   alternateImageSrc: {
//     type: String,
//     required: true,
//   },
//   link: {
//     type: String,
//     required: true,
//   },
// });
const props =defineProps({
  numbers: {
    type: Object,
    required: true,
  },
});
// Reactive state for switching content
const isSwitched = ref(false);

// Compute current content based on state
const currentDescription = computed(() =>
  isSwitched.value ? props.numbers.alternateDescription : props.numbers.description
);
const currentImageSrc = computed(() =>
  isSwitched.value ? props.numbers.alternateImageSrc : props.numbers.imageSrc
);

// Switch content on image click
const switchContent = () => {
  isSwitched.value = !isSwitched.value;
};
</script>

<style scoped></style>
