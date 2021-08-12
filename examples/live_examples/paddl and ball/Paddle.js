class Paddle
{
    constructor( x, y )
    {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 10;
    }


    update()
    {
        if ( keyIsDown( LEFT_ARROW ) )
        {
            this.x -= 4;
            if ( this.x < this.width / 2 )
            {
                this.x = this.width / 2;
            }
        }
        else if ( keyIsDown( RIGHT_ARROW ) )
        {
            this.x += 4;
            if ( this.x > width - this.width/2 )
            {
                this.x = width - this.width / 2;
            }
        }
    }


    draw()
    {
        rectMode( CENTER );
        fill( 255 );
        rect( this.x, this.y, this.width, this.height );
    }
}
