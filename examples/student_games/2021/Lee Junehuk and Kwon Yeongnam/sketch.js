let ball1;
let r1;
let r2;
let r3;
let mySound;
let touch_cnt = 1;
function preload() {
  mySound = loadSound('sound/ping-pong.mp3');
}

function setup() {
  //img = loadImage
  createCanvas(windowWidth, windowHeight);
  //ball1 = new Ball(300);
  r1 = new Round1();
  r2 = new Round2();
  r3 = new Round3();
}

function draw(){
  background(220);
  //console.log(r1.b1.is_pause,r1.b1.is_dead)
  if (r1.b1.is_pause) {
    push();{
    textSize(32);
    strokeWeight(5);
    stroke(0);
    fill('Aquamarine');
    textAlign(CENTER);
    //text(score, width / 2, height / 2);
    text("Click any mouse button to play again!", windowWidth / 2, windowHeight / 2);
    }pop();
  }
  else{
    if(touch_cnt == 0){
      return;
    }
    else if(touch_cnt == 1){
      r1.b1.Draw();
      r1.Draw();
      for (let block of r1.p) {
        ball_vs_blocks( r1.b1, block );
      }
      ball_vs_star(r1.b1, r1.s1);
    }
    else if(touch_cnt == 2){
      r2.b1.Draw();
      r2.Draw();
      for (let block of r2.p) {
        ball_vs_blocks( r2.b1, block );
      }
      ball_vs_star(r2.b1, r2.s1);
    }
    else if(touch_cnt == 3){
      r3.b1.Draw();
      r3.Draw();
      for (let block of r3.p) {
        ball_vs_blocks( r3.b1, block );
      }
      ball_vs_star(r3.b1, r3.s1);
    }
    else{
      push();{
        textSize(32);
        strokeWeight(5);
        stroke(0);
        fill('Aquamarine');
        textAlign(CENTER);
        //text(score, width / 2, height / 2);
        text("Congratulation!", windowWidth / 2, windowHeight / 2);
      }pop();
      r1.b1.is_pause = true;
      r1.b1.is_dead = true;
    }

    // ball_vs_blocks( ball1, r1.p2 );
    // ball_vs_blocks( ball1, r1.p3 );
    // ball_vs_blocks( ball1, r1.p4 );
    // ball_vs_blocks( ball1, r1.p5 );
  }
  
}

function ball_vs_blocks( ball1, block )
{
    var ball_min_x = ball1.x - ball1.radius;
    var ball_max_x = ball1.x + ball1.radius;
    var block_min_x = block.x - block.width / 2 +5;
    var block_max_x = block.x + block.width / 2 -5;

    var ball_min_y = ball1.y - ball1.radius;
    var ball_max_y = ball1.y + ball1.radius;
    var block_min_y = block.y - block.height / 4-5;
    var block_max_y = block.y + block.height / 4+5;

    var does_x_overlap = ball_max_x > block_min_x && ball_min_x < block_max_x;
    var does_y_overlap = ball_max_y > block_min_y && ball_min_y < block_max_y;

    if ( does_x_overlap && does_y_overlap )
    {
      mySound.play();
      ball1.speed -= ball1.gravity * (deltaTime / 1000)
      ball1.speed *= -1;
    }
    //rect(blocks.x,blocks.y,90,30);
    //rect(250,370,90,30);
    //rect(420,370,90,30);
}

function ball_vs_star(ball, star){
  var ball_s_min_x = ball.x - ball.radius;
  var ball_s_max_x = ball.x + ball.radius;
  var star_min_x = star.x - star.width / 2 +5;
  var star_max_x = star.x + star.width / 2 -5;

  var ball_s_min_y = ball.y - ball.radius;
  var ball_s_max_y = ball.y + ball.radius;
  var star_min_y = star.y - star.height / 4-5;
  var star_max_y = star.y + star.height / 4+5;

  var does_s_x_overlap = ball_s_max_x > star_min_x && ball_s_min_x < star_max_x;
  var does_s_y_overlap = ball_s_max_y > star_min_y && ball_s_min_y < star_max_y;

  if ( does_s_x_overlap && does_s_y_overlap ){
      touch_cnt++;
  }
}

function mouseClicked(){
  if(r1.b1.is_pause && r1.b1.is_dead){
    r1.b1.is_pause = false;
    r1.b1.is_dead = false;
    r1.b1.speed = 0;
    r1.b1.gravity = 1400;
    touch_cnt = 1;
  }
  else if(r2.b1.is_pause && r2.b1.is_dead){
    r2.b1.is_pause = false;
    r2.b1.is_dead = false;
    r2.b1.speed = 0;
    r2.b1.gravity = 1400;
    touch_cnt = 2;
  }
  else if(r3.b1.is_pause && r3.b1.is_dead){
    r3.b1.is_pause = false;
    r3.b1.is_dead = false;
    r3.b1.speed = 0;
    r3.b1.gravity = 1400;
    touch_cnt = 3;
  }
}