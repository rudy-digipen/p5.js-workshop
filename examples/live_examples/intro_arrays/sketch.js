/*
[ 1, 2, 3, 4 ] - Square brackets
for arrays
Zero based indexing
    .length to get the number of elements
Demo - Create an array of words and display one at a time by mousePressed()
Demo - Display multiple objects with an array and a
for loop.
Demo - Use mouse press to push() new objects onto the screen
 */

var words = [ "Hello", "World", "My", "Name", "is Rudy!",
    "I Love", "Eating", "Kimchi Jim"
]

var circles = []

var index = 0;

function setup()
{
    createCanvas( 400, 400 );
    console.log( words.length )
}

function draw()
{
    background( 220 );

    for ( var element = 0; element < circles.length; ++element )
    {
        var p = circles[ element ];
        circle( p.x, p.y, 20 );

        var p = particles[element];
        p.update()
        p.draw()
    }

    textSize( 48 )
    if ( index < words.length )
    {
        text( words[ index ], 20, height / 2 );
    }
    text( index, 20, height / 2 + 60 );
}

function mouseClicked()
{
    var did_remove = false
    for ( var element = 0; element < circles.length; ++element )
    {
        var x = circles[ element ].x;
        var y = circles[ element ].y;
        if ( dist( x, y, mouseX, mouseY ) < 10 )
        {
            circles.splice( element, 1 )
            did_remove = true
        }
    }
    ++index;
    if ( !did_remove )
    {
        var random_x = random( 0, width )
        var random_y = random( 0, height )
        var new_circle_position = new p5.Vector( random_x, random_y );
        circles.push( new_circle_position )
    }
}

// function keyPressed()
// {
//     var location = 0;
//     var how_many_from_there = 1;
//     circles.splice(location, how_many_from_there);
// }
