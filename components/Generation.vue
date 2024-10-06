<script setup lang="ts">
import type { Generation } from '@/entities/Generation';
import dayjs from 'dayjs';

const props = defineProps<{
  title: string;
  content: string;
  date: string;
  isDownloading?: boolean;
  audioId: string;
}>();

const emit = defineEmits<{
  (e: 'download', generation: Pick<Generation, 'title' | 'audioId'>): void;
}>();

const date = computed(() => {
  return dayjs(props.date).format('DD/MM/YYYY');
});

const source = computed(() => {
  return props.content;
});

const { copy, copied } = useClipboard({ source });
</script>

<template>
  <Card>
    <template #title>
      {{ props.title }}
      <span class="text-sm bg-gray-100 p-2 rounded-full">{{ date }}</span>
    </template>
    <template #content>
      <p class="m-0">
        {{ props.content }}
      </p>
    </template>

    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button
          :label="copied ? 'Copiado!' : 'Copiar texto'"
          severity="secondary"
          outlined
          :icon="copied ? 'pi pi-check' : 'pi pi-copy'"
          class="w-full"
          @click="() => copy()"
        />
        <Button
          label="Baixar áudio"
          :loading="props.isDownloading"
          icon="pi pi-download"
          class="w-full"
          @click="() => emit('download', props)"
        />
      </div>
    </template>
  </Card>
</template>
