<script lang="ts" setup>
const axios = useNuxtApp().$axios;
const { t, locale } = useI18n();
import image1 from "assets/icons/s1.png";
import image2 from "assets/icons/s2.png";
import image3 from "assets/icons/s3.png";
import image4 from "assets/icons/image3.jpg";
import image5 from "assets/icons/image1.jpg";
import image6 from "assets/icons/image2.jpg";
import image7 from "/assets/icons/right1.jpg";
import image8 from "/assets/icons/left.jpg";
import image9 from "assets/icons/i6.png";
import image10 from "assets/icons/i5.jpg";
import image11 from "assets/icons/s1.png";
import image12 from "assets/icons/i1.jpg";
import image13 from "assets/icons/i2.jpg";
import image14 from "assets/icons/i3.jpg";
import image15 from "assets/icons/i4.jpg";
import image16 from "assets/icons/16.png";
import image17 from "assets/icons/17.png";
import image18 from "assets/icons/18.png";
import image19 from "assets/icons/19.png";
import image20 from "assets/icons/11.png";
import image21 from "assets/icons/12.png";
import image22 from "assets/icons/13.png";
import image23 from "assets/icons/14.png";
import image24 from "assets/icons/15.png";
import lamp from "../components/icons/lamp.vue";
import cert from "../components/icons/cert.vue";
import sett from "../components/icons/sett.vue";
import done from "../components/icons/done.vue";
import IconsLocation from "@/components/icons/location.vue";
import IconsCalls from "@/components/icons/calls.vue";
import IconsMail from "@/components/icons/mail.vue";
import IconsContact from "@/components/icons/contact.vue";
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
    link:'/projects/2'

  },
  {
    isCompleted: false,
    image: image1,
    title: t("items.elite_palace"),
    description: t("items.real_estate_investment"),
    link:'/projects/3'

  },
  {
    isCompleted: true,
    image: image2,
    title: t("items.royal_heights"),
    description: t("items.real_estate_development"),
    link:'/projects/4'

  },
];
const slidesData = [
  {
    background: image4,
    title: t("SLIDES.title1"),
    description: t("SLIDES.description1"),
  },
  {
    background: image6,
    title: t("SLIDES.title2"),
    description: t("SLIDES.description2"),
  },
  {
    background: image5,
    title: t("SLIDES.title3"),
    description: t("SLIDES.description3"),
  },
];
const servicesData = [
  {
    image: image7,
    title: t("project_development1"),
    link: "/services",
  },
  {
    image: image8,
    title: t("real_estate_investment"),
    link: "/services/investment",
  },
];
const features = [
  {
    icon: lamp,
    title: t("innovation_in_design"),
  },
  {
    icon: cert,
    title: t("quality_and_durability"),
  },
  {
    icon: sett,
    title: t("easy_installation_and_maintenance"),
  },
  {
    icon: done,
    title: t("work_experience"),
  },
];
const statsData = [
  { number: "+6", label: t("years_of_experience") },
  { number: "470", label: t("employees_and_workers") },
  { number: "23", label: t("projects_completed") },
  { number: "36", label: t("projects_in_progress") },
];
const firstRow = [
  {
    image: image9,
    alt: "First Image",
    borderRadius: {
      topLeft: "0",
      topRight: "24px",
      bottomLeft: "24px",
      bottomRight: "0",
    },
  },
  {
    image: image10,
    alt: "Second Image",
    borderRadius: {
      topLeft: "0",
      topRight: "24px",
      bottomLeft: "24px",
      bottomRight: "0",
    },
  },
  {
    image: image11,
    alt: "Third Image",
    borderRadius: {
      topLeft: "24px",
      topRight: "0",
      bottomLeft: "0",
      bottomRight: "24px",
    },
  },
];

const secondRow = [
  {
    image: image12,
    alt: "First Image",
    borderRadius: {
      topLeft: "24px",
      topRight: "0",
      bottomLeft: "0",
      bottomRight: "24px",
    },
  },
  {
    image: image13,
    alt: "Second Image",
    borderRadius: {
      topLeft: "0",
      topRight: "24px",
      bottomLeft: "24px",
      bottomRight: "0",
    },
  },
  {
    image: image14,
    alt: "Third Image",
    borderRadius: {
      topLeft: "24px",
      topRight: "0",
      bottomLeft: "0",
      bottomRight: "24px",
    },
  },
  {
    image: image15,
    alt: "Fourth Image",
    borderRadius: {
      topLeft: "0",
      topRight: "24px",
      bottomLeft: "24px",
      bottomRight: "0",
    },
  },
];
const contactItems = {
  title: t("LABELS.contactUs"),
  topIcon: IconsContact,
  items: [
    {
      icon: IconsLocation,
      title: t("LABELS.mainAddress"),
      content: [t("LABELS.address1")],
    },
    {
      icon: IconsCalls,
      title: t("LABELS.phoneNumber"),
      content: [`${t("LABELS.phoneNumber1")}`, `${t("LABELS.phoneNumber2")}`],
    },
    {
      icon: IconsMail,
      title: t("LABELS.email"),
      content: [t("LABELS.contactUs")],
    },
  ],
};

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
  <!-- <Loader1 v-if="status === 'pending'" />
  <template v-if="status === 'success'">
    <NotFound v-if="data.status == 404" />
    <BackError v-else-if="data.status == 500" /> 

   <div v-else class="space-y-16 mb-7" v-if="data"> -->

  <div class="space-y-7">
    <HomeSwiper :slides="slidesData" />
    <div>
      <GlobalTitle :title="t('services')" />

      <HomeServices :services="servicesData" />
    </div>
    <HomeFeatures :items="features" />
    <HomeNumbers
      :title="t('project_development1')"
      :description="t('real_estate_description')"
      :alternateDescription="t('alternate_real_estate_description')"
      :imageSrc="image7"
      :alternateImageSrc="image8"
      :stats="statsData"
      :link="'/services'"

    />
    <div>
      <GlobalTitle
        class="pt-16"
        :title="t('projects')"
        :show-button="true"
        :path="'/projects'"
      />
      <HomeProjects :items="projects" />
    </div>
    <HomeImages
      :title="t('NAV.GALLERY')"
      :path="'/gallery'"
      :firstRowImages="firstRow"
      :secondRowImages="secondRow"
    />
    <HomeContactUs :contactItems="contactItems" />
    <div>
      <HomeClients :slides="clientSlides" />
      <HomeNewsLetter />
    </div>
    <!-- <template v-for="(home, index) in data.data" :key="index"> -->
    <!-- <template >
        <home-intro v-if="home.type == 'slider'" :sliders="home.data" />
        <home-partners
          v-else-if="home.type == 'partners'"
          :partners="home.data"
        />
        <home-about
          v-else-if="home.type == 'about_us' && home.data"
          :about="home.data"
        />
        <home-products v-else-if="home.type == 'products'" :items="home.data" />
        <template v-else-if="home.type == 'why_choose_us' && home.data">
          <ClientOnly>
            <home-why-to-choose :items="home.data" />
          </ClientOnly>
        </template>
        <home-brands v-else-if="home.type == 'brands'" :brands="home.data" />
        <home-blogs v-else-if="home.type == 'blogs'" :blogs="home.data" />
      </template>
      <home-contact /> -->
  </div>
  <!-- </template> -->
</template>

<style lang="scss" scoped></style>
