<script>

export let text = ''
export let identifier = ''


function handleClickButton() {

  const div = document.querySelector(`.overlay .container.${identifier}`)
  div.classList.toggle('sr-only')

}

</script>

<button class="button" 
  on:click="{handleClickButton}" > 
  { text } 
</button>

<style>

.button {
  width: 25rem;
  height: 4rem;

  margin-bottom: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  color: var(--color-white);
  font-size: 1.8rem;
  border: 1px solid rgba(256, 256, 256, .3);
  border-radius: 2rem;
  cursor: pointer;
}

.button:hover {
  background-color: rgb(54, 54, 56);
}


</style>