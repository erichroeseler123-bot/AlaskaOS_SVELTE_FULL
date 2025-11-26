<script lang="ts">
  export let portName: string;
  const company = "your-fareharbor-company-slug";
  const embedUrl = `https://fareharbor.com/${company}/items/`;
  if (typeof window !== "undefined") {
    const script = document.createElement("script");
    script.src = "https://fareharbor.com/embeds/script/calendar.js";
    script.defer = true;
    document.body.appendChild(script);
  }
</script>

<div class="book-area">
  <h2>Book Tours in {portName}</h2>
  <a class="fh-button" href={embedUrl} target="_blank">View Live Availability</a>
  <iframe src={embedUrl} class="fh-iframe"></iframe>
</div>
