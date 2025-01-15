<script setup>
import * as yup from "yup";
const { t } = useI18n();
const axios = useNuxtApp().$axios;

const schema = yup.object({
  email_address: yup
    .string()
    .email(t("ERRORS.validEmail"))

    .nullable(),
});

const success = ref(false);
const fail = ref(false);
const loading = ref(false);
const message = ref("");
function onSubmit(values, actions) {
  message.value = "";
  loading.value = true;

  axios
    .post("save-news-letter", {
      email: values.email_address,
    })
    .then((res) => {
      success.value = true;
      message.value = res.data.message;
      loading.value = false;
      setTimeout(() => {
        success.value = false;
        message.value = "";
      }, 3000);
      actions.resetForm();
    })
    .catch((err) => {
      fail.value = true;
      message.value = err.response.data.message;
      loading.value = false;
      setTimeout(() => {
        fail.value = false;
        message.value = "";
      }, 3000);
    });
}
</script>

<template>
  <VeeForm
    @submit="onSubmit"
    :validation-schema="schema"
    class="max-w-[400px] mt-8"
    v-slot="{ values }"
  >
    <div
      class="flex items-center has-[input:focus]:border-primary overflow-hidden rounded-full border border-border"
    >
      <VeeField
        v-slot="{ field, meta }"
        id="email_address"
        name="email_address"
      >
        <div
          class="input_wrapper_container"
          :class="{ error: !meta.valid && meta.touched }"
        >
          <input
            id="email_address"
            :placeholder="t('LABELS.yourEmailAddress')"
            v-bind="field"
          />
        </div>
      </VeeField>

      <InputsButton
        class="bg-black text-white h-14 rounded-full whitespace-nowrap px-7"
        :name="t('BUTTONS.subscribe')"
        type="submit"
        :loading="loading"
        :disabled="!values.email_address"
      />
    </div>
    <VeeErrorMessage class="text-sm text-red-500" name="email_address" />
    <Teleport to="body">
      <global-success
        v-if="success"
        @close="success = false"
        :message="message"
      />
      <global-fail v-if="fail" @close="fail = false" :message="message" />
    </Teleport>
  </VeeForm>
</template>

<style lang="scss" scoped>
.input_wrapper_container {
  @apply flex flex-col w-full;
  label {
    @apply text-sub font-medium text-sm mb-1;
  }
  input {
    @apply w-full px-2 h-14 resize-none placeholder:text-sub py-2 text-white    focus:outline-none;
    ::placeholder {
      @apply text-gray-500;
    }
  }
  &.error {
    label {
      @apply text-red-500;
    }
    input {
      @apply border-red-500 text-red-500;
    }
  }
}
</style>
