class Particle {
    
    constructor(start_x, start_y, particle_size, particle_time, particle_color) {
        this.position = new p5.Vector(start_x, start_y);
        this.velocity = new p5.Vector();
        this.acceleration = new p5.Vector();
        this.life_duration = particle_time;
        this.life_time = particle_time;
        this.color = color(particle_color);
        this.size = particle_size;
    }

    update(delta_time_seconds) {
        // p = v * dt
        this.position.add(p5.Vector.mult(this.velocity, delta_time_seconds));
        // v = a * dt
        this.velocity.add(p5.Vector.mult(this.acceleration, delta_time_seconds));


        //this.acceleration.x = 0;
        //this.acceleration.y = 0;
        
        this.life_time -= delta_time_seconds;
        var new_alpha = map(this.life_time, this.life_duration, 0, 255, 0, true)
        this.color.setAlpha(new_alpha);    
    }

    draw() {
        push() 
        {
            noStroke();
            fill(this.color)
            circle(this.position.x, this.position.y, this.size);
        }
        pop()
    }
}