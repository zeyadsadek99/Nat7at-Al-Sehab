<script lang="ts" setup>
const axios = useNuxtApp().$axios;
import ServicesCard from "~/components/services/ServicesCard.vue";
import image1 from "/assets/icons/right1.jpg";
import image2 from "/assets/icons/left.svg";

const { t, locale } = useI18n();
const route = useRoute();
const tab = ref(null);

const breadItems = [
  {
    name: t("NAV.home"),
    path: "/",
    imgIcon: "",
  },
  {
    name: t("NAV.services"),
    path: "/services",
    imgIcon: "",
  },
];
const servicesData = {
  imageSrc: image1,
  imageAlt: "Project Development",
  title: t("SERVICES.propertyDevelopment"),
  description: t("SERVICES.propertyDevelopmentDescription"),
  listItems: [
    {
      title: t("SERVICES.flexibility"),
      subItems: [t("SERVICES.flexibilityDescription")],
    },
    {
      title: t("SERVICES.financialStability"),
      subItems: [
        t("SERVICES.financialStabilityDescription.0"),
        t("SERVICES.financialStabilityDescription.1"),
      ],
    },
  ],
};
const servicesData1 = {
  imageSrc: image2,
  imageAlt: "Project Development",
  title: t("SERVICES1.propertyDevelopment"),
  description: t("SERVICES1.propertyDevelopmentDescription"),
  listItems: [

    {
      title: t("SERVICES.flexibility"),
      subItems: [t("SERVICES1.flexibilityDescription.0"), t("SERVICES1.flexibilityDescription.1")],
    },
    {
      title: t("SERVICES1.financialStability"),
      subItems: [
        t("SERVICES1.financialStabilityDescription.0"),
        t("SERVICES1.financialStabilityDescription.1"),
        t("SERVICES1.financialStabilityDescription.2"),
        t("SERVICES1.financialStabilityDescription.3"),
        t("SERVICES1.financialStabilityDescription.4"),
      ],
    },
  ],
};

const activeTab = ref(0);

onMounted(() => {
  // Check if there's a tab parameter in the query string
  const tabParam = route.query.tab;
  if (tabParam) {
    activeTab.value = parseInt(tabParam as string) || 0;
  }
});

// const { data, status, refresh } = await useLazyAsyncData("home", () =>
//   axios
//     .get(`home`, {
//       headers: {
//         "Accept-Language": locale.value,
//       },
//     })
//     .then((res) => res.data)
//     .catch((err) => err.response)
// );
</script>

<template>
  <!-- <div class="space-y-16"> -->
    <GlobalBreadCrumbs :items="breadItems" :title="t('NAV.services')" />
    
    <!-- <ServicesCard
      :imageSrc="image1"
      imageAlt="Project Development"
      :title="t('SERVICES.propertyDevelopment')"
      :description="t('SERVICES.propertyDevelopmentDescription')"
      :listItems="[
        {
          title: t('SERVICES.flexibility'),
          subItems: [t('SERVICES.flexibilityDescription')],
        },
        {
          title: t('SERVICES.financialStability'),
          subItems: [
            t('SERVICES.financialStabilityDescription.0'),
            t('SERVICES.financialStabilityDescription.1'),
          ],
        },
      ]"
    /> -->
    <div class="flex flex-col items-center  max-w-7xl mx-auto ">
      <div class="flex flex-row items-center justify-center gap-4 my-8 w-full px-4">
        <button 
          v-for="(tab, index) in [t('SERVICES.propertyDevelopment'), t('SERVICES1.propertyDevelopment')]" 
          :key="index"
          @click="activeTab = index"
          :class="[
            'px-3 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl transition-all duration-300 font-medium text-sm sm:text-base md:text-lg shrink',
            activeTab === index 
              ? 'bg-primary text-white shadow-lg transform scale-105' 
              : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div 
        class="w-full transition-opacity duration-300"
        :class="{'opacity-100': activeTab === 0, 'opacity-0': activeTab !== 0}"
      >
        <ServicesCard 
          v-if="activeTab === 0"
          :services="servicesData" 
          class="transform transition-transform duration-300 hover:scale-102"
        />
      </div>
      <div
        class="w-full transition-opacity duration-300"
        :class="{'opacity-100': activeTab === 1, 'opacity-0': activeTab !== 1}"
      >
        <ServicesCard 
          v-if="activeTab === 1"
          :services="servicesData1"
          class="transform transition-transform duration-300 hover:scale-102" 
        />
      </div>
    </div>
  <!-- </div> -->
</template>

<style lang="scss" scoped></style>
