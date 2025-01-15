<template>
  <section
    class="w-full px-3 lg:container  overflow-hidden"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <img
      :src="imgSrc"
      alt="Description of the image"
      class="w-full h-auto rounded-xl block"
      data-aos="zoom-in"
      data-aos-delay="200"
    />
  </section>
</template>


<script setup lang="ts">

const props = defineProps({
  imgSrc: {
    type: String,
    required: true, 
  },
});
</script>

<style scoped>
</style>
