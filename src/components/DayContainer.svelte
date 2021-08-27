<script>
  import DayInfo from "./DayInfo/index.svelte";
  import BackgroundInfo from "./BackgroundInfo/index.svelte";
  //import { time } from "../store.js"

  //======== Variaveis =====================
  let time = currentTime()
  //let dayPeriod = ''
  //----------------------------------------

  function checkPeriodDay(hour) {

    let dayPeriod = ''
    const dawn =        hour >= 1 && hour < 6
    const morning =     hour >= 6 && hour < 12
    const afternoon =   hour >= 12 && hour < 19
    const night =       hour >= 19 || hour === 0

    switch (true) {
      case dawn :
        dayPeriod = '-dawn'
        break;

      case morning :
        dayPeriod = '-morning'
        break;

      case afternoon :
        dayPeriod = '-afternoon'
        break;

      case night :
        dayPeriod = '-night'
        break;

      default:
        console.log('fora')
        break;
    } 

    return dayPeriod
}


  function currentTime() {
    const hour = new Date().getHours()
    const minutes = new Date().getMinutes()

    const dayPeriod = checkPeriodDay(hour)
    const time = `${hour}:${minutes}`

    return { dayPeriod, time }
  }

  setInterval(() => { time = currentTime().time }, 1000)

</script>

<section class="day-container { currentTime().dayPeriod }">
  
  <DayInfo time={time} />

  <BackgroundInfo />
  
</section>

<style>

  .day-container {

    position: relative;

    background: rgb(148,60,161);

  }

  .day-container.-dawn {
    background-image: var(--color-background-dawn);
  }
  .day-container.-morning {
    background-image: var(--color-background-morning);
  }
  .day-container.-afternoon {
    background-image: var(--color-background-afternoon);
  }
  .day-container.-night {
    background-image: var(--color-background-night);
  }

</style>