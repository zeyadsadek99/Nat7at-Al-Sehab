<template>
  <section class="py-8 bg-secondary">
    <!-- Global Title with Animation -->
    <GlobalTitle
      :title="t('GLOBAL_TITLE.team')"
      :sub-title="t('GLOBAL_TITLE.subtitle')"
      data-aos="fade-down"
      data-aos-duration="800"
    />

    <div
      class="px-3 lg:container max-w-6xl mx-auto space-y-12 lg:space-y-8 text-text"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <!-- Profiles -->
      <div
        class="grid grid-cols-2 md:grid-cols-4 text-center gap-10"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <div
          v-for="(profile, index) in team.profiles"
          :key="index"
          class="space-y-4"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <img
            :src="profile.image"
            alt="Profile Image"
            class="w-full h-auto border-[1.5px] rounded-md"
            data-aos="zoom-in"
            :data-aos-delay="index * 150"
          />
          <h1
            class="text-lg font-bold"
            data-aos="fade-up"
            :data-aos-delay="index * 200"
          >
            {{ profile.name }}
          </h1>
          <p
            class=""
            data-aos="fade-up"
            :data-aos-delay="index * 250"
          >
            {{ profile.title }}
          </p>
        </div>
      </div>

      <!-- Under Section -->
      <div
        class="space-y-5 flex flex-col items-center lg:items-start text-center"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <p class="text-[24px] font-bold" data-aos="fade-right">
          {{ team.infoText }}
        </p>
        <p class="text-[15px]" data-aos="fade-left" data-aos-delay="200">
          {{ team.description }}
        </p>
        <button
          class="group px-10 max-w-[240px] py-2 bg-primary flex gap-2 text-white items-center rounded-md hover:bg-primary-dark"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <IconsRightarrow
            class="size-5 transition-transform duration-300 ease-in-out "
            :class="locale === 'ar' ? 'group-hover:translate-x-1' : 'transform rotate-180 group-hover:-translate-x-1'"
          />
          <p class="mb-1 whitespace-nowrap">{{ team.buttonText }}</p>
        </button>
      </div>
    </div>
  </section>
</template>


<script setup>
const { t, locale } = useI18n();

const props =defineProps({
  team: {
    type: Object,
    required: true,
  },
});
// defineProps({
//   profiles: {
//     type: Array,
//     required: true,
//     // validator: (arr) => arr.length === 8,
//   },
//   infoText: {
//     type: String,
//     // default: "نحن نبحث عن موظفين!",
//   },
//   description: {
//     type: String,
//     // default:
//     //   "لدينا فريقنا يتطور بسرعة ونحن نبحث دائمًا عن أشخاص مهاريين ومحترفين.",
//   },
//   buttonText: {
//     type: String,
//     // default: "عرض الوظائف المتاحة",
//   },
// });
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>
