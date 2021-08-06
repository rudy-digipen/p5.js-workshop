class Player {
  constructor() {
    this.invincible = false;
    this.invincibleTime = 0;
    this.positionX = width/2;
    this.positionY = height/2;
    this.facing = 8; //see tenkey
  }

  Draw() {
    rectMode(CENTER);
    fill('gray');
    noStroke();
    //rect(this.positionX,this.positionY,26);
    image(ufo,this.positionX-16,this.positionY-16);
  }

  Update() {
      if (keyIsDown(87)) { //W
        this.positionY-=8;
        this.facing = 8;
      }
      if (keyIsDown(83)) { //S
        this.positionY+=8;
        this.facing = 2;
      }
      if (keyIsDown(65)) { //A
        this.positionX-=8;
        this.facing = 4;
      }
      if (keyIsDown(68)) { //D
        this.positionX+=8;
        this.facing = 6;
      } //SPACE = beam
      if (keyIsDown(32) && beam.charged == 1) { //D
        beam.DrawHit();
        beam.charged = 0;
      }
      if(this.positionX <= -30 || this.positionX >= 560) {
        hp-=10;
      }
      if(this.positionY <= -30 || this.positionY >= 340) {
        hp-=10;
      }
      laser.Counter(); 
      laser2.Counter();
      beam.Counter();
  }
}

