<script lang="ts" setup>
const axios = useNuxtApp().$axios;
import image1 from "/assets/icons/right1.jpg";
const { t, locale } = useI18n();
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
  <div class="space-y-16 ">
    <GlobalBreadCrumbs :items="breadItems" :title="t('NAV.services')" />
    <ServicesCard
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
    />
  </div>
</template>

<style lang="scss" scoped></style>
