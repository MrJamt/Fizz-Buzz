//CODIGO DE PRODUCCION DEL METODO
import fizzbuzz from "./fizzbuzz.js";
function secuenciaFB(num,div)
{
    for(let i = 1; i <=num; i++){
      div.innerHTML += fizzbuzz(i) + " ";
    }
}

export default secuenciaFB;