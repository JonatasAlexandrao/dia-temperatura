<script>
  import DayInfo from "./DayInfo/index.svelte";
  import BackgroundInfo from "./BackgroundInfo/index.svelte";

 import { clock } from "../store.js"

 console.log(clock)


</script>

<section class="day-container">
  
  <DayInfo />

  <BackgroundInfo />
  
</section>

<style>

  .day-container {

    position: relative;

    background: rgb(148,60,161);
     /*Manha*/
    background-image: var(--color-background-morning);
    
  }

</style>