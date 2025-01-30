<template>
  
  <GlobalBreadCrumbs :items="breadItems" :title="t('NAV.values')" />
  <GoalsCard :items="goals" />

  <!-- <section class="mx-auto space-y-16">
    <GoalsCard
      :imgSrc="image3"
      :title="t('GOALS.transparency')"
      :paragraph1="t('GOALS.transparencyDescription')"
    />
    <GoalsCard
      :imgSrc="image4"
      :title="t('GOALS.innovation')"
      :paragraph1="t('GOALS.innovationDescription')"
      :reversed="true"
    />
    <GoalsCard
      :imgSrc="image1"
      :title="t('GOALS.excellence')"
      :paragraph1="t('GOALS.excellenceDescription')"
    />
    <GoalsCard
      :imgSrc="image2"
      :title="t('GOALS.partnership')"
      :paragraph1="t('GOALS.partnershipDescription')"
      :reversed="true"
    />
  </section> -->
</template>

<script setup lang="ts">
    import image1 from "../../assets/icons/img1.jpg";
    import image2 from "../../assets/icons/img2.jpg";
    import image3 from "../../assets/icons/img3.jpg";
    import image4 from "../../assets/icons/img4.jpg";
    import image5 from "assets/icons/right1.jpg";

const { t } = useI18n();

const breadItems = [
  {
    name: t("NAV.home"),
    path: "/",
    imgIcon: "",
  },
  {
    name: t("NAV.values"),
    path: "/values",
    imgIcon: "",
  },
];
const goals = [
  {
    imgSrc: image3,
    title: t("GOALS.transparency"),
    paragraph1: t("GOALS.transparencyDescription"),
    reversed: false,
  },
  {
    imgSrc: image2,
    title: t("GOALS.innovation"),
    paragraph1: t("GOALS.innovationDescription"),
    reversed: true,
  },
  {
    imgSrc: image1,
    title: t("GOALS.excellence"),
    paragraph1: t("GOALS.excellenceDescription"),
    reversed: false,
  },
  {
    imgSrc: image2,
    title: t("GOALS.partnership"),
    paragraph1: t("GOALS.partnershipDescription"),
    reversed: true,
  },
];
</script>

<style lang="scss" scoped>

</style>
