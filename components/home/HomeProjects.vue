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
          <!-- Label -->
          <div
            v-if="item.isCompleted !== null"
            class="absolute top-2 start-2 z-10 px-8 text-center font-medium py-2 rounded text-sm"
            :class="
              item.isCompleted
                ? 'bg-[#EDF0F7] text-primary'
                : 'bg-[#F9F4EF] text-[#A6720C]'
            "
            data-aos="zoom-in"
            data-aos-duration="300"
          >
            {{
              item.isCompleted
                ? t("items.completed")
                : t("items.under_construction")
            }}
          </div>

          <!-- Image -->
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full lg:h-[300px] xl:max-h-[333px] rounded-md enhanced-image"
            data-aos="zoom-in"
            data-aos-duration="1000"
          />

          <div class="p-5 flex flex-col">
            <!-- Title -->
            <h1
              class="font-bold text-xl lg:text-[26px] mb-2"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              {{ item.title }}
            </h1>

            <!-- Paragraph -->
            <p
              class="text-sm font-medium mb-4"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              {{ item.description }}
            </p>
            <!-- Button -->
            <NuxtLink
              :to="localePath(item.link)"
              class="group mt-2 px-6 lg:px-10 w-44 lg:w-56 py-2 bg-primary whitespace-nowrap text-white rounded-md flex items-center gap-2 transition-transform duration-300 ease-in-out transform"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <p
                class="mb-2 lg:text-lg font-medium transition-transform duration-300 ease-in-out group-hover:no-underline"
              >
                {{ t("items.project_details") }}
              </p>
              <IconsRightarrow
                class="size-5 transition-transform duration-300 ease-in-out"
                :class="
                  locale === 'ar'
                    ? 'rotate-180 group-hover:-translate-x-1'
                    : 'group-hover:translate-x-1'
                "
              />
            </NuxtLink>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { locale, t } = useI18n();
const route = useRoute();

const props = defineProps({
  items: {
    type: Array as () => any[], // Explicitly declare the array type to hold any type
    required: true,
  },
});
</script>

<style scoped>
.enhanced-image {
  filter: brightness(0.9); /* Reduce brightness and add slight blur */
  transition: filter 0.3s ease; /* Smooth transition for hover effect */
}

.enhanced-image:hover {
  filter: brightness(1) blur(0); /* Restore brightness and remove blur on hover */
}
</style>
