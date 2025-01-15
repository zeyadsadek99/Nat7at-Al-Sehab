<template>
  <div class="px-3 lg:container py-6 " data-aos="fade-down" data-aos-duration="600">
    <div class="flex py-5 justify-between items-center">
      <h1 class="text-[25px] lg:text-[40px] font-bold">{{ title }}</h1>

      <div
        v-if="showButton"
        class="flex items-center text-primary justify-center px-4 py-1 border border-primary rounded-[27px]"
      >
        <NuxtLink
          :to="localePath(`${path}`)"
          class="flex items-center gap-2 group"
        >
          <p
            class="text-[12px] lg:text-[20px] flex items-center mb-1  font-medium text-center"
          >
            {{ t("NAV.viewAll") }}
          </p>
          <LazyIconsRightarrow
            class="size-4 lg:size-5 transition-transform duration-300 ease-in-out "
            :class="locale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'"
          />
        </NuxtLink>
      </div>

      <div
        v-if="desc"
        class="flex font-medium items-center gap-1 text-text text-xl justify-center px-3 py-1"
      >
        <p>( {{ desc.number }}</p>
        <p>{{ desc.title }} )</p>
      </div>
    </div>
    <div v-if="subTitle" class="">
      {{ subTitle }}
    </div>
  </div>
</template>


<script setup>
const { t, locale } = useI18n();
const localePath = useLocalePath();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  showButton: {
    type: Boolean,
    default: false,
  },
  path: {
    type: String, 
    required: false,
    default: "/", 
  },
  desc: {
    type: Object,
    required: false,
  },
  subTitle: {
    type: String,
    required: false,
  },
});
</script>


<style scoped>
.icon {
  margin-left: 0.5rem; 
}
</style>
