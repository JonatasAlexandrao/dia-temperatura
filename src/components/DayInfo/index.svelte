<script>

  export let time
  export let city
  export let temperature

</script>

<div class="info">
  <small class="hour">{time}</small>
  <p class="city">{city}</p>
  <strong class="temperature">{temperature}</strong>
</div>


<style>

  .info {
    text-align: center;
    position: relative;

    width: 100%;
    height: 10rem;

    margin-top: 3rem;

    
  }

  .hour, .city, .temperature {
    color: var(--color-white);
    font-weight: 500;

    pointer-events: none;  
  }
  .info .hour {
    font-size: 2.5rem;
    font-weight: 300;
  }

  .info .city {
    font-size: 4.5rem;
    line-height: 3rem;
  }

  .info .temperature {
    font-size: 8rem;
  }

</style>