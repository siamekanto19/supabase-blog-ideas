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
  <nuxt-link :to="{ name: 'post-id', params: { id: post.id } }">
    <div class="flex flex-col group">
      <nuxt-img v-if="post.image_url" :src="post.image_url" loading="lazy" class="rounded-[12px] max-h-[250px] object-cover" />
      <div v-else class="rounded-[12px] h-[250px] w-full bg-muted"></div>
      <p class="text-xs text-accent-foreground pt-2">{{ formattedDate }}</p>
      <h2 class="text-base font-semibold pt-2">{{ post.title }}</h2>
      <p class="text-sm text-accent-foreground pt-2 leading-[1.5rem]">
        {{ post.summary }}
      </p>
    </div>
  </nuxt-link>
</template>
