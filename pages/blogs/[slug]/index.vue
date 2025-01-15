<template>
  <section>
    <Loader1 v-if="status === 'pending'" />
    <template v-if="status === 'success'">
      <NotFound v-if="data.status == 404" />
      <BackError v-else-if="data.status == 500" />

      <template v-else-if="data.data">
        <Head>
          <title>{{ data.data.blog_details.title }}</title>
          <meta
            name="description"
            :content="data.data.blog_details.description"
          />
          <meta property="title" content="{{ data.data.blog_details.title }}" />
          <meta
            property="og:title"
            content="{{ data.data.blog_details.title }}"
          />
          <meta
            property="og:description"
            :content="data.data.blog_details.description"
          />
          <meta property="og:image" :content="data.data.blog_details.image" />
          <meta property="image" :content="data.data.blog_details.image" />
        </Head>
        <div class="flex flex-wrap gap-3 px-3 lg:container mt-8 mb-4">
          <div
            class="carousel__item h-[400px] xl:h-[calc(100vh_-_110px)] !w-full flex items-center rounded-2xl"
          >
            <nuxt-img
              :src="data.data.blog_details.image"
              :alt="data.data.blog_details.title"
              class="gallery-image object-cover h-[400px] xl:h-[calc(100vh_-_110px)] !w-full rounded-2xl"
              width="400"
              height="500"
              format="webp"
            />
          </div>

          <div class="mt-4 mb-5">
            <h1
              class="text-text text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl mb-2 capitalize"
            >
              {{ data.data.blog_details.title }}
            </h1>
            <div class="flex items-center flex-wrap gap-2 mb-2">
              <p class="flex items-center gap-1 text-sub text-sm">
                <IconsPerson />
                {{ data.data.blog_details.author }}
              </p>

              <p class="flex items-center gap-1 text-sub text-sm">
                <IconsDate />
                {{
                  new Date(data.data.blog_details.date).toLocaleDateString(
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
            <div v-html="data.data.blog_details.long_desc"></div>
          </div>
        </div>
        <div class="mb-4">
          <div class="px-3 lg:container">
            <h3 class="text-text text-lg font-semibold capitalize">
              {{ t("TITLES.relatedBlogs") }}
            </h3>
          </div>
          <BlogsList
            :simpleCard="true"
            :blogs="data.data.related_blogs"
            :hide-title="true"
          />
        </div>
      </template>
    </template>
  </section>
</template>

<script setup>
const axios = useNuxtApp().$axios;
const { t, locale } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

useHead({
  title: t("NAV.blogs"),
});

const {
  data,
  status,

  refresh,
} = await useLazyAsyncData("blog", () =>
  axios
    .get(`show-blog-by-slug/${route.params.slug}`, {
      headers: {
        "Accept-Language": locale.value,
      },
    })
    .then((res) => res.data)
    .catch((err) => err.response)
);
</script>
