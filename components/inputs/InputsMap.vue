<template>
  <div class="w-full" data-aos="fade-up" data-aos-duration="1000">
    <!-- Input Wrapper -->
    <div class="input-wrapper mb-2" data-aos="fade-right" data-aos-delay="200">
      <p v-if="label" class="label text-sub mb-2 items-center capitalize">
        {{ label }}
      </p>
      <GMapAutocomplete
        v-if="draggable"
        :placeholder="$t('LABELS.searchForLocation')"
        @place_changed="setPlace"
      >
      </GMapAutocomplete>
    </div>

    <!-- Map -->
    <div
      class="overflow-hidden rounded-xl"
      data-aos="fade-left"
      data-aos-delay="400"
    >
      <GMapMap
        v-if="center"
        :center="center"
        :zoom="8"
        map-type-id="terrain"
        :options="{
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true,
          styles: styles ? [...styles?.options] : null,
        }"
          class="map-container"

      >
        <GMapMarker
          :position="center"
          :clickable="true"
          :draggable="draggable"
          @dragend="openMarker"
        >
        </GMapMarker>
      </GMapMap>
    </div>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  location: {
    required: false,
  },
  label: {
    required: false,
    default: false,
  },
  draggable: {
    required: false,
    default: true,
  },
});

const latFiled = useField("location.lat");
const lngFiled = useField("location.lng");
const addressFiled = useField("location.address");

const center = ref({
  lat: 31.1,
  lng: 29.2,
  address: "",
});
const emit = defineEmits(["setLocation"]);
function openMarker(place) {
  center.value.lat = +place.latLng.lat().toFixed(7);
  center.value.lng = +place.latLng.lng().toFixed(7);
  latFiled.setValue(center.value.lat);
  lngFiled.setValue(center.value.lng);
  emit("setLocation", center.value);
}
function setPlace(place) {
  center.value.lat = +place.geometry.location.lat();
  center.value.lng = +place.geometry.location.lng();
  center.value.address = place.formatted_address;
  //   addressFiled.setValue(center.value.address);
  latFiled.setValue(center.value.lat);
  lngFiled.setValue(center.value.lng);
  emit("setLocation", center.value);
}

function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((place) => {
      center.value.lat = +place.coords.latitude.toFixed(7);
      center.value.lng = +place.coords.longitude.toFixed(7);
      latFiled.setValue(center.value.lat);
      lngFiled.setValue(center.value.lng);
    });
    emit("setLocation", center.value);
  }
}

watch(
  () => props.location,
  () => {
    if (props.location) {
      center.value.lat = +props?.location?.lat;
      center.value.lng = +props?.location?.lng;
      latFiled.setValue(center.value?.lat);
      lngFiled.setValue(center.value?.lng);
    }
  },
  { deep: true, immediate: true }
);

onMounted(() => {
  if (props.location?.lat && props.location?.lng) {
    center.value.lat = +props.location.lat;
    center.value.lng = +props.location.lng;
    // center.value.address = props.location.address;
    latFiled.setValue(center.value.lat);
    lngFiled.setValue(center.value.lng);
  } else {
    getCurrentLocation();
  }
});
const styles = ref(null);
</script>

<style lang="scss" scoped>
.map-container {
    width: 100%;
    height: 550px;
  }

  @media (max-width: 640px) {
    .map-container {
      height: 400px;
    }
  }
.input-wrapper {
  @apply relative;
  label {
    @apply absolute start-4 top-1 z-10 text-[#21284E];
  }
  input,
  textarea,
  .p-dropdown,
  .p-multiselect,
  .p-calendar {
    @apply h-14 w-full appearance-none rounded-md border border-gray-300  bg-white px-4 pt-4 text-[#21284E] outline-none disabled:cursor-not-allowed disabled:resize-none disabled:bg-gray-100;
    .p-dropdown-trigger,
    .p-multiselect-trigger {
      @apply absolute end-6 top-1/2 h-fit w-fit -translate-y-1/2;
    }
  }
  &.input-phone-wrapper {
    input {
      @apply pt-0;
    }
    @apply w-fit;
    .p-dropdown {
      @apply rounded-e-none border-e-0 pe-1 pt-0;
      .p-dropdown-label {
        @apply h-[56px];
      }
    }
    input {
      @apply rounded-s-none border-s-0 ps-1;
    }
    .p-dropdown-trigger {
      display: none;
    }
  }
}
</style>
