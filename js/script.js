let turnosReservados = 0;
let turnosDisponibles = 3;
let nombrePiloto = prompt("Ingresá tu nombre");
let turnosSolicitados = prompt("Cuántos turnos querés reservar? Para salir escribí salir.");
let tiempoEstimado = turnosSolicitados * 1; // Cada turno demora 1 hora
    console.log(`El tiempo estimado de trabajo total para ${nombrePiloto} es de ${tiempoEstimado} horas.`);

const SALIR = "salir"

while (turnosSolicitados > turnosDisponibles) {
  prompt("Sólo hay " + turnosDisponibles + " turnos disponibles. Por favor, apretá enter e ingresa otra cantidad");
  turnosSolicitados = prompt("Cuántos turnos quieres reservar?");
}

for (let i = 0; i < turnosSolicitados; i++) {
  if (turnosDisponibles > 0) {
    turnosReservados++;
    turnosDisponibles--;
    console.log(`${nombrePiloto} ha reservado el turno ${turnosReservados}`);
  } else {
    console.log("No hay suficientes turnos disponibles. Solo hay " + turnosDisponibles + " turnos disponibles");
    break;
  }
}

function salidaPrograma(texto){
        if(texto==salir){
           return true
        }
        return false
    }