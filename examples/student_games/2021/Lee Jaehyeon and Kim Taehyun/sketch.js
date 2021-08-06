var balls = []

var canvas;

var my_Pokemon
var pokemonName;
var pokemonType;
var typeColor;
let myP_x
let myP_y
let myP_width
let myP_height
let my_HP = 400
var IsAttack = 0;
var UseSkill = 0;
var CanChange = 0;
let Time_PressPoint = 0;
let Time_FirstPoint = 0;
let Time_SecondPoint = 0;

var op_Pokemon
var op_pokemonName;
var op_pokemonType;
var op_typeColor;
let opP_x
let opP_y
let opP_width
let opP_height
let op_HP = 400
var opIsAttack = 0;
var opUseSkill = 0;
var opCanChange = 0;
let opTime_PressPoint = 0;
let opTime_FirstPoint = 0;
let opTime_SecondPoint = 0;


var pokemonText = 1;
var Finished = 0;
var BattleSongPlay = 0;
var VictorySongPlay = 0;

let flag = true;

function mouseClicked() {
  flag = false;
}

function preload() {
  BattleSong = loadSound("sound/pokemon_Battle.mp3");
  VictorySong = loadSound("sound/pokemon_victory.mp3");

  bulbasaur_front = loadImage("pokemons/Bulbasaur_Front_D.png");
  bulbasaur_back = loadImage("pokemons/Bulbasaur_Back_D.png");
  bulbasaurSound = loadSound("sound/bulbasaur_Cry.mp3");

  charmander_front = loadImage("pokemons/Charmander_Front_D.png");
  charmander_back = loadImage("pokemons/Charmander_Back_D.png");
  charmanderSound = loadSound("sound/charmander_Cry.mp3");

  squirtle_front = loadImage("pokemons/Squirtle_Front_D.png");
  squirtle_back = loadImage("pokemons/Squirtle_Back_D.png");
  squirtleSound = loadSound("sound/Squirtle_Cry.mp3");

  pikachu_front = loadImage("pokemons/Pikachu_Front_D.png");
  pikachu_back = loadImage("pokemons/Pikachu_Back_D.png");
  pikachuSound = loadSound("sound/pikachu.mp3");

  fourdadak_front = loadImage("pokemons/Fourdadak_Front.png");
  fourdadak_back = loadImage("pokemons/Fourdadak_Back.png");
  fourdadakSound = loadSound("sound/Rooster_Cry.mp3");

  azaebot_front = loadImage("pokemons/AZaebot_Front.png");
  azaebot_back = loadImage("pokemons/AZaebot_Back.png");
  azaebotSound = loadSound("sound/porygonz_Cry.mp3");

  zzuber_front = loadImage("pokemons/Zzuber_Front.png");
  zzuber_back = loadImage("pokemons/Zzuber_Back.png");
  zzuberSound = loadSound("sound/zzuber_Cry.mp3");

  mik_front = loadImage("pokemons/Mik_Front.png");
  mik_back = loadImage("pokemons/Mik_Back.png");
  mikSound = loadSound("sound/mik_Cry.mp3");

  pokeball = loadImage("pokemons/Pokeball.png");
}





function setup() {

  canvas = createCanvas(800, 500);
  background(220);

  my_Pokemon = bulbasaur_back
  myP_x = 160;
  myP_y = 350;
  myP_width = 320;
  myP_height = 320;

  op_Pokemon = azaebot_front
  opP_x = 640;
  opP_y = 120;
  opP_width = 320;
  opP_height = 320;

}






function draw() {

  if(flag){
    textSize(40);
    text('Press the mouse to start the game',width/2- 325, height/2 );
    return;
  }


  if (BattleSongPlay == 0) {
    BattleSong.play()
    BattleSongPlay = 1
  }

  background(220);

  push()
  rect(360, 320, 400, 80) // 아군 인터페이스
  rect(40, 30, 400, 80) // 적 인터페이스
  pop()

  push()
  fill(114, 155, 11, 80)
  ellipse(640, 200, 380, 150) // 적 원형 바닥
  ellipse(160, 450, 480, 180) // 아군 원형 바닥
  pop()



  bodyAttack()
  op_bodyAttack()
  UsingSpecialSkill()
  op_UsingSpecialSkill()

  push()
  fill("MediumSpringGreen")
  rect(40, 80, op_HP, 20) // 적 체력바
  rect(360, 370, my_HP, 20) // 아군 체력바
  pop()



  //적 교체 가능 여부
  opTime_PressPoint = millis() / 1000;
  if (3 - (opTime_PressPoint - opTime_FirstPoint) > 0) {
    push()
    stroke(80)
    fill('red')
    circle(245, 55, 30)
    pop()
    push()
    fill('white')
    textSize(20)
    text(3 - round(opTime_PressPoint - opTime_FirstPoint, 0), 240, 60)
    pop()
  } else {
    push()
    stroke(80)
    fill('blue')
    circle(245, 55, 30)
    pop()
  }

  //적 스킬 사용 가능 여부
  opTime_PressPoint = millis() / 1000;
  if (5 - (opTime_PressPoint - opTime_SecondPoint) > 0) {
    push()
    stroke(80)
    fill('red')
    rectMode(CENTER);
    square(285, 55, 30)
    pop()
    push()
    fill('white')
    textSize(20)
    text(5 - round(opTime_PressPoint - opTime_SecondPoint, 0), 280, 60)
    pop()
  } else {
    push()
    stroke(80)
    fill('blue')
    rectMode(CENTER);
    square(285, 55, 30)
    pop()
  }

  //아군 교체 가능 여부
  Time_PressPoint = millis() / 1000;
  if (3 - (Time_PressPoint - Time_FirstPoint) > 0) {
    push()
    stroke(80)
    fill('red')
    circle(565, 345, 30)
    pop()
    push()
    fill('white')
    textSize(20)
    text(3 - round(Time_PressPoint - Time_FirstPoint, 0), 560, 350)
    pop()
  } else {
    push()
    stroke(80)
    fill('blue')
    circle(565, 345, 30)
    pop()
  }

  //아군 스킬 사용 가능 여부
  opTime_PressPoint = millis() / 1000;
  if (5 - (Time_PressPoint - Time_SecondPoint) > 0) {
    push()
    stroke(80)
    fill('red')
    rectMode(CENTER);
    square(605, 345, 30)
    pop()
    push()
    fill('white')
    textSize(20)
    text(5 - round(Time_PressPoint - Time_SecondPoint, 0), 600, 350)
    pop()
  } else {
    push()
    stroke(80)
    fill('blue')
    rectMode(CENTER);
    square(605, 345, 30)
    pop()
  }  

  imageMode(CENTER);
  push()
  image(op_Pokemon, opP_x, opP_y, opP_width, opP_height)
  image(my_Pokemon, myP_x, myP_y, myP_width, myP_height)
  pop()


  if (my_Pokemon == bulbasaur_back) {
    pokemonName = "Bulbasaur"
    pokemonType = "G R A S S"
    typeColor = "lawngreen"
  }
  if (my_Pokemon == charmander_back) {
    pokemonName = "Charmander"
    pokemonType = " F I R E "
    typeColor = "orangered"
  }
  if (my_Pokemon == squirtle_back) {
    pokemonName = "Squirtle"
    pokemonType = "W A T E R"
    typeColor = "dodgerblue"
  }
  if (my_Pokemon == pikachu_back) {
    pokemonName = "Pikachu"
    pokemonType = "ELECTRIC"
    typeColor = "yellow"
  }
  if (my_Pokemon == fourdadak_back) {
    pokemonName = "Fourdadak"
    pokemonType = " NORMAL "
    typeColor = "lightgrey"
  }
  if (my_Pokemon == zzuber_back) {
    pokemonName = "Zzuber"
    pokemonType = " GROUND "
    typeColor = "chocolate"
  }
  if (my_Pokemon == mik_back) {
    pokemonName = "Mik"
    pokemonType = " FLYING "
    typeColor = "lightblue"

  }
  if (my_Pokemon == azaebot_back) {
    pokemonName = "AZaeBot"
    pokemonType = "S T E E L"
    typeColor = "slategray"
  }



  if (op_Pokemon == bulbasaur_front) {
    op_pokemonName = "Bulbasaur"
    op_pokemonType = "G R A S S"
    op_typeColor = "lawngreen"
  }
  if (op_Pokemon == charmander_front) {
    op_pokemonName = "Charmander"
    op_pokemonType = " F I R E "
    op_typeColor = "orangered"
  }
  if (op_Pokemon == squirtle_front) {
    op_pokemonName = "Squirtle"
    op_pokemonType = "W A T E R"
    op_typeColor = "dodgerblue"
  }
  if (op_Pokemon == pikachu_front) {
    op_pokemonName = "Pikachu"
    op_pokemonType = "ELECTRIC"
    op_typeColor = "yellow"
  }
  if (op_Pokemon == fourdadak_front) {
    op_pokemonName = "Fourdadak"
    op_pokemonType = " NORMAL"
    op_typeColor = "lightgrey"
  }
  if (op_Pokemon == zzuber_front) {
    op_pokemonName = "Zzuber"
    op_pokemonType = " GROUND "
    op_typeColor = "chocolate"
  }
  if (op_Pokemon == mik_front) {
    op_pokemonName = "Mik"
    op_pokemonType = " FLYING "
    op_typeColor = "lightblue"
  }
  if (op_Pokemon == azaebot_front) {
    op_pokemonName = "AZaeBot"
    op_pokemonType = "S T E E L"
    op_typeColor = "slategray"
  }


  if (pokemonText == 1) {
    push()
    noStroke()
    fill(47, 196, 204, 60)
    rect(0, 445, 350, 55)
    pop()
    textSize(35)
    stroke(50)
    text("Go! " + pokemonName + "!", 10, 485)
  }

  push()
  stroke(80)
  textSize(24)
  text(pokemonName, 370, 357)
  text(op_pokemonName, 50, 67)
  pop()

  push()
  fill(typeColor)
  rect(640, 330, 100, 30) // 아군 타입
  textSize(18)
  fill(30)
  text(pokemonType, 650, 352)
  pop()

  push()
  fill(op_typeColor)
  rect(320, 40, 100, 30) // 적 타입
  textSize(18)
  fill(30)
  text(op_pokemonType, 330, 62)
  pop()


  if (op_HP <= 0 && my_HP <= 0) {
    op_HP = 0;
    my_HP = 0;
    push()
    noStroke()
    fill(47, 196, 204, 60)
    rect(0, 445, 350, 55)
    pop()
    text("Draw!", 10, 485)
    Finished = 1;

  } else if (my_HP <= 0) {
    my_HP = 0;
    push()
    noStroke()
    fill(47, 196, 204, 60)
    rect(0, 445, 350, 55)
    pop()
    text(pokemonName + " fainted!", 10, 485)
    Finished = 1;

  } else if (op_HP <= 0) {
    op_HP = 0;
    push()
    noStroke()
    fill(47, 196, 204, 60)
    rect(0, 445, 350, 55)
    pop()
    text(op_pokemonName + " fainted!", 10, 485)
    Finished = 1;

  }

  if(UseSkill == 1 || opUseSkill == 1) {
    for (var ii = 0; ii < balls.length; ii++) {
      balls[ii].update(deltaTime / 600);
      balls[ii].draw();
    }
  }

  

  pokemonGoDown()
  PokeballShown()
  pokemonChange1()
  oppokemonChange1()


}












function bodyAttack() {

  if (myP_x < 550 && myP_y > 150 && IsAttack == 1 && Finished == 0) {
    myP_x = myP_x + 15 * (deltaTime / 5);
    myP_y = myP_y - 8 * (deltaTime / 5);

    if (random(1, 20) > 19) {
      op_HP -= 10;
    } else {
      op_HP--;
    }


  } else {
    IsAttack = -1;
  }

  if (IsAttack == -1) {
    myP_x = myP_x - 15 * (deltaTime / 5);
    myP_y = myP_y + 8 * (deltaTime / 5);

  }

  if (myP_x < 160 && myP_y > 350) {
    IsAttack = 0
  }

  if (IsAttack == 0) {
    myP_x = 160
    myP_y = 350
  }

}





function op_bodyAttack() {
  if (opP_x > 150 && opP_y < 330 && opIsAttack == 1 && Finished == 0) {
    opP_x = opP_x - 15 * (deltaTime / 5);
    opP_y = opP_y + 8 * (deltaTime / 5);

    if (random(1, 20) > 19) {
      my_HP -= 10;
    } else {
      my_HP--;
    }


  } else {
    opIsAttack = -1;
  }


  if (opIsAttack == -1) {
    opP_x = opP_x + 15 * (deltaTime / 5);
    opP_y = opP_y - 8 * (deltaTime / 5);
  }


  if (opP_x > 640 && opP_y < 120) {
    opIsAttack = 0
  }


  if (opIsAttack == 0) {
    opP_x = 640
    opP_y = 120
  }

}








////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function FunctionOfOpIsAttack() {
  opIsAttack = 1;
}


function mouseClicked() {
  if (myP_x == 160 && myP_y == 350 && Finished == 0 && Time_PressPoint - Time_FirstPoint > 0.01) {
    IsAttack = 1;
  }
  if (opP_x == 640 && opP_y == 120 && Finished == 0 && opTime_PressPoint - opTime_FirstPoint > 0.01) {
    //setTimeout(FunctionOfOpIsAttack, random(300,600))
    opIsAttack = 1;
  }

  pokemonText = 0;

}
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


opTime_SecondPoint = millis() / 1000;

function UsingSpecialSkill() {
  if (UseSkill == 1 && IsAttack == 0 && Finished == 0 && Time_PressPoint - Time_SecondPoint > 5) {
    Time_SecondPoint = millis() / 1000;
    particle = new Particle(250, 350, random(80,100), 1.5, typeColor);
    particle.velocity.x = random(700, 800);
    particle.velocity.y = random(-500, -600);
    balls.push(particle);
    op_HP-= 60;
    setTimeout(ForChangeUseSkillNumber, 1000);
  }
}
function ForChangeUseSkillNumber() {
  UseSkill = 0;
}
function op_UsingSpecialSkill() {
  if (opUseSkill == 1 && opIsAttack == 0 && Finished == 0 && opTime_PressPoint - opTime_SecondPoint > 5) {
    opTime_SecondPoint = millis() / 1000;
    particle = new Particle(750, 150, random(80,100), 1.5, op_typeColor);
    particle.velocity.x = random(-800, -900);
    particle.velocity.y = random(400, 500);
    balls.push(particle);
    my_HP -= 60;
    setTimeout(ForChangeUseOpSkillNumber, 1000);
  }
}
function ForChangeUseOpSkillNumber() {
  opUseSkill = 0;
}


function pokemonGoDown() { //////////////////////////////////  끝 ////////////////
  if (Finished == 1) {
    if (my_HP == 0 && op_HP == 0) {
      setTimeout(GoBackToPokeball, 2000);
      setTimeout(opGoBackToPokeball, 2000);
    } else if (my_HP == 0) {
      setTimeout(GoBackToPokeball, 2000);
    } else if (op_HP == 0) {
      setTimeout(opGoBackToPokeball, 2000);
    }
    BattleSong.stop()
      if (VictorySongPlay == 0) {
      VictorySong.play();
      VictorySongPlay = 1;
    }
  }
  
}





function opGoBackToPokeball() {
  if ((opP_width > -1 && opP_height > -1 && opCanChange == 1) || (opP_width > -1 && opP_height > -1 && Finished == 1)) {
    opP_width = opP_width - 20 * (deltaTime / 5);
    opP_height = opP_height - 20 * (deltaTime / 5);
  }
}

function GoBackToPokeball() {
  if ((myP_width > -1 && myP_height > -1 && CanChange == 1) || (myP_width > -1 && myP_height > -1 && Finished == 1)) {
    myP_width = myP_width - 20 * (deltaTime / 5);
    myP_height = myP_height - 20 * (deltaTime / 5);
  }
}

function PokeballShown() {
  if (myP_width < 20 && myP_height < 20) {
    image(pokeball, myP_x, myP_y, 80, 80);
  }
  if (opP_width < 20 && opP_height < 20) {
    image(pokeball, opP_x, opP_y, 80, 80);
  }
}


function opComeOutFromPokeball() {
  if (opP_width < 320 && opP_height < 320 && opCanChange == 0) {
    opP_width = opP_width + 10 * (deltaTime / 5);
    opP_height = opP_height + 10 * (deltaTime / 5);
  }
}

function ComeOutFromPokeball() {
  if (myP_width < 320 && myP_height < 320 && CanChange == 0) {
    myP_width = myP_width + 10 * (deltaTime / 5);
    myP_height = myP_height + 10 * (deltaTime / 5);
  }
}



function pokemonChange1() {

  if (IsAttack == 0 && my_HP != 0 && Finished == 0) {
    if (keyCode > 47 && keyCode < 56 && CanChange == 1) {
      Time_FirstPoint = millis() / 1000;
      GoBackToPokeball()
      setTimeout(pokemonChange2, 1000)
    }
  }
}

function pokemonChange2() {
  CanChange = 0;
  ComeOutFromPokeball()

}

function oppokemonChange1() {

  if (opIsAttack == 0 && op_HP != 0 && Finished == 0) {
    if ((keyCode == 45 || keyCode == 35 || keyCode == 40 || keyCode == 34 || keyCode == 37 || keyCode == 12 || keyCode == 39 || keyCode == 36) && opCanChange == 1) {
      opTime_FirstPoint = millis() / 1000;
      opGoBackToPokeball()
      setTimeout(oppokemonChange2, 1000)
    }
  }
}

function oppokemonChange2() {
  opCanChange = 0;
  opComeOutFromPokeball()

}



function keyPressed() {

  pokemonText = 0;

  if (keyCode == 65 && myP_x == 160 && myP_y == 350 && Finished == 0 && Time_PressPoint - Time_FirstPoint > 0.01 && UseSkill == 0) {
    IsAttack = 1;

  }
  if (keyCode == 188 && opP_x == 640 && opP_y == 120 && Finished == 0 && opTime_PressPoint - opTime_FirstPoint > 0.01 && opUseSkill == 0) {
    //setTimeout(FunctionOfOpIsAttack, random(300,600))
    opIsAttack = 1;

  }
  if (keyCode == 83 && myP_x == 160 && myP_y == 350 && Finished == 0 && Time_PressPoint - Time_SecondPoint > 5 && IsAttack == 0) {
    UseSkill = 1;

  }
  if (keyCode == 190 && opP_x == 640 && opP_y == 120 && Finished == 0 && opTime_PressPoint - opTime_SecondPoint > 5 && opIsAttack == 0) {
    //setTimeout(FunctionOfOpIsAttack, random(300,600))
    opUseSkill = 1;

  }


  if (Time_PressPoint - Time_FirstPoint > 3) {
    CanChange = 1;
    if (IsAttack == 0 && my_HP != 0 && Finished == 0 && CanChange == 1) {
      if (keyCode === 48) {
        my_Pokemon = azaebot_back
        azaebotSound.play()
      } else if (keyCode === 49) {
        my_Pokemon = bulbasaur_back
        bulbasaurSound.play()
      } else if (keyCode === 50) {
        my_Pokemon = charmander_back
        charmanderSound.play()
      } else if (keyCode === 51) {
        my_Pokemon = squirtle_back
        squirtleSound.play()
      } else if (keyCode === 52) {
        my_Pokemon = pikachu_back
        pikachuSound.play();
      } else if (keyCode === 53) {
        my_Pokemon = fourdadak_back
        fourdadakSound.play()
      } else if (keyCode === 54) {
        my_Pokemon = zzuber_back
        zzuberSound.play()
      } else if (keyCode === 55) {
        my_Pokemon = mik_back
        mikSound.play()
      }
    }
  }
  if (opTime_PressPoint - opTime_FirstPoint > 3) {
    opCanChange = 1;
    if (opIsAttack == 0 && op_HP != 0 && Finished == 0 && opCanChange == 1) {
      if (keyCode === 45) {
        op_Pokemon = azaebot_front
        azaebotSound.play()
      } else if (keyCode === 35) {
        op_Pokemon = bulbasaur_front
        bulbasaurSound.play()
      } else if (keyCode === 40) {
        op_Pokemon = charmander_front
        charmanderSound.play()
      } else if (keyCode === 34) {
        op_Pokemon = squirtle_front
        squirtleSound.play()
      } else if (keyCode === 37) {
        op_Pokemon = pikachu_front
        pikachuSound.play();
      } else if (keyCode === 12) {
        op_Pokemon = fourdadak_front
        fourdadakSound.play()
      } else if (keyCode === 39) {
        op_Pokemon = zzuber_front
        zzuberSound.play()
      } else if (keyCode === 36) {
        op_Pokemon = mik_front
        mikSound.play()
      }
    }
  }
}