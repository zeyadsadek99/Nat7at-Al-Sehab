<template>
    <div class="px-4 lg:px-20 py-10">
      <h1 class="text-3xl lg:text-5xl font-bold text-center mb-8">{{ t('help.title') }}</h1>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div
          v-for="(topic, index) in topics"
          :key="index"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h2 class="text-xl font-semibold mb-4">{{ topic.title }}</h2>
          <p class="text-gray-700 mb-4">{{ topic.description }}</p>
          <NuxtLink
            :to="`/help/${topic.slug}`"
            class="text-primary font-medium hover:underline"
          >
            {{ t('help.learnMore') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
const { t } = useI18n();
const topics = [
    {
      slug: "getting-started",
      title: t('help.topics.gettingStarted.title'),
      description: t('help.topics.gettingStarted.description'),
    },
    {
      slug: "account-management",
      title: t('help.topics.accountManagement.title'),
      description: t('help.topics.accountManagement.description'),
    },
    {
      slug: "billing-and-payments",
      title: t('help.topics.billingAndPayments.title'),
      description: t('help.topics.billingAndPayments.description'),
    },
    {
      slug: "privacy-and-security",
      title: t('help.topics.privacyAndSecurity.title'),
      description: t('help.topics.privacyAndSecurity.description'),
    },
    {
      slug: "technical-support",
      title: t('help.topics.technicalSupport.title'),
      description: t('help.topics.technicalSupport.description'),
    },
  ];
  </script>
  