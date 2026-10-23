/* ---------- EJERCICIO 3 ---------- */
function numerosCorrectos(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return i; // posición del elemento fuera de orden
  }
  return -1;
}

function pruebasEjercicio3() {
  console.log(numerosCorrectos([1, 2, 3, 7, 4]));          // 3
  console.log(numerosCorrectos([1, 2, 3]));                // -1
  console.log(numerosCorrectos([1, 3, 4, 5, 6, 7, 8, 9])); // -1
  console.log(numerosCorrectos([2, 1, 3]));                // 0 (límite inicial)
  console.log(numerosCorrectos([1, 2, 5, 3]));             // 2 (límite final)
  console.log(numerosCorrectos([]));                       // -1
  console.log(numerosCorrectos([5]));                      // -1
  console.log(numerosCorrectos([1, 1, 1]));                // -1 (iguales = en orden)
}

// Ejecución
pruebasEjercicio3();
