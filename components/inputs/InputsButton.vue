<script lang="ts" setup>
type Props = {
  loading?: boolean;
  name: string;
  disabled?: boolean;
  type: "submit" | "button";
};

const emit = defineEmits<{
  (event: "click"): void;
}>();
defineProps<Props>();
</script>

<template>
  <button @click="emit('click')" :type="type" :disabled="disabled || loading">
    <span class="loader" v-if="loading"></span>
    <template v-else>{{ name }}</template>
  </button>
</template>

<style lang="scss" scoped>
/* HTML: <div class="loader"></div> */
.loader {
  width: 25px;
  aspect-ratio: 1;
  display: grid;
}
.loader::before,
.loader::after {
  content: "";
  grid-area: 1/1;
  --c: no-repeat radial-gradient(farthest-side, #246d77 92%, #0000);
  background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%,
    var(--c) 0 50%;
  background-size: 6px 6px;
  animation: l12 1s infinite;
}
.loader::before {
  margin: 4px;
  filter: hue-rotate(45deg);
  background-size: 4px 4px;
  animation-timing-function: linear;
}

@keyframes l12 {
  100% {
    transform: rotate(0.5turn);
  }
}
</style>
