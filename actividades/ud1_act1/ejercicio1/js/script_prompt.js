
let nombre = prompt("Nikita");
let apellidos = prompt("Grabovskyi");
let anioNacimiento = prompt("19.04.2006");
let dinero = prompt("12");



console.log("Tipos antes de convertir:");
console.log(typeof nombre, typeof apellidos, typeof anioNacimiento, typeof dinero);


anioNacimiento = Number(anioNacimiento);
dinero = Number(dinero);

console.log("Tipos después de convertir:");
console.log(typeof nombre, typeof apellidos, typeof anioNacimiento, typeof dinero);

let dineroEnDosAnios = dinero + 10000;
console.log(nombre + "\n" + apellidos + "\nDinero dentro de dos años: " + dineroEnDosAnios);
