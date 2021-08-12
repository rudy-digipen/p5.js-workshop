function setup()
{
    createCanvas( 400, 400 );
    background( 0 )
    frameRate( 24 )
}

function draw()
{
    var x = round( random( width ) );
    var y = int( random( height ) );
    // console.log( mouseX, mouseY )

    var blue = random( 200, 250 );
    var red = random( 50, 200 );
    var green = random( 0, 100 );
    var alpha = random( 50, 230 );
    fill( red, green, blue, alpha )

    noStroke();
    circle( x, y, 20 );
}

function mouseMoved()
{
    console.log( mouseX, mouseY )
}

function mouseClicked()
{
    background(0)
}
