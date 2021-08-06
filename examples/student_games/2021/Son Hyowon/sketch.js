
let hp = 10;
let score = 0;
let beamTime = 30;
let endingScene;
let scene;
var backdrop;
var menuBackdrop;
var ufo;
var bullet;
var gameoversprite;
var enemy = [];
var player;
var laser;
var laser2;
var elaser1;
var elaser2;
var elaser3;
var elaser4;
var beam;
var beamloading;
var beamloaded;
var scoreLetter;
var lifeLetter;
var enemy;
var enemy2;
var enemy3;
var enemy4;
var enemyimages = [];
let globalTimer;
let titleScene;
let gameScene;

function preload() {
  backdrop = loadImage('images/background1.jpg');
  menuBackdrop = loadImage('images/menuBackdrop.png');
  titleImage = loadImage('images/title.png');
  gameoversprite = loadImage('images/gameover.png');
  bullet = loadImage('images/bullet.png');
  beamcount = loadImage('images/beamcount.png');
  beamloading = loadImage('images/beamloading.png');
  beamloaded = loadImage('images/beamloaded.png');
  scoreLetter = loadImage('images/score.png');
  lifeLetter = loadImage('images/life.png');
  Kirby = loadImage('images/kirby.png'); //Kirby is cute :3
  ufo = loadImage('images/UFO.png');
  enemyimages[0] = loadImage('images/enemy01.png');
  enemyimages[1] = loadImage('images/enemy02.png');
}

function setup() {
  createCanvas(backdrop.width, backdrop.height);
  player = new Player();
  enemy = new Enemy1();
  enemy2 = new Enemy2();  
  enemy3 = new Enemy3();
  enemy4 = new Enemy4();
  laser = new Laser();
  laser2 = new Laser2();
  elaser1 = new EnemyLaser1();
  elaser2 = new EnemyLaser2();
  elaser3 = new EnemyLaser3();
  elaser4 = new EnemyLaser4();
  beam = new Beam();

  //enemy3 = new Enemy3();
  //enemy4 = new Enemy4();
  globalTimer = millis();
  titleScene = new Title();
  gameScene = new GameScreen();
  endingScene = new GameOver();
  scene = titleScene;
}

function draw() {
  scene.Update();
  scene.Draw();
}

function drawTitle(label){
  push();
  textAlign(CENTER);
  textSize(40);
  fill(0);
  noStroke();
  text(label, width/2, 50);
  pop();
}