var cannon_ball;

var background_image;
var particle_image;
var sound_object;

function preload()
{
    background_image = loadImage( 'images/background.png' )
    particle_image = loadImage( 'images/particle.png' )
    sound_object = loadSound('sounds/Laser_Shoot.wav')
}

function setup()
{
    createCanvas( background_image.width,
        background_image.height );
    cannon_ball = new Particle( 0, height );
    cannon_ball.velocity.x = 150;
    cannon_ball.velocity.y = -100;

    cannon_ball.acceleration.y = 50
}

function draw()
{
    background( background_image );
    cannon_ball.update( deltaTime / 1000 )
    cannon_ball.draw()
}

function mouseClicked()
{
    cannon_ball = new Particle( 0, height );
    cannon_ball.velocity.x = 150;
    cannon_ball.velocity.y = -100;
    cannon_ball.acceleration.y = 50
    sound_object.play()
}
