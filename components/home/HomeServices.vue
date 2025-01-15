<template>

  <section
    class="px-3 lg:container grid md:grid-cols-2 grid-cols-1 items-center pb-6 gap-6"
  >
    
    <div
      v-for="(service, index) in services"
      :key="index"
      class="flex flex-col items-center"
      :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'"
      data-aos-duration="1000"
    >
      <div class="relative overflow-hidden">
        <img
          :src="service.image"
          :alt="service.title"
          class="lg:w-[555px] h-[300px] lg:h-[347px] max-w-[100%] rounded-none"
          :class="{
            'lg:rounded-es-[63px]': index % 2 === 0,
            'lg:rounded-ee-[63px]': index % 2 !== 0,
          }"
          data-aos="zoom-in"
          data-aos-duration="1000"
        />
      </div>
      <div
        v-if="service"
        class="content mt-4 text-center flex flex-col gap-3 items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <h1 class="text-xl font-medium text-text flex items-center gap-2">
          <span class="text-xl font-medium">{{ index + 1 }}.</span>
          {{ service.title }}
        </h1>
        <NuxtLink
          :to="localePath(service.link)"
          class="group mt-2 px-4 py-1 bg-primary text-white rounded-lg flex items-center gap-2"
        >
          <p class="mb-1">{{ t("view_more") }}</p>
          <IconsRightarrow
            class="size-3 transition-transform duration-300 ease-in-out "
            :class="locale === 'ar' ? ' rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale, t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

defineProps({
  services: {
    type: Array as () => any[], 
    required: true,
  },
});
</script>

<style scoped></style>
