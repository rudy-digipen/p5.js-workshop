function setup()
{
    createCanvas( 600, 600 );
}


function draw()
{
    background( 220 )
    push()
    {
        translate( width / 2, height / 2 );
        noStroke();
        fill( 200, 30, 100, 100 );
        beginShape();
        var start_angle = random( TWO_PI )
        for ( var angle = start_angle; angle < start_angle + TWO_PI; angle += radians( 5 ) )
        {
            var radius = map( angle, 0, TWO_PI, 50, width / 3 );
            var x = cos( angle ) * radius;
            var y = sin( angle ) * radius;
            vertex( x, y );
        }
        endShape();

        stroke( 0 );
        fill( 20, 200, 200, 200 );
        beginShape();
        start_angle = random( TWO_PI )
        for ( var angle = start_angle; angle < start_angle + TWO_PI; angle += radians( 5 ) )
        {
            var noise_input = angle;
            if ( angle > PI )
            {
                noise_input -= PI;
            }
            var noise_value = noise( noise_input * 2 );
            var radius = map( noise_value, 0, 1, 50, width / 3 );
            var x = cos( angle ) * radius;
            var y = sin( angle ) * radius;
            vertex( x, y );
        }
        endShape( CLOSE );
    }
    pop()
    noLoop()
}

function mouseClicked()
{
    loop()
}
