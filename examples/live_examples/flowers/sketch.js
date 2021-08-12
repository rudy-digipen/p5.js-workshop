class FlowerPosition
{
    constructor( start_x, start_y )
    {
        this.x = start_x
        this.y = start_y
    }
}

var red_flower_positions = []
var blue_flower_positions = []
var small_flower_size = 70;

function setup()
{
    createCanvas( 600, 700 );
    for ( var y = 0; y < height + small_flower_size / 2; y += small_flower_size + random( -10, 10 ) )
    {
        for ( var x = 0; x < width + small_flower_size / 2; x += small_flower_size + random( -10, 10 ) )
        {
            //flower( x, y, small_flower_size, 'crimson' );
            red_flower_positions.push( new FlowerPosition( x, y ) )

        }
    }

    for ( var x = 0; x < width + small_flower_size / 2; x += small_flower_size + random( -10, 10 ) )
    {
        // flower( x, height - 50, small_flower_size, 'navy' );
        blue_flower_positions.push( new FlowerPosition( x, y ) )
    }

}


function draw()
{
    background( 220 )

    
    for(var index = 0; index < red_flower_positions.length; ++index)
    {
        var x = red_flower_positions[index].x;
        var y = red_flower_positions[index].y;
        flower( x, y, small_flower_size, 'crimson' );
    }

    flower( width / 2, height / 2, 200, 'pink' );
    flower( width / 2 + 150, height / 2 + 75, 170, 'orange' );
    flower( width / 2 - 150, height / 2 + 75, 170, 'purple' );

    flower( 100, height - 150, 100, 'darkorchid' );
    flower( width - 100, height - 150, 100, 'deeppink' );


    for(var index = 0; index < blue_flower_positions.length; ++index)
    {
        var position = blue_flower_positions[index];
        var x = position.x;
        var y = position.y;
        flower( x, height - 50, small_flower_size, 'navy' );
    }
    // noLoop();

    push()
    fill('yellow')
    circle(mouseX,mouseY, 30)
    pop()

}

function mouseClicked()
{
    loop()
}

function stem( size )
{
    var stem_x = -size / 4;
    var stem_y = 0;
    fill( 'green' );
    rect( stem_x, stem_y, size / 2, size * 2 );
}

function petals( size, color )
{
    fill( color );
    ellipse( 0, 0, 2 * size, size / 4 )
    ellipse( 0, 0, size / 4, 2 * size )

    push()
    {
        rotate( radians( 45 ) );
        ellipse( 0, 0, 2 * size, size / 4 )
    }
    pop()

    push()
    {
        rotate( radians( -45 ) );
        ellipse( 0, 0, 2 * size, size / 4 )
    }
    pop()
}

function bud( size )
{
    fill( 'lightyellow' );
    circle( 0, 0, size * 0.8 );
}

function flower( x, y, size, color )
{
    push()
    {
        translate( x, y )
        stem( size );
        petals( size, color );
        bud( size )
    }
    pop()
}
