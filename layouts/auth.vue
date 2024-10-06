<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <div class="w-full h-screen flex flex-col gap-4 justify-center items-center">
    <div class="flex items-center max-w-xl">
      <Button
        icon="pi pi-arrow-left"
        severity="secondary"
        size="small"
        label="Voltar"
        aria-label="Voltar"
        @click="() => router.push('/')"
      />
    </div>

    <slot />
  </div>
</template>
