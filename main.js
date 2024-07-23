
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
alert ("¡Nos vemos pronto! ¡Buen Viaje!" + " " + respuesta ); 
} else { 
    alert ("Necesitas autorizacion de tu padre, madre o tutor. ¡Hasta la proxima"); return;
 }
}
Viaje ();