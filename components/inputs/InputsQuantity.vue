<template>
  <div class="input_wrapper">
    <p v-if="label" class="label !flex items-center gap-2 capitalize">
      {{ label }}
    </p>
    <div
      class="flex items-center justify-between rounded-md border border-line px-3 py-4"
    >
      <button
        type="button"
        class="disabled:cursor-not-allowed"
        @click="descreaseCounter"
        :disabled="counter <= 1"
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
          class="icon icon-tabler icons-tabler-outline icon-tabler-plus"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
        </svg>
      </button>
      <div class="flex-1">
        <input
          @change="update"
          class="text-center w-24 focus:shadow-none focus:!outline-none focus:!border-0"
          type="number"
          v-model="counter"
        />
      </div>

      <button
        type="button"
        class="disabled:cursor-not-allowed"
        :disabled="maxQty == counter"
        @click="increaseCounter"
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
          class="icon icon-tabler icons-tabler-outline icon-tabler-plus"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
// import { useField } from "vee-validate";
const emit = defineEmits([
  "update:itemValue",
  "update:quantity",
  "increaseQuantity",
  "desceaseQuantity",
]);

const props = defineProps({
  itemValue: {
    requred: true,
  },
  quantity: {
    requred: false,
  },
  unit: {
    requred: false,
  },
  maxQty: {
    required: false,
  },
  label: {
    required: false,
  },
});

const counter = ref(props.itemValue || 0);
const currentValue = ref(null);

function increaseCounter(option) {
  ++counter.value;
  currentValue.value = counter.value;
  emit("update:itemValue", currentValue.value);
  emit("increaseQuantity");
}
function descreaseCounter(option) {
  --counter.value;
  currentValue.value = counter.value;
  emit("update:itemValue", currentValue.value);

  emit("desceaseQuantity");
}

function update(event) {
  emit("update:itemValue", event.target.value);
  emit("desceaseQuantity");
}

watch(
  () => props.itemValue,
  (value) => {
    counter.value = value;
    currentValue.value = value;
  }
);
</script>
<style lang="scss"></style>
