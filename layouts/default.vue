<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <div class="w-full h-full">
    <Header
      @login="() => router.push('/sign-in')"
      @register="() => router.push('/sign-up')"
      @my-generations="() => router.push('/generations')"
      @new="() => router.push('/generations/new')"
    />
    <slot />
  </div>
</template>
