function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#74D107");
  } else {
    background("#4CAF50E3");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("🚜", xJogador1, 100);
  text("🧑🏻‍🌾", xJogador2, 300);
}

function desenhaLinhaDeChegada() {
  rect(350, 0, 10, 400);
}

function verificaVencedor() {
  if (xJogador1 > 350) {
    text("trator venceu!", 50, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("agricultor venceu!", 50, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key == "j") {
    xJogador1 += random(20);
  }
  if (key == "w") {
    xJogador2 += random(20);
  }
}
