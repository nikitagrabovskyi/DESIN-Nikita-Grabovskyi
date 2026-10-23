/* ---------- EJERCICIO 4 ---------- */
function tiposEnArray(arr) {
  return arr.map((elemento) => typeof elemento);
}

function pruebasEjercicio4() {
  console.log(tiposEnArray([true, 1, "Casa", function () {}])); // boolean, number, string, function
  console.log(tiposEnArray([undefined, null, {}, [], 10n, Symbol("a")]));
  console.log(tiposEnArray([])); // []
}

// Ejecución
pruebasEjercicio4();
