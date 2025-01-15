<script lang="ts" setup>
// import axios from "axios";
import image1 from "assets/icons/img6.png";
import image2 from "assets/icons/s2.png";
import image3 from "assets/icons/s3.png";
import image4 from "assets/icons/image3.jpg";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
type Props = {
  settings: {
    logo: string;
  } | null;
};
defineProps<Props>();
const axios = useNuxtApp().$axios;
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const sidebar = ref<boolean>(false);
const breadItems = [
  {
    name: t("NAV.home"),
    path: "/",
  },
  {
    name: t("NAV.branches"),
    path: "/branches",
  },
];

const branches = [
  {
    image: image1,

    title: t("branches.riyadh"),
    description: t("branches.riyadh_address"),
    buttonText: t("branches.open_on_map"),
  },
  {
    image: image2,

    title: t("branches.al_ahsa"),
    description: t("branches.al_ahsa_address"),
    buttonText: t("branches.open_on_map"),
  },
  {
    image: image1,

    title: t("branches.jeddah"),
    description: t("branches.jeddah_address"),
    buttonText: t("branches.open_on_map"),
  },
  {
    image: image2,

    title: t("branches.al_ahsa"),
    description: t("branches.al_ahsa_address"),
    buttonText: t("branches.open_on_map"),
  },
  {
    image: image2,

    title: t("branches.makkah"),
    description: t("branches.makkah_address"),
    buttonText: t("branches.open_on_map"),
  },
  {
    image: image1,

    title: t("branches.dammam"),
    description: t("branches.dammam_address"),
    buttonText: t("branches.open_on_map"),
  },
  {
    image: image2,

    title: t("branches.al_ahsa"),
    description: t("branches.al_ahsa_address"),
    buttonText: t("branches.open_on_map"),
  },
  {
    image: image2,

    title: t("branches.madinah"),
    description: t("branches.madinah_address"),
    buttonText: t("branches.open_on_map"),
  },
  {
    image: image1,

    title: t("branches.riyadh"),
    description: t("branches.riyadh_address"),
    buttonText: t("branches.open_on_map"),
  },
  {
    image: image1,

    title: t("branches.riyadh"),
    description: t("branches.riyadh_address"),
    buttonText: t("branches.open_on_map"),
  },
  {
    image: image1,

    title: t("branches.riyadh"),
    description: t("branches.riyadh_address"),
    buttonText: t("branches.open_on_map"),
  },
  {
    image: image2,

    title: t("branches.arar"),
    description: t("branches.arar_address"),
    buttonText: t("branches.open_on_map"),
  },
  {
    image: image2,

    title: t("branches.taif"),
    description: t("branches.taif_address"),
    buttonText: t("branches.open_on_map"),
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
  <GlobalBreadCrumbs :items="breadItems" :title="t('NAV.branches')" />
  <div class="">
    <GlobalTitle
      :title="t('TITLES.every', { name: t('LABELS.branches') })"
      :desc="{ number: branches.length, title: t('LABELS.branch') }"
    />

    <BranchesDisplay :items="branches" />
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
