<template>
  <div
    @click="close"
    class="success-modal fixed left-0 top-0 z-[1007] flex h-screen w-screen items-center justify-center bg-[#00000083] px-3"
  >
    <div
      class="success-modal-content w-full max-w-[600px] max-h-[650px] min-h-[250px] overflow-y-auto rounded-2xl bg-[#fbfafc]"
    >
      <div
        class="modalStyle p-5 overflow-x-hidden bg-website_white w-full text-center rounded-2xl"
      >
        <img
          src="@/assets/media/success.gif"
          alt="success"
          width="400"
          height="400"
          class="w-400 h-auto m-auto"
        />
        <h3 class="font-semibold text-2xl">{{ $t("TITLES.Con-grates") }}</h3>
        <p class="text-third">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  persist: {
    required: false,
    default: false,
  },
  title: {
    required: false,
  },
  message: {
    required: false,
  },
  classes: {
    type: String,
    required: false,
    default: null,
  },
  titleClasses: {
    type: String,
    required: false,
    default: null,
  },
  iconColor: {
    type: String,
    required: false,
    default: null,
  },
});

const emit = defineEmits(["close"]);

function close() {
  if (props.persist) return;

  emit("close");
}
</script>

<style lang="scss">
.success-modal-content {
  animation: show-modal 0.3s 0.1s forwards ease-in-out;

  @keyframes show-modal {
    0% {
      bottom: -100%;
      opacity: 0;
    }
    100% {
      bottom: 0;
      opacity: 1;
    }
  }
}
</style>
