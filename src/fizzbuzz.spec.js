//PRUEBAS / ESPECIFICACION
import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("Generar FizzBuzz para un solo numero", () => {
    expect(fizzbuzz(1)).toEqual('1');
  });

  it("Generar FizzBuzz para otro numero", () => {
    expect(fizzbuzz(2)).toEqual('2');
  });
});
