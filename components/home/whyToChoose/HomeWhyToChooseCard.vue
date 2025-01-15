<script lang="ts" setup>
type Props = {
  item: {
    title: string;
    value: string;
    icon: string;
  };
};

defineProps<Props>();
const icons: any = {
  IconsBag: resolveComponent("IconsBag"),
  IconsBuilding: resolveComponent("IconsBuilding"),
  IconsEdit: resolveComponent("IconsEdit"),
  IconsRefresh: resolveComponent("IconsRefresh"),
};
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-5">
    <component :is="icons[item.icon]" />
    <h3
      class="font-medium text-lg md:text-xl lg:text-2xl text-text text-center"
    >
      {{ item.title }}
    </h3>
    <p class="text-2xl font-medium text-secondary text-center">
      {{ item.value }}
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
