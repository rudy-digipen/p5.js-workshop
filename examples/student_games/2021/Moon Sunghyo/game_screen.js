class game_screen
{
    constructor(accuracy_count)
    {
        this.cnn = 0;
        this.go_main = new Button(width - 230, 100, "Main Menu");
    }

    update()
    {
        if (this.cnn == 0) {
            Game_start();
            this.cnn++;
        }

        if (keyPressed) {
            check_accuracy();
        }

        if (this.go_main.DidClickButton()) {
            CurrentScene = MainMenuScene;
            GameStop();
            this.cnn--;
        }
    }

    draw()
    {
        
        push()
        strokeWeight(5);
        stroke(OptionScene.h_stroke_color);
        fill(OptionScene.h_fill_color);
        circle(width/2, height - 100, 100);
        pop()
  
        push()
        textSize(40);
        text("score : ", 0, 50);
        pop()
  
        push()
        textSize(35);
        text(score, 130, 52);
        pop()

        push()
        textSize(25);
        text(accuracy_text, width/2 - 35, height - 95)
        pop()

        this.go_main.DrawButton();
    }
}

function check_accuracy()
{
  this.hole_x = width/2;
  this.hole_y = height - 100;
  //x : 100, 450, 800 / y : 100, 500
  if (keyIsDown(LEFT_ARROW) && accuracy_count == 0) {
    if (circle_y == center_y) {
      if(circle_x <= center_x + 10 && circle_x >= center_x - 20) {
        Perfect();
      } else if (circle_x <= center_x + 20 && circle_x >= center_x - 50) {
        Great();
      }
    }
  } else if (keyIsDown(UP_ARROW) && accuracy_count == 0) {
    if (circle_x == center_x) {
      if(circle_y <= center_y + 20 && circle_y >= center_y - 30) {
        Perfect();
      } else if (circle_y <= center_y + 30 && circle_y >= center_y - 70) {
        Great();
      }
    }
  } else if (keyIsDown(RIGHT_ARROW) && accuracy_count == 0) {
    if (circle_y == center_y) {
      if(circle_x >= center_x - 10 && circle_x <= center_x + 20) {
        Perfect();
      } else if (circle_x >= center_x - 20 && circle_x <= center_x + 50) {
        Great();
      }
    }
  }
}

function Perfect()
{
    score += 100;
    console.log("Perfect");
    make_particles(15);
    accuracy_text = "Perfect";
    Sound1.play();
    accuracy_count = 1;
}

function Great()
{
    score += 50;
    console.log("Great");
    make_particles(5);
    accuracy_text = "Great";
    Sound2.play();
    accuracy_count = 1;
}