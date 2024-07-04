const calculadora = require("../models/calculadora");

test("2 + 2 deveria retornar 4", () => {
  expect(calculadora.somar(2, 2)).toBe(4);
  // expect(calculadora.somar(2, "2")).toBe(4);
});
