<script lang="ts" setup>
type Props = {
  title: string;
};

defineProps<Props>();
</script>

<template>
  <div
    class="section_title"
    data-aos="fade-in"
    data-aos-delay="100"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
  >
    <h3>{{ title }}</h3>
  </div>
</template>

<style lang="scss">
.section_title {
  @apply mb-20 text-center;
  h3 {
    @apply text-lg sm:text-xl text-text uppercase lg:text-4xl xl:text-5xl font-semibold relative;
    &::before {
      content: "";
      @apply w-20 h-1 bg-secondary absolute -bottom-4 left-1/2 -translate-x-1/2;
      transition: all 0.3s ease-in-out !important;
    }
    &:hover {
      &::before {
        @apply w-28;
      }
    }
  }
}
</style>
