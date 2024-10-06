<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
});

const { loading, generations, isEmpty } = useGenerations();
const { loadings, download, fetchAudioSignedUrl } = useAudioSignedUrl();

const handleDownload = async ({
  title,
  audioId,
}: Pick<Generation, 'title' | 'audioId'>) => {
  await fetchAudioSignedUrl(audioId);
  download(title);
};
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
        {{ generations.length }} áudios encontrados.
      </p>
      <Generation
        v-for="generation in generations"
        :key="generation.id"
        :title="generation.title"
        :content="generation.content"
        :audio-id="generation.audioId"
        :date="generation.createdAt"
        :is-downloading="loadings[generation.audioId]"
        @download="handleDownload"
      />
    </div>
  </div>
</template>
