<script> 

  let forecastsOfWeek = listForecast();

	async function listForecast() {
		const response = await fetch('https://my-json-server.typicode.com/JonatasAlexandrao/fake-api-teste/db');
		const json = await response.json();
    const list =  json.forecast

    console.log(list[0])

    return list[0]

		/*if (response.ok) {
			return list[0].day;
		} else {
			throw new Error(list);
		}*/
	}

const day="Thursday"
const temperature="28º"
const icon="assets/icons/icon-cloudy.svg"
const iconDescription="Dia Nublado"

//console.log(temperatureListtt)
//console.log('temperatureList')


let forecastsOfWeekkk = [
  { teste: '1'},
  { teste: '2'},
  { teste: '3'},
  { teste: '4'},
]

forecastsOfWeekkk.forEach(element => {
  console.log(element)
});

</script>

<ul class="week-list">

  {#await forecastsOfWeek}
	  <p>...waiting</p>
  {:then list}
    <li class="item -today"> 
      <span class="item-day"> {list.day} </span> 
      <span class="item-temperature">{list.temperature}</span>
      <img class="item-icon" src="{list.climate}" alt="{list.climate}">     
    </li>
  {:catch error}
	  <p style="color: red">{error.message}</p>
  {/await}


 
  

  
  





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