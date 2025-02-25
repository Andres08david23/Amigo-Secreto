// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim(); // Captura el valor y elimina espacios vacíos
    
    if (amigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo); // Agrega el nombre al array
        document.getElementById("amigo").value = ""; // Limpia el campo de entrada
        console.log(amigos); // Muestra el array actualizado en la consola
    }
}
