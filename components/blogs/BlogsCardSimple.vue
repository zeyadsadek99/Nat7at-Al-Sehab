<script lang="ts" setup>
type Props = {
  blog: Blog;
};

const { locale, t } = useI18n();
const localePath = useLocalePath();

defineProps<Props>();
</script>

<template>
  <div class="blog-card-simple">
    <div class="h-[310px] relative overflow-hidden">
      <img
        width="421"
        height="310"
        class="blog-image"
        :src="blog.image"
        :alt="blog.title"
      />
    </div>

    <div class="blog-content">
      <h2
        class="text-2xl text-text uppercase font-semibold text-start line-clamp-1"
      >
        {{ blog.title }}
      </h2>

      <p class="text-sm uppercase text-start text-text font-bold">
        {{
          new Date(blog.date).toLocaleDateString(
            locale == "ar" ? "ar-eg" : "en-us",
            {
              day: "numeric",
              month: "short",
              year: "numeric",
            }
          )
        }}
      </p>
      <nuxt-link
        :to="localePath(`/blogs/${blog.slug}`)"
        class="text-primary text-start font-semibold"
      >
        {{ t("BUTTONS.ReadMore") }}
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss">
.blog-card-simple {
  @apply w-full overflow-hidden relative;

  .blog-image {
    @apply object-cover w-full h-full transition duration-300;
  }
  .blog-content {
    @apply py-1  gap-2 flex justify-start flex-col;
  }
}
</style>
