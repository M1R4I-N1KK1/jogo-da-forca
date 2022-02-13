var menu = document.querySelector(".menu");
var local_palavra = document.querySelector("#local-palavra");

function removerPersonagem(){
	ctx.clearRect(0, 0, 300, 300);
	forca()
};

function proximo(){
	limparTeclado();
	limparAtributo();
	removerPersonagem();
	removerElemento();
	geraPalavra();
	criarElemento();
};
function startGame(){
	var modo = document.getElementsByName("modo");

	if (modo[1].checked){
		adicionarPalavra();

		document.querySelector(".menu").style.display = "none"
		document.querySelector("#startgame").style.display = "none"
		document.querySelector("#start").style.display = "block"
		document.querySelector("#restart").style.display = "block"
		document.querySelector("#proximo").style.display = "none"
	}

	if (modo[0].checked){
		geraPalavra();

		document.querySelector(".menu").style.display = "none"
		document.querySelector("#startgame").style.display = "none"
		document.querySelector("#start").style.display = "block"
		document.querySelector("#restart").style.display = "block"
		document.querySelector("#proximo").style.display = "block"
	}

	criarElemento()
}

function start(){
	var modo = document.getElementsByName("modo");

	limparTeclado();
	limparAtributo();
	removerPersonagem();
	removerElemento();

	if (modo[1].checked){
		adicionarPalavra();

		document.querySelector("#start").style.display = "block"
		document.querySelector("#restart").style.display = "none"
		document.querySelector("#proximo").style.display = "none"
	}

	if (modo[0].checked){
		geraPalavra();

		document.querySelector("#start").style.display = "block"
		document.querySelector("#restart").style.display = "block"
		document.querySelector("#proximo").style.display = "block"
	}

	criarElemento();
}

function adicionarPalavra() {
	var palavra_adicionada = 'urubu'
	var tema_palavra = 'animal'

	palavra = palavra_adicionada;
	dicas.innerHTML = tema_palavra;
}

function restart(){
	limparTeclado();
	limparAtributo();
	removerPersonagem();
	removerElemento();
	criarElemento();
}


function criarElemento() {
	for (let i = 0; i < palavra.length; i++) {
		let local_letra = document.createElement("div");
		local_letra.id = "index".concat(i)
		local_letra.classList.add("letra")
		local_palavra.appendChild(local_letra);
		}
}

function removerElemento() {
	for (let i = 0; i < palavra.length; i++) {
		let local_letra = document.querySelector("#index".concat(i));
		local_letra.remove()
	}
}

function limparAtributo() {
	menu.style.display = 'none'
	game.tentativas = 6;
	game.letras_usada = [];
	game.saida = [];
}

function limparTeclado() {
	for (let letra = 0; letra < game.letras_usada.length; letra++) {
		document.getElementById(game.letras_usada[letra]).classList.remove("clicado");
		document.getElementById(game.letras_usada[letra]).classList.remove("clicado-tem");
	};
}
