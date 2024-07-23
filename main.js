
function Viaje() {
const confirmar = confirm ("¿Te gustaría viajar a Ushuaia?");

if (confirmar) {
    console.log ("Buenisimo. ¡Sigamos entonces!"); 
} else { 
    alert ("¡No hay problema! ¡Nos vemos la próxima!"); return;
}

let respuesta;
do { respuesta = prompt("¡Genial! ¿Cómo te llamas?");
if (respuesta === null || respuesta.trim() === "") {
    alert("El nombre no puede estar vacío. Por favor, intenta de nuevo.");
}
} while (respuesta === null || respuesta.trim() === "");

let edad = parseInt (prompt ("¿Cúantos años tenes?"));

if (!isNaN(edad) && edad >= 18) {console.log ("Podemos seguir");
} else { 
    alert ("Necesitas autorizacion de tu padre, madre o tutor. ¡Hasta la proxima"); return;
 }
 let actividad;
const actividades = ["caminatas", "catamaran", "paseo en tren"];
do {
     actividad = prompt("¿Qué actividad te gustaría realizar? Elige entre 'caminatas', 'catamaran' o 'paseo en tren'.");
if (!actividades.includes(actividad.trim().toLowerCase())) {
    alert("Opción no válida. Por favor, elige entre 'caminatas', 'catamarán' o 'paseo en tren'.");
            }
} while (!actividades.includes(actividad.trim().toLowerCase()));

alert ("Genial ¡Nos vemos pronto!" + " " + respuesta + " " +"¡Buen Viaje!" ); 
}
Viaje ();