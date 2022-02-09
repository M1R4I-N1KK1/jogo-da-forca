var palavra = {
  palavra: "uva",
  dica: "Fruta"
};

game = {
  saida: [],
  tentativas: 6,
  letras_usada: [],
}


for (let i = 0; i < palavra.palavra.length; i++) {
  document.querySelector("#local-palavra").innerHTML += '<div class="letra" id="index'+[i]+'"></div>'
}

document.querySelector("#dica").innerHTML = palavra.dica

function tentativa() {
  game.tentativas--

  if (game.tentativas == 5) {
    pCabeca();
  };

  if (game.tentativas == 4) {
    pTronco();
  };

  if (game.tentativas == 3) {
    pBracoEsquedo()
  };

  if (game.tentativas == 2) {
    pBracoDireito();
  };

  if (game.tentativas == 1) {
     pPernaEsqueda();
  };

  if (game.tentativas == 0) {
    pPernaDireita();
  };

};

function verificarLetra(letras) {
  for (let i = 0; i < palavra.palavra.length; i++) {
    if (palavra.palavra[i] == letras) {
      document.querySelector("#index"+[i]).innerHTML = palavra.palavra[i].toUpperCase();
      game.saida[i] = palavra.palavra[i]
      if (game.saida.includes(letras)) {
        document.querySelector("#"+letras).classList.add("clicado-tem");
      }
    }
  }
};

function verificar(letra) {
  let entrada = letra;

  if (!game.letras_usada.includes(entrada)) {

    if (game.tentativas > 0) {
      if (palavra.palavra.includes(entrada)) {
        verificarLetra(entrada);
        game.letras_usada.push(entrada);
      } else {
        tentativa()
        document.querySelector("#"+letra).classList.add("clicado");
        game.letras_usada.push(entrada);
      }
    }

    if (game.saida.join("") == palavra.palavra) {
      ganhouPerdeu(true);
    }

    if (game.tentativas == 0) {
      ganhouPerdeu();
    }

  };
};

function ganhouPerdeu(ganhou){
  if(ganhou){
    document.querySelector(".menu").style.display = 'block';
    document.querySelector("#msg").innerHTML = "&lt;GANHOU&gt;";
    document.querySelector("#msg").classList.add('ganhou');
    game.tentativas = "ganhou";
  }else{
    document.querySelector(".menu").style.display = 'block';
    document.querySelector("#msg").innerHTML = "enforcado!!!"
    document.querySelector("#msg").classList.add('enforcado');
  }
};