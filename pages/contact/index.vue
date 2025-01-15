<!-- <script lang="ts" setup>
const axios = useNuxtApp().$axios;
const { t, locale } = useI18n();

const {
  data,
  status,

  refresh,
} = await useLazyAsyncData("about", () =>
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

    <div v-else class="space-y-24 my-11" v-if="data">
      <template v-for="(home, index) in data.data" :key="index">
        <home-about
          v-if="home.type == 'about_us' && home.data"
          :about="home.data"
          :in-about="true"
        />
      </template>
      <home-contact />
    </div>
  </template>
</template>

<style lang="scss" scoped></style> -->
<template>
  <GlobalBreadCrumbs :items="breadItems" :title="t('NAV.contact_us')" />
  <div class="space-y-16">
    <div>

      <HomeContactUs :contactItems="contactItems"/>
      <ContactImage :imgSrc="image1" />
    </div>
    <div class="px-3 lg:container ">
      <InputsMap :location="location" :draggable="false" />
    </div>
    <ContactForm />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import image1 from "/assets/icons/img6.png";
import image2 from "/assets/icons/img7.png";
import IconsLocation from "@/components/icons/location.vue";
import IconsCalls from "@/components/icons/calls.vue";
import IconsMail from "@/components/icons/mail.vue";
import IconsContact from "@/components/icons/contact.vue";
const { t } = useI18n();

const location = ref({
  lat: 31.222,
  lng: 32.0,
});
const breadItems = [
  {
    name: t("NAV.home"),
    path: "/",
    imgIcon: "",
  },
  {
    name: t("NAV.contact_us"),
    path: "/contact",
    imgIcon: "",
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
</script>

<style scoped></style>
