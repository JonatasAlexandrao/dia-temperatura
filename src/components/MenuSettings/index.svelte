<script>
	import { activeSettings } from '../../store.js'
  import Button from '../Button/index.svelte'

  function handleClickSettings() {
    activeSettings.set(false)
  }

  function handleClickButton() {
    console.log('testando')
  }

</script>

{#if $activeSettings }
<div class="overlay">
  <img class="icon-back" src="assets/icons/back.svg" alt="Voltar" on:click="{handleClickSettings}">

  <h2>Configurações</h2>

  <div class="container-buttons">

    <Button text="Trocar Localização" identifier="localization" />
    <Button text="Trocar Fonte" identifier="font" />
    <Button text="Informações" identifier="info" />

  </div>

  <div class="container localization sr-only">
    <label for="localization">Cidade:</label>
    <input type="text" id="localization">
  </div>

  <div class="container font sr-only">
    <label for="font">Fonte:</label>
    <input type="text" id="font">
  </div>


  <div class="container info sr-only">
    <p>Criado por Jônatas J. B. Alexandrão</p>
    <p>2021</p>
  </div>

  

</div>
{/if}


<style>

.overlay {

  position: absolute;
  width: 100%;
  height: 100%;

  padding: 4rem;

  font-size: 1.8rem;

  background-color: var(--color-background-page);
  color: var(--color-white);
  opacity: 97%;
  z-index: 9999;

}

.icon-back {
  cursor: pointer;
}

h2 {
  text-align: center;
  margin: 4rem 0;
}

.container-buttons {
  display: grid;
  justify-content: center;
}

</style>