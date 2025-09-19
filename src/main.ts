import './style.css'
import { Juan } from './Bases/Clase1_Objetos.ts'

// console.log({data: charmander });

const pokemons = Juan.getPokemon(); 
console.log(`Los pokemons de Juan son:`, pokemons);

const div = document.getElementById('app')

div!.innerHTML= `
<div>
  <h1>
    ${Juan.name}
  </h1>
  <br>
  <span>
    ${pokemons.map((pokemon) => {
      return `<p>Nombre: ${pokemon.name}</p>`
    }).join('')}
  </span>
</div>
`




  
