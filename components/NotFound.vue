<template>
  <div class="container my-20">
    <div class="flex justify-center flex-col items-center">
      <img
        width="500"
        height="500"
        src="~/assets/media/cuate.png"
        alt="not found icon"
        loading="lazy"
      />
      <div class="error_section">
        <h1 class="text-center font-bold text-2xl my-4 text-text">
          {{ $t("something went wrong") }}
        </h1>
        <p class="text-center max-w-[500px] text-text-light">
          {{ $t("pleaseKindlyTryAgain") }}
        </p>
        <div class="flex justify-center mt-5">
          <nuxt-link :to="localePath('/')" class="base-btn mx-2">
            {{ $t("Back to home") }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>
