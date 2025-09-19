import { Juan } from "./Clase1_Objetos";

// function mostrarData(url:string) {
//     console.log({
//         url,
//         dataId: 1,
//         numberData: [213,21,54,23,76,43,89,9],
//         pokemonTrainer: Juan
//       })
// }

const obtenerDatosCallback = (callback: Function, url:string) =>{
  setTimeout(()=>{
    callback(url)
  }, 2000)
};
const procesarDatos = (callback: Function, data: object)=>{
  setTimeout(
    ()=>{
      callback(data)
    },
    1000)
};

console.log("Inicio de callback");

obtenerDatosCallback(
  (url:string)=>{
    const datos = {
      url,
      dataId: 1,
      numberData: [213,21,54,23,76,43,89,9],
      pokemonTrainer: Juan
    }
    procesarDatos((datos:object)=>{
      console.log(datos)
    },datos)
  },
  "https://example.api.com"
)
// obtenerDatosCallback(
//   () => {
//     mostrarData("https://example.api.com")
//   },)

console.log("Fin de callback");


const obtenerDatos = (): Promise<string|object> => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.5;
      console.log(exito)
      if (exito) {
        resolve("Datos recibidos");
      }else{
        reject({"error": "Datos corruputos, error 5xx"})
      }
    }, 1000);
  });
};

// Uso tradicional con promesas
obtenerDatos()
  .then(console.log) // console.log("Datos recibidos")
  .catch(console.log); // console.log({"error":"Datos corruptos, error 5xx"})



// Uso moderno con async/await
const mostrarDatos = async (): Promise<string | object> => {
  try {
    const data = await obtenerDatos();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error)
    throw new Error("Error en la data");
  }
};


mostrarDatos();