import './style.css'
import { Juan } from './Bases/Clase1_Objetos.ts'
import { mostrarData, mostrarDatosMedianteAsync, obtenerDatosMediantePromesa, pokeapi } from './Bases/Clase2_Callbacks.ts';
import { Pokemon } from './Bases/Clase3_Async.ts';

// console.log({data: charmander });

const pokemons = Juan.getPokemon(); 
console.log(`Los pokemons de Juan son:`, pokemons);

const div = document.getElementById('app')

div!.innerHTML= `
<div>
  <h1>
    Hola ${Juan.name}, actualmente cuentas con los siguientes pokemons
  </h1>
  <br>
  <span>
    ${pokemons.map((pokemon) => {
      return `<p>Nombre: ${pokemon.name}</p>`
    }).join('')}
  </span>
</div>
`
mostrarDatosMedianteAsync;
pokeapi;
Pokemon;