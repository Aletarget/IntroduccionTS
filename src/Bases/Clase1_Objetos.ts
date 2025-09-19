interface PokemonInterface{
  id: number,
  name: string,
  age?: number,
}

// export const charmander:Pokemon = {
//     id:1,
//     name:"charmander"
// }


export class PokemonTrainer {
    private pokemons: PokemonInterface[] = []
    constructor(
        readonly id: number,
        readonly name: string,
        readonly age: number
    ){}


    setPokemon(pokemon: PokemonInterface){
        this.pokemons.push(pokemon);
    }

    getPokemon(): PokemonInterface[]{
        return this.pokemons;
    }
}


export const Juan: PokemonTrainer = new PokemonTrainer(100, "Juan", 20);
Juan.setPokemon(
  {
    id: 1,
    name: "Charmander",
    age: 10
  }
)
Juan.setPokemon(
  {
    id: 2,
    name: "Bulbasaur",
    age: 12
  }
)
Juan.setPokemon(
  {
    id: 3,
    name: "Charizard",
    age: 15
  }
)


