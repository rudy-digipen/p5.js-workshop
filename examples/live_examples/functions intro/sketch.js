function setup()
{
    createCanvas( 600, 600 );

    var angle = 360;
    var in_radians = to_radians( angle );
    var in_degrees = to_degrees( in_radians );
    console.log( in_radians, in_degrees );
}

function draw()
{
    background( 220 );
    for(let x = 0; x < width; x += 135)
    {
        smiley(x, height/4);
    }
    for ( let y = 0; y < height; y += 135 )
    {
        smiley( width/4, y );
    }

    for ( let y = 0; y < height; y += 135 )
    {
         for ( let x = 0; x < width; x += 135 )
         {
             smiley( x, y );
         }
    }
    // smiley( width / 2, height / 2 )
    // smiley( width / 4, height / 4 )
    // smiley( width / 4, 3 * height / 4 )
    // smiley( 3 * width / 4, 3 * height / 4 )
    // smiley( 3 * width / 4, height / 4 )
}

// two styles
// Task like function
// Computation like function -- radians/map

function to_radians( angle_in_degrees )
{
    var angle_in_radians = angle_in_degrees * PI / 180;
    return angle_in_radians;
}

function to_degrees( angle_in_radians )
{
    var angle_in_degrees = angle_in_radians * 180 / PI;
    return angle_in_degrees;
}

function smiley( x, y )
{
    push()
    {
        translate( x, y );
        fill( 'yellow' )
        circle( 0, 0, 128 )
        fill( 0 )
        circle( -20, -30, 24 )
        circle( 20, -30, 24 )
        ellipse( 0, 30, 76, 40 )
    }
    pop()
}
