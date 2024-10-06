<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
});

const router = useRouter();

const { title, content, loading, create } = useGenerationCreate();
const placeholder = `Aqui vou deixar um exemplo:

Olha a promoção minha gente! Red bull latinha apenas 7 e 99, picanha o kilo apenas 57 e 99
`;

const isDisabled = computed(() => !title.value || !content.value);

const handleCreate = async () => {
  await create();
  router.push('/generations');
};
</script>

<template>
  <div class="w-full h-full flex flex-col items-center gap-10 p-5 pb-32">
    <Onboarding
      title="Vamos criar um novo áudio? 🤩"
      guide="Coloque o texto que deseja gravar e clique em gerar, o resto é com a gente!"
      class="max-w-4xl w-full"
    />

    <div class="max-w-4xl w-full flex flex-col gap-10">
      <div class="flex flex-col gap-2">
        <label for="title">Como você gostaria de chamar essa geração?</label>
        <InputText
          id="title"
          v-model="title"
          type="text"
          placeholder="Promoções dos dias dos pais"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="title">Digite aqui o texto que deseja gravar 👇</label>
        <Textarea
          v-model="content"
          :placeholder="placeholder"
          class="flex-1"
          rows="10"
        />
      </div>

      <div class="flex justify-end items-center gap-2">
        <span class="text-gray-400 text-sm flex items-center gap-1">
          😉 Clique aqui quando estiver pronto
          <i class="pi pi-arrow-right size-4" />
        </span>
        <Button
          :disabled="isDisabled"
          :severity="isDisabled ? 'secondary' : 'primary'"
          :loading="loading"
          label="Gerar"
          icon="pi pi-plus"
          @click="handleCreate"
        />
      </div>
    </div>
  </div>
</template>
