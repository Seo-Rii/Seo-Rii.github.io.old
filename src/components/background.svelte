<script>
  import { v4 as uuid } from "uuid";

  export let size = "200px";
  export let intro = false;
  const id = uuid();

  let m = { x: 0, y: 0 }, shadow = { x: 0, y: 0 }, innerWidth, innerHeight;

  function handleMousemove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }

  function normalize(value, originalMin, originalMax, newMin, newMax) {
    return (((value - originalMin) * (newMax - newMin)) / (originalMax - originalMin)) + newMin;
  }

  $: {
    shadow = {
      x: normalize(m.x, 0, innerWidth, -20, 20),
      y: normalize(m.y, 0, innerHeight, -20, 20)
    };
  }
</script>
<style lang="scss">
  .splashSvg {
    height: auto;
    width: var(--size);
  }


  svg {
    filter: drop-shadow(var(--shadowLeft) var(--shadowTop) 24px rgba(149, 157, 165, 0.4));

    & path {
      filter:contrast(0) brightness(100);
    }
  }
</style>

<svelte:window on:mousemove={handleMousemove} bind:innerWidth bind:innerHeight />

<svg height="535" class="splashSvg" overflow="hidden" viewBox="0 0 597 535" width="597"
     style="--size:{size};--shadowLeft:{shadow.x}px;--shadowTop:{shadow.y}px;">
  <defs>
    <clipPath id={'c'+id}>
      <rect height="535" width="597" x="343" y="97" />
    </clipPath>
    <linearGradient gradientUnits="userSpaceOnUse" id={'l1'+id} class="stroke1" spreadMethod="reflect" x1="343"
                    x2="938.918"
                    y1="360"
                    y2="360">
      <stop offset="0" stop-color="#595959" />
      <stop offset="0.125" stop-color="#575757" />
      <stop offset="0.25" stop-color="#525252" />
      <stop offset="0.375" stop-color="#4A4A4A" />
      <stop offset="0.5" stop-color="#404040" />
      <stop offset="0.625" stop-color="#343434" />
      <stop offset="0.75" stop-color="#252525" />
      <stop offset="0.875" stop-color="#131313" />
      <stop offset="1" />
    </linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" id={'l2'+id} class="stroke2" spreadMethod="reflect" x1="534.735"
                    x2="621.851"
                    y1="83.7173" y2="328.39">
      <stop offset="0" stop-color="#C7D5ED" />
      <stop offset="0.68" stop-color="#3366FF" />
      <stop offset="1" stop-color="#3366FF" />
    </linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" id={'l3'+id} class="stroke3" spreadMethod="reflect" x1="-29.993"
                    x2="158.381"
                    y1="-48.3969" y2="176.098">
      <stop offset="0" stop-color="#3366FF" />
      <stop offset="0.32" stop-color="#3366FF" />
      <stop offset="0.69" stop-color="#003399" />
      <stop offset="1" stop-color="#003399" />
    </linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" id={'l4'+id} class="stroke4" spreadMethod="reflect" x1="746.602"
                    x2="659.486"
                    y1="645.019" y2="400.346">
      <stop offset="0" stop-color="#C7D5ED" />
      <stop offset="0.72" stop-color="#3366FF" />
      <stop offset="1" stop-color="#3366FF" />
    </linearGradient>
    <linearGradient gradientUnits="userSpaceOnUse" id={'l5'+id} class="stroke5" spreadMethod="reflect" x1="-29.993"
                    x2="158.381"
                    y1="-48.3969" y2="176.098">
      <stop offset="0" stop-color="#3366FF" />
      <stop offset="0.32" stop-color="#3366FF" />
      <stop offset="0.69" stop-color="#003399" />
      <stop offset="1" stop-color="#003399" />
    </linearGradient>
  </defs>
  <g clip-path={`url(#c${id})`} transform="translate(-343 -97)">
    <path d="M383 360 898.918 360" fill="none" class="logo-l1" stroke={`url(#l1${id})`}
          stroke-linecap="round" stroke-miterlimit="8" stroke-width="80" />
    <path d="M521.439 146.453 635.148 265.655" fill="none" class="logo-l2" stroke={`url(#l2${id})`}
          stroke-linecap="round" stroke-miterlimit="8" stroke-width="80" />
    <path d="M0 0 128.388 127.701" fill="none" class="logo-l3" stroke={`url(#l3${id})`} stroke-linecap="round"
          stroke-miterlimit="8" stroke-width="80" transform="matrix(1 0 0 -1 641 265.701)" />
    <path d="M759.899 582.283 646.189 463.081" fill="none" class="logo-l4" stroke={`url(#l4${id})`}
          stroke-linecap="round" stroke-miterlimit="8" stroke-width="80" />
    <path d="M0 0 128.388 127.701" fill="none" class="logo-l5" stroke={`url(#l5${id})`} stroke-linecap="round"
          stroke-miterlimit="8" stroke-width="80" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 640.388 463)" />
  </g>
</svg>