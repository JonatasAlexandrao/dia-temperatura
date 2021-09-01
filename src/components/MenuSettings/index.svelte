<script>
	import { activeSettings } from '../../store.js'

  function ActiveSettings() {
    activeSettings.set(false)
  }

</script>

{#if $activeSettings }
<div class="overlay" on:click="{ActiveSettings}">

  <ul>
    <li>Trocar Localização</li>
    <li>Trocar Fonte</li>
    <li>Info</li>
  </ul>

</div>
{/if}


<style>

.overlay {

  position: absolute;
  width: 100%;
  height: 100%;

  text-align: center;

  background-color: var(--color-background-page);
  opacity: 97%;
  z-index: 9999;

}

li {
  color: var(--color-white);
  font-size: 2.5rem;
  font-weight: 600;
  padding: 2rem 0;
  cursor: pointer;

  /*border-bottom: 1px solid #fff;*/
}

li:hover {
  background-color: rgb(54, 54, 56);
}


</style>