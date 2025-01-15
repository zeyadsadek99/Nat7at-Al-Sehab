<template>
  <div
    class="px-3 lg:container grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-9 pb-10"
    data-aos="fade-up"
    data-aos-duration="700"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="[
        index % 10 === 6 || index % 10 === 0
          ? 'col-span-1 lg:col-span-2'
          : 'col-span-1',
      ]"
      :style="{ boxShadow: '0px 0px 12px 0px #5050500D' }"
      class="p-2.5 bg-white rounded-lg"
      data-aos="zoom-in"
      :data-aos-delay="index * 50"
    >
      <!-- Image -->
      <div
        class="relative group h-32 sm:h-[300px]"
        data-aos="fade-in"
        :data-aos-delay="index * 70"
      >
        <img
          :src="item.image[0]"
          alt="Image"
          class="h-full w-full rounded-md border object-cover shadow-md"
        />
        <!-- Overlay -->
        <div
          class="absolute w-full h-full inset-0 bg-custom-gradient1 bg-opacity-0 invisible rounded-md opacity-0 group-hover:opacity-100 group-hover:visible group-hover:bg-opacity-50 transition-all duration-100"
          data-aos="fade-in"
          :data-aos-delay="300"
        >
          <div
            class="relative flex items-center justify-center flex-col h-full"
          >
            <button
              class="bg-white cursor-pointer whitespace-nowrap text-primary font-medium rounded-full px-[10px] lg:px-[55px] py-1.5 lg:py-[10px] hover:bg-primary hover:text-white transition-colors duration-75"
              type="button"
              @click="openImageModal(item)"
              data-aos="zoom-in-up"
              :data-aos-delay="400"
            >
              {{ t("BUTTONS.SHOW_IMAGE") }}
            </button>
            <div
              class="hidden lg:flex lg:flex-col bottom-8 absolute text-center"
            >
              <h1
                class="text-white lg:text-[27px] font-bold my-4"
                data-aos="fade-down"
                :data-aos-delay="500"
              >
                {{ item.title }}
              </h1>
              <p
                class="text-white text-sm"
                data-aos="fade-up"
                :data-aos-delay="600"
              >
                {{ item.subtitle }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Teleport -->
    <teleport to="body" v-if="imageModal.isShow">
      <div
        @click="closeImageModal"
        class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40"
      >
        <div
          class="relative w-[80%] h-[50%] lg:size-[80%] "
          @click.stop
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <!-- Swiper -->
          <Swiper
            :modules="modules"
            :pagination="{ clickable: true }"
            :loop="true"
            :dir="langDirection ? 'ltr' : 'rtl'"
            :key="langDirection"
            :slides-per-view="1"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="h-full rounded-xl"
          >
            <SwiperSlide
              v-for="(image, index) in imageModal.imageData.image"
              :key="index"
            >
              <img
                @click="closePopup"
                class="w-full h-full object-fill rounded-xl"
                :src="image"
                :alt="'Image ' + index"
              />
            </SwiperSlide>
          </Swiper>
          <div>
            <div
              class="custom-button-prev absolute z-50 flex justify-center items-center size-10 bg-[#FFFFFF33] text-[#F5F5FC] border border-[#F5F5FC] rounded-full cursor-pointer -right-4 md:-right-16 top-1/2"
              @click="goToPrevSlide"
            >
              <lazy-icons-rightarrow />
            </div>
            <div
              class="custom-button-next absolute z-10 flex justify-center items-center size-10 bg-[#FFFFFF33] text-[#F5F5FC] border border-[#F5F5FC] rounded-full cursor-pointer -left-4 md:-left-16 top-1/2 transform rotate-180"
              @click="goToNextSlide"
            >
              <lazy-icons-rightarrow />
            </div>
          </div>
          <button
            class="absolute z-10 top-4 end-4 text-black bg-white p-1 lg:p-2 rounded-full"
            @click="togglePopup"
          >
            <IconsOptions class="size-7 lg:size-11" />
          </button>
          <div
            v-if="showPopup"
            class="absolute top-4 end-4 flex flex-col items-start justify-center gap-4 bg-white p-4 rounded-md shadow-lg z-10"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <div class="flex items-center gap-2 text-text">
              <IconsCalendar />
              <p class="font-bold text-sm">
                {{ imageModal.imageData.createdAt }}
              </p>
            </div>

            <!-- Download Image  
                  @click="downloadImage(imageModal.imageData.image)"
 
            -->
            <div class="flex items-center gap-2 text-text">
              <IconsDownload class="size-6" />
              <button
                @click="downloadImage"
                class="font-bold mb-1 hover:underline"
              >
                {{ t("LABELS.DOWNLOAD") }}
              </button>
            </div>

            <!-- Watchers -->
            <div class="flex items-center gap-2 text-text">
              <IconsEye class="size-6" />
              <p class="font-bold text-sm">
                {{ getWatcherCount(imageModal.imageData.image) }}
                {{ t("LABELS.Views") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { useWatcherStore } from "@/stores/watchers";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";
const { t } = useI18n();
let swiperInstance = null;

const onSwiper = (swiper) => {
  swiperInstance = swiper;
};

const onSlideChange = () => {};

const goToNextSlide = () => {
  console.log("12");

  if (swiperInstance) {
    swiperInstance.slideNext();
  }
};

const goToPrevSlide = () => {
  if (swiperInstance) {
    swiperInstance.slidePrev();
  }
};

const modules = [Navigation, Pagination, Scrollbar];
// Props
defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

// Reactive state for modal
const imageModal = reactive({
  isShow: false,
  imageData: null,
});

const showPopup = ref(false);

// Watcher Store
const watcherStore = useWatcherStore();

// Open image modal
function openImageModal(item) {
  imageModal.isShow = true;
  imageModal.imageData = item;
  watcherStore.incrementWatcher(item.image);
  document.body.style.overflow = "hidden"; // Lock scrolling
}

// Close image modal
function closeImageModal() {
  imageModal.isShow = false;
  imageModal.imageData = null;
  showPopup.value = false;
  document.body.style.overflow = "";
}

// Toggle Popup
function togglePopup() {
  showPopup.value = !showPopup.value;
}
function closePopup() {
  showPopup.value = false;
}

// Get watcher count
function getWatcherCount(imageKey) {
  return watcherStore.getWatcherCount(imageKey);
}

// Download Image
function downloadImage() {
  if (swiperInstance) {
    const activeIndex = swiperInstance.realIndex; // Get the real active index
    const imageUrl = imageModal.imageData.image[activeIndex];
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = `image-${activeIndex + 1}.jpg`;
      link.click();
    }
  }
}

// function downloadImage(imageUrl) {
//   const link = document.createElement("a");
//   link.href = imageUrl;
//   link.download = "image.jpg";
//   link.click();
// }
</script>

<style scoped>
.group-hover\:opacity-100 {
  opacity: 1 !important;
}
.button:hover {
  background-color: #f3f4f6;
  color: #1f2937;
}

.popup {
  animation: fade-in 0.3s ease-in-out;
}
.loader {
  animation: spin 1s linear infinite;
  border: 4px solid #e5e7eb;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  width: 32px;
  height: 32px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
