class GameOver {
  constructor() {
    const centerX = width / 2;
    this.play = new Button(centerX,height * 3/5, "Start");
  }

  Update() {

  }

  Draw() {
    background(90);
    image(gameoversprite,130,50);
    textSize(30);
    text(score,220,250);
  }
}

