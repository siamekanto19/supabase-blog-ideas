<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()
</script>

<template>
  <nav class="bg-background w-screen h-[82px] border-b fixed top-0 z-20">
    <div class="container h-full flex items-center justify-between">
      <nuxt-link href="/">
        <nuxt-img :width="100" src="/img/logo.svg" />
      </nuxt-link>
      <div class="flex items-center gap-4">
        <p class="text-sm font-semibold hidden lg:block">Top Vendors, Apply Now!</p>
        <core-user-avatar v-if="user?.id" />
        <nuxt-link href="/login" v-else>
          <ui-button>Sign In</ui-button>
        </nuxt-link>
        <nuxt-link v-if="user?.id" href="/post/create">
          <ui-button>Write Post</ui-button>
        </nuxt-link>
        <ui-button @click="supabase.auth.signOut()" size="icon" class="rounded-full flex justify-center items-center" v-if="user?.id">
          <lucide-log-out />
        </ui-button>
      </div>
    </div>
  </nav>
</template>
