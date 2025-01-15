<script lang="ts" setup>
type Props = {
  blog: Blog;
};

const { locale, t } = useI18n();
const localePath = useLocalePath();

defineProps<Props>();
</script>

<template>
  <div class="blog-card">
    <div
      class="h-[310px] relative overflow-hidden"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
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
      <div>
        <h2
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          class="text-2xl text-text uppercase font-semibold mb-3 text-start line-clamp-1"
        >
          {{ blog.title }}
        </h2>
        <p
          class="uppercase text-gray-600 mb-3.5 text-start line-clamp-1"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          {{ blog.short_desc }}
        </p>
        <p
          class="text-sm uppercase text-start text-text font-bold"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
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
      <div
        class="see-more"
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.2087 35.2083C41.042 33.75 41.667 32.0833 41.667 30.2083C41.667 25 37.5003 20.8333 32.292 20.8333C27.0837 20.8333 22.917 25 22.917 30.2083C22.917 35.4167 27.0837 39.5833 32.292 39.5833C34.167 39.5833 35.8337 38.9583 37.292 38.125L43.9587 44.7917L46.8753 41.875L40.2087 35.2083ZM32.292 35.4167C29.3753 35.4167 27.0837 33.125 27.0837 30.2083C27.0837 27.2917 29.3753 25 32.292 25C35.2087 25 37.5003 27.2917 37.5003 30.2083C37.5003 33.125 35.2087 35.4167 32.292 35.4167ZM25.0003 41.6667V45.8333C13.5003 45.8333 4.16699 36.5 4.16699 25C4.16699 13.5 13.5003 4.16666 25.0003 4.16666C35.0837 4.16666 43.4795 11.3333 45.417 20.8333H41.1045C40.4547 18.3163 39.2252 15.9862 37.5141 14.0292C35.8031 12.0722 33.658 10.5425 31.2503 9.56249V10.4167C31.2503 12.7083 29.3753 14.5833 27.0837 14.5833H22.917V18.75C22.917 19.8958 21.9795 20.8333 20.8337 20.8333H16.667V25H20.8337V31.25H18.7503L8.77116 21.2708C8.50033 22.4792 8.33366 23.7083 8.33366 25C8.33366 34.1875 15.8128 41.6667 25.0003 41.6667Z"
            fill="#011C2B"
          />
        </svg>
      </div>
    </div>
    <div class="content-overlay">
      <div class="inner_content">
        <nuxt-link
          :to="localePath(`/blogs/${blog.slug}`)"
          class="see-more mb-7"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.2087 35.2083C41.042 33.75 41.667 32.0833 41.667 30.2083C41.667 25 37.5003 20.8333 32.292 20.8333C27.0837 20.8333 22.917 25 22.917 30.2083C22.917 35.4167 27.0837 39.5833 32.292 39.5833C34.167 39.5833 35.8337 38.9583 37.292 38.125L43.9587 44.7917L46.8753 41.875L40.2087 35.2083ZM32.292 35.4167C29.3753 35.4167 27.0837 33.125 27.0837 30.2083C27.0837 27.2917 29.3753 25 32.292 25C35.2087 25 37.5003 27.2917 37.5003 30.2083C37.5003 33.125 35.2087 35.4167 32.292 35.4167ZM25.0003 41.6667V45.8333C13.5003 45.8333 4.16699 36.5 4.16699 25C4.16699 13.5 13.5003 4.16666 25.0003 4.16666C35.0837 4.16666 43.4795 11.3333 45.417 20.8333H41.1045C40.4547 18.3163 39.2252 15.9862 37.5141 14.0292C35.8031 12.0722 33.658 10.5425 31.2503 9.56249V10.4167C31.2503 12.7083 29.3753 14.5833 27.0837 14.5833H22.917V18.75C22.917 19.8958 21.9795 20.8333 20.8337 20.8333H16.667V25H20.8337V31.25H18.7503L8.77116 21.2708C8.50033 22.4792 8.33366 23.7083 8.33366 25C8.33366 34.1875 15.8128 41.6667 25.0003 41.6667Z"
              fill="#011C2B"
            />
          </svg>
        </nuxt-link>
        <div>
          <div class="flex items-center gap-2 justify-between mb-3">
            <h2
              class="text-2xl text-text uppercase font-semibold text-start line-clamp-1"
            >
              {{ blog.title }}
            </h2>
            <p
              class="text-sm uppercase text-start flex-shrink-0 whitespace-nowrap text-text font-bold"
            >
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
          <div
            v-html="blog.long_desc"
            class="uppercase text-gray-600 mb-3.5 text-start line-clamp-4 max-w-[90%]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.blog-card {
  @apply rounded-3xl w-full overflow-hidden relative;
  box-shadow: 0px 2px 4px 0px #00000040;

  .blog-image {
    @apply object-cover w-full h-full transition duration-300;
  }
  .blog-content {
    @apply flex items-center justify-between p-7 lg:p-10 gap-2;
  }
  .see-more {
    @apply size-16 rounded-full flex items-center justify-center;
    box-shadow: 0px 2px 4px 0px #00000040;
  }
  .content-overlay {
    @apply absolute top-0 left-0 w-full h-full flex flex-col justify-center p-7 lg:p-10 opacity-0;
    &::before {
      content: "";
      @apply absolute top-0 left-0 w-full h-full bg-black  opacity-80;
    }
    .inner_content {
      @apply z-10 relative;
      h2,
      p {
        @apply text-white;
      }
    }
    transition: all 0.3s ease-in-out !important;
    &:hover {
      @apply opacity-100;
    }
    .see-more {
      @apply bg-white text-text font-bold mx-auto;
    }
  }
}
</style>
