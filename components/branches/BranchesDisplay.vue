<template>
  <div class="">
    <div
      class="px-3 lg:container grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-6"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="relative border rounded-xl bg-white"
        data-aos="fade-up"
        :data-aos-delay="index * 50"
        data-aos-duration="800"
      >
        <template v-if="item">
          <!-- Image -->
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full lg:h-[300px] xl:max-h-[333px] rounded-md"
            data-aos="zoom-in"
            data-aos-duration="1000"
          />

          <div class="p-5 flex flex-col gap-4">
            <!-- Title -->
            <h1
              class="font-bold text-xl lg:text-[26px] "
              data-aos="fade-right"
              data-aos-duration="800"
            >
              {{ item.title }}
            </h1>

            <!-- Paragraph -->
            <p
              class="text-sm font-medium "
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              {{ item.description }}
            </p>

            <!-- Button -->
            <button
              class=" bg-primary text-white px-7 inline-flex py-2 rounded-lg self-start items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:bg-[#14275A] hover:shadow-md shadow-sm"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <IconsEye
                
              />
              <p class="mb-1 lg:text-lg font-medium">{{ item.buttonText }}</p>
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { locale, t } = useI18n();

const props = defineProps({
  items: {
    type: Array as () => any[], // Explicitly declare the array type to hold any type
    required: true,
  },
});
</script>

<style scoped></style>
