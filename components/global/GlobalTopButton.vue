<template>
  <div class="lg:container">
    <!-- Back to Top Button -->
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="group fixed end-3 lg:end-16 z-50 bottom-16 text-primary p-3 lg:p-4 rounded-full border border-primary transition duration-300"
      aria-label="Back to Top"
    >
      <IconsRightarrow class="transfrom transition-transform duration-300 ease-in-out group-hover:-translate-y-1 -rotate-90 size-6" />
    </button>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const handleScroll = () => {
  // Show  200px down
  isVisible.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
