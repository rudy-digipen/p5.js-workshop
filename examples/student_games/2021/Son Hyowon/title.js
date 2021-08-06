class Title {
  constructor() {
    const centerX = width / 2;
    this.play = new Button(centerX,height * 4/5, "Start");
  }

  Update() {
    if(this.play.DidClickButton())
      scene = gameScene;
  }

  Draw() {
    background(menuBackdrop);
    image(titleImage,130,50);
    this.play.DrawButton();
  }
}
