/* ---------- EJERCICIO 2 ---------- */
const NOMBRES_DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

function infoCumple(dia, mes) {
  const hoy = new Date();
  const hoy0 = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()); // sin horas

  let proximo = new Date(hoy0.getFullYear(), mes - 1, dia);
  if (proximo < hoy0) {
    // Ya pasó este año -> el del año siguiente
    proximo = new Date(hoy0.getFullYear() + 1, mes - 1, dia);
  }
  const dias = Math.round((proximo - hoy0) / (1000 * 60 * 60 * 24));
  return { dias, diaSemana: NOMBRES_DIAS[proximo.getDay()] };
}

// AMPLIACIÓN: a partir de la fecha de nacimiento (formato "AAAA-MM-DD")
function infoCumpleDesdeNacimiento(fechaNacimiento) {
  const f = new Date(fechaNacimiento);
  return infoCumple(f.getUTCDate(), f.getUTCMonth() + 1);
}

function pruebasEjercicio2() {
  const h = new Date();
  const manana = new Date(h.getFullYear(), h.getMonth(), h.getDate() + 1);
  const ayer = new Date(h.getFullYear(), h.getMonth(), h.getDate() - 1);
  console.log("Hoy:", infoCumple(h.getDate(), h.getMonth() + 1));         // dias: 0
  console.log("Mañana:", infoCumple(manana.getDate(), manana.getMonth() + 1)); // dias: 1
  console.log("Ayer:", infoCumple(ayer.getDate(), ayer.getMonth() + 1));   // ~364
  console.log("Desde nacimiento:", infoCumpleDesdeNacimiento("2000-12-25"));
}

// Ejecución
pruebasEjercicio2();
