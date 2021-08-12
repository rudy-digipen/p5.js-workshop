function setup()
{
    createCanvas( 600, 600 );

    var number = 0;
    var end_point = 100;
    while ( number < end_point )
    {
        console.log( number + '\t' + ( number * number ) );
        ++number;
    }
    console.log( "While loop is done" );

    for ( var counter = 0; counter < end_point; ++counter )
    {
        console.log( counter + '\t' + ( counter * counter ) );
    }

    console.log( "for loop is done" );

}

function draw()
{
    background( 220 );

    beginShape()

    vertex( 0, 0 )
    vertex( width / 2, height / 2 );
    vertex( 300, 500 )
    vertex( 50, 500 )

    endShape( CLOSE )

    var angle = 0;
    angle += 0.1;
    var x = cos( angle ) * 200 + width / 2;
    var y = sin( angle ) * 200 + height / 2;
    push()
    strokeWeight( 32 );
    point( x, y )
    {
        angle += 0.3;
        x = cos( angle ) * 200 + width / 2;
        y = sin( angle ) * 200 + height / 2;
        point( x, y )
    }
    point( x, y )
    {
        angle += 0.3;
        x = cos( angle ) * 200 + width / 2;
        y = sin( angle ) * 200 + height / 2;
        point( x, y )
    }
    point( x, y )
    {
        angle += 0.3;
        x = cos( angle ) * 200 + width / 2;
        y = sin( angle ) * 200 + height / 2;
        point( x, y )
    }
    point( x, y )
    {
        angle += 0.3;
        x = cos( angle ) * 200 + width / 2;
        y = sin( angle ) * 200 + height / 2;
        point( x, y )
    }
    point( x, y )
    {
        angle += 0.3;
        x = cos( angle ) * 200 + width / 2;
        y = sin( angle ) * 200 + height / 2;
        point( x, y )
    }
    point( x, y )
    {
        angle += 0.3;
        x = cos( angle ) * 200 + width / 2;
        y = sin( angle ) * 200 + height / 2;
        point( x, y )
    }
    point( x, y )
    {
        angle += 0.3;
        x = cos( angle ) * 200 + width / 2;
        y = sin( angle ) * 200 + height / 2;
        point( x, y )
    }
    point( x, y )
    {
        angle += 0.3;
        x = cos( angle ) * 200 + width / 2;
        y = sin( angle ) * 200 + height / 2;
        point( x, y )
    }
    point( x, y )
    {
        angle += 0.3;
        x = cos( angle ) * 200 + width / 2;
        y = sin( angle ) * 200 + height / 2;
        point( x, y )
    }
    point( x, y )
    {
        angle += 0.3;
        x = cos( angle ) * 200 + width / 2;
        y = sin( angle ) * 200 + height / 2;
        point( x, y )
    }
    point( x, y )
    {
        angle += 0.3;
        x = cos( angle ) * 200 + width / 2;
        y = sin( angle ) * 200 + height / 2;
        point( x, y )
    }
    point( x, y )
    {
        angle += 0.3;
        x = cos( angle ) * 200 + width / 2;
        y = sin( angle ) * 200 + height / 2;
        point( x, y )
    }
    pop()
}
