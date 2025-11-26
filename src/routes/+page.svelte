<svelte:head>
  <title>Welcome to Alaska OS — Alaska Cruise Ports & Tours</title>
  <meta name="description" content="Explore every Alaska cruise port with dynamic tour listings, maps, weather, and guides. Powered by Alaska OS." />
</svelte:head>

<script lang="ts">
  import ports from '$lib/data/ports.json';
</script>

<section class="container">
  <h1 class="title">Welcome to Alaska OS</h1>

  <div class="grid">
    {#each ports as port (port.id)}
      <a class="card" href={`/port/${port.slug}`}>
        <img src={port.image} alt={port.name} />
        <h2>{port.name}</h2>
        {#if port.tagline}<p class="tagline">{port.tagline}</p>{/if}
      </a>
    {/each}
  </div>
</section>
