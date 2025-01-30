<template>
  <section class="bg-secondary">
    <div
      class="px-3 lg:container py-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-40"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <!-- Left Section -->
      <div
        class="md:w-1/2 text-center lg:text-start space-y-5 text-[#404040]"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <h1 class="text-[25px] font-bold">{{ t("NEWSLETTER.title") }}</h1>
        <p class="text-md">{{ t("NEWSLETTER.description") }}</p>
      </div>

      <!-- Right Section -->
      <div
        class="md:w-1/2 flex justify-center"
        data-aos="fade-left"
        data-aos-duration="800"
      >
        <VeeForm
          @submit="onSubmit"
          :validation-schema="schema"
          v-slot="{ errors, values, handleSubmit }"
          class="w-full  relative"
        >
          <!-- Email Input -->
          <div class="relative mx-auto max-lg:w-[360px]">
            <InputsBase
              id="email"
              name="email"
              :placeholder="t('NEWSLETTER.placeholder')"
              class="w-full h-20 lg:pe-20 ps-4   font-medium placeholder-primary"
            />

            <InputsButton
              type="submit"
              :name="t('NEWSLETTER.button')"
              class="absolute end-4 top-3 mx-auto text-center bg-primary text-white px-4 lg:px-20 py-2 rounded-[8px] shadow-md transition-all duration-300 transform hover:bg-[#14275A] hover:scale-105 hover:shadow-lg"
            />
          </div>

          <!-- Submit Button -->
        </VeeForm>
      </div>
    </div>
  </section>
</template>
<script setup>
import * as yup from "yup";

const { t } = useI18n();

// Validation Schema
const schema = reactive(
  yup.object({
    email: yup
      .string()
      .required(t("ERRORS.isRequired", { name: t("LABELS.Email") }))
      .email(t("ERRORS.validEmail"))
      .test("email", t("ERRORS.validEmail"), (value) => {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-z])*$/.test(
          value
        );
      }),
  })
);

function onSubmit(values) {
  console.log("Submitted values:", values);
}
</script>
