<template>
    <div>
      <label class="top_label" for="phone">{{ label }}</label>
      <div class="phone_wrapper flex gap-2 items-center mb-2">
        <VeeField type="text" name="code" v-slot="{ meta }">
          <Menu
            as="div"
            v-if="country"
            class="relative flex items-center"
            v-slot="{ open }"
          >
            <MenuButton id="code_menu" :disabled="disabled">
              <div
                v-if="country"
                :class="disabled && 'disabledBtn'"
                class="flex items-center gap-2 drop_name bg-white text-text border rounded-xl py-[14px] px-1"
              >
                <nuxt-img
                  width="20"
                  height="15"
                  :alt="country.name"
                  :src="country.flag"
                  :srcset="`${country.flag} 480w, ${country.flag} 1080w`"
                  :class="`w-5 h-auto flag flag-${country.code}`"
                  format="webp"
                  loading="lazy"
                />
                +{{ country.code }}
                <font-awesome-icon
                  :style="phoneColor"
                  width="12"
                  class="text-lg ms-auto text-sub text-primary"
                  :icon="open ? ['fas', 'angle-up'] : ['fas', 'angle-down']"
                />
                <!-- <i
                  class="fa-solid text-lg"
                  :class="open ? 'fa-angle-up' : 'fa-angle-down'"
                ></i> -->
              </div>
            </MenuButton>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute top-full w-full h-[200px] overflow-y-auto overflow-x-hidden origin-top-right divide-y z-[1002] rounded-md divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                :class="$i18n.locale == 'ar' ? 'left-0' : 'right-0'"
              >
                <MenuItem v-for="option in countries" :key="option.id">
                  <button
                    type="button"
                    @click="selectOption(option)"
                    class="text-start py-4 px-2 gap-2 flex items-center text-text"
                  >
                    <div class="flex items-center">
                      <nuxt-img
                        format="webp"
                        width="20"
                        height="15"
                        :alt="option.name"
                        :src="option.flag"
                        :srcset="`${option.flag} 480w, ${option.flag} 1080w`"
                        :class="`me-2 w-5 h-4 flag flag-${option.code}`"
                        loading="lazy"
                      />
                      <div :style="phoneColor">+ {{ option.code }}</div>
                    </div>
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
          <VeeErrorMessage
            v-if="!meta.valid && meta.touched"
            name="code"
            as="div"
            class="text-red-500 text-sm"
          />
        </VeeField>
        <VeeField type="phone" :name="name" v-slot="{ field, meta }">
          <div
            class="input_wrapper flex-1 flex-col mb-0"
            :class="(!meta.valid && meta.touched ? 'error' : '', classes)"
          >
            <input
              :disabled="disabled"
              type="phone"
              :id="id"
              v-bind="field"
              :placeholder="placeholder"
              class="font-light border text-text border-opacity-10 rounded-xl"
              :class="[
                !meta.valid &&
                  meta.touched &&
                  'border-red-500  placeholder:text-red-500 lg:text-lg text-sm error',
                paddingEnd && '!pe-[55px]',
                disabled && 'disabledInput',
              ]"
            />
          </div>
        </VeeField>
      </div>
      <VeeErrorMessage name="phone" as="div" class="text-red-500 text-sm mb-2" />
    </div>
  </template>
  <script setup>
  import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
  import { ref } from "vue";
  defineProps({
    id: {
      required: false,
      default: "phone",
    },
    placeholder: {
      required: true,
    },
    name: {
      required: false,
      default: "phone",
    },
    classes: {
      required: false,
    },
    phoneColor: {
      required: false,
    },
    codeColor: {
      required: false,
      default: "text-white",
    },
    paddingEnd: {
      required: false,
    },
    label: {
      required: false,
    },
    disabled: {
      required: false,
      default: false,
    },
  });
  const dropValue = ref();
  const field = useField("code");
  // const props = defineProps(["modelValue", "name", "label"]);
  const emit = defineEmits(["code_change", "update:modelValue"]);
  const value = computed({
    get() {
      return props.modelValue;
    },
    set(newValue) {
      emit("update:modelValue", newValue);
    },
  });
  const countries = ref([]);
  const country = ref(null);
  const config = useRuntimeConfig();
  const i18n = useI18n();
  const optionName = ref(null);
  // function fetchData() {
  //   $fetch("countries", {
  //     method: "GET",
  //     baseURL: config.public.baseURL,
  //     headers: {
  //       "Accept-Language": i18n.locale.value,
  //     },
  //   }).then((res) => {
  //     countries.value = res.data;
  //     country.value = countries.value[0];
  //     field.setValue(country.value);
  //   });
  // }
  // onMounted(() => fetchData());
  const { data } = useFetch("countries", {
    lazy: true,
    server: false,
    method: "GET",
    baseURL: config.public.baseURL,
    headers: {
      "Accept-Language": i18n.locale.value,
    },
  });
  const selectOption = (option) => {
    // console.log(option);
    country.value = option;
    // filedValue.setValue(option.id)
    // currentValue.value = option.id;
    optionName.value = option.name;
    // console.log(option.id);
    field.setValue(country.value);
  };
  watch(data, () => {
    getLocation(data.value.data);
  });
  function getLocation(phones) {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // console.log(phones);
    let current_code;
    let allCountries = phones;
    if (timeZone.includes("Cairo")) {
      current_code = phones.find((el) => el.code == "20");
      if (current_code) {
        allCountries = allCountries.filter((el) => el.id != current_code.id);
        allCountries.unshift(current_code);
      }
    } else if (timeZone.includes("Riyadh")) {
      current_code = allCountries.find((el) => el.code == "966");
      if (current_code) {
        allCountries = allCountries.filter((el) => el.id != current_code.id);
        allCountries.unshift(current_code);
      }
    } else {
      current_code = phones.find((el) => el.code == "971");
      if (current_code) {
        allCountries = allCountries.filter((el) => el.id != current_code.id);
        allCountries.unshift(current_code);
      }
    }
    countries.value = allCountries;
    country.value = allCountries[0];
    field.setValue(country.value);
    emit("code_change", country.value);
  }
  </script>
  <style lang="scss">
  // .disabledBtn {
  //   background-color: transparent !important;    -light
  // }
  label.top_label {
    @apply text-text font-semibold mb-1 block;
  }
  .help.is-danger {
    @apply text-red-700 text-sm;
    font-size: 14px !important;
  }
  .phone_wrapper {
    @apply relative;
    .input_wrapper {
      // direction: ltr;
      @apply relative flex;
      input {
        @apply text-sm;
      }
    }
  }
  .disabledInput {
    background-color: white !important;
  }
  body[dir="rtl"] {
    .phone_wrapper {
      .input_wrapper {
        > div {
          @apply order-2;
        }
        input {
          @apply order-1;
          // direction: rtl;
        }
      }
    }
  }
  </style>