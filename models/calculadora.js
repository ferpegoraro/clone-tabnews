function soma(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return "Erro";
  }
  return number1 + number2;
}

exports.somar = soma;

function subtrair(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return "Erro";
  }
  return number1 - number2;
}

exports.subtrair = subtrair;

function multiplicar(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return "Erro";
  }
  return number1 * number2;
}

exports.multiplicar = multiplicar;

function dividir(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return "Erro";
  }
  return number1 / number2;
}

exports.dividir = dividir;

function par(number1) {
  if (typeof number1 !== "number") {
    return "Erro";
  }
  if (number1 % 2 === 0) {
    return "Par";
  }
  return "Impar";
}

exports.par = par;
