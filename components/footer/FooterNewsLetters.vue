<script setup>
import * as yup from "yup";
const { t } = useI18n();
const axios = useNuxtApp().$axios;

const schema = yup.object({
  emailAddress: yup
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
      email: values.emailAddress,
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
    class="bg-primaryOpacity30 p-3.5 rounded-lg"
    v-slot="{ values }"
  >
    <h3 class="text-white font-semibold mb-7">
      {{ t("TITLES.JoinOurNewsletter") }}
    </h3>
    <div class="flex items-center rounded-md overflow-hidden">
      <VeeField v-slot="{ field, meta }" id="emailAddress" name="emailAddress">
        <div
          class="input_wrapper"
          :class="{ error: !meta.valid && meta.touched }"
        >
          <input
            id="emailAddress"
            :placeholder="t('LABELS.yourEmailAddress')"
            v-bind="field"
          />
        </div>
      </VeeField>

      <InputsButton
        class="bg-black text-white h-14 whitespace-nowrap px-7"
        :name="t('BUTTONS.sendMessage')"
        type="submit"
        :loading="loading"
        :disabled="!values.emailAddress"
      />
    </div>
    <VeeErrorMessage class="text-sm text-red-500" name="emailAddress" />
    <Teleport to="body">
      <global-success
        v-if="success"
        @close="success = false"
        :message="message"
      />
      <global-fail v-if="fail" @close="fail = false" :message="message" />
    </Teleport>

    <p class="text-white/50 text-sm font-medium mt-5">
      * {{ t("TITLES.willSendYouWeeklyUpdatesForYourBetter") }}
    </p>
  </VeeForm>
</template>

<style lang="scss" scoped>
.input_wrapper {
  @apply flex flex-col w-full;
  label {
    @apply text-sub font-medium text-sm mb-1;
  }
  input {
    @apply w-full px-2 h-14 resize-none placeholder:text-sub py-2 text-white  bg-primaryOpacity30  focus:outline-none  focus:border-primary;
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
