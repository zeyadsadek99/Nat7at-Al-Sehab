<template>
  <GlobalBreadCrumbs :items="breadItems" :title="t('NAV.gallery')" />

  <section class=" bg-secondary">
    <GlobalTitle
      :title="t('NAV.GALLERY')"
      :desc="{ number: images.length, title: t('LABELS.image') }"
    />
    <GalleryImages :items="images" />
    <!-- <GalleryImages :images="images" :title="t('items.royal_heights1')" :subtitle="t('items.real_estate_development')" /> -->
    
  </section>
  
</template>

<script setup>
import image1 from "assets/icons/i5.jpg";
import image6 from "assets/icons/i4.jpg";
import image7 from "assets/icons/i2.jpg";
import image2 from "assets/icons/image2.jpg";
import image3 from "assets/icons/right1.jpg";
import image4 from "assets/icons/image1.jpg";
import image5 from "assets/icons/s2.png";
import image8 from "assets/icons/img7.jpeg";
import image9 from "assets/icons/img8.png";
import image from "assets/icons/img9.jpeg";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const breadItems = [
  {
    name: t("NAV.home"),
    path: "/",
    imgIcon: "",
  },
  {
    name: t("NAV.gallery"),
    path: "/gallery",
    imgIcon: "",
  },
];
const images = [
  { image: [image2,image1], title: t('items.royal_heights1'), subtitle: t('items.real_estate_development'), createdAt: '2025-01-01' },
  { image: [image1,image8], title: t('items.royal_heights1'), subtitle: t('items.real_estate_development'), createdAt: '2025-01-02' },
  { image: [image8,image5], title: t('items.royal_heights1'), subtitle: t('items.real_estate_development'), createdAt: '2025-01-03' },
  { image: [image6,image8], title: t('items.royal_heights1'), subtitle: t('items.real_estate_development'), createdAt: '2025-01-04' },
  { image: [image5,image8], title: t('items.royal_heights1'), subtitle: t('items.real_estate_development'), createdAt: '2025-01-05' },
  { image: [image3,image8], title: t('items.royal_heights1'), subtitle: t('items.real_estate_development'), createdAt: '2025-01-06' },
  { image: [image3,image8], title: t('items.royal_heights1'), subtitle: t('items.real_estate_development'), createdAt: '2025-01-06' },
  { image: [image3,image5], title: t('items.royal_heights1'), subtitle: t('items.real_estate_development'), createdAt: '2025-01-06' },
  { image: [image3,image5], title: t('items.royal_heights1'), subtitle: t('items.real_estate_development'), createdAt: '2025-01-06' },
  { image: [image3,image5], title: t('items.royal_heights1'), subtitle: t('items.real_estate_development'), createdAt: '2025-01-06' },
  { image: [image3,image5], title: t('items.royal_heights1'), subtitle: t('items.real_estate_development'), createdAt: '2025-01-06' },
];

// const images = [
//   { image: image2, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image1, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image8, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image6, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image5, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image3, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image4, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image7, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image9, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image6, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image5, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image5, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image5, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image5, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image8, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image6, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image8, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image6, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image8, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
//   { image: image6, title: t('items.royal_heights1'), subtitle: t('items.real_estate_development') },
// ];
// const images = [image2, image1, image8, image6, image5, image5, image5, image5, image5, image8, image6, image5, image5, image5, image5, image8, image6, image8, image6, image8, image6];
</script>
