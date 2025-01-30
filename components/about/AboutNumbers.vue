<template>
  <section class="px-3 lg:container relative">
    <div
      class="bgimage bg-cover bg-center mx-auto py-16 rounded-xl"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        class="grid grid-cols-2 md:grid-cols-5 text-center"
      >
        <div
          v-for="(item, index) in stats"
          :key="index"
          class="flex flex-col gap-1 items-center"
          data-aos="zoom-in"
          :data-aos-delay="index * 150"
          data-aos-duration="800"
        >
          <h1
            class="text-3xl lg:text-[41px] font-bold text-primary font-montserrat"
            data-aos="fade-down"
            :data-aos-delay="index * 150"
          >
            {{ item.number }}
          </h1>
          <p
            class="lg:text-xl text-text whitespace-nowrap"
            data-aos="fade-up"
            :data-aos-delay="index * 200"
          >
            {{ item.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
defineProps({
  stats: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.bgimage {
  background-image: url("assets/icons/bg1.jpg");
}
</style>
