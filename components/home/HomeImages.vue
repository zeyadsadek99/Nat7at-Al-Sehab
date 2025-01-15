<template>
  <div class="bg-secondary mt-32 pb-16">
    <GlobalTitle :title="title" :show-button="true" :path="path" />

    <!-- Image Section -->
    <div class="px-3 lg:container space-y-8">
      <!-- First Row: 3 Images -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          v-for="(img, index) in firstRowImages"
          :key="index"
          class="relative "
          data-aos="zoom-in"
          :data-aos-delay="index * 100"
        >
          <div
            class="relative group h-[200px] sm:h-[226px]"
            data-aos="fade-in"
            :data-aos-delay="index * 70"
          >
            <img
              :src="img.image"
              :alt="img.alt"
              :style="{
                borderRadius: `${img.borderRadius.topLeft} ${img.borderRadius.topRight} ${img.borderRadius.bottomRight} ${img.borderRadius.bottomLeft}`,
              }"
              class="size-full  object-cover"
            />
            <div
              class="absolute size-full inset-0 bg-custom-gradient1 bg-opacity-0 invisible rounded-md opacity-0 group-hover:opacity-100 group-hover:visible group-hover:bg-opacity-50 transition-all duration-100"
              :style="{
                borderRadius: `${img.borderRadius.topLeft} ${img.borderRadius.topRight} ${img.borderRadius.bottomRight} ${img.borderRadius.bottomLeft}`,
              }"
              data-aos="fade-in"
              :data-aos-delay="300"
            >
              <div
                class="relative flex items-center justify-center flex-col h-full"
              >
                <button
                  class="bg-white cursor-pointer whitespace-nowrap text-primary font-medium rounded-full px-[30px] lg:px-[45px] py-[10px] hover:bg-primary hover:text-white transition-colors duration-100"
                  type="button"
                  @click="openImageModal(img.image)"
                  data-aos="zoom-in-up"
                  :data-aos-delay="400"
                >
                  {{ t("BUTTONS.SHOW_IMAGE") }}
                </button>
                <!-- <div class="bottom-8 absolute text-center">
                  <h3
                    class="text-white text-[27px] font-bold my-4"
                    data-aos="fade-down"
                    :data-aos-delay="500"
                  >
                    {{ title }}
                  </h3>
                  <p
                    class="text-white text-sm"
                    data-aos="fade-up"
                    :data-aos-delay="600"
                  >
                    {{ subtitle }}
                  </p>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Second Row: 4 Images -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div
          v-for="(img, index) in secondRowImages"
          :key="index"
          class="relative"
          data-aos="zoom-in"
          :data-aos-delay="index * 150"
        >
        <div
            class="relative group h-[200px] sm:h-[226px]"
            data-aos="fade-in"
            :data-aos-delay="index * 70"
          >
            <img
              :src="img.image"
              :alt="img.alt"
              :style="{
                borderRadius: `${img.borderRadius.topLeft} ${img.borderRadius.topRight} ${img.borderRadius.bottomRight} ${img.borderRadius.bottomLeft}`,
              }"
              class="size-full object-cover"
            />
            <div
              class="absolute size-full inset-0 bg-custom-gradient1 bg-opacity-0 invisible rounded-md opacity-0 group-hover:opacity-100 group-hover:visible group-hover:bg-opacity-50 transition-all duration-100"
              :style="{
                borderRadius: `${img.borderRadius.topLeft} ${img.borderRadius.topRight} ${img.borderRadius.bottomRight} ${img.borderRadius.bottomLeft}`,
              }"
              data-aos="fade-in"
              :data-aos-delay="300"
            >
              <div
                class="relative flex items-center justify-center flex-col h-full"
              >
                <button
                  class="bg-white cursor-pointer whitespace-nowrap text-primary font-medium rounded-full px-[30px] lg:px-[45px] py-[10px] hover:bg-primary hover:text-white transition-colors duration-100"
                  type="button"
                  @click="openImageModal(img.image)"
                  data-aos="zoom-in-up"
                  :data-aos-delay="400"
                >
                  {{ t("BUTTONS.SHOW_IMAGE") }}
                </button>
                <!-- <div class="bottom-8 absolute text-center">
                  <h3
                    class="text-white text-[27px] font-bold my-4"
                    data-aos="fade-down"
                    :data-aos-delay="500"
                  >
                    {{ title }}
                  </h3>
                  <p
                    class="text-white text-sm"
                    data-aos="fade-up"
                    :data-aos-delay="600"
                  >
                    {{ subtitle }}
                  </p>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <teleport to="body" v-if="imageModal.isShow">
      <div
        @click="closeImageModal"
        class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        
      >
        <div
          class="relative  lg:size-[80%] "
          @click.stop
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <img
            class="size-full rounded-xl object-cover"
            :src="imageModal.imageData"
            alt="image"
          />
          <button
            class="absolute top-4 end-4 text-black bg-white p-2 rounded-full"
            @click="togglePopup"
          >
            <IconsOptions />
          </button>
          <div
            v-if="showPopup"
            class="absolute top-24 end-4 flex flex-col items-end gap-4 bg-white p-4 rounded-md shadow-lg z-10"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <button
              @click="downloadImage(imageModal.imageData)"
              class="text-primary font-medium hover:underline"
            >
              Download Image
            </button>
            <button
              @click="downloadImage(imageModal.imageData)"
              class="text-primary font-medium hover:underline"
            >
              Watch
            </button>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
const { t } = useI18n();

defineProps({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  firstRowImages: {
    type: Array,
    required: true,
  },
  secondRowImages: {
    type: Array,
    required: true,
  },
});
const modalImage = ref(null);
const isLoading = ref(false);
const showPopup = ref(false);

const imageModal = reactive({
  isShow: false,
  imageData: null,
});

function openImageModal(img) {
  console.log("img");
  imageModal.isShow = true;
  imageModal.imageData = img;
  document.body.style.overflow = "hidden"; // Lock scrolling
}
function closeImageModal() {
  imageModal.isShow = false;
  imageModal.imageData = null;
  showPopup.value = false; // Close popup
  document.body.style.overflow = ""; // Unlock scrolling
}
function downloadImage(imageUrl) {
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = "image.jpg";
  link.click();
}

// Toggle Popup
function togglePopup() {
  showPopup.value = !showPopup.value;
}
</script>

<style scoped></style>
