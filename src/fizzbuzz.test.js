import fizzbuzz from "./fizzbuzz.js"

describe("FizzBuzz", () => {
     it("deberia retornar el mismo numero si el numero no sigue una regla", () => {
          expect(fizzbuzz(2)).toEqual("2");
     });
});