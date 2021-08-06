class EnemyLaser4 {

  constructor() {
    this.x = enemy4.positionX;
    this.y = enemy4.positionY;
    this.shoot = 0;
    this.prevshoot = this.shoot - 1;
  }

  Counter() {
    if(this.shoot >= this.prevshoot+5) {
      this.Draw();
      this.Update();
    } else {
      this.x = enemy4.positionX;
      this.y = enemy4.positionY;
      this.shoot = millis()/1000 +3;
      //console.log(this.shoot);
    }
  }

  Draw() {
    rectMode(CENTER);
    fill('red');
    noStroke();
    rect(this.x,this.y,18,8);
  }

  Update() {
    if(this.x<=0) {
      this.x=enemy4.positionX;
      this.y=enemy4.positionY;
      this.prevshoot+=3;
      return 0;
    } else if(this.x-9 <= player.positionX+13 && this.y+4 >= player.positionY-13 ) {
      if(this.x+9 >= player.positionX-13 && this.y-4 <= player.positionY+13) {
        this.x=enemy4.positionX;
        this.y=enemy4.positionY;
        this.prevshoot+=3;
        hp--;
        return 0;
      } else {
        this.x -= 80*deltaTime/70;
      }
    } else {
      this.x -= 80*deltaTime/70;
      //console.log("shot!");
    }
  }
}