class Bubble
{
    constructor( start_x, start_y )
    {
        this.x = start_x;
        this.y = start_y;
        this.diameter = 30;
        this.color = 255;
    }

    update()
    {
        this.x += random( -2, 2 );
        this.y += random( -2, 2 );
    }

    draw()
    {
        push()
        {
            noFill();
            stroke( this.color );
            strokeWeight( 3 );
            circle( this.x, this.y, this.diameter );
        }
        pop()
    }
}
