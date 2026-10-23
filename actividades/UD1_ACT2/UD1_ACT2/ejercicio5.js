/* ---------- EJERCICIO 5 ---------- */
const paises = ["España", "Francia", "Italia", "Alemania", "Portugal"];

function mostrarForOf(arr) {
  let salida = "";
  for (const p of arr) salida += p + "\n";
  console.log(salida);
}

function mostrarInversoForEach(arr) {
  let salida = "";
  [...arr].reverse().forEach((p) => (salida += p + "\n"));
  console.log(salida);
}

function mostrarAlfabetico(arr) {
  // Una sola sentencia (copia para no modificar el original)
  console.log([...arr].sort((a, b) => a.localeCompare(b)).join("\n"));
}

function anadirAlPrincipio(arr, elemento) { arr.unshift(elemento); }
function anadirAlFinal(arr, elemento) { arr.push(elemento); }

function borrarAlPrincipio(arr) {
  const borrado = arr.shift();
  console.log("Borrado del principio:", borrado);
  return borrado;
}
function borrarAlFinal(arr) {
  const borrado = arr.pop();
  console.log("Borrado del final:", borrado);
  return borrado;
}

function pruebasEjercicio5() {
  mostrarForOf(paises);
  mostrarInversoForEach(paises);
  mostrarAlfabetico(paises);
  anadirAlPrincipio(paises, "Grecia");
  anadirAlFinal(paises, "Suiza");
  console.log(paises);
  borrarAlPrincipio(paises);
  borrarAlFinal(paises);
  console.log(paises);
}

// Ejecución
pruebasEjercicio5();
