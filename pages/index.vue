<script setup lang="ts">
definePageMeta({
  layout: 'base',
})
const supabase = useSupabaseClient()
const { data: posts } = await useAsyncData('posts', async () => {
  const { data } = await supabase.from('post').select('*, category(id, name)')
  return data
})

const { data: featuredPost } = await useAsyncData('featured-post', async () => {
  const { data } = await supabase.from('post').select('*, category(id, name)').eq('is_featured', true).single()
  return data
})
</script>

<template>
  <div class="w-full pt-20 text-center lg:text-left">
    <h1 class="text-3xl lg:text-5xl font-semibold">Events in Minutes Ideas</h1>
    <p class="pt-6 text-lg lg:text-xl text-muted-foreground">Welcome to our Ideas Hub, where we share tips. trends and inspiration for unforgettable events.</p>
  </div>
  <div v-if="featuredPost" class="py-20 w-full">
    <blog-featured-post :post="featuredPost" />
  </div>
  <div class="py-10 border-t w-full">
    <h2 class="text-xl lg:text-2xl font-semibold">Popular Articles</h2>
    <div class="w-full grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
      <blog-post-card :post="post" v-for="post in posts" />
    </div>
  </div>
</template>
