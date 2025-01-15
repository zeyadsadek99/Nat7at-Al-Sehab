<template>
  <VeeField type="file" :name="name" v-slot="{ meta, field }">
    <div
      class="input_wrapper py-6"
      :class="{
        error: !meta.valid && meta.touched,
      }"
      v-bind="getRootProps()"
    >
      <label :for="id" class="label" v-if="label">{{ label }}</label>

      <div
        class="upload hid_input rounded-xl border border-border p-2"
        :class="{
          uploading: uploadPercentage,
          '!cursor-move border-dashed bg-third': dragOver,
        }"
        @dragover="dragOver = true"
        @dragleave="dragOver = false"
      >
        <input
          ref="refFile"
          type="file"
          :id="id"
          @change="uploadFile($event.target.files[0])"
          class="hidden"
          :accept="accept"
          :disabled="disabled"
          :multiple="multiple ? true : false"
        />

        <input type="text" class="hidden" :name="name" v-bind="field" />
        <label
          :for="id"
          class="!flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg p-7 text-center"
        >
          <img
            width="200"
            height="200"
            class="mx-auto h-full w-full object-cover"
            v-if="preview && no_preview"
            :src="preview"
            alt=""
          />
          <template v-else>
            <template v-if="!disabled">
              <span>
                {{ $t("LABELS.DropImageAnywhereToUpload") }}
              </span>
              <span>{{ t("LABELS.or") }}</span>
              <span class="block px-4 py-3 text-black/30 bg-[#E5E7EB]">{{
                t("LABELS.selectImage")
              }}</span>
            </template>
          </template>
        </label>

        <div class="flex gap-2 pb-7">
          <div class="flex flex-1 flex-col">
            <h5 class="flex items-center justify-between">
              <span class="text-[#191D23]"> {{ $t("LABELS.uploading") }}</span>
              <div
                class="flex items-center gap-2 font-bold text-primary"
                v-if="uploadFinshed"
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
                  class="icon icon-tabler icons-tabler-outline icon-tabler-check"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <button
                  type="button"
                  @click="cancelReq"
                  class="h-6 w-6 flex items-center justify-center rounded-full border border-primary text-primary transition hover:bg-primary hover:!text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-x"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div
                class="flex items-center gap-2 font-bold text-primary"
                v-if="uploadPercentage && !uploadFinshed"
              >
                <span class="font-bold text-primary" v-if="uploadPercentage">
                  {{ uploadPercentage + "%" }}
                </span>

                <button
                  type="button"
                  @click="cancelReq"
                  class="h-6 w-6 rounded-full border border-primary text-primary transition hover:bg-primary hover:!text-website_white"
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
                    class="icon icon-tabler icons-tabler-outline icon-tabler-x"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </h5>
            <div class="mt-auto h-1 w-full rounded-lg bg-[#E7EAEE]">
              <div
                class="h-2 rounded-lg bg-[#047857] transition"
                :style="`width:${uploadPercentage}%;`"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <VeeErrorMessage
        v-if="!meta.valid && meta.touched"
        :name="name"
        as="div"
        class="mt-2 text-red-500 text-sm"
      />
    </div>
  </VeeField>
  <div
    v-if="preview && !no_preview && !notPreview"
    class="flex flex-wrap items-center gap-3"
  >
    <div class="relative">
      <button
        class="absolute -left-1 -top-1 z-10 h-6 w-6 flex items-center justify-center rounded-full border bg-primary text-sm text-white"
        type="button"
        @click="cancelReq"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-x"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
      <img
        width="80"
        height="60"
        class="preview_image h-[60px] w-[80px] rounded-lg border-border object-cover"
        :src="preview"
        alt=""
        preview
      />
    </div>
  </div>
</template>

<script setup>
import { useDropzone } from "vue3-dropzone";

import { useToast } from "vue-toastification";

const toast = useToast();

const axios = useNuxtApp().$axios;
const axiosToken = useNuxtApp().$axiosToken;

const { t } = useI18n();
const props = defineProps({
  accept: {
    required: false,
  },
  disabled: {
    required: false,
    default: false,
  },
  no_preview: {
    required: false,
    default: false,
  },
  itemValue: {
    required: true,
  },
  image: {
    required: true,
  },
  id: {
    required: true,
  },
  name: {
    required: true,
  },
  label: {
    required: false,
  },
  placeholder: {
    required: true,
  },
  modalName: {
    required: true,
  },
  modalType: {
    required: true,
  },
  notPreview: {
    required: false,
  },

  multiple: {
    type: Boolean,
  },
  returnFile: {
    required: false,
  },
  baseUrl: {
    required: false,
  },
  attachment: {
    required: false,
    default: "general/attachments",
  },
});
const emit = defineEmits(["update:itemValue", "update:image", "uploading"]);
const preview = ref(null);

const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });
function onDrop(acceptFiles, rejectReasons) {
  uploadFile(acceptFiles[0]);
}

const uploadPercentage = ref(0);

const uploadFinshed = ref(false);
const refFile = ref();

let request = null;

const inputField = useField(props.name);
function uploadFile(file) {
  uploadPercentage.value = 0;

  emit("uploading", true);

  if (props.returnFile) {
    dragOver.value = false;
    preview.value = URL.createObjectURL(file);
    uploadPercentage.value = 100;
    emit("update:itemValue", preview.value);
    emit("update:image", file);
    inputField.setValue(file);

    uploadFinshed.value = true;
    emit("uploading", false);
  } else {
    request = axiosToken.CancelToken.source();
    const frmData = new FormData();
    frmData.append("file", file);
    frmData.append("attachment_type", props.modalType);
    frmData.append("model", props.modalName);

    const config = useRuntimeConfig();
    axios({
      url: props.attachment,
      method: "POST",
      baseURL: config.public.general,
      data: frmData,

      onUploadProgress: (event) =>
        (uploadPercentage.value = parseInt(
          Math.round((event.loaded / event.total) * 100)
        )),
      cancelToken: request.token,
    })
      .then((res) => {
        dragOver.value = false;
        preview.value = URL.createObjectURL(file);

        emit("update:itemValue", preview.value);
        emit("update:image", res.data.data);
        inputField.setValue(res.data.data);
        uploadFinshed.value = true;
        emit("uploading", false);
      })
      .catch((err) => {
        toast.error(err.response?.data.message || t("STATUS.uploadCanceled"));
        dragOver.value = false;
        emit("uploading", false);
        cancelReq();
      });
  }
}

function cancelReq() {
  if (request) request.cancel();
  uploadPercentage.value = 0;
  preview.value = null;
  emit("update:itemValue", "");
  emit("update:image", "");
  refFile.value.value = null;
  request = null;
  inputField.setValue("");
}
const dragOver = ref(false);
watch(
  () => props.itemValue,
  (newVal) => {
    preview.value = newVal;
    if (!newVal) {
      refFile.value.value = null;
      uploadPercentage.value = 0;
    }
  },
  {
    deep: true,
  }
);
onMounted(() => {
  if (props.itemValue) {
    preview.value = props.itemValue;
  }
});
</script>

<style lang="scss">
.input_wrapper {
  &.upload_image {
    margin-bottom: 1.5rem;
    input {
      display: none;
    }
    label {
      cursor: pointer;
      max-width: 300px;

      margin-inline: auto;
      img {
        height: 200px;
        object-fit: cover;
        width: 100%;
        border-radius: 1rem;
      }
    }
  }
  .upload {
    > div {
      @apply hidden;
    }
    &.uploading {
      input {
        @apply hidden;
      }
      > div {
        @apply flex;
      }
    }
    &.hid_input {
      input {
        @apply hidden;
      }
      &.uploading {
        // > label {
        //   @apply hidden;
        // }
      }
    }
  }
}
</style>
