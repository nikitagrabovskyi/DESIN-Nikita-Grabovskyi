// Ejercicio 3: suma de los dígitos de un número entero (sin usar cadenas)
function sumaDigitos(numero) {
    // Trabajamos con el valor absoluto para que los negativos también funcionen
    numero = Math.abs(numero);
    let suma = 0;

    while (numero > 0) {
        suma += numero % 10;            // último dígito
        numero = Math.floor(numero / 10); // quitamos el último dígito
    }
    return suma;
}

console.log(sumaDigitos(318));     // 12
console.log(sumaDigitos(-314569)); // 28
