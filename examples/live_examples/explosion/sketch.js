var particles = []

function setup()
{
    createCanvas( 600, 600 );
}

function draw()
{
    background( 220 );
    for ( var index = 0; index < particles.length; ++index )
    {
        var p = particles[ index ];
        p.update( deltaTime / 1000 );
        p.draw();
    }

    for ( var index = particles.length - 1; index >= 0; index-- )
    {
        if ( particles[ index ].is_dead() )
        {
            particles.splice( index, 1 );
        }
    }

    text( particles.length, 20, 50 );
}

function mouseClicked()
{
    for ( var n = 0; n < 100; ++n )
    {
        var p = new Particle( mouseX, mouseY );
        var vel_dir = p5.Vector.random2D()
        vel_dir.mult( random( 100, 300 ) );
        p.velocity = vel_dir;
        p.acceleration.y = 100;
        p.set_life_time( random( 1, 3 ) )
        particles.push( p )
    }
}
