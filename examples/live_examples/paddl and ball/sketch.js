let ball1;
let paddle1;

function setup()
{
    createCanvas( 400, 400 );
    ball1 = new Ball( width / 2, height / 4 );
    paddle1 = new Paddle( width / 2, height / 4 );
}


function draw()
{
    background( 60 )
    ball_vs_paddle( ball1, paddle1 );
    ball1.update();
    ball1.draw();

    paddle1.update();
    paddle1.draw();
}

function ball_vs_paddle( ball, paddle )
{
    var ball_min_x = ball.x - ball.radius;
    var ball_max_x = ball.x + ball.radius;
    var paddle_min_x = paddle.x - paddle.width / 2;
    var paddle_max_x = paddle.x + paddle.width / 2;

    var ball_min_y = ball.y - ball.radius;
    var ball_max_y = ball.y + ball.radius;
    var paddle_min_y = paddle.y - paddle.height / 2;
    var paddle_max_y = paddle.y + paddle.height / 2;

    var does_x_overlap = ball_max_x > paddle_min_x && ball_min_x < paddle_max_x;
    var does_y_overlap = ball_max_y > paddle_min_y && ball_min_y < paddle_max_y;

    if ( does_x_overlap && does_y_overlap )
    {
        ball.moveY *= -1;
    }
}
