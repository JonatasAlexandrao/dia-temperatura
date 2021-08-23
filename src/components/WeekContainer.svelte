<script>
  import WeekList from "./WeekList/index.svelte";
</script>


<section class="week-container">
  <WeekList/>

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

</style>