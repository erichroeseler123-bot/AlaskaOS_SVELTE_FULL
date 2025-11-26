import { error } from '@sveltejs/kit';
import ports from '$lib/data/ports.json';
import tours from '$lib/data/tours.json';

export function load({ params }) {
  const slug = params.port;
  const port = ports.find((p) => p.slug === slug);
  if (!port) throw error(404, `Port '${slug}' not found`);
  const relatedTours = tours.filter((t) => t.locations?.includes(slug));
  return { port, tours: relatedTours };
}
