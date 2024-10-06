import { PinataSDK } from 'pinata';

export default eventHandler(async (event) => {
  const config = useRuntimeConfig();
  const cid = getRouterParam(event, 'id');

  if (!cid) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    });
  }

  const pinata = new PinataSDK({
    pinataJwt: config.pinataJwt,
    pinataGateway: config.pinataGateway,
  });

  const url = await pinata.gateways.createSignedURL({
    cid,
    expires: 3600,
  });

  return {
    url,
  };
});
