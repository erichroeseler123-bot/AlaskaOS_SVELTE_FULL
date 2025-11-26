<svelte:head>
  <title>{data.port.name} — Alaska OS Port Guide</title>
  <meta name="description" content="Explore tours, experiences, and travel info for {data.port.name} with real-time data from Alaska OS." />
</svelte:head>

<script lang="ts">
  import PortHero from '$lib/PortHero.svelte';
  import TourGrid from '$lib/TourGrid.svelte';
  import CallToBook from '$lib/CallToBook.svelte';
  export let data;
</script>

<PortHero port={data.port} />
<TourGrid tours={data.tours} />
<CallToBook portName={data.port.name} />
