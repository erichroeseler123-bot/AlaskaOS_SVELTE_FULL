<script lang="ts">
  import type { Port } from '$lib/types';
  export let port: Port;
</script>

<div class="hero">
  <h1>{port.name}</h1>
  <img src={port.image} alt={port.name} />
</div>
