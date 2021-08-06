class Ball{
    constructor(x,y) {
        this.x = x;
        this.start_x = x;
        this.y = y;
        this.start_y = y;
        //console.log(this.x)
        this.speed = 0;
        this.gravity = 1400;
        this.radius = 15;
        this.is_dead = false;
        this.is_pause = false;
        this.is_touched = false;
    }
    Draw() {
        if (this.is_dead){
			return;
        }
        console.log(this.x,this.y)

        if(this.x < 0 || this.x > windowWidth || this.y < 0 || this.y > windowHeight){
            this.is_dead = true;
            this.is_pause = true;
            this.x = this.start_x;
            this.y = this.start_y;
        }

        if(!this.is_dead){
            if (keyIsDown(LEFT_ARROW)) {
                this.x -= 2.5;
            }
        
            if (keyIsDown(RIGHT_ARROW)) {
                this.x += 2.5;
            }
            push();{
            fill(255, 249, 0);
            strokeWeight(5);
            //console.log(this.x)
            ellipse(this.x,this.y,5,5);
            }pop();
            //mySound.play() * (deltaTime / 1000);
            this.y += this.speed  * (deltaTime / 1000);
            this.speed += this.gravity * (deltaTime / 1000);
            //console.log(this.speed);
        }
    }
}