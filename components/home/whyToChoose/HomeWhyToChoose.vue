<script lang="ts" setup>
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});

const { t } = useI18n();

onBeforeMount(() => {
  if (props.items) {
    lists.value.map((item) => {
      if (item.key == "years") {
        item.value = props.items.years;
      } else if (item.key == "products") {
        item.value = "+" + " " + props.items.products;
      } else if (item.key == "customers") {
        item.value = "+" + " " + props.items.customers;
      } else if (item.key == "vendors") {
        item.value = "+" + " " + props.items.vendors;
      }
    });
  }
});
const lists = ref([
  {
    title: t("yearEstablished"),
    value: "0",
    icon: "IconsBuilding",
    key: "years",
  },
  {
    title: t("productsAvailable"),
    value: "0",
    icon: "IconsBag",
    key: "products",
  },
  {
    title: t("satisfiedCustomers"),
    value: "0",
    icon: "IconsEdit",
    key: "customers",
  },
  {
    title: t("vendors"),
    value: "0",
    icon: "IconsRefresh",
    key: "vendors",
  },
]);
</script>

<template>
  <div class="px-3 lg:container">
    <Section-title :title="t('TITLES.whyChooseUs')" />

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
      <HomeWhyToChooseCard
        class="border-[#DFDFDF] odd:border-e-[2px] lg:border-e-2 last:border-e-0"
        v-for="(item, index) in lists"
        :item="item"
        :key="index"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
