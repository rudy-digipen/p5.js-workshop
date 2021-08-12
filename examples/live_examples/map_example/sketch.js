var X = 0;
var Y = 0;
var Size = 100;

function setup()
{
    createCanvas( 500, 600 );
    X =0;
    Y = height / 2;
}

/*
mouseX,mouseY, width,height, PI, 
*/

function draw()
{

    background( map( mouseX, 0, width, 0, 255 ),
        map( mouseX, width, 0, 240, 100, true ),
        map( mouseY, 0, height, 50, 200 )
    );

    text( map( mouseX, width, 0, 240, 100, true ), 250, 300 );

    noStroke();
    circle( X, Y, Size )
    X = X + 2
    // Y += 1.5; // Y = Y + 1.5

    X = X % width;

    var elapsed_time = millis() / 1000;
    var ellipse_width = map(sin(elapsed_time/5), -1, 1, 20, 400)

    ellipse(width/2, height/2, ellipse_width, 300);
}
