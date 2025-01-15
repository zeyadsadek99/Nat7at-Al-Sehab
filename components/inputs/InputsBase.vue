<template>
  <VeeField :type="type" :name="name" v-slot="{ field, meta }">
    <div
      class="input_wrapper"
      :class="[
        {
          error: !meta.valid && meta.touched,
        },
      ]"
    >
      <label
        :for="id"
        v-if="label"
        :class="labelClass"
        class="label !flex gap-2 capitalize items-center"
      >
        {{ label }}
        <span v-if="optional" class="text-placeholder"
          >({{ $t("LABELS.optional") }})</span
        >
      </label>

      <div class="relative" :class="icon ? 'with_icon' : ''">
        <!-- <img class="icon" v-if="icon" :src="`/icons/${icon}`" alt="icon" /> -->

        <textarea
          v-if="type == 'textarea'"
          :id="id"
          v-bind="field"
          :placeholder="placeholder"
          class="resize-none"
          :rows="rows"
          @input="$emit('update:value', $event.target.value)"
        ></textarea>

        <select
          v-else-if="type === 'select'"
          :id="id"
          v-bind="field"
          :disabled="disabled"
          :placeholder="placeholder"

          class="block relative w-full appearance-none rounded-md   border-[1.25px] border-bordersub p-5 bg-white  focus:bg-white focus:outline-none"
          @change="$emit('update:value', $event.target.value)"
        >
          <option disabled selected class="text-[#5E6366]" value="">{{ placeholder }}</option>
          <option
            v-for="(option, index) in options"
            :key="index"
            :value="option.value"
          >
            {{ option.label }}
          </option>

        </select>

        <input
          :disabled="disabled"
          :step="step"
          v-else
          @focus="$emit('focus')"
          :type="type"
          :id="id"
          v-bind="field"
          :placeholder="placeholder"
          :autocomplete="false"
          :minlength="minlength"
          :maxlength="maxlength"
          :size="size"
          :pattern="pattern"
          @input="$emit('update:value', $event.target.value)"
          @change="$emit('change')"
          @keydown.enter.prevent="$emit('enter')"
        />
        <div
          v-if="type === 'select'"
          class="absolute top-6 end-4 text-primary  flex cursor-pointer items-center pointer-events-none"
        >
          <IconsArrow class="text-primary " />
        </div>
      </div>
      <VeeErrorMessage
        v-if="!meta.valid && meta.touched"
        :name="name"
        as="div"
        class="text-red-500 text-sm"
      />
    </div>
  </VeeField>
</template>

<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  id: {
    required: true,
  },
  disabled: {
    required: false,
  },
  name: {
    required: true,
  },

  label: {
    required: false,
  },
  step: {
    required: false,
  },

  minlength: {
    required: false,
  },
  maxlength: {
    required: false,
  },
  size: {
    required: false,
  },
  rows: {
    required: false,
  },
  pattern: {
    required: false,
  },

  icon: {
    required: false,
  },
  placeholder: {
    required: true,
  },
  labelIcon: {
    required: false,
  },
  value: {
    required: false,
  },
  labelClass: {
    required: false,
  },
  type: {
    required: false,
    default: "text",
  },
  optional: {
    required: false,
    default: false,
  },
  options: {
    type: Array,
    required: false, // Required only for type="select"
  },
});

const inputFiled = useField(props.name);

watch(
  () => props.value,
  (value) => {
    if (value || value == 0) {
      inputFiled.setValue(value);
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.input_wrapper {
  @apply flex flex-col relative;
  label {
    @apply text-[#5E6366] font-medium text-sm duration-300 transition ease-in-out mb-1;
  }

  input,
  textarea,
  select {
    @apply w-full  block  resize-none  pt-5 pb-4  text-text border px-3 border-[#CFD3D4]  rounded-lg  focus:outline-none  focus:border-primary;
    ::placeholder {
      @apply text-gray-500;
    }
  }
  select {
    @apply appearance-none bg-white p-5;
  }
  &.error {
    label {
      @apply text-red-500;
    }
    input,
    textarea
     {
      @apply border-red-500 text-red-500;
    }
  }
}
</style>
