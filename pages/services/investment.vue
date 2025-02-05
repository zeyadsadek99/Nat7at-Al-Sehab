<script lang="ts" setup>
const axios = useNuxtApp().$axios;
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import image1 from "/assets/icons/left.svg";

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
const {
  data,
  status,

  refresh,
} = await useLazyAsyncData("home", () =>
  axios
    .get(`home`, {
      headers: {
        "Accept-Language": locale.value,
      },
    })
    .then((res) => res.data)
    .catch((err) => err.response)
);
</script>

<template>
  <div class="flex flex-col gap-14 ">
    <GlobalBreadCrumbs :items="breadItems" :title="t('NAV.services')" />

    <!-- <ServicesInvestment/> -->
    <ServicesCard :services="servicesData"/>

    <!-- <ServicesCard
      :imageSrc="image1"
      imageAlt="Project Development"
      :title="t('SERVICES1.propertyDevelopment')"
      :description="t('SERVICES1.propertyDevelopmentDescription')"
      :listItems="[
        {
          title: t('SERVICES1.flexibility'),
          subItems: [t('SERVICES1.flexibilityDescription.0'),t('SERVICES1.flexibilityDescription.1')],
        },
        {
          title: t('SERVICES1.financialStability'),
          subItems: [
            t('SERVICES1.financialStabilityDescription.0'),
            t('SERVICES1.financialStabilityDescription.1'),
            t('SERVICES1.financialStabilityDescription.2'),
            t('SERVICES1.financialStabilityDescription.3'),
            t('SERVICES1.financialStabilityDescription.4'),
          ],
        },
      ]"
    /> -->
  </div>
</template>

<style lang="scss" scoped></style>
