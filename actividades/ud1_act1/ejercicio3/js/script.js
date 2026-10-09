
function sumaDigitos(numero) {
   
    numero = Math.abs(numero);
    let suma = 0;

    while (numero > 0) {
        suma += numero % 10;           
        numero = Math.floor(numero / 10); 
    }
    return suma;
}

console.log(sumaDigitos(318));     
console.log(sumaDigitos(-314569));
