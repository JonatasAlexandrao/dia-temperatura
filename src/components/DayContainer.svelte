<script>
  import DayInfo from "./DayInfo/index.svelte";
  import BackgroundInfo from "./BackgroundInfo/index.svelte";
  //import { time } from "../store.js"

  //======== Variaveis =====================
  let time = currentTime()
  let dayPeriod = checkPeriodDay()
  //----------------------------------------

  function checkPeriodDay() {

    const hour = new Date().getHours()

    let dayPeriod = ''
    const dawn =        hour >= 1 && hour < 6
    const morning =     hour >= 6 && hour < 13
    const afternoon =   hour >= 13 && hour < 19
    const night =       hour >= 19 || hour === 0

    switch (true) {
      case dawn :
        dayPeriod = 'dawn'
        break;

      case morning :
        dayPeriod = 'morning'
        break;

      case afternoon :
        dayPeriod = 'afternoon'
        break;

      case night :
        dayPeriod = 'night'
        break;

      default:
        console.log('fora')
        break;
    } 

    return dayPeriod
  }

  function currentTime() {
    let hour = zeroLeft(new Date().getHours())
    let minutes = zeroLeft(new Date().getMinutes())

    function zeroLeft(time) {
      if(time.toString().length < 2) 
        time = `0${time}`
    
      return time
    }

    const time = `${hour}:${minutes}`

    return time
  }

  setInterval(() => { 
    time = currentTime()
    dayPeriod = checkPeriodDay()

  }, 10000)

</script>

<section class="day-container { '-'+dayPeriod }">
  
  <DayInfo time={time} />

  <BackgroundInfo dayPeriod={dayPeriod} />
  
</section>

<style>

  .day-container {

    position: relative;
    background: rgb(148,60,161);

    overflow: hidden;
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