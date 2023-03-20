//CODIGO DE PRODUCCION DEL METODO
import fizzbuzz from "./fizzbuzz.js";
function secuenciaFB(num)
{
    let cadena = "";
    for(let i = 1; i <=num; i++){
      cadena += fizzbuzz(i) + " ";
    }
    return cadena;
}

export default secuenciaFB;