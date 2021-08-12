class Particle
{
    constructor( start_x, start_y )
    {
        this.position = new p5.Vector( start_x, start_y );
        this.velocity = new p5.Vector();
        this.acceleration = new p5.Vector();
        this.life_duration = 4; // seconds
        this.life_time = 4;
        this.color = color( random( 255 ), random( 255 ), random( 255 ), 255 );
        this.size = 40;
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

        this.life_time -= delta_time_seconds;
        var new_alpha = map( this.life_time, this.life_duration, 0,
            255, 0, true );
        this.color.setAlpha( new_alpha );

        this.size = map( this.life_time, this.life_duration, 0, 40, 20 );
    }

    draw()
    {
        push()
        {
            tint(this.color)
            image(particle_image, this.position.x, this.position.y)
            // noStroke()
            // fill( this.color )
            // circle( this.position.x, this.position.y, this.size );
        }
        pop()
    }
}
