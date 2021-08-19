<script>

</script>

<section class="day-container">
  <!-- <div class="detail">detail</div> -->
  <div class="info">
    <small class="hour">11:45</small>
    <p class="city">Amparo</p>
    <strong class="temperature">28º</strong>
  </div>

  <img class="bg-moon" src="assets/img/moon.svg" alt="">
  <img class="bg-stars" src="assets/img/stars.svg" alt="">
  <img class="bg-sun" src="assets/img/sun.svg" alt="sol">
  <img class="bg-mountains" src="assets/img/mountains.svg" alt="montanhas">
  <img class="bg-detail" src="assets/img/detail.svg" alt="detalhe">
</section>

<style>

  .day-container {

    position: relative;

    background: rgb(148,60,161);
     /*Manha*/
    background-image: var(--color-background-morning);

    
  }

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
    bottom: 10rem;
    left: 10rem;
  }

  .bg-mountains {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }

  .bg-detail {
    position: absolute;
    width: 3rem;

    bottom: -4.3rem;
    left: 14rem;

    z-index: 9999;
  }
  
</style>