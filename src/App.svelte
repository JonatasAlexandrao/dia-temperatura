<script>
	//export let name;

import DayContainer from "./components/DayContainer.svelte";
import WeekContainer from "./components/WeekContainer.svelte";

</script>

<main>	
	<DayContainer />
	<WeekContainer />
</main>

<style>
	main {
    width: 36rem;
    height: 100vh;
    max-height: 74rem;

		display: grid;
		grid-template-rows: 70% 30%;

		background-color: rgb(155, 150, 150);
  }

</style>