class Particle
{
    constructor( start_x, start_y )
    {
        this.position = new p5.Vector( start_x, start_y );
        this.velocity = new p5.Vector();
        this.acceleration = new p5.Vector();
        this.color = color( 249, 253, 34, 255 );
        this.size = 20;
    }

    update( delta_time_seconds )
    {
        // p += v * dt
        this.position.add( p5.Vector.mult( this.velocity, delta_time_seconds ) );
        // v += a * dt
        this.velocity.add( p5.Vector.mult( this.acceleration, delta_time_seconds ) );

        // if we need to generate forces from game logic then we should reset acceleration 
        // this.acceleration.x = 0;
        // this.acceleration.y = 0;
    }
    draw()
    {
        push()
        {
            strokeWeight(3)
            stroke(128,128,0)
            fill( this.color )
            circle( this.position.x, this.position.y, this.size );
        }
        pop()
    }
}
