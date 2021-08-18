<script>

</script>


<section class="week-container">
  <ul class="week-list">
    <li class="item -today"> 
      <span class="item-day">Thursday</span> 
      <span class="item-temperature">28º</span>
      <img class="item-icon" src="icons/icon-cloudy.svg" alt="Dia Nublado">     
    </li>
    <li class="item -tomorrow">     
      <span class="item-day">Friday</span> 
      <span class="item-temperature">28º</span>
      <img class="item-icon" src="icons/icon-rain.svg" alt="Dia Nublado">
    </li>
    <li class="item -after-tomorrow">   
      <span class="item-day">Saturday</span> 
      <span class="item-temperature">22º</span>
      <img class="item-icon" src="icons/icon-sun.svg" alt="Dia Nublado">
    </li>
    <li class="item -after-tomorrow">   
      <span class="item-day">Saturday</span> 
      <span class="item-temperature">22º</span>
      <img class="item-icon" src="icons/icon-sun.svg" alt="Dia Nublado">
    </li>
  </ul>
</section>

<style>
  /*.week-container::before {
    content: '';
    display: block;
    width: 100%;
    height: 2rem;
    background-color: #000;
  }*/
  .week-container {
    position: relative;
    background-color: var(--color-white);  
    
    overflow: hidden;
    overflow-y: scroll;
  }  

  .week-list {

    width: 100%;
    height: 100%;
    /*display: flex;
    flex-direction: column;*/

    display: grid;
    grid-template-rows: 33% 33% 33%;

    padding: 0 2rem;

    /*text-align: center;*/
    
    font-size: 2rem;
    /*justify-content: space-between;
    justify-items: center;
    align-items: center;*/
    
  }

  .week-container .item {
    
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 60% 20% 20%;
    align-items: center;

    color: #462e7d;
    font-weight: 600;

    border-bottom: 2px rgba(67, 63, 75, 0.34) solid;

  }

  /*.week-container .item:not(:last-child){
    border-bottom: 2px rgba(67, 63, 75, 0.34) solid;
  }*/

  .item .item-icon {
    font-size: 1.5rem;
    text-align: center;
    justify-self: center;

    width: 70%;
    opacity: .9;
  }


</style>