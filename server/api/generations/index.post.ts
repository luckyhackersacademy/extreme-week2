import { v4 } from 'uuid';
import { getAuth } from '#clerk';
import { PinataSDK } from 'pinata';
import { ElevenLabsClient, ElevenLabs } from 'elevenlabs';

interface Request {
  title: string;
  content: string;
}

export default eventHandler(async (event) => {
  const { userId } = getAuth(event);
  if (!userId) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
  }

  const db = useDatabase();
  if (!db) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }

  const { toBlob } = useStreamToBlob();
  const config = useRuntimeConfig();
  const payload = await readBody<Request>(event);
  const id = v4();

  const pinata = new PinataSDK({
    pinataJwt: config.pinataJwt,
    pinataGateway: config.pinataGateway,
  });

  const elevenLabs = new ElevenLabsClient({
    apiKey: config.elevenlabsApiKey,
  });

  const audio = await elevenLabs.generate({
    voice: 'iP95p4xoKVk53GoZ742B',
    text: payload.content,
    output_format: ElevenLabs.OutputFormat.Mp32205032,
    model_id: 'eleven_multilingual_v2',
  });

  const blob = await toBlob(audio);
  const file = new File([blob], `${userId}-${id}`, { type: 'audio/mpeg' });
  const upload = await pinata.upload.file(file);

  const generation = {
    id,
    userId,
    title: payload.title,
    content: payload.content,
    audioId: upload.cid,
    createdAt: new Date(),
  };

  await db.insert(tables.generations).values(generation);

  return generation;
});
