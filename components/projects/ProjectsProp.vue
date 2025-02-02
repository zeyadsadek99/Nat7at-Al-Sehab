<template>
  <div class="main py-7 lg:py-12">
    <div class="px-3 lg:container">
      <!-- Title Section -->
      <div
        class="text-center flex flex-col gap-2 lg:px-56 mb-8"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h1 class="lg:text-[24px] font-bold text-[#0F2239]">{{ projects.title }}</h1>
        <div
          class="flex gap-4 items-center justify-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div class="w-20 lg:w-[150px] h-1 bg-primary"></div>
          <div class="size-4 bg-primary rounded-s4 rotate-45"></div>
          <div class="w-20 lg:w-[150px] h-1 bg-primary"></div>
        </div>
        <p
          class="text-md text-[#546881]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {{ projects.subtitle }}
        </p>
      </div>

      <!-- Features Section -->
      <div
        class="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          v-for="(feature, index) in projects.features"
          :key="index"
          class="group flex items-center bg-white gap-4 p-3 border rounded-lg shadow-md transition-all duration-300 hover:border-primary"
          data-aos="zoom-in"
          :data-aos-delay="index * 100"
        >
          <div
            class="w-[68px] h-[70px] flex items-center justify-center p-4 bg-[#E8EFFA] rounded"
            data-aos="zoom-in"
            :data-aos-delay="index * 150"
          >
            <component :is="feature.icon" />
          </div>
          <div
            class="flex-col flex gap-2 pe-11"
            data-aos="fade-up"
            :data-aos-delay="index * 200"
          >
            <div class="flex gap-3 items-center">
              <p
                class="text-3xl font-poppins font-semibold text-[#BAC6E4] transition-colors duration-300 group-hover:text-primary"
                data-aos="fade-right"
                :data-aos-delay="index * 250"
              >
                {{ String(index + 1).padStart(2, "0") }}
              </p>
              <p class="text-sm font-bold text-text">{{ feature.text }}</p>
            </div>
            <p
              v-if="feature.extraText"
              class="text-xs text-[#696D79] transition-colors duration-300 group-hover:text-[#212C4F]"
              data-aos="fade-left"
              :data-aos-delay="index * 300"
            >
              {{ feature.extraText }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

//  icons
import IconsKey from "@/components/icons/key.vue";
import IconsLike from "@/components/icons/like.vue";
import IconsCommerical from "@/components/icons/commerical.vue";
import IconsTreasure from "@/components/icons/treasure.vue";
import IconsDiscount from "@/components/icons/discount.vue";
import IconsVoucher from "@/components/icons/voucher.vue";

const props =defineProps({
  projects: {
    type: Object,
    required: true,
  },
});

// const props = defineProps({
//   title: {
//     type: String,
//     required: true,
//   },
//   subtitle: {
//     type: String,
//     required: false,
//   },

//   features: {
//     type: Array as () => any[], // Explicitly declare the array type to hold any type
//     required: false,
//   },
//   active: {
//     type: Boolean,
//     required: false,
//     default: false,
//   },
// });

//  default
const defaultFeatures = [
  { text: "Porcelain Ceramic Floors", icon: IconsKey },
  { text: "Independent Entrance", icon: IconsLike },
  { text: "High-Quality Wooden Doors", icon: IconsCommerical },
  { text: "Independent Water & Electricity Meters", icon: IconsTreasure },
  { text: "Prime Location", icon: IconsDiscount },
  { text: "Aluminum Windows with Glass", icon: IconsVoucher },
];

const features = ref(props.projects.features?.length ? props.projects.features : defaultFeatures);
</script>

<style scoped>
.main {
  position: relative;
  background-color: white;
  z-index: 5;
}

.main::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("assets/icons/backPro.svg");
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  z-index: -1;
}
</style>
