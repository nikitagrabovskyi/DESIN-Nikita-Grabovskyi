/* ---------- EJERCICIO 7 ---------- */
function crearPersona(nombre, apellidos, edad = 0, ...contactos) {
  let texto = `Nombre:${nombre}\nApellidos:${apellidos}\nEdad:${edad}`;

  if (contactos.length > 0) {
    let listaContactos = "";

    // Con función anónima
    contactos.forEach(function (c) {
      listaContactos += " " + c;
    });

    // Alternativa con función arrow (misma salida):
    // contactos.forEach((c) => (listaContactos += " " + c));

    texto += `\nContactos:${listaContactos}`;
  }
  console.log(texto);
}

function pruebasEjercicio7() {
  crearPersona("Jordi", "Hurtado");
  crearPersona("Jordi", "Hurtado", 123);
  crearPersona("Jordi", "Hurtado", undefined, 222222, "jordi@tv.es");
}

// Ejecución
pruebasEjercicio7();
