var ear_angle_left = 0
var ear_angle_right = 0

var face_x = 75;
var face_y = 75;

function setup()
{
    createCanvas( 600, 600 );
}


function draw()
{
    background( 100, 149, 237 )

    // PI is up
    // 135
    var elapsed_time = millis() / 1000;
    ear_angle_left = map( cos( elapsed_time ), -1, 1, radians( 180 ),
        radians( 135 ) );
    ear_angle_right = map( cos( elapsed_time ), -1, 1, radians( 180 ),
        radians( 235 ) );

    face_x = map( cos( elapsed_time ), -1, 1, -75, 75 );
    face_y = map( sin( elapsed_time * 2 ), -1, 1, -75, 75 );

    var sin_t = map( sin( elapsed_time * 2 ), -1, 1, 0, 1 )
    sin_t = 3 * sin_t * sin_t - 2 * sin_t * sin_t * sin_t;
    var tongue_length = map( sin_t, 0, 1, 50, 100 );

    push()
    {
        translate( face_x, face_y )
        // ears 
        push()
        {
            fill( 229, 158, 31 )
            rectMode( CENTER )

            push()
            {
                translate( width / 3 - 30, height / 8 + 60 )
                rotate( ear_angle_left )
                rect( 0, 50, 50, 100 )
            }
            pop()

            push()
            {
                translate( 2 * width / 3 + 30, height / 8 + 60 )
                rotate( ear_angle_right )
                rect( 0, 50, 50, 100 )
            }
            pop()
        }
        pop()

        //face
        push()
        {
            fill( '#edbc64' )
            var face_size = map( mouseX, 100, width - 100, 450, 460, true );
            ellipse( width / 2, height / 2, face_size, 450 )
        }
        pop()

        // cat stripes
        push()
        {
            // 233, 205, 95
            var stripe_red = map( sin_t, 0, 1, 228, 195 );
            var stripe_green = map( sin_t, 0, 1, 122, 82 );
            var stripe_blue = map( sin_t, 0, 1, 72, 29 );
            noStroke()
            fill( stripe_red, stripe_green, stripe_blue, 100 )
            // fill( 220, 200 )
            rectMode( CENTER )
            rect( width / 2, 125, 20, 100, 8 )            
            rect( 249, 124, 20, 80, 8 )
            rect( 347, 124, 20, 80, 8 )
        }
        pop()

        //eyes
        push()
        {
            var eye_center_x = width / 2 + face_x;
            var eye_center_y = height * 3 / 8 + face_y;
            var mouse_distance = dist( eye_center_x, eye_center_y, mouseX, mouseY );
            var eye_size = map( mouse_distance, 0, width / 2, 60, 10, true );
            var eye_offset = map( mouse_distance, 0, width / 2, 20, 0, true );

            var eye_width = map( sin_t, 0, 1, 80, 90 )
            //left eye
            push()
            {
                translate( eye_offset, 0 )
                push()
                {
                    ellipse( width / 3, height * 3 / 8, eye_width, 100 )
                    fill( 0 )
                    ellipse( width / 3, height * 3 / 8, eye_width - 20, 80 )
                }
                pop()
                push()
                {
                    noStroke()
                    circle( width / 3 - 10 + mouseX / width * 20,
                        height * 3 / 8 - 25 + mouseY / height * 30, eye_size )
                }
                pop()
            }
            pop()

            // right eye
            push()
            {
                translate( -eye_offset, 0 )
                ellipse( width * 2 / 3, height * 3 / 8, eye_width, 100 );
                push()
                {
                    fill( 0 )
                    ellipse( width * 2 / 3, height * 3 / 8, eye_width - 20, 80 );
                }
                pop()
                push()
                {
                    noStroke()
                    circle( width * 2 / 3 - 10 + mouseX / width * 20,
                        height * 3 / 8 - 25 + mouseY / height * 30, eye_size );
                }
                pop()
            }
            pop()
        }
        pop()


        // mouth
        push()
        { // tongue
            stroke( 'red' )
            strokeWeight( 50 )
            line( width / 2, height / 2 + 50, width / 2, height / 2 + tongue_length )
            stroke( 0 )
            strokeWeight( 3 )
            line( width / 2, height / 2 + 50, width / 2, height / 2 + tongue_length )
        }
        pop()
        push()
        {
            fill( '#edbc64' )
            // noFill()
            strokeWeight( 10 )
            var arc_length_offset = map( tongue_length, 50, 100, 0, radians( 10 ) )
            arc( 252, 333, 100, 100, 0, HALF_PI + arc_length_offset )
            arc( 349, 333, 100, 100, HALF_PI - arc_length_offset, PI )
        }
        pop()
        // nose
        push()
        {
            var nose_offset = map( tongue_length, 50, 100, 0, 10 );
            translate( 0, nose_offset );
            fill( 0 )

            triangle( width / 3 + 50, height / 2, width * 2 / 3 - 50,
                height / 2, width / 2, height / 2 + 50 )

            push()
            {
                translate( width / 2, height / 2 + 30 )
                var whisker_angle = map( tongue_length, 50, 100, 0, 10 );
                rotate( radians( whisker_angle ) )
                translate( -width / 2, -height / 2 - 30 );
                // whiskers
                line( 265, 315, 215, 345 )
                line( 274, 326, 235, 356 )
                line( 285, 336, 256, 362 )
            }
            pop()
            push()
            {
                translate( width / 2, height / 2 + 30 )
                var whisker_angle = map( tongue_length, 50, 100, 0, -10 );
                rotate( radians( whisker_angle ) )
                translate( -width / 2, -height / 2 - 30 );
                line( 333, 318, 389, 345 )
                line( 326, 325, 373, 351 )
                line( 313, 337, 352, 364 )
            }
            pop()
            // stroke(255)
            // text([mouseX, mouseY], 250, 300)
        }
        pop()
    }
    pop()

    // pet cat with a scratcher
    push()
    {
        strokeWeight( 10 )
        line( mouseX, mouseY + 30, mouseX, mouseY - 30 )
        line( mouseX + 15, mouseY + 30, mouseX + 15, mouseY - 20 )
        line( mouseX - 15, mouseY + 30, mouseX - 15, mouseY - 20 )
    }
    pop()

}
