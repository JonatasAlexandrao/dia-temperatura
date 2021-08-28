<script>
  export let dayPeriod
  const nocturnePeriod = dayPeriod === 'night' || dayPeriod === 'dawn'

</script>


{#if nocturnePeriod}
  <img class="bg-moon" src="assets/img/moon.svg" alt="lua">
  <img class="bg-stars" src="assets/img/stars.svg" alt="estrelas">
{:else}
  <img class="bg-sun" src="assets/img/sun.svg" alt="sol">
{/if}

<img class="bg-mountains" src="assets/img/mountains.svg" alt="montanhas">


<style>

  .bg-moon {
    position: absolute;
    width: 20%;
    top: 0;
  }

  .bg-stars {
    position: absolute;
    width: 100%;
    opacity: 50%;
    top: 0;
  }

  .bg-sun {
    position: absolute;
    width: 70%;

    /*manha*/
    /*bottom: 30rem;
    left: -10rem;*/
    /*tarde*/
    bottom: 10rem;
    left: 10rem;
  }

  .bg-mountains {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }

</style>