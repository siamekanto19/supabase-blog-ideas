<script setup lang="ts">
definePageMeta({
  layout: 'base',
  middleware: 'auth',
})
</script>

<template>
  <div class="py-20 w-full text-center text-2xl font-semibold">Protected Route for creating new post</div>
</template>
