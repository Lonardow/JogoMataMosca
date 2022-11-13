//Pegando valor do tamanho da tela do usuario
let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 10;

let criaMosquitoTempo = 1500;

let nivel = window.location.search;
nivel = nivel.replace("?", "");

if (nivel === "normal") {
  criaMosquitoTempo = 1500;
} else if (nivel === "dificil") {
  criaMosquitoTempo = 1000;
} else if (nivel === "chucknorris") {
  criaMosquitoTempo = 750;
}

function ajustaTamanhoTela() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

ajustaTamanhoTela();

// gerando posiçoes aleatorias na tela

function posicaoRandomica() {
  // remover mosquito anterior caso exista

  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if (vidas > 3) {
      window.location.href = "fim_de_jogo.html";
    } else {
      document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";

      vidas++;
    }
  }

  let posX = Math.floor(Math.random() * largura - 90);
  let posY = Math.floor(Math.random() * altura - 90);

  posX = posX < 0 ? 0 : posX;
  posY = posY < 0 ? 0 : posY;

  //criando elemento html na tela
  let mosquito = document.createElement("img");
  mosquito.src = "imagens/mosca.png";
  mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
  mosquito.style.left = posX + "px";
  mosquito.style.top = posY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
  let classe = Math.floor(Math.random() * 3);
  switch (classe) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
}

function ladoAleatorio() {
  let classe = Math.floor(Math.random() * 2);
  switch (classe) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
}

let cronometro = setInterval(() => {
  tempo--;
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosquito);
    window.location.href = "vitoria.html";

    document.appendChild(body);
  } else {
    document.getElementById("timer").innerHTML = tempo;
  }
}, 1000);
