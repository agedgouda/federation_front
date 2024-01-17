<script setup>
import BaseIcon from '@/components/BaseIcon.vue'
import { computed } from 'vue'

defineProps({
  icon: {
    type: String,
    default: null
  },
  h: {
    type: String,
    default: null
  },
  label: {
    type:Boolean,
    default: false
  }
})



</script>

<template>
  <span v-if="!label">
  <BaseIcon
    :path="icon"
    w="w-10"
    :h="h"
    class="absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400"
  />
</span>
<span v-else>
  <BaseIcon
    :path="icon"
    w="w-10"
    :h="h"
    class="absolute top-6 left-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400"
  />
</span>
</template>
