function efetuaOperacao() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operador = document.getElementById("operador").value;
  let resultado;

  switch (operador) {

    case "+":
      resultado = num + num2;
      break;
    case "-":
      resultado = num - num2;
      break;
    case "*":
      resultado = num * num2;
      break;
    case "/":
      resultado = num / num2;
      break;
    default:
      resultado = "Operador inválido!"

  }
      document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
