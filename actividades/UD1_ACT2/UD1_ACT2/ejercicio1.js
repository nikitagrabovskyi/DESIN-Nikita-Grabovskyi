/* ---------- EJERCICIO 1 ---------- */
function ejercicio1() {
  const entrada = prompt("Introduce tu nombre y apellidos (ej: Margarita Alonso Corrales)") || "";
  const [nombre = "", apellido1 = "", apellido2 = ""] = entrada.trim().split(/\s+/);

  // Tamaño sin contar espacios
  const tamano = entrada.replace(/\s/g, "").length;
  console.log("Tamaño (sin espacios):", tamano);

  // Minúsculas y mayúsculas
  console.log("Minúsculas:", entrada.toLowerCase());
  console.log("Mayúsculas:", entrada.toUpperCase());

  // En 3 líneas
  console.log(`Nombre: ${nombre}\nApellido 1: ${apellido1}\nApellido 2: ${apellido2}`);

  // Usuario 1: nombre + inicial apellido1 + inicial apellido2 (función anónima)
  const usuario1 = function (n, a1, a2) {
    return (n + a1.charAt(0) + a2.charAt(0)).toLowerCase();
  };
  console.log("Usuario propuesto 1:", usuario1(nombre, apellido1, apellido2));

  // Usuario 2: 2 primeras letras de cada parte (función flecha)
  const usuario2 = (n, a1, a2) =>
    (n.slice(0, 2) + a1.slice(0, 2) + a2.slice(0, 2)).toLowerCase();
  console.log("Usuario propuesto 2:", usuario2(nombre, apellido1, apellido2));
}

// Ejecución
ejercicio1();
