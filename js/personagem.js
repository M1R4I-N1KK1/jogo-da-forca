var tela = document.querySelector('#tela');
var ctx = tela.getContext('2d');

const personagem = {
	espessura: "3",
	cor: "#1f1f1f",

	braco_direito: {
		x1: "80",
		y1: "60",
		x2: "67",
		y2: "100",
	},

	braco_esquedo: {
		x1: "80",
		y1: "60",
		x2: "97",
		y2: "100",
	},

	perna_esqueda: {
		x1: "80",
		y1: "120",
		x2: "97",
		y2: "160",
	},

	perna_direita: {
		x1: "80",
		y1: "120",
		x2: "67",
		y2: "160",
	},

	tronco: {
		x1: "80",
		y1: "60",
		x2: "80",
		y2: "120",
	},

	cabeca: {
		x1: "80",
		y1: "45",
		x2: "16",
		y2: "0",
	},
};

function pCabeca() {
	ctx.beginPath();
	ctx.lineWidth = personagem.espessura;
	ctx.strokeStyle = personagem.cor;

	ctx.arc(
		personagem.cabeca.x1,
		personagem.cabeca.y1,
		personagem.cabeca.x2,
		personagem.cabeca.y2,
		Math.PI * 2, true);

	ctx.stroke();
};

function pTronco() {
	estrutura(
		personagem.tronco.x1,
		personagem.tronco.y1,
		personagem.tronco.x2,
		personagem.tronco.y2,
		personagem.espessura,
		personagem.cor,
	)
};

function pBracoDireito() {
	estrutura(
		personagem.braco_direito.x1,
		personagem.braco_direito.y1,
		personagem.braco_direito.x2,
		personagem.braco_direito.y2,
		personagem.espessura,
		personagem.cor,
	)
};

function pBracoEsquedo() {
	estrutura(
		personagem.braco_esquedo.x1,
		personagem.braco_esquedo.y1,
		personagem.braco_esquedo.x2,
		personagem.braco_esquedo.y2,
		personagem.espessura,
		personagem.cor,
	)
};

function pPernaEsqueda() {
	estrutura(
		personagem.perna_esqueda.x1,
		personagem.perna_esqueda.y1,
		personagem.perna_esqueda.x2,
		personagem.perna_esqueda.y2,
		personagem.espessura,
		personagem.cor,
	)
};

function pPernaDireita() {
	estrutura(
		personagem.perna_direita.x1,
		personagem.perna_direita.y1,
		personagem.perna_direita.x2,
		personagem.perna_direita.y2,
		personagem.espessura,
		personagem.cor,
	)
};

function estrutura(x1, y1, x2, y2, espessura = "3", cor = "#771601") {
	ctx.beginPath();
	ctx.strokeStyle = cor;
	ctx.lineWidth = espessura;

	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);

	ctx.stroke();
};

function forca() {
	// corda da forca
	estrutura(80, 10, 80, 28, 3, "#6c6c6c")
	// haste de sustentancao da parte superior e lateral
	estrutura(10, 40, 35, 10, 4, "#a96a0c")
	// parte lateral
	estrutura(10, 10, 10, 200, 10, "#804d00")
	// parte superior
	estrutura(5, 10, 85, 10, 7, "#804d00")
};

forca();
