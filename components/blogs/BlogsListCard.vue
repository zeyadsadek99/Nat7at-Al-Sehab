<script lang="ts" setup>
type Props = {
  blog: Blog;
};

const { locale, t } = useI18n();
const localePath = useLocalePath();

defineProps<Props>();
</script>

<template>
  <div class="blog-card-list">
    <div class="blog-image">
      <nuxt-img
        width="421"
        height="310"
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
      <p class="blog-desc">
        {{ blog.short_desc }}
      </p>
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
.blog-card-list {
  @apply flex gap-2 items-center relative h-[200px];

  .blog-image {
    @apply size-[180px] transition duration-300 rounded-lg;
    img {
      @apply size-[180px] rounded-lg object-cover;
    }
  }
  .blog-content {
    @apply flex  flex-col   gap-2 flex-1;
    .blog-title {
      @apply text-xl xl:text-3xl text-text uppercase font-semibold mb-3 text-start line-clamp-1;
    }
    .blog-desc {
      @apply uppercase text-sub mb-3.5 text-start line-clamp-1;
    }
  }
}
</style>
