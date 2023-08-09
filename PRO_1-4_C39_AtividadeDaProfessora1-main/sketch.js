//variaveis
var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");

  car1_img = loadImage ("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage ("assets/track.jpg");

}

function setup() {
  //para definir o tamanho da tela 
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  //criar o jogo
  game = new Game();
  game.getState();
  //começar o jogo
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
//para começar o jogo quando tiver 2 pessoas
  if (playerCount === 2){
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

//para redimensionar o tamanho da tela
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
