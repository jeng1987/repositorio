var evento_suma = document.getElementById("btn_operar");
var resultado = document.getElementById("resultado");
// let nombre = promt("Digite el valor 1");
// let edad = parseInt(prompt("Digite el valor de la edad"));

evento_suma.addEventListener("click", function () {
  var operacion = document.getElementById("operacion").value;
  var num1 = Number(document.ingreso.numero1.value);
  var num2 = Number(document.ingreso.numero2.value);
  console.log(typeof num1);
  switch (operacion) {
    case "suma":
      resultado.innerHTML = "el resultado es: " + suma(num1, num2);
      break;
    case "resta":
      resultado.innerHTML = "el resultado es: " + resta(num1, num2);
      break;
    case "multiplicacion":
      resultado.innerHTML = "el resultado es: " + multiplicacion(num1, num2);
      break;
    case "division":
      if (num2 <= 0) {
        alert("El denominador no debe ser menor a cero");
      } else {
        resultado.innerHTML = "El resultado es: " + division(num1, num2);
      }
      break;
    default:
      resultado.innerHTML = "No existe dicha opcion";
      break;
  }
});

function suma(a, b) {
  var res = Number(a + b);
  return res;
}
function resta(a, b) {
  var res = Number(a - b);
  return res;
}
function multiplicacion(a, b) {
  var res = Number(a * b);
  return res;
}
function division(a, b) {
  var res = Number(a / b);
  console.log(res);
  return res;
}
