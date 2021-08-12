function setup()
{
    createCanvas( 600, 600 );
}

function draw()
{
    background( 220 );
    strokeWeight( 3 )
    line( width / 2, 0, width / 2, height );
    line( 0, height / 2, width, height / 2 );

    var is_mouse_left_side = mouseX >= 0 && mouseX < width / 2;
    var is_mouse_top_side = mouseY >= 0 && mouseY < height / 2;
    if ( is_mouse_left_side && is_mouse_top_side )
    {
        var center_x = width / 4;
        var center_y = height / 4;
        circle( center_x, center_y, 50 )
    }
    else if ( !is_mouse_left_side && is_mouse_top_side )
    {
        var center_x = width * 3 / 4;
        var center_y = height / 4;
        rectMode( CENTER );
        rect( center_x, center_y, 50, 80 );
    }
    else if ( is_mouse_left_side && !is_mouse_top_side )
    {
        var center_x = width / 4;
        var center_y = height * 3 / 4;
        ellipse( center_x, center_y, 50, 100 );
    }
    else if ( !is_mouse_left_side && !is_mouse_top_side )
    {
        var center_x = width * 3 / 4;
        var center_y = height * 3 / 4;
        rectMode( CENTER );
        square( center_x, center_y, 50 )
    }
}
