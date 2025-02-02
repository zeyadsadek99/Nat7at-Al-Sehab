<template>
  <section class="bg-secondary py-16">
    <div
      class="text-text px-3 lg:container max-w-lg"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <!-- Image -->
      <img
        :src="services.imageSrc"
        :alt="services.imageAlt"
        class="w-full h-[400px] lg:h-[500px] object-cover rounded-xl mb-12"
        data-aos="zoom-in"
        data-aos-duration="800"
      />

      <div class="ps-4 lg:pe-[400px]">
        <!-- Title -->
        <h1
          class="text-2xl lg:text-[27px] font-bold mb-4"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          {{ services.title }}
        </h1>

        <!-- Description -->
        <p
          v-if="services.description"
          class="lg:leading-8 space-y-4"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          {{ services.description }}
        </p>

        <!-- List -->
        <ol
          class="text-md leading-8 space-y-4 mt-4 list-decimal"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <li
            v-for="(item, index) in services.listItems"
            :key="index"
            class="flex items-start"
            data-aos="fade-right"
            :data-aos-delay="index * 200"
            data-aos-duration="800"
          >
            <span
              class="font-semibold text-lg mr-2"
              data-aos="zoom-in"
              :data-aos-delay="index * 300"
              data-aos-duration="500"
            >
              {{ index + 1 }}.
            </span>
            <div>
              <span
                class="font-semibold"
                data-aos="fade-right"
                :data-aos-delay="index * 250"
                data-aos-duration="600"
              >
                {{ item.title }}
              </span>
              <ul
                v-if="item.subItems && item.subItems.length"
                class="list-disc list-inside pl-6 mt-1 text-sm space-y-1"
                data-aos="fade-left"
                :data-aos-delay="index * 300 + 100"
                data-aos-duration="700"
              >
                <li
                  v-for="(subItem, subIndex) in item.subItems"
                  :key="subIndex"
                >
                  {{ subItem }}
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>
const props =defineProps({
  services: {
    type: Object,
    required: true,
  },
});// const props = defineProps({
//   imageSrc: {
//     type: String,
//     required: true,
//   },
//   imageAlt: {
//     type: String,
//     default: "Image description",
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     default: "",
//   },
//   listItems: {
//     type: Array,
//     required: true,
//     default: () => [],
//   },
// });
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>
