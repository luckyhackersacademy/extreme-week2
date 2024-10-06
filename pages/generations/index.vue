<script setup lang="ts">
definePageMeta({
  layout: 'admin',
});

const isEmpty = ref<boolean>(true);
const loading = ref<boolean>(false);
</script>

<template>
  <div class="w-full h-full flex flex-col items-center gap-10 p-5 pb-32">
    <Onboarding
      title="Olá, suas gerações aparecerão aqui!"
      guide="Você pode gerar uma nova pelo botão no topo da página."
      class="w-full max-w-4xl"
    />

    <div v-if="loading" class="w-full max-w-4xl flex flex-col gap-2">
      <Skeleton v-for="n in 5" :key="n" height="50px" />
    </div>

    <div v-if="isEmpty && !loading" class="w-full max-w-4xl flex gap-2">
      <Card class="w-full h-32 flex justify-center items-center">
        <template #content>
          <p class="text-base text-gray-700">
            <i class="pi pi-exclamation-triangle" />
            Nenhuma geração encontrada.
          </p>
        </template>
      </Card>
    </div>

    <div
      v-if="!isEmpty && !loading"
      class="w-full max-w-4xl flex flex-col gap-2"
    >
      <p class="text-base text-gray-700">
        3 áudios encontrados.
      </p>
      <Generation
        v-for="n in 3"
        :key="n"
        title="Lorem ipsum title"
        content="Lorem ipsum content"
        audio-id="audioId"
        date="2024-10-06T13:27:06.865Z"
        :is-downloading="false"
      />
    </div>
  </div>
</template>
