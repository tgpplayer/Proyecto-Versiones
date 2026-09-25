// ================================================
// MI PRIMER SCRIPT DE JAVASCRIPT
// ================================================

// 1. Mostrar un mensaje flotante de bienvenida en el navegador
alert("¡Hola! Bienvenido a tu primer código de JavaScript.");

// 2. Mostrar un mensaje en la consola del navegador (F12 -> Consola)
// Útil para los alumnos para aprender a hacer depuración (debugging)
console.log("El script se ha cargado correctamente.");

// 3. Pedir al usuario que ingrese su nombre o un texto utilizando un prompt
let nombreUsuario = prompt("Por favor, introduce tu nombre:");

// 4. Buscar el elemento del HTML (el div) donde queremos mostrar la información usando su ID
let cajaMensaje = document.getElementById("mensaje-usuario");

// 5. Validar si el usuario escribió algo y mostrarlo en la página
if (nombreUsuario && nombreUsuario.trim() !== "") {
    // Insertamos el texto dentro del HTML
    cajaMensaje.textContent = "¡Hola, " + nombreUsuario + "! Tu código JS funciona correctamente. 🚀";
    console.log("Nombre ingresado por el usuario:", nombreUsuario);
} else {
    // Si no escribió nada o canceló el prompt
    cajaMensaje.textContent = "No ingresaste ningún nombre, ¡pero bienvenido igualmente!";
    console.log("El usuario no ingresó ningún nombre.");
}