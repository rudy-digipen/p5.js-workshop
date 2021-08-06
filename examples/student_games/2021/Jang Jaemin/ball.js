class Ball {
    constructor(x, y, diameter, distance, bpm) {
        this.saved_x = x;
        this.saved_y = y;

        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.distance = distance;
        this.current_distance = 0;

        this.bpm = bpm;
        this.angle = 180;
        this.elapsed_angle = 0;
        this.color1 = '#FF322A';
        this.color2 = '#2A32FF';

        this.ready = false;
        this.started = false;
        this.showOrbit = false;
    }

    move(x, y, bpm) {
        this.x = x;
        this.y = y;
        this.bpm = Number(bpm);
        this.angle += 180;
        this.angle %= 360;
        this.elapsed_angle = 0;
        [this.color1, this.color2] = [this.color2, this.color1];
    }

    update(deltaTime) {
        if (this.ready && this.current_distance < this.distance) {
            this.current_distance += deltaTime * 180 / toMillis(this.bpm);
        }

        if (this.started && this.current_distance < this.distance) {
            this.current_distance = distance;
        }

        if (!this.ready) {
            return;
        }
        
        let elapsed = deltaTime * (180 / toMillis(this.bpm));
        this.angle += elapsed;
        ball.angle %= 360;

        if (this.started) {
            this.elapsed_angle += elapsed;
        }
    }

    reset() {
        this.x = this.saved_x;
        this.y = this.saved_y;
        this.current_distance = 0;

        this.bpm = 150;
        this.angle = 180;
        this.elapsed_angle = 0;
        this.color1 = '#FF322A';
        this.color2 = '#2A32FF';

        this.ready = false;
        this.started = false;
        this.showOrbit = false;
    }

    prepare() {
        this.ready = true;
    }

    start() {
        this.started = true;
    }

    draw() {
        if (this.showOrbit) {
            push();
            noStroke();
            fill(this.color2 + '80');
            beginShape(QUADS);

            let total_angle = 360 / 24;
            let gap_angle = 0.5 * total_angle;
            let vis_angle = 0.5 * total_angle;

            let outer_radius = this.current_distance;
            let inner_radius = outer_radius * 0.95;

            for (let angle = 0; angle <= 360; angle += total_angle) {
                let a = angle + gap_angle;
                let x = cos(a) * outer_radius + this.x;
                let y = sin(a) * outer_radius + this.y;    
                curveVertex(x, y);

                x = cos(a) * inner_radius + this.x;
                y = sin(a) * inner_radius + this.y;
                curveVertex(x, y);
                
                a += vis_angle;
                x = cos(a) * inner_radius + this.x;
                y = sin(a) * inner_radius + this.y;
                curveVertex(x, y);
                
                x = cos(a) * outer_radius + this.x;
                y = sin(a) * outer_radius + this.y;
                curveVertex(x, y);
            }
            endShape();
            pop();
        }

        push();
        noStroke();
        fill(this.color1);
        circle(this.x, this.y, this.diameter);
        
        fill(this.color2);
        circle(this.x + this.current_distance * cos(this.angle), this.y + this.current_distance * sin(this.angle), this.diameter);
        pop();
    }
}


/*
 

*/