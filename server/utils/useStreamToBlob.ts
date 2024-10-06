import { Readable } from 'stream';

export const useStreamToBlob = () => {
  const toBlob = async (readableStream: Readable): Promise<Blob> => {
    const chunks: Buffer[] = [];

    // Read the stream chunk by chunk
    for await (const chunk of readableStream) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }

    // Combine all chunks into one Buffer
    const buffer = Buffer.concat(chunks);

    // Create a Blob from the Buffer
    const blob = new Blob([buffer], { type: 'audio/mpeg' });

    return blob;
  };

  return {
    toBlob,
  };
};
