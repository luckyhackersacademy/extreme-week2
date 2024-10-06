<script setup lang="ts">
const emit = defineEmits<{
  (e: 'register'): void;
  (e: 'new'): void;
}>();
</script>

<template>
  <div
    class="w-full h-[calc(100vh-300px)] text-center px-5 flex flex-col justify-center items-center gap-2"
  >
    <h1 class="text-4xl font-[700] text-gray-700">
      Gere áudios para
      <span class="bg-indigo-500 text-white px-2">promoções em um clique</span>.
    </h1>
    <p class="text-2xl text-gray-700">
      Aumente o faturamento do seu mercado com áudios para promoções <br />
      gerados por inteligência artificial.
    </p>

    <!--
      <Button
        class="mt-5"
        label="Nova geração"
        icon="pi pi-plus"
        @click="() => emit('new')"
      />
    -->

    <Button
      class="mt-5"
      label="Começar agora"
      icon="pi pi-plus"
      @click="() => emit('register')"
    />
  </div>
</template>
