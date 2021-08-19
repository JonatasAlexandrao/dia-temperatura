<script> 

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))


const day="Thursday"
const temperature="28º"
const icon="assets/icons/icon-cloudy.svg"
const iconDescription="Dia Nublado"

//console.log(temperatureListtt)
//console.log('temperatureList')

</script>

<ul class="week-list">

  <li class="item -today"> 
    <span class="item-day"> {day} </span> 
    <span class="item-temperature">{temperature}</span>
    <img class="item-icon" src="{icon}" alt="{iconDescription}">     
  </li>





  <!--<li class="item -today"> 
    <span class="item-day">Thursday</span> 
    <span class="item-temperature">28º</span>
    <img class="item-icon" src="assets/icons/icon-cloudy.svg" alt="Dia Nublado">     
  </li>
   <li class="item -tomorrow">     
    <span class="item-day">Friday</span> 
    <span class="item-temperature">28º</span>
    <img class="item-icon" src="assets/icons/icon-rain.svg" alt="Dia Nublado">
  </li>
  <li class="item -after-tomorrow">   
    <span class="item-day">Saturday</span> 
    <span class="item-temperature">22º</span>
    <img class="item-icon" src="assets/icons/icon-sun.svg" alt="Dia Nublado">
  </li>
  <li class="item -after-tomorrow">   
    <span class="item-day">Saturday</span> 
    <span class="item-temperature">22º</span>
    <img class="item-icon" src="assets/icons/icon-sun.svg" alt="Dia Nublado">
  </li>
  <li class="item -after-tomorrow">   
    <span class="item-day">Saturday</span> 
    <span class="item-temperature">22º</span>
    <img class="item-icon" src="assets/icons/icon-sun.svg" alt="Dia Nublado">
  </li> -->
</ul>

<style>

.week-list {
  width: 100%;
  height: 100%;

  display: grid;
  grid-auto-rows: 33%;

  padding: 0 2rem;

  font-size: 2rem;  
}

.week-list .item {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 60% 20% 20%;
  align-items: center;

  color: #462e7d;
  font-weight: 600;

  border-bottom: 2px rgba(67, 63, 75, 0.34) solid;

}

.week-list .item:not(:first-child) {
opacity: 50%;
}

.item .item-icon {
font-size: 1.5rem;
text-align: center;
justify-self: center;

width: 70%;
opacity: .9;
}

</style>