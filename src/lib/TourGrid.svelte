<script lang="ts">
  import type { Tour } from '$lib/types';
  export let tours: Tour[] = [];
</script>

<div class="grid">
  {#each tours as tour}
    <div class="card">
      <img src={tour.image} alt={tour.title} />
      <h3>{tour.title}</h3>
    </div>
  {/each}
</div>
