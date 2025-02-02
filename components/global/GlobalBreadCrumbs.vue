<template>
  <div
    class="bgImage h-[156px] flex justify-center items-center bg-cover bg-center py-8"
  >
    <div class="breadcrumb flex text-center justify-center items-center">
      <div class="flex flex-col justify-between">
        <div
          class="flex items-center justify-center gap-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 class="font-bold text-white text-3xl lg:text-[40px]">
            {{ title }}
          </h1>
        </div>
        <ul
          class="flex items-center justify-center flex-wrap gap-1 mt-3 breadcrumb-list"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <li
            v-for="(item, i) in items"
            :key="i"
            class="flex items-center"
          >
            <router-link
              :to="item.path"
              class="text-decoration-none font-medium lg:text-lg text-white flex lg:flex-row flex-col items-center"
            >
              <span class="mb-1">{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: false,
    default: () => [],
  },
  title: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.bgImage {
  background-image: url("assets/icons/backg.webp");
}

.breadcrumb-list {
  li {
    &:not(:last-child) {
      &::after {
        content: " / ";
        font-family: sans-serif;
        @apply inline-block text-white ms-1 font-bold;
      }
    }

    a.router-link-active.router-link-exact-active {
      @apply font-medium text-white;
    }
  }
}

.v-locale--is-rtl {
  .breadcrumb-list {
    li {
      &:not(:last-child) {
        &::after {
          content: "\f104";
        }
      }
    }
  }
}
</style>
