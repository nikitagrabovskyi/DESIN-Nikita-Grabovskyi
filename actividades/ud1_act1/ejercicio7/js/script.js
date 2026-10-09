// Ejercicio 7: batalla Pokémon
// efectividad[miTipo][tipoOponente]
const efectividad = {
    fuego:        { fuego: 1, hierba: 2,   agua: 0.5, electricidad: 1 },
    agua:         { fuego: 2, hierba: 0.5, agua: 1,   electricidad: 0.5 },
    hierba:       { fuego: 0.5, hierba: 1, agua: 2,   electricidad: 1 },
    electricidad: { fuego: 1, hierba: 1,   agua: 2,   electricidad: 1 }
};

function calculaImpacto(miTipo, tipoOponente, ataque, defensa) {
    return 50 * (ataque / defensa) * efectividad[miTipo][tipoOponente];
}

console.log(calculaImpacto("fuego", "hierba", 100, 50));        // 200
console.log(calculaImpacto("agua", "hierba", 100, 50));         // 50
console.log(calculaImpacto("hierba", "electricidad", 80, 40));  // 100
