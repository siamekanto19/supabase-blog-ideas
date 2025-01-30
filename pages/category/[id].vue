<script setup lang="ts">
definePageMeta({
  layout: 'base',
})
const route = useRoute()
const supabase = useSupabaseClient()
const { data } = await useAsyncData(`category-${route.params.id}`, async () => {
  const { data } = await supabase.from('category').select('*, post(id, created_at, title, summary, image_url)').single()
  return data
})
</script>

<template>
  <div class="w-full py-10 text-center lg:text-left">
    <h1 class="text-3xl lg:text-5xl font-semibold">{{ data.name }}</h1>
    <p class="pt-6 text-lg lg:text-xl text-muted-foreground">{{ data.description }}</p>
  </div>
  <div class="w-full grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
    <blog-post-card :post="post" v-for="post in data.post" />
  </div>
</template>
