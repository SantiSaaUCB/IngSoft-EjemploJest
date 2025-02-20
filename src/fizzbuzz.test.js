import fizzbuzz from "./fizzbuzz.js"

describe("FizzBuzz", () => {
     it("deberia retornar 1 si el numero no sigue una regla", () => {
          expect(fizzbuzz(1)).toEqual("1");
     });
     it("deberia retornar el mismo numero si el numero no sigue una regla", () => {
          expect(fizzbuzz(2)).toEqual("2");
     });
});