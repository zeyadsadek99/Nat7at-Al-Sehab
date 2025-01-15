<template>
  <GlobalBreadCrumbs :items="breadItems" :title="t('NAV.clients')" />

  <div class="bg-secondary ">
    <GlobalTitle
      :title="t('TITLES.all', { name: t('NAV.clients') })"
      :desc="{ number: imageList.length, title: t('LABELS.client') }"
    />

    <ClientsImageGrid :images="imageList" />
  </div>
</template>

<script setup lang="ts">
import image1 from "assets/icons/11.png";
import image2 from "assets/icons/12.png";
import image3 from "assets/icons/13.png";
import image4 from "assets/icons/14.png";
import image5 from "assets/icons/15.png";
import image6 from "assets/icons/16.png";
import image7 from "assets/icons/17.png";
import image8 from "assets/icons/18.png";
import image9 from "assets/icons/19.png";
const { t, locale } = useI18n();

const breadItems = [
  {
    name: t("NAV.home"),
    path: "/",
    imgIcon: "",
  },
  {
    name: t("NAV.clients"),
    path: "/clients",
    imgIcon: "",
  },
];
const imageList = [
  image1,
  image2,
  image2,
  image2,
  image3,
  image4,
  image1,
  image1,
  image1,
  image1,
  image1,
  image5,
  image5,
  image5,
  image5,
  image6,
  image6,
  image6,
  image6,
  image7,
  image7,
  image8,
  image8,
  image8,
  image9,
  image9,
  image9,
  image6,
];
</script>

<style scoped></style>
