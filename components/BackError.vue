<template>
  <div
    class="fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center bg-white"
  >
    <div class="w-full space-y-6 text-center">
      <img src="@/assets/media/error.png" alt="connection" class="m-auto" />
      <h3 class="text-center text-[44px] font-bold capitalize">
        {{ $t("TITLES.Internal server error") }}
      </h3>
      <img
        src="@/assets/media/connection.png"
        alt="connection"
        class="w-full"
      />
      <p class="m-auto max-w-[423px]">{{ $t("LABELS.errorDesc") }}</p>
    </div>
  </div>
</template>

<script setup>
const i18n = useI18n();
</script>
