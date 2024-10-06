import type { Generation } from "~/entities/Generation";

export const useGenerationCreate = () => {
  const loading = ref<boolean>(false);
  const generation = ref<Generation>()

  const title = ref<string>('');
  const content = ref<string>('');

  const create = async () => {
    if (!title.value || !content.value) {
      return
    }

    loading.value = true;

    try {

      const response = await $fetch<Generation>('/api/generations', {
        method: 'POST',
        body: {
          title: title.value,
          content: content.value,
        }
      })

      generation.value = response
    } catch (e) {
      console.error(e)
    } finally {
      loading.value = false;
    }
  }

  return {
    loading,
    title,
    content,
    generation,
    create,
  }
}
