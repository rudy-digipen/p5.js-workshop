class star{
    Draw(x, y){
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 20;
        push();
        translate(0,0);
        Star(this.x, this.y, this.width, this.height, 5);
        pop();
    }
}
function Star(x, y, radius1, radius2, npoints){
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    push();{
    fill(244, 252, 2);
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
    }pop();
}