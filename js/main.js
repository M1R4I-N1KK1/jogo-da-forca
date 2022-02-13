var dicas = document.querySelector("#dicas div");
var mensagem = document.querySelector("#msg");
var palavra;

var palavras = {
  fruta: ["uva", "laranja", "graviola", "limao"],
  animal: ["peru", "jumento", "cobra"],
  pais: ["bolivia",  "brasil", "china"],
};

var game = {
  saida: [],
  tentativas: 6,
  letras_usada: [],
};

function geraPalavra() {
  let chaves = Object.keys(palavras);
  let dica = chaves[Math.floor(Math.random() * chaves.length)];
  let index = palavras[dica];
  let item =  index[Math.floor(Math.random() * index.length)];
  palavra = item
  dicas.innerHTML = dica
};

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
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] == letras) {
      document.querySelector("#index".concat([i])).innerHTML = palavra[i].toUpperCase();
      game.saida[i] = palavra[i]
      
      if (game.saida.includes(letras)) {
        document.getElementById(letras).classList.add("clicado-tem");
      }
    }
  }
};

function verificar(letra) {
  let entrada = letra;

  if (!game.letras_usada.includes(entrada)) {

    if (game.tentativas > 0) {
      if (palavra.includes(entrada)) {
        verificarLetra(entrada);
        game.letras_usada.push(entrada);
      } else {
        tentativa()
        document.getElementById(letra).classList.add("clicado");
        game.letras_usada.push(entrada);
      }
    }

    if (game.saida.join("") == palavra) {
      ganhouPerdeu(true);
    }

    if (game.tentativas == 0) {
      ganhouPerdeu();
    }

  };
};

function ganhouPerdeu(ganhou){
  if(ganhou){
    menu.style.display = 'block';
    mensagem.innerHTML = "&lt;GANHOU&gt;";
    mensagem.classList.add('ganhou');
    game.tentativas = "ganhou";
  }else{
    menu.style.display = 'block';
    mensagem.innerHTML = "enforcado!!!"
    mensagem.classList.add('enforcado');
  }
};
