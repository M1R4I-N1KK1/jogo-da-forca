var menu = document.querySelector(".menu");
var local_palavra = document.querySelector("#local-palavra")

function removerPersonagem(){
	ctx.clearRect(0, 0, 300, 300);
	forca()
};

function limparTeclado(){
	document.querySelectorAll("button").classList.add('clicado');
};

function restart(){
	limparTeclado();
	limparAtributo();	
	removerPersonagem();
	removerElemento();	
	criarElemento();
};

function start(){
	limparAtributo();	
	criarElemento();
}

function criarElemento() {
	for (let i = 0; i < palavra.palavra.length; i++) {
		let local_letra = document.createElement("div");
		local_letra.id = "index"+i
		local_letra.classList.add("letra")
		local_palavra.appendChild(local_letra);
		}
}

function removerElemento() {
	for (let i = 0; i < palavra.palavra.length; i++) {
		let local_letra = document.querySelector("#index"+i);
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
		document.querySelector("#"+game.letras_usada[letra]).classList.remove("clicado");
		document.querySelector("#"+game.letras_usada[letra]).classList.remove("clicado-tem");
	};
}
