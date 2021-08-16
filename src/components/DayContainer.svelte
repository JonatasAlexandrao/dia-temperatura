<script>

</script>

<div class="day-container">
  <!-- <div class="detail">detail</div> -->
  <div class="text">
    <p>11:45</p>
    <p>Amparo</p>
    <p>28º</p>
  </div>
  <img class="bg-sun" src="img/sun.svg" alt="sol">
  <img class="bg-mountains" src="img/mountains.svg" alt="montanhas">
  <img class="bg-detail" src="img/detail.svg" alt="detalhe">
</div>

<style>

  .day-container {

    position: relative;

    /*background-color: brown;*/
    /*display: grid;
    grid-template: 
    'text'
    'sun'
    'mountains'
    'detail'
    ;
    align-content: end;*/
    background: rgb(148,60,161);

    /*madrugada*/
    /* background: linear-gradient(180deg, #1e2141 0%, #462e7d 40%, #ffe89f 100%); */

    /*Manha*/
    background: linear-gradient(180deg, rgba(148,60,161,1) 0%, rgba(196,104,165,1) 40%, rgba(255,232,159,1) 100%);

    
  }

  .text {
    /*grid-area: text;*/
    text-align: center;
    font-size: 3rem;
    color: whitesmoke;

  }

  .bg-sun {
    /*grid-area: sun;*/

    position: absolute;
    width: 60%;
    bottom: 10rem;
    left: 10rem;
  }

  .bg-mountains {
    /*grid-area: mountains;*/
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }

  .bg-detail {
    /*grid-area: detail;*/
    position: absolute;
    width: 30px;

    bottom: -40px;
    left: 6rem;
  }
  
</style>