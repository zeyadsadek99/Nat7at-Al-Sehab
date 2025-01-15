<template>
    <div class="px-4 lg:px-20 py-10">
      <NuxtLink to="/help" class="text-primary hover:underline">{{ t('help.backToHelp') }}</NuxtLink>
      <h1 class="text-3xl lg:text-5xl font-bold mt-6">{{ topic.title }}</h1>
      <p class="text-gray-700 mt-4">{{ topic.description }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from "vue-router";
  const { t } = useI18n();

  const route = useRoute();
  const topics = {
    "getting-started": {
      title: t("help.topics.gettingStarted.title"),
      description: t("help.topics.gettingStarted.description"),
    },
    "account-management": {
      title: t("help.topics.accountManagement.title"),
      description: t("help.topics.accountManagement.description"),
    },
    "billing-and-payments": {
      title: t("help.topics.billingAndPayments.title"),
      description: t("help.topics.billingAndPayments.description"),
    },
    "privacy-and-security": {
      title: t("help.topics.privacyAndSecurity.title"),
      description: t("help.topics.privacyAndSecurity.description"),
    },
    "technical-support": {
      title: t("help.topics.technicalSupport.title"),
      description: t("help.topics.technicalSupport.description"),
    },
  };
  
  const topic = topics[route.params.slug];
  </script>
  