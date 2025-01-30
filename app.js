
let amigos = []; //Para almacenar los nombres

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
        // Para validar que no esté vacío
    }

    
    if (/\d/.test(nombre)) {
        alert("El nombre no puede contener números.");
        return;
        // Para validar que no contenga números
    }

    
    amigos.push(nombre);// Agregar el nombre al array
    input.value = ""; // Limpiar el campo de entrada
    actualizarLista(); // Actualizar la lista en pantalla
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista

    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });

    lista.style.display = "block"; // Asegurar que la lista sea visible antes del sorteo
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe ingresar al menos un nombre para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    
    document.getElementById("listaAmigos").style.display = "none";
    // Oculta la lista de amigos
    mostrarResultado(amigoSecreto);
}

function mostrarResultado(amigo) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpiar resultados anteriores

    let li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigo}`;
    listaResultado.appendChild(li);
}
