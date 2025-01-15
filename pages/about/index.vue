<!-- <script lang="ts" setup>
const axios = useNuxtApp().$axios;
const { t, locale } = useI18n();

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
  <Loader1 v-if="status === 'pending'" />
  <template v-if="status === 'success'">
    <NotFound v-if="data.status == 404" />
    <BackError v-else-if="data.status == 500" />

    <div v-else class="space-y-20 mb-20" v-if="data">
      <template v-for="(home, index) in data.data" :key="index">
        <home-about
          v-if="home.type == 'about_us' && home.data"
          :about="home.data"
          :in-about="true"
        />
        <home-why-to-choose
          v-else-if="home.type == 'why_choose_us' && home.data"
          :items="home.data"
        />
        <home-partners
          v-else-if="home.type == 'partners'"
          :partners="home.data"
        />
      </template>
    </div>
  </template>
</template>

<style lang="scss" scoped></style> -->
<template>
  <GlobalBreadCrumbs :items="breadItems" :title="t('NAV.about_us')" />

  <section class="space-y-16">
    <ValuesCard
      :imgSrc="image2"
      :title="t('ABOUT.who_we_are')"
      :paragraph1="t('ABOUT.paragraph1')"
      :paragraph2="t('ABOUT.paragraph2')"
      :paragraph3="t('ABOUT.paragraph3')"
    />
    <AboutNumbers :stats="statsData" />
    <AboutGoals :goals="goalsData" :vision="visionData" :values="valuesData" />
    <ProjectsProp
      :title="t('ABOUT.title')"
      :subtitle="t('ABOUT.content')"
      :features="features"
      :active="true"
    />

    <AboutTeam
      :profiles="profiles"
      :infoText="t('ABOUT.infoText')"
      :description="t('ABOUT.description')"
      :buttonText="t('ABOUT.buttonText')"
    />
    <HomeClients :slides="clientSlides" :stats="statsData" />
  </section>
</template>

<script setup lang="ts">
import image1 from "assets/icons/person.jpg";
import image2 from "assets/icons/right1.jpg";
import IconsKey from "@/components/icons/key.vue";
import IconsLike from "@/components/icons/like.vue";
import IconsCommerical from "@/components/icons/commerical.vue";
import IconsTreasure from "@/components/icons/treasure.vue";
import IconsDiscount from "@/components/icons/discount.vue";
import IconsVoucher from "@/components/icons/voucher.vue";
import IconsDart from "@/components/icons/dart.vue";
import IconsEyelamp from "@/components/icons/eyelamp.vue";
import IconsDiamond from "@/components/icons/diamond.vue";
import IconsCreative from "@/components/icons/creative.vue";
import IconsSafety from "@/components/icons/safety.vue";
import IconsHands from "@/components/icons/hands.vue";
import IconsExcellent from "@/components/icons/excellent.vue";
import image16 from "assets/icons/16.png";
import image17 from "assets/icons/17.png";
import image18 from "assets/icons/18.png";
import image19 from "assets/icons/19.png";
import image20 from "assets/icons/11.png";
import image21 from "assets/icons/12.png";
import image22 from "assets/icons/13.png";
import image23 from "assets/icons/14.png";
import image24 from "assets/icons/15.png";
const { t } = useI18n();

const breadItems = [
  {
    name: t("NAV.home"),
    path: "/",
    imgIcon: "",
  },
  {
    name: t("NAV.about_us"),
    path: "/about_us",
    imgIcon: "",
  },
];
const profiles = [
  {
    image: image1,
    name: t("TEAM.name"),
    title: t("ABOUT.title"),
  },
  {
    image: image1,
    name: t("TEAM.name"),
    title: t("ABOUT.title"),
  },
  {
    image: image1,
    name: t("TEAM.name"),
    title: t("ABOUT.title"),
  },
  {
    image: image1,
    name: t("TEAM.name"),
    title: t("ABOUT.title"),
  },
  {
    image: image1,
    name: t("TEAM.name"),
    title: t("ABOUT.title"),
  },
  {
    image: image1,
    name: t("TEAM.name"),
    title: t("ABOUT.title"),
  },
  {
    image: image1,
    name: t("TEAM.name"),
    title: t("ABOUT.title"),
  },
  {
    image: image1,
    name: t("TEAM.name"),
    title: t("ABOUT.title"),
  },
];
const clientSlides = [
  { background: image16 },
  { background: image17 },
  { background: image18 },
  { background: image19 },
  { background: image20 },
  { background: image21 },
  { background: image22 },
  { background: image23 },
  { background: image24 },
];

const features = ref([
  {
    text: t("ABOUT.features1[0].title"),
    extraText: t("ABOUT.features1[0].description"),
    icon: IconsKey,
  },
  {
    text: t("ABOUT.features1[1].title"),
    extraText: t("ABOUT.features1[1].description"),
    icon: IconsLike,
  },
  {
    text: t("ABOUT.features1[2].title"),
    extraText: t("ABOUT.features1[2].description"),
    icon: IconsCommerical,
  },
  {
    text: t("ABOUT.features1[3].title"),
    extraText: t("ABOUT.features1[3].description"),
    icon: IconsTreasure,
  },
  {
    text: t("ABOUT.features1[4].title"),
    extraText: t("ABOUT.features1[4].description"),
    icon: IconsDiscount,
  },
  {
    text: t("ABOUT.features1[5].title"),
    extraText: t("ABOUT.features1[5].description"),
    icon: IconsVoucher,
  },
]);
const statsData = [
  { number: "+6", label: t("years_of_experience") },
  { number: "470", label: t("employees_and_workers") },
  { number: "23", label: t("projects_completed") },
  { number: "36", label: t("projects_in_progress") },
  { number: "29", label: t("branches_in_kingdom") },
];
const goalsData = {
  icon: IconsDart,
  title: t("OUR_GOALS.TITLE"),
  descriptions: [t("OUR_GOALS.DESCRIPTION1"), t("OUR_GOALS.DESCRIPTION2")],
};

const visionData = {
  icon: IconsEyelamp,
  title: t("OUR_VISION.TITLE"),
  description: t("OUR_VISION.DESCRIPTION"),
};

const valuesData = {
  icon: IconsDiamond,
  title: t("OUR_VALUES.TITLE"),
  items: [
    { text: t("OUR_VALUES.creativity"), icon: IconsCreative },
    { text: t("OUR_VALUES.excellence"), icon: IconsExcellent },
    { text: t("OUR_VALUES.safety"), icon: IconsSafety },
    { text: t("OUR_VALUES.commitment"), icon: IconsHands },
  ],
};
</script>

<style lang="scss" scoped>
// template {
// @apply relative z-30;
.bgImage {
  background-image: url("assets/icons/backg.svg");
}
// }
</style>
