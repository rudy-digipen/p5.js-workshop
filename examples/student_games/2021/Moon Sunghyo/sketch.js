/*
1. Rhythm Game
2. appearance
-BackGround : use Wallpaper Engine
-note : create a BLock class and make it appear on left, right, top side.
        it go to the Hole
-Hole : make a hole in the center. size is the note size.
-control : use a keyboard arrow. Estimate is by using dist : center of block and center of Hole
           Text accuracy on the left top side
*/


/*
Error : accuracy error
If player push keyboard when note is created, the accuracy are measured as perfect or great.
Maybe 'circle_x' and 'circle_y' value from the game_screen.js file is weird.
It can be solved by config 'circle_x' and 'circle_y' value.
*/

var center_x;
var center_y;

var ran;
var circle_x;
var circle_y;
var level = 1;
var level_text = 1;

var end1;
var end2;

var accuracy_text = "Enjoy!";
var score = 0;
var life;

var blocks = [];
var index = 0;
var accuracy_count = 0;
var random_delay;

var particles = [];

var CurrentScene;
var MainMenuScene;
var GameScene;
var LevelScene;
var OptionScene;

var Sound1;
var Sound2;
var Sound3;

function preload()
{
  soundFormats('mp3', 'ogg');
  Sound1 = loadSound('drum2');
  Sound2 = loadSound('drum3');
  Sound3 = loadSound('drum1');
}

function setup() {
  createCanvas(900, 600);

  MainMenuScene = new main_screen(level_text);
  LevelScene = new level_screen(level_text);
  GameScene = new game_screen(accuracy_count);
  OptionScene = new option_screen();
  CurrentScene = MainMenuScene;

  center_x = width/2;
  center_y = height - 100;
}

function draw() {
  background(OptionScene.b_color);

  CurrentScene.update();
  CurrentScene.draw();

  delay_array = [500, 1000, 1500, 2000];
  random_delay = delay_array[round(random(3.9))];

  //draw particles
  let delta_time_seconds = deltaTime / 1000;
	for (let i = 0; i < particles.length; i++) {
		particles[i].update(delta_time_seconds);
	  if (particles[i].lifetime <= 0) {
		  particles.splice(i, 1);
      continue;
	  }
	  particles[i].draw();
	}

  //draw Blue circle
  for (index = 0; index < blocks.length; index++)
  {
    blocks[index].update(delta_time_seconds);

    if (blocks[index].lifetime <= 0) {
      blocks.splice(index, 1)
      broke();
      continue;
    }

    blocks[index].draw();
    
    circle_x = blocks[index].get_x();
    circle_y = blocks[index].get_y(); 
  }

}

function broke() {
  if (accuracy_count == 0) {
    score -= 10;
    console.log("break");
    accuracy_text = "break";
    Sound3.play();
    accuracy_count = 1;
  }
}

//create Blue circles
function Game_start()
{
  end1 = setInterval(New_block, 1000);
}

function GameStop()
{
  clearInterval(end1);
  clearInterval(end2);
}

function New_block()
{
  ran = round(random(2));
  let block = new Block(ran, level);
  blocks.push(block);
  accuracy_count = 0;
}

function keyPressed()
{
    
}

function make_particles(p_num)
{
  for (let i = 0; i < p_num; i++) {
		let particle = new Particle(width/2, height - 100);
		particle.velocity.x = random(-100, 100);
		particle.velocity.y = random(-100, 100);
		particle.acceleration.y = 10;
		particles.push(particle);
	}
}