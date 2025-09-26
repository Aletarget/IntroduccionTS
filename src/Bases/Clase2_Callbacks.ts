// import { Juan } from "./Clase1_Objetos";


() => {
    
}

export const mostrarData = (data: string) => {
    console.log(data)
}

export const obtenerDatosCallback = (callback: Function, url:string) =>{
    setTimeout(() => {
        callback(url)
    }, 2000);
}

// console.log("Antes del callback");
// obtenerDatosCallback(
//     (url: string) => {
//         const datos = {
//             url,
//             id: 1,
//             numberData: [12,34,45,89],
//             PokemonTrainer: Juan
//         }
//         console.log(datos)
//     },
//     "https://example.api.com"
// )
// console.log("Despues del callback");
//callback hell

// function mostrarDatos(url: string) {
//     console.log(url)
// }

export const obtenerDatosMediantePromesa = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const exito = Math.random() > 0.3;
            console.log(exito);
            if (exito) {
                resolve("Datos recibidos");
            }else{
                reject({error: "Datos corruptos, error 500"});
            }
        }, 1000)
    })
}

// console.log("Antes de la promesa");
// obtenerDatosMediantePromesa()
//     .then(console.log)
//     .catch(console.log)
// console.log("Despues de la promesa");

export const mostrarDatosMedianteAsync = async (): Promise<void> =>{
    try {
        const data = await obtenerDatosMediantePromesa();
        console.log(data);
    } catch (error) {
        console.log(error);
        throw new Error("Internal server error");
    }
}


console.log("Antes de la funcion asincrona");
mostrarDatosMedianteAsync();
console.log("Despues de la funcion asincrona");


export const pokeapi = async ()=>{
    try {
        const data = (await fetch("https://pokeapi.co/api/v2/pokemon/ditto")).json();
        console.log(JSON.stringify(data));
    } catch (error) {
        throw new Error("Data del pokemon no recibida");
    }
}


pokeapi()