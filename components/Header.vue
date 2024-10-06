<script setup lang="ts">
const emit = defineEmits<{
  (e: 'login'): void;
  (e: 'new'): void;
  (e: 'my-generations'): void;
  (e: 'register'): void;
}>();
</script>

<template>
  <header
    class="w-full flex justify-between items-center px-5 py-3 h-20 bg-gray-50"
  >
    <span class="font-[800] text-xl">🔈 Lombardi.ai</span>

    <div class="flex items-center gap-2">
      <Button
        label="Entrar"
        severity="secondary"
        @click="() => emit('login')"
      />

      <Button
        label="Começar"
        icon="pi pi-plus"
        @click="() => emit('register')"
      />
    </div>

    <!--
      <div class="flex items-center gap-2">
        <Button
          :label="isMobile ? '' : 'Ver gerações'"
          icon="pi pi-volume-up"
          severity="secondary"
          @click="() => emit('my-generations')"
        />
        <Button
          :label="isMobile ? '' : 'Gerar novo áudio'"
          icon="pi pi-plus"
          @click="() => emit('new')"
        />
      </div>
    -->
  </header>
</template>
