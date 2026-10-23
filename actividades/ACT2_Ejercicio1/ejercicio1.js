// Pedir datos y separar en palabras
const completo = prompt("Introduce tu nombre y apellidos:").trim();
const partes = completo.split(/\s+/);
const nombre = partes[0];
const apellido1 = partes[1];
const apellido2 = partes[2];

// Función anónima: nombre + inicial apellido1 + inicial apellido2
const usuario1 = function (nom, ap1, ap2) {
  return (nom + ap1[0] + ap2[0]).toLowerCase();
};

// Función flecha: 2 primeras letras del nombre y de cada apellido
const usuario2 = (nom, ap1, ap2) =>
  (nom.slice(0, 2) + ap1.slice(0, 2) + ap2.slice(0, 2)).toLowerCase();

// Tamaño sin contar espacios
const tamano = completo.replace(/\s/g, "").length;

const texto =
  "Tamaño (sin espacios): " + tamano + "\n" +
  "Minúsculas: " + completo.toLowerCase() + "\n" +
  "Mayúsculas: " + completo.toUpperCase() + "\n\n" +
  "Nombre: " + nombre + "\n" +
  "Apellido 1: " + apellido1 + "\n" +
  "Apellido 2: " + apellido2 + "\n\n" +
  "Usuario (función anónima): " + usuario1(nombre, apellido1, apellido2) + "\n" +
  "Usuario (función flecha): " + usuario2(nombre, apellido1, apellido2);

document.getElementById("salida").textContent = texto;
console.log(texto);
