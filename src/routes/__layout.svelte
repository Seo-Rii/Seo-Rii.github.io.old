<slot />

<style>
    :global(html, body) {
        margin: 0;
        height: 100%;
    }

    :global(body) {
        font-family: 'Noto Sans KR', sans-serif;
    }
</style>

<script>
  import { onMount } from "svelte";

  onMount(() => {
    setTimeout(() => {
      document.getElementById("__preloader").classList.add("hide");
    }, 300);
  });
</script>