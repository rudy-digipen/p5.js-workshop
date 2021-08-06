class TileTitle {
    constructor(x, y, color, title) {
        this.x = x;
        this.y = y;
        this.life_duration = 1000;
        this.lifetime = this.life_duration;
        this.color = color;
        this.title = title;
    }

    update(deltaTime) {
        this.lifetime -= deltaTime;
        let alpha = map(this.lifetime, 0, this.life_duration, 0, 255, true);
        this.color.setAlpha(alpha);
    }

    draw() {
        if (this.lifetime <= 0) {
            return;
        }

        push();
        textSize(56);
        fill(this.color)
        text(this.title, this.x, this.y - 32);
        pop();
    }
}
