class main_screen
{
    constructor(level_text)
    {
        this.Lev = "Level "+level_text;
        this.center_x = width / 2;
        this.play = new Button(this.center_x, height/3, "Play");
        this.level = new Button(this.center_x, height*2/3, "");
        this.options = new Button(this.center_x, height/2, "Options");
    }

    update()
    {
        this.Lev = "Level "+level_text;

        if (this.play.DidClickButton()) {
            console.log("Play");
            CurrentScene = GameScene;
            return 1;
        } else if (this.level.DidClickButton()) {
            console.log("Level");
            CurrentScene = LevelScene;
            return 2;
        } else if (this.options.DidClickButton()) {
            console.log("Options");
            CurrentScene = OptionScene;
        }
    }

    draw(){
        DrawTitle("Main Menu");
        this.play.DrawButton();
        this.level.DrawButton();
        this.options.DrawButton();

        push()
        textSize(30);
        text(this.Lev, this.center_x - 42, height*2/3 + 10);
        pop()
    }
}