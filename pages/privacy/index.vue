<template>
  <div class="px-4 lg:px-20 py-10">
    <h1 class="text-3xl lg:text-5xl font-bold text-center mb-8">
      {{ $t('privacy.title') }}
    </h1>
    <div class="text-gray-700 space-y-6">
      <section>
        <h2 class="text-xl font-semibold">{{ $t('privacy.section1.title') }}</h2>
        <p>{{ $t('privacy.section1.content') }}</p>
      </section>
      <section>
        <h2 class="text-xl font-semibold">{{ $t('privacy.section2.title') }}</h2>
        <p>{{ $t('privacy.section2.content') }}</p>
      </section>
      <section>
        <h2 class="text-xl font-semibold">{{ $t('privacy.section3.title') }}</h2>
        <p>{{ $t('privacy.section3.content') }}</p>
      </section>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
</script>

<style scoped>
h1 {
  color: #1a202c;
}
</style>
