export const useAudioSignedUrl = () => {
  const loadings = ref<Record<string, boolean>>({});
  const url = ref<string>();

  const fetchAudioSignedUrl = async (id: string) => {
    loadings.value[id] = true;

    try {
      const response = await $fetch<{ url: string }>(`/api/audios/${id}`);
      url.value = response.url;
    } catch (e) {
      console.error(e);
    } finally {
      loadings.value[id] = false;
    }
  };

  const download = async (title: string) => {
    if (!url.value) {
      return;
    }

    const a = document.createElement('a');
    a.href = url.value;
    a.download = `${title}.mp3`;
    a.click();
  };

  return {
    loadings,
    download,
    fetchAudioSignedUrl,
  };
};
