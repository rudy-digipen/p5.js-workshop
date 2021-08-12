class Ball
{
    constructor( x, y )
    {
        this.x = x;
        this.y = y;
        this.moveX = 3;
        this.moveY = 3;
        this.radius = 15;
    }


    update()
    {
        this.x += this.moveX;
        this.y += this.moveY;
        if ( this.x > width - this.radius || this.x < this.radius )
        {
            this.moveX *= -1;
        }
        if ( this.y > height - this.radius || this.y < this.radius )
        {
            this.moveY *= -1;
        }
    }


    draw()
    {
        noStroke();
        fill( 'yellow' );
        circle( this.x, this.y, this.radius * 2 );
    }
}
