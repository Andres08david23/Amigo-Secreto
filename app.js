// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim(); // Captura el valor y elimina espacios vacíos
    
    if (amigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo); // Agrega el nombre al array
        document.getElementById("amigo").value = ""; // Limpia el campo de entrada
        mostrarLista(); // Llama a la función para actualizar la lista en la interfaz
    }
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtiene la lista
    lista.innerHTML = ""; // Limpia la lista antes de agregar nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crea un nuevo elemento <li>
        li.textContent = amigos[i]; // Asigna el nombre del amigo al <li>
        lista.appendChild(li); // Agrega el <li> a la lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtiene el amigo sorteado

    document.getElementById("resultado").innerHTML = "El amigo seleccionado es: <b>" + amigoSorteado + "</b>"; // Muestra el resultado
}
