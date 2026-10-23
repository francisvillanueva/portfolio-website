import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

export const sanityEnabled = Boolean(projectId);

let client = null;
let urlBuilder = null;

if (sanityEnabled) {
  client = createClient({
    projectId,
    dataset,
    apiVersion: '2026-08-16',
    useCdn: true,
  });

  urlBuilder = imageUrlBuilder(client);
}

export function sanityImageUrl(source, options = {}) {
  if (!sanityEnabled || !source?.asset?._ref) return null;
  return urlBuilder.image(source).width(options.width).height(options.height).fit(options.fit).url();
}

export async function fetchSanity(query, params = {}) {
  if (!sanityEnabled) return null;
  return client.fetch(query, params);
}

export default client;