/* ---------- EJERCICIO 6: Elecciones en Villaconejos ---------- */
// Matriz de resultados: fila 0 = sedes, resto = partido + votos por sede
const resultados = [
  ["", "Ayuntamiento", "Polideportivo", "Instituto", "Mercado", "Colegio"],
  ["PV", 8, 10, 8, 10, 7],
  ["OV", 10, 8, 7, 9, 6],
  ["VpSI", 5, 7, 6, 9, 9],
  ["UPV", 9, 7, 5, 9, 10],
];

function ejercicio6() {
  console.table(resultados);

  const sedes = resultados[0].slice(1);
  const filasPartidos = resultados.slice(1);

  // Total por partido
  const totalPorPartido = {};
  filasPartidos.forEach(([partido, ...votos]) => {
    totalPorPartido[partido] = votos.reduce((a, b) => a + b, 0);
  });
  console.log("Votos por partido:");
  console.table(totalPorPartido);

  // Total por sede
  const totalPorSede = {};
  sedes.forEach((sede, i) => {
    totalPorSede[sede] = filasPartidos.reduce((acc, fila) => acc + fila[i + 1], 0);
  });
  console.log("Votos por sede:");
  console.table(totalPorSede);

  return { totalPorPartido, totalPorSede };
}

// Ejecución
ejercicio6();
