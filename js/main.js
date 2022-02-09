var palavra = {
  palavra: "uva",
  dica: "Fruta"
};

var saida = [];
var tentativas = 6;
var letras_usada = [];

for (let i = 0; i < palavra.palavra.length; i++) {
  document.querySelector("#local-palavra").innerHTML += '<div class="letra" id="index'+[i]+'"></div>'
}

document.querySelector("#dica").innerHTML = palavra.dica

function tentativa() {
  tentativas--

  if (tentativas == 5) {
    pCabeca();
  };

  if (tentativas == 4) {
    pTronco();
  };

  if (tentativas == 3) {
    pBracoEsquedo()
  };

  if (tentativas == 2) {
    pBracoDireito();
  };

  if (tentativas == 1) {
     pPernaEsqueda();
  };

  if (tentativas == 0) {
    pPernaDireita();
  };

};

function verificarLetra(letras) {
  for (let i = 0; i < palavra.palavra.length; i++) {
    if (palavra.palavra[i] == letras) {
      document.querySelector("#index"+[i]).innerHTML = palavra.palavra[i].toUpperCase();
      saida[i] = palavra.palavra[i]
      if (saida.includes(letras)) {
        document.querySelector("#"+letras).classList.add("clicado-tem");
      }
    }
  }
};

function verificar(letra) {
  let entrada = letra;

  if (!letras_usada.includes(entrada)) {

    if (tentativas > 0) {
      if (palavra.palavra.includes(entrada)) {
        verificarLetra(entrada);
        letras_usada.push(entrada);
      } else {
        tentativa()
        document.querySelector("#"+letra).classList.add("clicado");
        letras_usada.push(entrada);
      }
    }

    if (saida.join("") == palavra.palavra) {
      ganhouPerdeu(true);
    }

    if (tentativas == 0) {
      ganhouPerdeu();
    }

  };
};

function ganhouPerdeu(ganhou){
  if(ganhou){
    document.querySelector(".menu").style.display = 'block';
    document.querySelector("#msg").innerHTML = "&lt;GANHOU&gt;";
    document.querySelector("#msg").classList.add('ganhou');
    tentativas = "ganhou";
  }else{
    document.querySelector(".menu").style.display = 'block';
    document.querySelector("#msg").innerHTML = "enforcado!!!"
    document.querySelector("#msg").classList.add('enforcado');
  }
};