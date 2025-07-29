const calculadora = require("../models/calculadora");

test("Somar 2 + 2 deve retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Somar 5 + 100 deve retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("Somar 'banana' + 100 deveria dar erro", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});

test("Somar 0.1 + 0.2 deve retornar 0.3", () => {
  const resultado = calculadora.somar(0.1, 0.2);
  expect(resultado).toBeCloseTo(0.3);
});

test("Subtrair 98 - 23 deve retornar 75", () => {
  const resultado = calculadora.subtrair(98, 23);
  expect(resultado).toBe(75);
});

test("Multiplicar 98 * 23 deve retornar 75", () => {
  const resultado = calculadora.multiplicar(98, 23);
  expect(resultado).toBe(2254);
});

test("Dividir 40 / 2 deve retornar 20", () => {
  const resultado = calculadora.dividir(40, 2);
  expect(resultado).toBe(20);
});

test("Este número é par", () => {
  const resultado = calculadora.par(2);
  expect(resultado).toBe("Par");
});
