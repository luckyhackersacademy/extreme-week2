<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <div class="w-full h-full">
    <Header
      @my-generations="() => router.push('/generations')"
      @new="() => router.push('/generations/new')"
    />
    <slot />
  </div>
</template>
