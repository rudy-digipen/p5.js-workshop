function setup()
{
    createCanvas( 400, 400 );
}

function draw()
{
    background( 220 );

    // Napkin
    quad( 70, 50, 155, 50, 140, 110, 85, 120 )
    quad( 75, 60, 150, 60, 137, 100, 90, 110 )

    // Pizza Plate
    rectMode( RADIUS )
    rect( 310, 125, 70, 110 );

    //Pizza
    triangle( 300, 207, 265, 70, 355, 70 );
    // Crust
    line( 265, 70, 265, 50 );
    line( 355, 70, 355, 50 );
    line( 265, 50, 355, 50 )

    // Cheesy Points
    point( 310, 90 )
    point( 300, 90 )
    point( 320, 90 )
    point( 280, 90 )
    point( 340, 90 )
    point( 300, 110 )
    point( 320, 110 )
    point( 280, 110 )
    point( 330, 110 )
    point( 310, 150 )
    point( 300, 160 )
    point( 312, 140 )
    point( 303, 135 )

    // Big Pizza
    arc( 100, 250, 190, 190, 0, PI + HALF_PI + QUARTER_PI )

    // Pepperoni
    circle( 130, 200, 20 );
    circle( 80, 200, 20 );
    circle( 80, 240, 20 );
    circle( 40, 240, 20 );
    circle( 40, 280, 20 );
    circle( 80, 280, 20 );
    circle( 120, 280, 20 );
    circle( 160, 280, 20 );
    circle( 80, 320, 20 );

}
