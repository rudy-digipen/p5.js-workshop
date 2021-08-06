class Particle {
	constructor(x, y) {
		this.position = new p5.Vector(x, y);
		this.velocity = new p5.Vector(random(600, 800), random(600, 800));
		this.acceleration = new p5.Vector();

        this.life_duration = random(1, 1.5);
        this.lifetime = this.life_duration;

		this.diameter = random(10, 20);
        this.color = color(random(255), random(255), random(255));
	}

	update(delta_time_seconds) {
		this.position.add(p5.Vector.mult(this.velocity, delta_time_seconds));
		this.velocity.add(p5.Vector.mult(this.acceleration, delta_time_seconds));
        this.lifetime -= delta_time_seconds;
        this.color.setAlpha(map(this.lifetime, this.life_duration, 0, 255, 0, true));
	}

	draw() {
		push();
		noStroke();
		fill(this.color);
		rectMode(CENTER);
		translate(this.position.x, this.position.y)
		circle(0 , 0, this.diameter);
		pop();
	}
}