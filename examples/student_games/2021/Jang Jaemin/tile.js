class Tile {
    constructor(x, y, width, height, fill_color, stroke_color, fill_passed_color, stroke_passed_color, direction, bpm) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.fill_color = fill_color;
        this.stroke_color = stroke_color;
        this.fill_passed_color = fill_passed_color;
        this.stroke_passed_color = stroke_passed_color;

        this.passed = false;

        this.bpm = bpm;
        this.direction = direction;
    }

    draw() {
        push();
        fill(this.passed ? this.fill_passed_color : this.fill_color);
        stroke(this.passed ? this.stroke_passed_color : this.stroke_color);
        strokeWeight(3);
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}
