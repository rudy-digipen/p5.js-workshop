class Beam {

  constructor() {
    //this.enemy = new Enemy();
    this.x = player.positionX;
    this.y = player.positionY;
    this.shoot = 0;
    this.prevshoot = this.shoot - 1;
    this.charged = 0;
    }

  Counter() {
    if(this.shoot >= this.prevshoot+10) {
      this.charged = 1;
      //console.log("CHARGED!");
    } else {
      this.DrawOff();
      this.x = player.positionX;
      this.y = player.positionY;
      this.shoot = millis()/1000;
      //console.log(this.shoot-this.prevshoot);
    }
  }

  DrawHit() {
    rectMode(CENTER);
    fill('red');
    noStroke();
    this.x = player.positionX;
    this.y = player.positionY;
    rect(width/2,this.y,532,100);
    if(this.y-50 <= enemy.positionY+12 && this.y+50 >= enemy.positionY-12) {
        enemy.posfix=false;
        enemy.isHit=true;
        return 0;
    }
    if(this.y-50 <= enemy2.positionY+12 && this.y+50 >= enemy2.positionY-12) {
      enemy2.posfix=false;
      enemy2.isHit=true;
      return 0;
    }
    if(this.y-50 <= enemy3.positionY+12 && this.y+50 >= enemy3.positionY-12) {
      enemy3.posfix=false;
      enemy3.isHit=true;
      return 0;
    }
    if(this.y-50 <= enemy4.positionY+12 && this.y+50 >= enemy4.positionY-12) {
      enemy4.posfix=false;
      enemy4.isHit=true;
      return 0;
    }
    this.prevshoot = this.shoot;
    //console.log("beam!");
  }

  DrawOff() {
    rectMode(CENTER);
    fill('red');
    noStroke();
    rect(this.x,this.y,1,1);
  }

  Update() {
    
  }
}