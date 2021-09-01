<script>
	//export let name;

import DayContainer from "./components/DayContainer.svelte";
import WeekContainer from "./components/WeekContainer.svelte";
import MenuSettings from "./components/MenuSettings/index.svelte"

</script>

<main>	
	<MenuSettings />
	<DayContainer />
	<div class="breath">
		<img class="bg-detail" src="assets/img/detail.svg" alt="detalhe">
	</div>
	<WeekContainer />
</main>

<style>
	main {
		position: relative;
    width: 36rem;
    height: 100vh;
    max-height: 74rem;

		display: grid;
		grid-template-rows: 67% 3% 30%;

		background-color: rgb(155, 150, 150);
  }

	.breath {
		position: relative;
		background-color: #000;
	}

	
  .breath .bg-detail {
    position: absolute;
    width: 3rem;

    bottom: -4.3rem;
    left: 14rem;

    z-index: 8888;
  }

</style>