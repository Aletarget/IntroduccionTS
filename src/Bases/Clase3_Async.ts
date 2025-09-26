import { HttpAdapter, PokeApiAxiosAdapter, PokeApiFetchAdapter } from "../api/pokeApi.adapter";
import { Move, PokeapiResponse } from "../interface/pokeapi-response.interface";

export class Pokemon{

    // public readonly id:number;
    // public name: string;
    // public age: number;

    // constructor(id:number, name: string, age:number){
    //     this.id = id;
    //     this.name = name;
    //     this.age = age;
    // }

    constructor(
        public readonly id: number,
        private readonly http: HttpAdapter,

        public name?: string,
        public age?: number,
    ){}



    async getMoves(): Promise<Move[]>{
        const data = await this.http.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        this.name = data.name;
        console.log(data.moves, data.name);
        return data.moves;
    }

}
const AxiosAdapter = new PokeApiAxiosAdapter();
const FetchAdapter = new PokeApiFetchAdapter();

const pokemon1 = new Pokemon(1,AxiosAdapter);
const pokemon2 = new Pokemon(2,FetchAdapter);


pokemon1.getMoves();

pokemon2.getMoves();


