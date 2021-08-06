class Enemy1 {

  constructor(){
    this.positionX=1000;
    this.positionY=540;
    this.type=0;
    this.posfix=false;
    this.term=5;
    this.prevterm=1;
    this.isHit=false;
  }
  
  Draw() {
    this.type = 0;
    this.Hit();
    if(this.posfix==false){
      this.positionX=random(420,500);
      this.positionY=random(70,230);
      this.isHit=false; 
    }
    this.posfix=true;

    return 0;
  }

  Hit() {

      if(this.isHit == false) {
        fill(230,230,0,240);
        rectMode(CENTER);
        //rect(this.positionX,this.positionY,24);
        image(enemyimages[this.type],this.positionX-25,this.positionY-15,49,28);
        elaser1.Counter();
      } else {  
        score +=10;
        //console.log(this.isHit);
        //this.Draw();
      }
  }
}
