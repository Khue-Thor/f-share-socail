import sanityClient from '@sanity/client';
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'rsl8p0ww',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
