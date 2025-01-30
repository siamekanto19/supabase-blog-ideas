<script setup lang="ts">
const { params } = useRoute()
definePageMeta({
  layout: 'base',
})
const supabase = useSupabaseClient()
const { data: post } = await useAsyncData(`post-${params.id}`, async () => {
  const { data } = await supabase.from('post').select('*, category (id, name)').eq('id', String(params.id)).single()
  return data
})

const formattedDate = useDateFormat(post.created_at, 'DD MMM, YYYY')
</script>

<template>
  <div class="flex flex-col gap-4 bg-background lg:drop-shadow-primary my-10 rounded-[24px]">
    <nuxt-img v-if="post?.image_url" :src="post.image_url" class="w-full max-h-[500px] rounded-[12px] lg:rounded-none lg:rounded-t-[24px] object-cover" />
    <div v-else class="w-full h-[500px] rounded-[12px] bg-muted"></div>
    <div class="lg:px-8 flex items-center gap-4">
      <ui-badge variant="secondary" class="text-sm py-1.5 px-4">{{ formattedDate }}</ui-badge>
      <ui-badge variant="secondary" class="text-sm py-1.5 px-4">{{ post.category.name }}</ui-badge>
    </div>
    <div class="lg:px-8 py-4">
      <h1 class="text-2xl lg:text-3xl 2xl:text-4xl font-bold">{{ post?.title }}</h1>
      <article class="prose max-w-none" v-html="post?.content"></article>
    </div>
  </div>
</template>
