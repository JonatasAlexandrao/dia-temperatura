<script>
  import WeekList from "./WeekList/index.svelte";


  /*

  async function listForecast() {
		const estados = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
		const json = await estados.json()

    console.log(json)

    const cidades = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios/")
		const json2 = await cidades.json()

    //console.log(json2)

    //console.log(...json2.nome)

    json2.map((element) => {
      console.log(element.nome) 

      if(element.nome === "Amparo") {
        console.log("AQUI: ", element.nome)
      }
    })


	}


  listForecast()

 













*/

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