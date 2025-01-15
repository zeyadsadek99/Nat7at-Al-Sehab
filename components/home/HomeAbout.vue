<script lang="ts" setup>
const { t, locale } = useI18n();

defineProps({
  about: {
    type: Object,
    required: true,
  },
  inAbout: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div class="px-3 lg:container" id="about">
    <Section-title v-if="!inAbout" :title="t('TITLES.aboutUs')" />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center">
      <div
        class=""
        :data-aos="locale === 'ar' ? 'fade-right' : 'fade-left'"
        data-aos-delay="10"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <nuxt-img
          v-if="about.image"
          :src="about.image"
          :alt="about.title"
          format="webp"
          width="486"
          height="500"
          class="h-full max-h-[500px] max-w-[486px] w-full mx-auto object-cover rounded-3xl shadow-custom-shadow"
        />
      </div>
      <div>
        <h1
          v-if="inAbout"
          class="text-4xl font-extrabold text-text mb-5"
          data-aos="fade-in"
          data-aos-delay="10"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          {{ about.title }}
        </h1>
        <h2
          v-else
          class="text-4xl font-extrabold text-text mb-5"
          data-aos="fade-in"
          data-aos-delay="10"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          {{ about.title }}
        </h2>

        <div
          class="text-2xl text-justify"
          data-aos="fade-in"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          v-html="about.desc"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
