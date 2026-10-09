// Ejercicio 2: Piedra, papel o tijera
let jugador1 = "Piedra";
let jugador2 = "Tijera";

if (jugador1 === jugador2) {
    console.log("Es un empate");
} else if (
    (jugador1 === "Piedra" && jugador2 === "Tijera") ||
    (jugador1 === "Tijera" && jugador2 === "Papel") ||
    (jugador1 === "Papel" && jugador2 === "Piedra")
) {
    console.log("El ganador es jugador1");
} else {
    console.log("El ganador es jugador2");
}
