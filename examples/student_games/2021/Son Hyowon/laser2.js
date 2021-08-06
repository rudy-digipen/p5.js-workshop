class Laser2 {

  constructor() {
    //this.enemy = new Enemy();
    this.x = player.positionX;
    this.y = player.positionY;
    this.shoot = 0;
    this.prevshoot = this.shoot - 1;
    this.Nothingthere = 0;
  }

  Counter() {
    if(this.shoot >= this.prevshoot+2) {
      this.Draw();
      this.Update();
    } else {
      this.x = player.positionX;
      this.y = player.positionY;
      this.shoot = 0.5 + millis()/1000;
      //console.log(this.shoot);
    }
  }

  Draw() {
    rectMode(CENTER);
    fill('red');
    noStroke();
    //rect(this.x,this.y,15,12,255);
    image(bullet,this.x-8,this.y-6);
  }

  Update() {
    this.Nothingthere = 0;
    if(this.x>=532) {
      this.x=player.positionX;
      this.y=player.positionY;
      this.prevshoot++;
      return 0;
    }
    if(this.x+8 >= enemy.positionX-12 && this.y-6 <= enemy.positionY+12 && this.x-8 <= enemy.positionX+12 && this.y+6 >= enemy.positionY-12) {
        this.x=player.positionX;
        this.y=player.positionY;
        enemy.posfix=false;
        enemy.isHit=true;
        this.prevshoot++;
        return 0;
      } else {
        this.Nothingthere++;
    }
    if(this.x+8 >= enemy2.positionX-12 && this.y-6 <= enemy2.positionY+12 && this.x-8 <= enemy2.positionX+12 && this.y+6 >= enemy2.positionY-12) {
        this.x=player.positionX;
        this.y=player.positionY;
        enemy2.posfix=false;
        enemy2.isHit=true;
        this.prevshoot++;
        return 0;
      } else {
        this.Nothingthere++;
    }
    if(this.x+8 >= enemy3.positionX-12 && this.y-6 <= enemy3.positionY+12 && this.x-8 <= enemy3.positionX+12 && this.y+6 >= enemy3.positionY-12) {
      this.x=player.positionX;
      this.y=player.positionY;
      enemy3.posfix=false;
      enemy3.isHit=true;
      this.prevshoot++;
      return 0;
    } else {
      this.Nothingthere++;
  }
  if(this.x+8 >= enemy4.positionX-12 && this.y-6 <= enemy4.positionY+12 && this.x-8 <= enemy4.positionX+12 && this.y+6 >= enemy4.positionY-12) {
    this.x=player.positionX;
    this.y=player.positionY;
    enemy4.posfix=false;
    enemy4.isHit=true;
    this.prevshoot++;
    return 0;
  } else {
    this.Nothingthere++;
  }
    if(this.Nothingthere >= 1) {
      this.x += 80*deltaTime/70;
    }
  }
}