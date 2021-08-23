<script> 

  let forecastsOfWeek = listForecast()

	async function listForecast() {
		const response = await fetch('https://my-json-server.typicode.com/JonatasAlexandrao/fake-api-teste/db')
		const json = await response.json()

    const list =  json.forecast
    
    const newList = list.map((item) => {

      let {day, temperature, weather} = item
      let iconWeather

      switch (weather) {
        case "cloudy":
          weather = "Dia nublado"
          iconWeather = "./assets/icons/icon-cloudy.svg"
          break;

        case "cloudy-night":
          weather = "Noite nublado"
          iconWeather = "./assets/icons/icon-cloudy-night.svg"
          break;

        case "moon":
          weather = "Noite limpa"
          iconWeather = "./assets/icons/icon-moon.svg"
          break;

        case "rain":
          weather = "Chuva"
          iconWeather = "./assets/icons/icon-rain.svg"
          break;

        case "storm":
          weather = "Tempestade"
          iconWeather = "./assets/icons/icon-storm.svg"
          break;

        case "sun":
          weather = "Sol"
          iconWeather = "./assets/icons/icon-sun.svg"
          break;
      
        default:
          break;
      }

      switch (day) {
        case "Monday":
          day = "Segunda"         
          break;

        case "Tuesday":
          day = "Terça"         
          break;

        case "Wednesday":
          day = "Quarta"         
          break;

        case "Thursday":
          day = "Quinta"         
          break;

        case "Friday":
          day = "Sexta"         
          break;

        case "Saturday":
          day = "Sábado"         
          break;

        case "Sunday":
          day = "Domingo"         
          break;
      
        default:
          break;
      }

      const newList = {
        day,
        temperature,
        weather,
        iconWeather
      }

      return newList
    })

    return newList

	}

</script>

<ul class="week-list">

  {#await forecastsOfWeek}
	  <p>...waiting</p>
  {:then list}

    {#each list as { day, temperature, weather, iconWeather }}
      <li class="item -today">  
        <span class="item-day"> {day} </span> 
        <span class="item-temperature">{temperature}</span>
        <img class="item-icon" src="{iconWeather}" alt="{weather}">
      </li>
    {/each}

  {:catch error}
	  <p style="color: red">{error.message}</p>
  {/await}

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