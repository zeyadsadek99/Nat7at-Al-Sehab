<template>
  <div class="px-3 lg:container " id="contact">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div
        class="col-span-3 lg:col-span-1 bg-primary p-5 sm:p-7 xl:p-10 flex flex-col gap-6"
      >
        <div>
          <h1
            class="text-start text-xl font-bold text-white sm:text-2xl lg:text-4xl"
          >
            {{ t("TITLES.contactInformation") }}
          </h1>
          <p class="mt-8 text-white">
            {{ t("TITLES.weAreHereToServe") }}
          </p>
        </div>
        <div class="flex-1 flex justify-center flex-col">
          <GlobalContactInfo />
        </div>
      </div>
      <div class="col-span-3 lg:col-span-2">
        <div class="bg-white rounded-[24px] p-5 sm:p-7 xl:p-10 w-full">
          <div class="form_wrapper">
            <VeeForm @submit="onSubmit" :validation-schema="schema">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <VeeField
                  v-slot="{ field, meta }"
                  id="full_name"
                  name="full_name"
                >
                  <div
                    class="input_wrapper"
                    :class="{ error: !meta.valid && meta.touched }"
                  >
                    <label for="full_name">
                      {{ $t("LABELS.full_name") }}
                    </label>

                    <input id="full_name" name="full_name" v-bind="field" />
                    <VeeErrorMessage
                      class="text-sm text-red-500"
                      name="full_name"
                    />
                  </div>
                </VeeField>
                <VeeField v-slot="{ field, meta }" id="email" name="email">
                  <div
                    class="input_wrapper"
                    :class="{ error: !meta.valid && meta.touched }"
                  >
                    <label for="email">
                      {{ $t("LABELS.Email") }}
                    </label>

                    <input id="email" name="email" v-bind="field" />
                    <VeeErrorMessage
                      class="text-sm text-red-500"
                      name="email"
                    />
                  </div>
                </VeeField>
                <VeeField v-slot="{ field, meta }" id="phone" name="phone">
                  <div
                    class="input_wrapper"
                    :class="{ error: !meta.valid && meta.touched }"
                  >
                    <label for="phone">
                      {{ $t("LABELS.Phone") }}
                    </label>

                    <input id="phone" name="phone" v-bind="field" />
                    <VeeErrorMessage
                      class="text-sm text-red-500"
                      name="phone"
                    />
                  </div>
                </VeeField>
                <VeeField v-slot="{ field, meta }" id="subject" name="subject">
                  <div
                    class="input_wrapper"
                    :class="{ error: !meta.valid && meta.touched }"
                  >
                    <label for="subject">
                      {{ $t("LABELS.Subject") }}
                    </label>

                    <input id="subject" name="subject" v-bind="field" />
                    <VeeErrorMessage
                      class="text-sm text-red-500"
                      name="subject"
                    />
                  </div>
                </VeeField>
                <div class="sm:col-span-2">
                  <VeeField
                    v-slot="{ field, meta }"
                    id="content"
                    name="content"
                  >
                    <div
                      class="input_wrapper"
                      :class="{ error: !meta.valid && meta.touched }"
                    >
                      <label for="content">
                        {{ $t("LABELS.Message") }}
                      </label>

                      <textarea
                        :placeholder="t('LABELS.write_your_message')"
                        id="content"
                        name="content"
                        rows="4"
                        v-bind="field"
                      />
                      <VeeErrorMessage
                        class="text-sm text-red-500"
                        name="content"
                      />
                    </div>
                  </VeeField>
                </div>
              </div>

              <InputsButton
                class="mt-7 ms-auto base-btn"
                :name="t('BUTTONS.sendMessage')"
                type="submit"
                :loading="loading"
              />
            </VeeForm>

            <Teleport to="body">
              <global-success
                v-if="success"
                @close="success = false"
                :message="message"
              />
              <global-fail
                v-if="fail"
                @close="fail = false"
                :message="message"
              />
            </Teleport>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as yup from "yup";

const axios = useNuxtApp().$axios;

const { t } = useI18n();

const schema = yup.object({
  full_name: yup
    .string()
    .required(t("ERRORS.isRequired", { name: t("LABELS.full_name") })),
  email: yup
    .string()
    .email(t("ERRORS.validEmail"))
    .required(t("ERRORS.isRequired", { name: t("LABELS.Email") }))
    .test("email", t("ERRORS.validEmail"), (value) => {
      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-z])*$/.test(
        value
      );
    }),
  phone: yup
    .string()
    .required(t("ERRORS.isRequired", { name: t("LABELS.Phone") })),

  subject: yup
    .string()
    .required(t("ERRORS.isRequired", { name: t("LABELS.Subject") })),
  content: yup
    .string()
    .required(t("ERRORS.isRequired", { name: t("LABELS.Message") })),
});

const success = ref(false);
const fail = ref(false);
const loading = ref(false);
const message = ref("");

function onSubmit(values, actions) {
  message.value = "";
  loading.value = true;

  axios
    .post("contact", values)
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

<style lang="scss" scoped>
.input_wrapper {
  @apply flex flex-col;
  label {
    @apply text-sub font-medium text-sm mb-1;
  }
  input,
  textarea {
    @apply w-full  resize-none  py-2 text-text border-b border-[#011C2A]   focus:outline-none  focus:border-primary;
    ::placeholder {
      @apply text-gray-500;
    }
  }
  &.error {
    label {
      @apply text-red-500;
    }
    input,
    textarea {
      @apply border-red-500 text-red-500;
    }
  }
}
</style>
