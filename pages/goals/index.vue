<template>
  <GlobalBreadCrumbs :items="breadItems" :title="t('NAV.goals')" />
  <GoalsCard :items="goals" />

  <!-- <section class=" space-y-16">
    <GoalsCard
      :imgSrc="image1"
      :title="t('LABELS.success')"
      :paragraph1="t('LABELS.value_proposition')"
      :paragraph2="t('LABELS.goals_intro')"
    />
    <GoalsCard
      :imgSrc="image2"
      :title="t('LABELS.success')"
      :paragraph1="t('LABELS.value_proposition')"
      :paragraph2="t('LABELS.goals_intro')"
      :reversed="true"
    />
    <GoalsCard
      :imgSrc="image1"
      :title="t('LABELS.investment_returns')"
      :paragraph1="t('LABELS.investment_support')"
    />
    <GoalsCard
      :imgSrc="image2"
      :title="t('LABELS.success')"
      :paragraph1="t('LABELS.value_proposition')"
      :paragraph2="t('LABELS.goals_intro')"
      :reversed="true"
    />
  </section> -->
</template>

<script setup lang="ts">
import image1 from "assets/icons/img1.jpg";
import image2 from "assets/icons/right1.jpg";

const { t } = useI18n();

const breadItems = [
  {
    name: t("NAV.home"),
    path: "/",
    imgIcon: "",
  },
  {
    name: t("NAV.goals"),
    path: "/goals",
    imgIcon: "",
  },
];
const goals = [
  {
    imgSrc: image1,
    title: t("LABELS.success"),
    paragraph1: t("LABELS.value_proposition"),
    paragraph2: t("LABELS.goals_intro"),
    reversed: false,
  },
  {
    imgSrc: image2,
    title: t("LABELS.success"),
    paragraph1: t("LABELS.value_proposition"),
    paragraph2: t("LABELS.goals_intro"),
    reversed: true,
  },
  {
    imgSrc: image1,
    title: t("LABELS.investment_returns"),
    paragraph1: t("LABELS.investment_support"),
    reversed: false,
  },
  {
    imgSrc: image2,
    title: t("LABELS.success"),
    paragraph1: t("LABELS.value_proposition"),
    paragraph2: t("LABELS.goals_intro"),
    reversed: true,
  },
];

</script>

<style lang="scss" scoped>

</style>
