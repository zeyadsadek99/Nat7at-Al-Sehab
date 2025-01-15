<template>
  <section>
    <Loader1 v-if="status === 'pending'" />
    <template v-if="status === 'success'">
      <NotFound v-if="data.status == 404" />
      <BackError v-else-if="data.status == 500" />
      <div
        v-else-if="!data.data.length"
        class="flex items-center justify-center"
      >
        <img
          src="~/assets/media/empty.gif"
          alt="empty"
          width="400"
          height="400"
        />
      </div>
      <template v-else>
        <blogs-slider :blogs="data.data" />
        <div class="flex flex-wrap gap-3 px-3 lg:container mt-8 mb-4">
          <div class="flex flex-col gap-7 flex-1">
            <blogs-list-card
              v-for="blog in data.data"
              :key="blog.id"
              :blog="blog"
            />
          </div>
          <div class="w-full lg:w-[400px]">
            <div class="mb-5">
              <h3 class="mb-6 text-3xl text-text uppercase font-semibold">
                {{ t("TITLES.categories") }}
              </h3>

              <ul>
                <li
                  v-for="category in data.categories"
                  :key="category.id"
                  class="pb-3 mb-3 border-b border-border last:border-b-0 last:mb-0 last:pb-0"
                >
                  <nuxt-link
                    :to="{
                      path: localePath('/blogs'),
                      query: {
                        category_id: category.id,
                        page: 1,
                      },
                    }"
                    class="flex w-full justify-between gap-2 text-lg"
                  >
                    <span class="text-black font-semibold">
                      {{ category.title }}
                    </span>
                    <span class="text-sub">{{ category.blogs_count }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="">
              <h3 class="mb-6 text-3xl text-text uppercase font-semibold">
                {{ t("TITLES.featuredPosts") }}
              </h3>

              <BlogsFeaturedCard
                v-for="blog in data.data"
                :key="blog.id"
                :blog="blog"
              />
            </div>
          </div>
        </div>
        <global-pagination
          :pagination="data.meta"
          class="!justify-center mb-11"
        />
      </template>
    </template>
  </section>
</template>

<script setup>
import GlobalPagination from "~/components/global/GlobalPagination.vue";

const axios = useNuxtApp().$axios;
const { t, locale } = useI18n();
const localePath = useLocalePath();

useHead({
  title: t("NAV.blogs"),
});

const {
  data,
  status,

  refresh,
} = await useLazyAsyncData("blogs", () =>
  axios
    .get(`blogs`, {
      headers: {
        "Accept-Language": locale.value,
      },
    })
    .then((res) => res.data)
    .catch((err) => err.response)
);
</script>
