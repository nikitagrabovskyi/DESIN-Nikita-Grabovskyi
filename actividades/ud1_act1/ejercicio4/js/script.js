// Ejercicio 4: función piedraPapelTijera(jugada1, jugada2)
function piedraPapelTijera(jugada1, jugada2) {
    if (jugada1 === jugada2) {
        return "Es un empate";
    } else if (
        (jugada1 === "Piedra" && jugada2 === "Tijera") ||
        (jugada1 === "Tijera" && jugada2 === "Papel") ||
        (jugada1 === "Papel" && jugada2 === "Piedra")
    ) {
        return "El ganador es jugador1";
    } else {
        return "El ganador es jugador2";
    }
}

console.log(piedraPapelTijera("Piedra", "Tijera")); // jugador1
console.log(piedraPapelTijera("Papel", "Tijera"));  // jugador2
console.log(piedraPapelTijera("Papel", "Papel"));   // empate
