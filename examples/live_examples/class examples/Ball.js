class Ball
{
    constructor( start_x, start_y, size )
    {
        this.x = start_x;
        this.y = start_y;
        this.diameter = size;

        var direction = random( TWO_PI );
        var speed = 100//random( 10, 100 );
        this.velocity_x = speed * cos( direction );
        this.velocity_y = speed * sin( direction );
    }

    move( delta_time_seconds )
    {
        this.x += this.velocity_x * delta_time_seconds;
        this.y += this.velocity_y * delta_time_seconds;

        if(this.x < 0 || this.x > width)
        {
            this.velocity_x = this.velocity_x * -1;
            this.x += this.velocity_x * delta_time_seconds;
        }

        if(this.y < 0 || this.y > height)
        {
            this.velocity_y = this.velocity_y * -1;
            this.y += this.velocity_y * delta_time_seconds;
        }
    }

    draw()
    {
        push()
        noStroke();
        fill( 'yellow' )
        circle( this.x, this.y, this.diameter );
        pop()
    }
}
