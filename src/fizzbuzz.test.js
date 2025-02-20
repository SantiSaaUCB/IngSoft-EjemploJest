import fizzbuzz from "./fizzbuzz.js"

describe("FizzBuzz", () => {
     it("deberia retornar 1 si el numero no sigue una regla", () => {
          expect(fizzbuzz(1)).toEqual("1");
     });
     it("deberia retornar el mismo numero si el numero no sigue una regla", () => {
          expect(fizzbuzz(2)).toEqual("2");
     });
     it("deberia retornar 'Fizz' si el numero es 3", () => {
          expect(fizzbuzz(3)).toEqual("Fizz");
     });
     it("deberia retornar 'Fizz' si el numero es multiplo de 3", () => {
          expect(fizzbuzz(6)).toEqual("Fizz");
     });
     it("deberia retornar 'Buzz' si el numero es 5", () => {
          expect(fizzbuzz(5)).toEqual("Buzz");
     });
     it("deberia retornar 'Buzz' si el numero es multiplo de 5", () => {
          expect(fizzbuzz(10)).toEqual("Buzz");
     });
});