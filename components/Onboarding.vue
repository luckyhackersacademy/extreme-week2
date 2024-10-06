<script setup lang="ts">
const props = defineProps<{
  title: string;
  guide: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-2 px-5 py-10 bg-gray-50 rounded-lg">
    <p class="text-2xl font-[700] text-gray-700">{{ props.title }}</p>
    <p class="text-xl text-gray-700">
      {{ props.guide }}
    </p>
  </div>
</template>
