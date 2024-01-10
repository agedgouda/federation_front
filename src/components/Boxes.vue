<script setup>
const props = defineProps({
  total: Number
})
</script>

<template>
    <div class="flex flex-wrap">
      <template v-for="index in total" :key="index">
        <div class="w-2 bg-green-500 h-3 m-1"></div>
        <template v-if="index % 5 === 0 && (total % 5 === 0)">
          <div class="w-full" m-1 key="linebreak"></div>
        </template>
        <template v-if="index % 4 === 0 && total % 4 === 0 && (total % 5 !== 0)">
          <div class="w-full" m-1 key="linebreak"></div>
        </template>
        <template v-if="index % 3 === 0 && total % 3 === 0 && (total % 5 !== 0 && total % 4 !== 0)">
          <div class="w-full" m-1 key="linebreak"></div>
        </template>
      </template>
    </div>
  </template>