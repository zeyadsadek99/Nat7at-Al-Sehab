<template>
  <GlobalTitle :title="t('NAV.contactUs')" />
  <div class="px-4 lg:container">
    <VeeForm
      @submit="onSubmit"
      :validation-schema="schema"
      class="max-w-4xl mx-auto bg-white p-6 lg:p-8 space-y-6 rounded-lg shadow-lg"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <!-- Name and Email -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InputsBase
          id="name"
          name="name"
          size="67"
          :label="t('LABELS.name')"
          :placeholder="t('LABELS.name')"
          class="w-full"
        />
        <InputsBase
          id="email"
          name="email"
          size="67"
          :label="t('LABELS.email')"
          :placeholder="t('LABELS.email')"
          class="w-full"
        />
        <InputsBase
          type="phone"
          id="mobile"
          name="mobile"
          size="67"
          :label="t('LABELS.mobile')"
          :placeholder="t('LABELS.mobile')"
          class="w-full"
        />
        <InputsBase
          type="select"
          id="country"
          name="country"
          size="67"
          :label="t('LABELS.select_country')"
          :placeholder="t('LABELS.select_country')"
          :options="[
            { label: t('COUNTRIES.sa'), value: 'sa' },
            { label: t('COUNTRIES.eg'), value: 'eg' },
            { label: t('COUNTRIES.ae'), value: 'ae' },
          ]"
          class="w-full"
        />
      </div>

      <!-- Message -->
      <InputsBase
        type="textarea"
        rows="6"
        id="message"
        name="message"
        :label="t('LABELS.message')"
        :placeholder="t('LABELS.message')"
        class="w-full"
      />

      <!-- Submit Button -->
      <div
        class="flex justify-center lg:justify-start"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <InputsButton
          type="submit"
          :name="t('BUTTONS.submit')"
          class="px-6 lg:px-10 py-3 font-bold text-white bg-primary rounded-full shadow-md transition-all duration-300 transform hover:bg-[#14275A] hover:scale-105 hover:shadow-lg"
        />
      </div>
    </VeeForm>

    <!-- Global Success and Fail Messages -->
    <Teleport to="body">
      <global-success
        v-if="success"
        @close="success = false"
        :message="message"
      />
      <global-fail v-if="fail" @close="fail = false" :message="message" />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import * as yup from "yup";
const axios = useNuxtApp().$axios;

const { t } = useI18n();
const schema = yup.object({
  name: yup
    .string()
    .required(t("ERRORS.isRequired", { name: t("LABELS.name") })),
  email: yup
    .string()
    .email(t("ERRORS.validEmail"))
    .required(t("ERRORS.isRequired", { name: t("LABELS.Email") }))
    .test("email", t("ERRORS.validEmail"), (value) => {
      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-z])*$/.test(
        value
      );
    }),
  mobile: yup
    .string()
    .required(t("ERRORS.isRequired", { name: t("LABELS.Phone") }))
    .matches(/^[0-9]{10}$/, t("ERRORS.invalidPhone")),
  country: yup
    .string()
    .required(t("ERRORS.isRequired", { name: t("LABELS.COUNTRY") }))
    .oneOf(["sa", "eg", "ae"], t("ERRORS.invalidCountry")),

  message: yup
    .string()
    .required(t("ERRORS.isRequired", { name: t("LABELS.Message") })),
});
const success = ref(false);
const fail = ref(false);
const loading = ref(false);
const message = ref("");

function onSubmit(values: any, actions: any) {
  message.value = "";
  loading.value = true;
  if (values) {
    actions.resetForm();
    success.value = true;
  } else {
    fail.value = true;
  }

  // axios
  //   .post("contact", values)
  //   .then((res) => {
  //     success.value = true;
  //     message.value = res.data.message;
  //     loading.value = false;
  //     setTimeout(() => {
  //       success.value = false;
  //       message.value = "";
  //     }, 3000);
  //     actions.resetForm();
  //   })
  //   .catch((err) => {
  //     fail.value = true;
  //     message.value = err.response.data.message;
  //     loading.value = false;
  //     setTimeout(() => {
  //       fail.value = false;
  //       message.value = "";
  //     }, 3000);
  //   });
}
</script>

<style scoped></style>
