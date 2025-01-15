<script lang="ts" setup>
import { useAppStore } from "~/stores/app";
const appStore = useAppStore();
const { locale } = useI18n();
</script>

<template>
  <ul class="space-y-3">
    <li v-if="appStore.settings?.email">
      <a
        :href="`mailto:${appStore.settings?.email}`"
        class="flex items-center gap-3 flex-wrap text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
          />
          <path d="M3 7l9 6l9 -6" />
        </svg>
        {{ appStore.settings?.email }}
      </a>
    </li>
    <li v-if="appStore.settings?.phone">
      <a
        :href="`tel:+${appStore.settings.phone}`"
        class="flex items-center gap-3 flex-wrap text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-phone-call"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
          />
          <path d="M15 7a2 2 0 0 1 2 2" />
          <path d="M15 3a6 6 0 0 1 6 6" />
        </svg>

        +{{ appStore.settings.phone }}
      </a>
    </li>
    <li
      class="flex items-center gap-3 text-white"
      v-if="
        appStore.settings?.locationInformation_ar ||
        appStore.settings?.locationInformation_en
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin flex-shrink-0"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        <path
          d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
        />
      </svg>
      {{
        locale === "ar"
          ? appStore.settings?.locationInformation_ar
          : appStore.settings?.locationInformation_en
      }}
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
