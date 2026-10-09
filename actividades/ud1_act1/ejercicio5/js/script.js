// Ejercicio 5: la función recibe un objeto literal con las jugadas.
// AMPLIACIÓN: la lógica está en un objeto que indica qué jugada gana a cuál.
let jugadas = {
    Piedra: "Tijera",
    Tijera: "Papel",
    Papel: "Piedra"
};

function piedraPapelTijera(partida) {
    if (partida.jugada1 === partida.jugada2) {
        return "Es un empate";
    } else if (jugadas[partida.jugada1] === partida.jugada2) {
        return "El ganador es jugador1";
    } else {
        return "El ganador es jugador2";
    }
}

console.log(piedraPapelTijera({ jugada1: "Piedra", jugada2: "Tijera" })); // jugador1
console.log(piedraPapelTijera({ jugada1: "Piedra", jugada2: "Papel" }));  // jugador2
console.log(piedraPapelTijera({ jugada1: "Tijera", jugada2: "Tijera" })); // empate
