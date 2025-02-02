<script lang="ts" setup>
// import axios from "axios";
import image1 from "/assets/icons/project.svg";
import image2 from "/assets/icons/project.svg";
import IconsAddress from "@/components/icons/address.vue";
import IconsEye from "@/components/icons/eye.vue";
import IconsVideo from "@/components/icons/video.vue";
import IconsPdf from "@/components/icons/pdf.vue";
import IconsDownload from "@/components/icons/download.vue";
type Props = {
  settings: {
    logo: string;
  } | null;
};
defineProps<Props>();
const axios = useNuxtApp().$axios;
const { t, locale } = useI18n();
const breadItems = [
  {
    name: t("NAV.home"),
    path: "/",
    imgIcon: "",
  },
  {
    name: t("NAV.projects"),
    path: "/projects",
    imgIcon: "",
  },
  {
    name: t("PROJECT.TITLE"),
    path: "/projects/zmorod",
    imgIcon: "",
  },
];
import IconsKey from "@/components/icons/key.vue";
import IconsLike from "@/components/icons/like.vue";
import IconsCommerical from "@/components/icons/commerical.vue";
import IconsTreasure from "@/components/icons/treasure.vue";
import IconsDiscount from "@/components/icons/discount.vue";
import IconsVoucher from "@/components/icons/voucher.vue";

const features = ref([
  { text: t("LABELS.porcelain_ceramic_floors"), icon: IconsKey },
  { text: t("LABELS.independent_entrance"), icon: IconsLike },
  { text: t("LABELS.high_quality_wooden_doors"), icon: IconsCommerical },
  {
    text: t("LABELS.independent_water_electricity_meters"),
    icon: IconsTreasure,
  },
  { text: t("LABELS.prime_location"), icon: IconsDiscount },
  { text: t("LABELS.aluminum_windows_with_glass"), icon: IconsVoucher },
]);
const statistics = ref([
  { value: "80%", label: "sale_percentage" },
  { value: "52", label: "remaining_units" },
  { value: "36", label: "unsold_units" },
  { value: "5", label: "residential_units" },
]);
const cardData = [
  {
    icon: IconsAddress,
    title: t("LABELS.project_title"),
    buttons: [
      {
        icon: IconsEye,
        text: t("LABELS.open_on_map"),
      },
    ],
  },
  {
    icon: IconsVideo,
    title: t("LABELS.video_project"),
    buttons: [
      {
        icon: IconsEye,
        text: t("LABELS.open_video"),
      },
    ],
  },
  {
    icon: IconsPdf,
    title: t("LABELS.file_title"),
    buttons: [
      {
        icon: IconsEye,
        text: t("LABELS.open_file"),
      },
      {
        icon: IconsDownload,
        text: t("LABELS.download_file"),
      },
    ],
  },
];
const projects = {
  title: t("PROJECT.TITLE"),
  features: [
    {
      text: t("LABELS.porcelain_ceramic_floors"),
      icon: IconsKey,
    },
    {
      text: t("LABELS.independent_entrance"),
      icon: IconsLike,
    },
    {
      text: t("LABELS.high_quality_wooden_doors"),
      icon: IconsCommerical,
    },
    {
      text: t("LABELS.independent_water_electricity_meters"),
      icon: IconsTreasure,
    },
    {
      text: t("LABELS.prime_location"),
      icon: IconsDiscount,
    },
    {
      text: t("LABELS.aluminum_windows_with_glass"),
      icon: IconsVoucher,
    },
  ],
};
const card = {
  description: t("PROJECT.DESCRIPTION"),
  title: t("PROJECT.TITLE1"),
  image: image1,
};
// const {
//   data,
//   status,

//   refresh,
// } = await useLazyAsyncData("home", () =>
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
  <!-- <Loader1 v-if="status === 'pending'" /> -->
  <!-- <template v-if="status === 'success'"> -->
  <!-- <NotFound v-if="data.status == 404" /> -->
  <!-- <BackError v-else-if="data.status == 500" /> -->

  <GlobalBreadCrumbs :items="breadItems" :title="t('NAV.projects')" />

  <div class="flex flex-col gap-14">
    <ProjectsCard :card="card" />
    <!-- <ProjectsCard
      :description="t('PROJECT.DESCRIPTION')"
      :title="t('PROJECT.TITLE1')"
      :image="image1"
    /> -->
    <!-- {{ $route.params.id }} -->

    <ProjectsOptions :cards="cardData" />
    <ProjectsProp :projects="projects" />
    <!-- <ProjectsProp :title="t('PROJECT.title')" :features="features" /> -->
    <ProjectsCard2 :image="image2" :statistics="statistics" />
  </div>
  <!-- <div v-else class="space-y-20 mb-20" v-if="data">
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
    </div> -->
  <!-- </template> -->
</template>

<style lang="scss" scoped></style>
