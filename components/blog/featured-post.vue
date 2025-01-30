<script setup lang="ts">
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})

const formattedDate = useDateFormat(props.post.created_at, 'DD MMM, YYYY')
</script>

<template>
  <div class="flex flex-col lg:flex-row w-full gap-6 lg:gap-0 bg-background lg:drop-shadow-primary rounded-[24px]">
    <!-- Left Side Image -->
    <div class="w-full lg:w-1/2">
      <nuxt-img v-if="post.image_url" :src="post.image_url" alt="Team cooking together" class="w-full h-[300px] md:h-[400px] object-cover rounded-[24px] lg:rounded-none lg:rounded-l-[24px]" />
      <div v-else class="w-full h-[300px] md:h-[400px] rounded-[24px] bg-muted"></div>
    </div>

    <!-- Right Side Content -->
    <div class="w-full lg:w-1/2 lg:px-8 lg:py-8 flex flex-col">
      <div class="text-muted-foreground text-sm mb-4">{{ formattedDate }}</div>

      <h2 class="text-2xl md:text-3xl md:leading-snug font-semibold mb-4">{{ post.title }}</h2>

      <p class="text-gray-600 text-base mb-6 md:leading-[1.8rem]">
        {{ post.summary }}
      </p>

      <hr />

      <div class="flex items-center justify-between mt-5 lg:mt-auto">
        <nuxt-link v-if="post.category" :to="{ name: 'category-id', params: { id: post.category.id } }">
          <div class="bg-muted px-3 py-2.5 rounded-lg text-muted-foreground text-sm font-semibold">
            {{ post.category.name }}
          </div>
        </nuxt-link>

        <nuxt-link :to="{ name: 'post-id', params: { id: post.id } }" class="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
          <p class="mr-1 text-sm">Read</p>
          <lucide-arrow-right :size="18" absolute-stroke-width :stroke-width="1.5" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
