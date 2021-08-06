class level_screen
{
    constructor(level_text)
    {
        this.Lev = "Level "+level_text;
        this.center_x = width/2
        this.up = new Button(this.center_x*3/2, height/2, "Level UP");
        this.down = new Button(this.center_x/2, height/2, "Level DOWN");
        this.go_main = new Button(this.center_x, height*2/3, "Main Menu");
    }

    update()
    {
        textSize(20)
        if (this.up.DidClickButton()) {
            console.log("Level UP");
            level += 0.2;
            level_text += 1;
            this.Lev = "Level "+level_text;
        } else if (this.down.DidClickButton() && level_text >1 ) {
            console.log("Level Down");
            level -= 0.2;
            level_text -= 1;
            this.Lev = "Level "+level_text;
        }
        
        if (this.go_main.DidClickButton()) {
            CurrentScene = MainMenuScene;
        }
    }

    draw()
    {
        DrawTitle("LevelScene");
        this.up.DrawButton();
        this.down.DrawButton();
        this.go_main.DrawButton();

        push()
        strokeWeight(5);
        stroke(159);
        fill(220);
        rect(width/2 - 100, height/2 - 35, 200, 70);
        pop()

        push()
        textSize(30)
        text(this.Lev, width/2 - 43, height/2 + 10);
        pop()
    }
}