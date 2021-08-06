let sk_music=[];
let sk_width=[30,25,0];
let sk_height=[5,25,100];
function preload(){
  bg_image=loadImage('imagefile/bridge.png');
  bg_image2=loadImage('imagefile/queue.png');
  bg_music=loadSound('musicfile/smallairman2.mp3');
  sk_image=loadImage('imagefile/zedq.png');
  append(sk_music,loadSound('musicfile/dravenlong.mp3'));
  append(sk_music,loadSound('musicfile/zedwq.mp3'))
}
let player_p;
var cnt=0;
var cnt4=0;
var cnt7=0;
var start_time;
var end_time;
var music_now=0;
var skilltype=0;
// 변수 값 선언
var movedis=10;
var player_size=60;
var enemy_size=80;
let attacktime=3;
var life=1;
var stage=1;
var skill_count=2;
function setup() {
  createCanvas(2000,/*windowWidth2000*/600);
  
}
function mouseClicked() {
  if (cnt==0 && mouseX>width/2-130 && mouseY> height/2+120 && mouseX<width/2+90 && mouseY<height/2+200){
    //createCanvas(2000,400);
    player_p=new p5.Vector(60,height/2)
    p1=new Player(40,height/2,player_size);
    e1=new Enemy(width-40,height/2,enemy_size);
    bg_music.setVolume(0.5);
    bg_music.loop();
    life=1;
    stage=1;
    attacktime=3;
    start_time=0;
    end_time=0;
    cnt=1;
    cnt7=0;
  }else if(cnt==0 && mouseX>width/2-130 && mouseY> height/2+220 && mouseX<width/2+90 && mouseY<height/2+300){
    push();
    textSize(45);
    text("How to Play\nUP:up_arrow Down:down_arrow \nLeft:left_arrow Right:Right_arrow \nW: Skill Shield: Blocks only once \n(Cooldown: 10 seconds \nIf you touch the enemy,\n the stage level goes up.)",10,60);
    pop();
  }else if (cnt==2 && mouseX>width/2-130 && mouseX<width/2+135 && mouseY>height/2 && mouseY<height/2+60){
    cnt=0;
  }
}
function draw() {
  if (cnt==1){
    //tint(255,83);
    image(bg_image,0,0,width,height)
    //background(bg_image,0);
    stroke(255);
    strokeWeight(5)
    text("Level:"+stage,5,40);
    text("Life:"+life,5,80)
    textSize(30);
    p1.draw(cnt7);
    e1.update(movedis);
    e1.draw();
    if(p_vs_e(p1,e1)==1){
        p1.position.x=40;
        p1.position.y=height/2;
        upstage();
        stage++;
    }
    if (keyIsDown(LEFT_ARROW) && p1.position.x>40 ){
     p1.move(-1*movedis,0)
     }
    if (keyIsDown(RIGHT_ARROW) && p1.position.x<width-80) {
      p1.move(movedis,0)
    }if (keyIsDown(UP_ARROW) && p1.position.y>40 ){
     p1.move(0,-1*movedis)
    }
    if (keyIsDown(DOWN_ARROW) && p1.position.y<height-80) {
      p1.move(0,movedis);
    }if(/*keyIsDown(13)&&*/ cnt4==0) {
      skilltype=round(random(0,skill_count-1));
      sk1=new skills(e1.position.x,e1.position.y,sk_width[skilltype],sk_height[skilltype],p1,e1,skilltype);
      cnt4=1;
      if(skilltype==1){
        sk2=new skills(e1.position.x,e1.position.y,sk_width[skilltype],sk_height[skilltype],p1,e1,skilltype);
        //sk2=new skills(abs(e1.position.x-round(random(200+sk_width[skilltype],400+sk_width[skilltype])))+sk_width[skilltype],abs(e1.position.y-round(random(200+sk_height[skilltype],400+sk_height[skilltype])))+sk_height[skilltype],sk_width[skilltype],sk_height[skilltype],p1,e1,skilltype);
      }
    }if(keyIsDown(87) && cnt7==0){
      cnt7=1;
      start_time=millis();
      
    }end_time=millis();
    if(cnt7==1 && end_time-start_time>3000){
      cnt7=2;
    }if (cnt7==2 && end_time-start_time>10000){
      cnt7=0;
    }
    if (sk1.skillend==1 && cnt4==1){
      music_now=0;
      sk_music[skilltype].stop();
      cnt4=0;
    }
    if (cnt4==1 && sk1.skillend==0){
      if(music_now==0){
        sk_music[skilltype].setVolume(2);
        if(skilltype==0)
          sk_music[skilltype].loop();
        else if(skilltype==1){
          sk_music[skilltype].play();
        }
        music_now=1;
      }
      if(skilltype==1){
          sk2.update(skilltype,attacktime*60,e1,stage);
          sk2.draw(skilltype);
          playerskillhitbox(p1,sk2,skilltype);
      }
      sk1.update(skilltype,attacktime*60,e1,stage);
      sk1.draw(skilltype);
      playerskillhitbox(p1,sk1,skilltype);
    }
    if (life<=0){
      cnt=2;
    }
  }else if (cnt==0){
    push();
    image(bg_image2,width/2-300,0,600,600);
    fill('#0000FF');
    rect(width/2-130, height/2+120, 220, 80);
    textSize(70);
    fill('#F4FA58');
    text('PLAY', width/2-100,height/2+190);
    fill('#0000FF');
    rect(width/2-130, height/2+220, 220, 80);
    textSize(37);
    fill('#F4FA58');
    text('How to play', width/2-120,height/2+270);
    //background(bg_image2);
    pop();
  }
  else if(cnt==2){
    bg_music.stop();
    //createCanvas(600,600);
    background(255,255,255);
    push();
    noStroke();
    fill(150,150,100);
    rect(width/2-130,height/2+20,265,60);
    pop();
    stroke(51);
    fill(0,0,0);
    textSize(40);
    text("Game Over",width/2-130,height/2);
    text("Restart button",width/2-130,height/2+60);

  }
}
function p_vs_e(Player,Enemy){
  //console.log(Player.position.x+"\t"+Player.position.y+"\t"+Enemy.position.x+"\t"+Enemy.position.y)
  var p_min_x=Player.position.x-Player.size/2;
  var p_max_x=Player.position.x+Player.size/2;
  var e_min_x=Enemy.position.x-Enemy.size/2;
  var e_max_x=Enemy.position.x+Enemy.size/2;

  var p_min_y=Player.position.y-Player.size/2;
  var p_max_y=Player.position.y+Player.size/2;
  var e_min_y=Enemy.position.y-Enemy.size/2;
  var e_max_y=Enemy.position.y+Enemy.size/2;

  var does_x_overlap=p_max_x>e_min_x && p_min_x<e_max_x;
  var does_y_overlap=p_max_y>e_min_y && p_min_y<e_max_y;
  if(does_x_overlap && does_y_overlap){
      return 1;
  }else{
      return 0;
  }
}
function playerskillhitbox(Player,skills,skillshape){
  var p_min_x=Player.position.x-Player.size/2;
  var p_max_x=Player.position.x+Player.size/2;
  var p_min_y=Player.position.y-Player.size/2;
  var p_max_y=Player.position.y+Player.size/2;
  if (skillshape==0){
    var e_min_x=skills.position.x-skills.width/2;
    var e_max_x=skills.position.x+skills.width/2;
    var e_min_y=skills.position.y-skills.height*9;
    var e_max_y=skills.position.y+skills.height*9;
  }
  else if (skillshape==1){
    var e_min_x=skills.position.x-skills.width/2;
    var e_max_x=skills.position.x+skills.width/2;
    var e_min_y=skills.position.y-skills.height;
    var e_max_y=skills.position.y+skills.height;
  }/*else if (skillshape==2 && skills.alpha_light>=100 ){
    var e_min_x=skills.position.x-skills.width/2;
    var e_max_x=skills.position.x+skills.width/2;
    var e_min_y=skills.position.y-skills.height;
    var e_max_y=skills.position.y+skills.height;
  }*/ //error
  var does_x_overlap=p_max_x>e_min_x && p_min_x<e_max_x;
  var does_y_overlap=p_max_y>e_min_y && p_min_y<e_max_y;
  if(does_x_overlap && does_y_overlap && skills.position.x<width-300 && skills.skillend==0 && cnt7!=1){
    life--;
    music_now=0;
    sk_music[skilltype].stop();
    cnt4=0;
    cnt5=0;
  }if(does_x_overlap && does_y_overlap && cnt7==1){
    cnt7=2;
    music_now=0;
    sk_music[skilltype].stop();
    cnt4=0;
    cnt5=0;
  }
}function upstage(){
  attacktime*=sqrt(stage)/sqrt((stage+1),2);
  console.log(attacktime);
}