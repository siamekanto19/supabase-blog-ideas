<script setup lang="ts">
definePageMeta({
  middleware: 'no-auth',
})
const router = useRouter()
const supabase = useSupabaseClient()
const loginSchema = toTypedSchema(
  z.object({
    email: z.string({ message: 'Email is required' }).email({ message: 'Email must be valid' }),
    password: z.string({ message: 'Password is required' }),
  })
)
const form = useForm({
  validationSchema: loginSchema,
})

const loading = ref(false)

const handleLogin = form.handleSubmit(async (values) => {
  loading.value = true
  const { error } = await supabase.auth.signInWithPassword(values)
  if (error) {
    toast.error(error.name, { description: error.message })
    loading.value = false
    return
  }
  loading.value = false
  router.push('/')
})
</script>

<template>
  <div class="min-h-screen w-screen flex flex-col justify-center items-center">
    <div class="w-11/12 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
      <div class="w-full flex flex-col items-center gap-4 pb-10">
        <nuxt-img class="w-1/3" src="/img/logo.svg" />
      </div>
      <form v-auto-animate class="w-full flex flex-col gap-4" @submit="handleLogin">
        <ui-form-field v-slot="{ field }" name="email">
          <ui-form-item>
            <ui-form-label>Email</ui-form-label>
            <ui-form-control>
              <ui-input type="email" required placeholder="boss@gmail.com" v-bind="field" />
            </ui-form-control>
            <ui-form-message />
          </ui-form-item>
        </ui-form-field>
        <ui-form-field v-slot="{ field }" name="password">
          <ui-form-item>
            <ui-form-label>Password</ui-form-label>
            <ui-form-control>
              <ui-input type="password" required placeholder="*******" v-bind="field" />
            </ui-form-control>
            <ui-form-message />
          </ui-form-item>
        </ui-form-field>
        <ui-button :disabled="loading" class="mt-4" size="lg" type="submit">{{ loading ? 'Please wait...' : 'Login' }}</ui-button>
      </form>
    </div>
  </div>
</template>
