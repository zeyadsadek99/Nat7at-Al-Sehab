<script lang="ts" setup>
type Props = {
  blog: Blog;
};

const { locale, t } = useI18n();
const localePath = useLocalePath();

defineProps<Props>();
</script>

<template>
  <div class="blog-featured-list">
    <div class="blog-image">
      <nuxt-img
        width="421"
        height="100"
        class="blog-image"
        :src="blog.image"
        :alt="blog.title"
        format="webp"
      />
    </div>
    <div class="blog-content">
      <h2 class="blog-title">
        {{ blog.title }}
      </h2>
      <div class="flex items-center flex-wrap gap-2 mb-2">
        <p class="flex items-center gap-1 text-sub text-sm">
          <IconsPerson />
          {{ blog.author }}
        </p>

        <p class="flex items-center gap-1 text-sub text-sm">
          <IconsDate />
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
      </div>

      <nuxt-link
        :to="localePath(`/blogs/${blog.slug}`)"
        class="text-text font-semibold block w-fit me-auto"
      >
        {{ t("BUTTONS.ReadMore") }}
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss">
.blog-featured-list {
  @apply flex gap-2 items-center relative mb-4 last:mb-0;

  .blog-image {
    @apply size-[100px] transition duration-300 rounded-lg;
    img {
      @apply size-[100px] rounded-lg object-cover;
    }
  }
  .blog-content {
    @apply flex  flex-col   gap-2 flex-1;
    .blog-title {
      @apply xl:text-xl text-text uppercase font-semibold mb-1 text-start line-clamp-1;
    }
  }
}
</style>
