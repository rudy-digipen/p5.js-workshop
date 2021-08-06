class GameScreen {
  constructor() {
    const centerX = width / 2;
    this.play = new Button(centerX,height * 3/5, "Start");
  }

  Update() {

  }

  Draw() {
    background(backdrop);
    player.Update();
  
    if(hp<=0) {
      scene=endingScene;
    }
    player.Draw();
    enemy.Draw();
    enemy2.Draw();
    enemy3.Draw();
    enemy4.Draw();
    textSize(30);
    text(hp,300,260);
    image(beamcount,450,230);
    if(beam.charged==0) {
      image(beamloading,450,230);
    } else {
      image(beamloaded,450,230);
    }
    textSize(20);
    image(scoreLetter,10,10);
    text(score,20,45);
    image(lifeLetter,4,50);
    text(hp,25,84);
  }
}

