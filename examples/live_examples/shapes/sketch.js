function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  ellipse(300, 300, 500, 300)
  circle(150, 80, 100)
  circle(450, 80, 100)
  rectMode(CENTER)
  rect(300, 200, 80, 200)

  // PI, HALF_PI, QUARTER_PI
  arc(300, 450, 200, 100, QUARTER_PI, TWO_PI);
}
