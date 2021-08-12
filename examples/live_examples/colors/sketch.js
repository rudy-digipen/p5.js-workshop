function setup()
{
    createCanvas( 600, 600 );
}

function draw()
{
    background( 100, 149, 237 )

    // ears 
    push()
    fill( 229, 158, 31 )
    rectMode( CENTER )
    rect( width / 3 - 30, height / 8 + 10, 50, 100 )
    rect( 2 * width / 3 + 30, height / 8 + 10, 50, 100 )
    pop()

    //face
    push()
    fill( '#edbc64' )
    circle( width / 2, height / 2, 450 )
    pop()

    // cat stripes
    push()
    noStroke()
    fill( 220, 200 )
    rectMode( CENTER )
    rect( width / 2, 125, 20, 100, 8 )
    fill( 228, 122, 72, 180 )
    rect( 249, 124, 20, 80, 8 )
    rect( 347, 124, 20, 80, 8 )
    pop()

    //eyes
    push()

    //left eye
    push()
    circle( width / 3, height * 3 / 8, 100 )
    fill( 0 )
    circle( width / 3, height * 3 / 8, 80 )
    pop()
    push()
    noStroke()
    circle( width / 3 - 10 + mouseX / width * 20,
        height * 3 / 8 - 25 + mouseY / height * 30, 10 )
    pop()

    // right eye
    circle( width * 2 / 3, height * 3 / 8, 100 );
    push()
    fill( 0 )
    circle( width * 2 / 3, height * 3 / 8, 80 );
    pop()
    push()
    noStroke()
    circle( width * 2 / 3 - 10 + mouseX / width * 20,
        height * 3 / 8 - 25 + mouseY / height * 30, 10 );
    pop()

    pop()

    // mouth
    push()
    noFill()
    strokeWeight( 10 )
    arc( 252, 333, 100, 100, 0, HALF_PI )
    arc( 349, 333, 100, 100, HALF_PI, PI )
    pop()
    // nose
    push()
    fill( 0 )
    triangle( width / 3 + 50, height / 2, width * 2 / 3 - 50,
        height / 2, width / 2, height / 2 + 50 )

    // whiskers
    line( 265, 315, 215, 345 )
    line( 274, 326, 235, 356 )
    line( 285, 336, 256, 362 )

    line( 333, 318, 389, 345 )
    line( 326, 325, 373, 351 )
    line( 313, 337, 352, 364 )

    pop()

    // pet cat with a scratcher
    push()
    strokeWeight( 10 )
    line( mouseX, mouseY + 30, mouseX, mouseY - 30 )
    line( mouseX + 15, mouseY + 30, mouseX + 15, mouseY - 20 )
    line( mouseX - 15, mouseY + 30, mouseX - 15, mouseY - 20 )
    pop()

}
