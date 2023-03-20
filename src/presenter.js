import secuenciaFB from "./secuenciaFB";

const form = document.querySelector("#fizzbuzz-form");
const numero = document.querySelector("#numero");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "";
  const num = Number.parseInt(numero.value);

  secuenciaFB(num,div);
});
