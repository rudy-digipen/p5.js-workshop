class Block
{
    constructor(value, level)
    {
        this.level = level;

        this.life_duration = 6/5 / this.level;
        this.lifetime = 6/5 / this.level;
        this.Stroke = color(OptionScene.n_stroke_color);
        this.Fill = color(OptionScene.n_fill_color);

		this.diameter = 100;
        if (value == 0) {                           //left
            this.x = 100;
            this.y = height - 100;
            this.velocity_x = 10*this.level;
            this.velocity_y = 0;
        } else if (value == 1) {                    //top
            this.x = width/2;
            this.y = 100;
            this.velocity_x = 0;
            this.velocity_y = 11*this.level;
        } else if (value == 2) {                    //right
            this.x = width - 100;
            this.y = height - 100;
            this.velocity_x = -10*this.level;
            this.velocity_y = 0;
        }
    }

    update(delta_time_seconds)
    {
        this.x += this.velocity_x;
        this.y += this.velocity_y;
        this.lifetime -= delta_time_seconds*2;

        this.Stroke.setAlpha(map(this.lifetime, this.life_duration, 0, 125, 255, true));
        this.Fill.setAlpha(map(this.lifetime, this.life_duration, 0, 125, 255, true));
    }

    get_x()
    {
        return this.x;
    }

    get_y()
    {
        return this.y;
    }
    
    draw()
    {
        push()
        strokeWeight(5)
        stroke(this.Stroke)
        fill(this.Fill)
        circle( this.x, this.y, this.diameter)
        pop()
    }
}