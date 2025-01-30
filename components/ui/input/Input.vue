<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input
    v-model="modelValue"
    :class="
      cn(
        'flex h-10 w-full rounded-lg border border-input text-sm transition-shadow focus-within:border-primary focus-within:outline-none focus-within:ring-[3px] focus-within:ring-[#EFF3FE] has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 px-4',
        props.class
      )
    "
  />
</template>
