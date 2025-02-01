//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById("amigo").value;

    if (amigo === "") {
        alert("Por favor, insira um nome.");

    }

    listaDeAmigos.push(amigo);
    document.getElementById("amigo").value = "";
    atualizarLista();
    
}

function atualizarLista(){
    let listaHTML = document.getElementById("listaDeAmigos");
    listaHTML.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaDeAmigos[i]; 
        listaHTML.appendChild(li); 
    }

}

function sortearAmigo(){

    if (listaDeAmigos.length === 0) {
        alert("A lista de amigos está vazio.");
    }

    let vetorSorteado = (Math.floor(Math.random() * listaDeAmigos.length));
    console.log(vetorSorteado);

    let amigoSorteado = listaDeAmigos[vetorSorteado];

    let res =document.getElementById("resultado");
    res.innerHTML = "O seu amigo secreto é " + amigoSorteado;
}