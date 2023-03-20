//PRUEBAS / ESPECIFICACION
import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("Generar FizzBuzz para un solo numero", () => {
    expect(fizzbuzz(1)).toEqual('1');
  });

  it("Generar FizzBuzz para numero 2", () => {
    expect(fizzbuzz(2)).toEqual('2');
  });

  it("Generar FizzBuzz para numero 3", () => {
    expect(fizzbuzz(3)).toEqual('Fizz');
  });

  it("Generar FizzBuzz para numero 6", () => {
    expect(fizzbuzz(6)).toEqual('Fizz');
  });
});
