
function valorABilletes(cantidad) {
    let tipos = [500, 200, 100, 50, 20, 10, 5];
    let resultado = [];
    let resto = Math.floor(cantidad);

    for (let i = 0; i < tipos.length; i++) {
        resultado.push(Math.floor(resto / tipos[i])); 
        resto = resto % tipos[i];                     
    }
    return resultado;
}


console.log(valorABilletes(785)); 


let tipos = [500, 200, 100, 50, 20, 10, 5];
let entrada = prompt("Introduce una cantidad en euros (o FIN para salir):");

while (entrada !== null && entrada.toUpperCase() !== "FIN") {
    let cantidad = Number(entrada);

    if (entrada.trim() === "" || isNaN(cantidad) || cantidad < 0) {
        console.log("'" + entrada + "' no es una cantidad válida");
    } else {
        let billetes = valorABilletes(cantidad);
        console.log("Cantidad: " + cantidad + " euros");
        for (let i = 0; i < tipos.length; i++) {
            if (billetes[i] > 0) {
                console.log(billetes[i] + " billete(s) de " + tipos[i] + " euros");
            }
        }
    }
    entrada = prompt("Introduce una cantidad en euros (o FIN para salir):");
}
console.log("Fin del programa");
