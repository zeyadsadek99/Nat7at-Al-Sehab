<script lang="ts" setup>
// import axios from "axios";
import image1 from "assets/icons/s1.png";
import image2 from "assets/icons/s2.png";
import image3 from "assets/icons/s3.png";
import image4 from "assets/icons/image3.jpg";
import { useI18n } from "vue-i18n";

const { t,locale } = useI18n();
type Props = {
  settings: {
    logo: string;
  } | null;
};
defineProps<Props>();
const axios = useNuxtApp().$axios;
// const { localePath, switchLocalePath } = useNuxtI18n();

const sidebar = ref<boolean>(false);
const breadItems = [
  {
    name: t("NAV.home"),
    path: "/",
  },
  {
    name: t("NAV.projects"),
    path: "/projects",
  },
];

const projects = [
  {
    isCompleted: false,
    image: image3,
    title: t("items.emerald_valley"),
    description: t("items.real_estate_development"),
    link:'/projects/1'
  },
  {
    isCompleted: true,
    image: image4,
    title: t("items.maroog_lake"),
    description: t("items.real_estate_investment"),
    link:'/projects/6'

  },
  {
    isCompleted: false,
    image: image1,
    title: t("items.elite_palace"),
    description: t("items.real_estate_investment"),
    link:'/projects/1'

  },
  {
    isCompleted: false,
    image: image2,
    title: t("items.royal_heights"),
    description: t("items.real_estate_development"),
    link:'/projects/1'

  },
  {
    isCompleted: false,
    image: image2,
    title: t("items.royal_heights"),
    description: t("items.real_estate_development"),
    link:'/projects/1'

  },
  {
    isCompleted: false,
    image: image2,
    title: t("items.royal_heights"),
    description: t("items.real_estate_development"),
    link:'/projects/1'

  },
  {
    isCompleted: false,
    image: image2,
    title: t("items.royal_heights"),
    description: t("items.real_estate_development"),
    link:'/projects/5'

  },
  {
    isCompleted: false,
    image: image4,
    title: t("items.maroog_lake"),
    description: t("items.real_estate_investment"),
    link:'/projects/4'

  },
  {
    isCompleted: true,
    image: image4,
    title: t("items.maroog_lake"),
    description: t("items.real_estate_investment"),
    link:'/projects/3'

  },
  {
    isCompleted: false,
    image: image2,
    title: t("items.royal_heights"),
    description: t("items.real_estate_development"),
    link:'/projects/2'

  },
];

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
  <div class="flex flex-col">
    <GlobalTitle
    :title="t('TITLES.all', { name: t('NAV.projects') })"
    :desc="{ number: projects.length, title: t('LABELS.projects') }"
    />

    <HomeProjects :items="projects" />
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

<style lang="scss" scoped>

</style>
