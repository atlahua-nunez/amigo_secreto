// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        alert("El campo no puede estar vacio.\nPor favor, ingresa un nombre de amigo.");
    } else {
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    const ul = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = amigo;
    ul.appendChild(li);
    }
}

function sortearAmigo() {
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    const ul = document.getElementById("resultado");
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    ul.appendChild(li);
}