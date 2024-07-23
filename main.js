
function Viaje() {
const confirmar = confirm ("¿Te gustaría visitar Ushuaia?");

if (confirmar) {
    console.log ("Buenisimo. ¡Sigamos entonces!"); 
} else { 
    alert ("¡No hay problema! ¡Nos vemos la próxima!"); return;
}

let respuesta;
do { respuesta = prompt("¡Genial! ¿Cómo te llamas?");
if (respuesta === null || respuesta.trim() === "") {
    alert("Por favor, intenta de nuevo.");
}
} while (respuesta === null || respuesta.trim() === "");

let edad = parseInt (prompt ("¿Cúantos años tenes?"));

if (!isNaN(edad) && edad >= 18) {console.log ("Podemos seguir");
} else { 
    alert ("Necesitas autorizacion de tu padre, madre o tutor. ¡Hasta la proxima"); return;
 }

const actividades = ["caminatas", "catamaran", "paseo en tren"];
let opciones = "¿Qué actividad te gustaría hacer? Elige entre:\n";
for (let i = 0; i < actividades.length; i++) {
    opciones += (i + 1) + ". " + actividades[i] + "\n";
}
let actividad;
do {
    actividad = prompt(opciones);
    if (!actividades.includes(actividad.trim().toLowerCase())) {
        alert("Opción no válida. Por favor, elige una opción de la lista y escribela.");
    }
} while (!actividades.includes(actividad.trim().toLowerCase()));

alert ("Genial ¡Nos vemos pronto!" + " " + respuesta + " " +"¡Buen Viaje!" ); 
}
document.querySelector('.btn-iniciar-viaje').addEventListener('click', Viaje);