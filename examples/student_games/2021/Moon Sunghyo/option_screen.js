class option_screen
{
    constructor()
    {
        this.center_x = width/2;
        this.stroke_colors = ["#34282C", "#736F6E", "#4863A0", "#0000A0", "#16E2F5", "#033E3E", "#C19A6B", "#7E3517", "#A70D2A", "#E75480"];
        this.fill_colors = ["#625D5D", "#D1D0CE", "#728FCE", "#1569C7", "#E0FFFF", "#20B2AA", "#FED8B1", "#C34A2C", "#E77471", "#E38AAE"];
        this.value1 = 0;
        this.value2 = 0;
        this.value3 = 0;
        this.b_color = 220;
        this.n_stroke_color = "#4863A0";
        this.n_fill_color = "#728FCE";
        this.h_stroke_color = "#736F6E";
        this.h_fill_color = "#D1D0CE";
        this.size = 100;

        this.note_color_button = new Button(this.center_x*2/3, height/4, "Note_color");
        this.hole_color_button = new Button(this.center_x*2/3, height/2, "Hole_color");
        this.background_color_button = new Button(this.center_x*2/3, height*3/4, "Background");
        this.go_main = new Button(this.center_x*4/3, height*3/4, "Main Menu");
    }

    update()
    {
        if (this.note_color_button.DidClickButton()) {
            this.value1++;
        } else if (this.hole_color_button.DidClickButton()) {
            this.value2++;
        } else if (this.background_color_button.DidClickButton()) {
            this.value3++;
        } else if (this.go_main.DidClickButton()) {
            CurrentScene = MainMenuScene;
        }
    }

    draw()
    {
        this.b_color = this.fill_colors[this.value3%this.fill_colors.length];
        this.n_stroke_color = this.stroke_colors[this.value1%this.stroke_colors.length];
        this.n_fill_color = this.fill_colors[this.value1%this.fill_colors.length];
        this.h_stroke_color = this.stroke_colors[this.value2%this.stroke_colors.length];
        this.h_fill_color = this.fill_colors[this.value2%this.fill_colors.length];

        background(this.b_color);

        this.note_color_button.DrawButton();
        this.hole_color_button.DrawButton();
        this.background_color_button.DrawButton();
        this.go_main.DrawButton();

        strokeWeight(5)
        //note
        push()
        stroke(this.n_stroke_color);
        fill(this.n_fill_color);
        circle(this.center_x*6/5, height/4, this.size);
        pop()

        //hole
        push()
        stroke(this.h_stroke_color);
        fill(this.h_fill_color);
        circle(this.center_x*6/5, height/2, this.size);
        pop()

        
    }
}