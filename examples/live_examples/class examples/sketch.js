/*
Encapsulation
Combine data with functionality / behavior
class keyword
constructor()
{}
good place to declare data
is what is called when we call new object()
this
Typically create one javascript file per class

Let’ s make a Bubble class add a new Bubble.js file to do so Parametrize the constructor: position, radius, color
 */

var bubble1;
var ball1;

function setup()
{
    createCanvas( 400, 400 );
    bubble1 = new Bubble( width / 2, height / 2 );
    ball1 = new Ball( width / 2, height / 2, 40 );
}

function draw()
{
    background( 0 );
    bubble1.update()
    bubble1.draw()

    ball1.move( deltaTime / 1000 )
    ball1.draw()
}
