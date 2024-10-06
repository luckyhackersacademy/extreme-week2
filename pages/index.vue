<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <div class="w-full h-full">
    <Hero
      @register="() => router.push('/sign-up')"
      @new="() => router.push('/generations/new')"
    />
  </div>
</template>
