var menu = document.querySelector(".menu");

function clearTela(){
	ctx.clearRect(0, 0, 300, 300);
	forca()
};

function clearTeclado(){
	document.querySelectorAll("button").classList.add('clicado');
};

function start(){
	menu.style.display = 'none'
	game.tentativas = 6;
	game.letras_usada = [];
	game.saida = [];

	clearTela()
	
	for (let i = 0; i < palavra.palavra.length; i++) {
		document.querySelector("#local-palavra").innerHTML -= '<div class="letra" id="index'+[i]+'"></div>'
	}

	for (let i = 0; i < palavra.palavra.length; i++) {
	  document.querySelector("#local-palavra").innerHTML += '<div class="letra" id="index'+[i]+'"></div>'
	}
};

start()