//import sumar from "./sumador";

import fizzbuzz from "./fizzbuzz";

const form = document.querySelector("#fizzbuzz-form");
const numero = document.querySelector("#numero");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const num = Number.parseInt(numero.value);
  div.innerHTML = "<p>" + fizzbuzz(num) + "</p>";
  
});
