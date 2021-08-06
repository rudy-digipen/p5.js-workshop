var stages = [stage1, stage2, stage3];
var stage_index = 0;

const diameter = stages[stage_index].ball_size;
const tile_width = stages[stage_index].tile_width;
const tile_height = stages[stage_index].tile_height;

const tile_fill = stages[stage_index].tile_fill;
const tile_stroke = stages[stage_index].tile_stroke;
const tile_passed_fill = stages[stage_index].tile_passed_fill;
const tile_passed_stroke = stages[stage_index].tile_passed_stroke;

var ball;
var blocks = [];
var titles = [];
var current_position = 0;

var current_x = 0;
var current_y = 0;
var previous_x = 0;
var previous_y = 0;

var delta_x = 0;
var delta_y = 0;
var translated_x = 0;
var translated_y = 0;

var font;
var background_image;
var background_sound;

var ready_step = 0;
var game_progress = 1;
var game_ready = false;
var game_started = false;
var game_overed = false;
var game_cleared = false;

function preload() {
    font = loadFont('assets/fonts/GODOMAUM.TTF');
    //background_image = loadImage(stages[stage_index].image);
    background_sound = loadSound(stages[stage_index].sound);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    let x = width / 2;
    let y = height / 2;
    ball = new Ball(x, y, diameter, tile_width, stages[stage_index].start_bpm);

    let previous_tile = stages[stage_index].map[0];
    for (let i in stages[stage_index].map) {
        let current_tile = stages[stage_index].map[i];
        let w1 = getTileWidth(previous_tile.direction);
        let w2 = getTileWidth(current_tile.direction);
        let h1 = getTileHeight(previous_tile.direction);
        let h2 = getTileHeight(current_tile.direction);
        
        if (previous_tile.direction === 'LEFT' && current_tile.direction === 'LEFT') {
            x -= (w1 + w2) / 2;
        } else if (previous_tile.direction === 'LEFT' && current_tile.direction === 'UP') {
            x -= (w1 + w2) / 2;
            y += (h1 - h2) / 2;
        } else if (previous_tile.direction === 'LEFT' && current_tile.direction === 'DOWN'){
            x -= (w1 + w2) / 2;
            y -= (h1 - h2) / 2;
        } else if (previous_tile.direction === 'UP' && current_tile.direction === 'LEFT') {
            x += (w1 - w2) / 2;
            y -= (h1 + h2) / 2;
        } else if (previous_tile.direction === 'UP' && current_tile.direction === 'UP') {
            y -= (h1 + h2) / 2;
        } else if (previous_tile.direction === 'UP' && current_tile.direction === 'RIGHT'){
            x -= (w1 - w2) / 2;
            y -= (h1 + h2) / 2;
        } else if (previous_tile.direction === 'RIGHT' && current_tile.direction === 'RIGHT') {
            x += (w1 + w2) / 2;
        } else if (previous_tile.direction === 'RIGHT' && current_tile.direction === 'UP') {
            x += (w1 + w2) / 2;
            y += (h1 - h2) / 2;
        } else if (previous_tile.direction === 'RIGHT' && current_tile.direction === 'DOWN'){
            x += (w1 + w2) / 2;
            y -= (h1 - h2) / 2;
        } else if (previous_tile.direction === 'DOWN' && current_tile.direction === 'LEFT') {
            x += (w1 - w2) / 2;
            y += (h1 + h2) / 2;
        } else if (previous_tile.direction === 'DOWN' && current_tile.direction === 'RIGHT') {
            x -= (w1 - w2) / 2;
            y += (h1 + h2) / 2;
        } else if (previous_tile.direction === 'DOWN' && current_tile.direction === 'DOWN'){
            x += (w1 - w2) / 2;
            y += (h1 + h1) / 2;
        }

        previous_tile = current_tile;
        block = new Tile(x - tile_width, y, w2, h2,
                         tile_fill, tile_stroke,
                         tile_passed_fill, tile_passed_stroke,
                         previous_tile.direction, previous_tile.bpm);
        
        blocks.push(block);
    }
    
    blocks[0].passed = true;
}

function suspend_game() {
    delta_x = 0;
    delta_y = 0;
    previous_x = current_x = translated_x;
    previous_y = current_y = translated_y;

    if (background_sound.isPlaying()) {
        background_sound.stop();
    }
}

function reset_game() {
    ready_step = 0;
    current_position = 0;

    game_ready = false;
    game_started = false;
    game_overed = false;
    game_cleared = false;

    ball.reset();
    ball.x = width / 2;
    ball.y = height / 2;

    current_x = 0;
    current_y = 0;
    previous_x = 0;
    previous_y = 0;
    translated_x = 0;
    translated_y = 0;

    for (let i in blocks) {
        blocks[i].passed = false;
    }
    blocks[0].passed = true;
}

function draw() {
    textFont(font);
    textAlign(CENTER);
    angleMode(DEGREES);
    background('#000000');

    if (current_position != 0) {
        var last_block = blocks[current_position - 1].direction;
        var current_block = blocks[current_position].direction;
        var duration = getTileDuration(ball.bpm, last_block, current_block);
    } else {
        var duration = toMillis(ball.bpm);
    }
    
    delta_x += (current_x - previous_x) / duration * deltaTime;
    delta_y += (current_y - previous_y) / duration * deltaTime;

    translated_x = delta_x + previous_x;
    translated_y = delta_y + previous_y;
    translate(translated_x, translated_y);

    // todo: infinite background wallpaper
    //image(background_image, 0, 0, width, height);

    for (let i in blocks) {
        blocks[i].draw();
    }
    
    for (let i in titles) {
        titles[i].update(deltaTime);
        if (titles[i].lifetime <= 0) {
            titles.splice(i, 1);
        } else {
            titles[i].draw();
        }
    }

    ball.update(deltaTime);
    ball.draw();
    
    let title_x = width / 2 - translated_x;
    let title_y = height / 7  - translated_y;

    push();
    textSize(90);
    fill('#FFFFFF');
    text(stages[stage_index].title, title_x, title_y);

    // stage change thumb
    if (!game_started && !game_ready && false) {
        triangle(title_x + 150, title_y - 35, title_x + 150, title_y - 15, title_x + 170, title_y - 25);
        triangle(title_x - 150, title_y - 35, title_x - 150, title_y - 15, title_x - 170, title_y - 25);
    }
    pop();

    if (game_started && !game_cleared && ball.elapsed_angle >= getTileAngle(last_block, current_block) + 180) {
        suspend_game();
        game_overed = true;
    }

    if (!game_started && !game_ready) {
        push();
        textSize(150);
        fill('#FFFFFF');
        // text('스페이스를 눌러 시작', width / 2 - translated_x, height / 2 - translated_y - tile_height);
        text('Press space to start', width / 2 - translated_x, height / 2 - translated_y - tile_height);
        pop();
    }

    if (game_overed) {
        push();
        textSize(200);
        fill('#FFFFFF');
        let progress_percent = floor((current_position + 1) / blocks.length * 100);
        // text(`${progress_percent}% 완료`, ball.x, height * 4 / 5);
        text(`${progress_percent}% Complete`, ball.x, height * 4 / 5);
        pop();
    }

    if (game_cleared) {
        push();
        textSize(200);
        fill('#FFFFFF');
        // text('축하합니다!', ball.x, ball.y - tile_height / 2);
        text('Congratuation!', ball.x, ball.y - tile_height / 2);
        pop();
    }

    if (game_ready) {
        push();
        textSize(200);
        fill('#FFFFFF');
        if (ready_step === 0 && 180 <= ball.angle && ball.angle < 360) {
            // text('준비', width / 2, height / 2 - 48);
            text('Ready', width / 2, height / 2 - 48);
        } else if (ready_step === 1 && 0 <= ball.angle && ball.angle < 180) {
            text('3', width / 2, height / 2 - 48);
        } else if (ready_step === 2 && 180 <= ball.angle && ball.angle < 360) {
            text('2', width / 2, height / 2 - 48);
        } else if (ready_step === 3 && 0 <= ball.angle && ball.angle < 180) {
            text('1', width / 2, height / 2 - 48);
        } else if (ready_step === 4 && 180 <= ball.angle && ball.angle < 360) {
            // text('시작!', width / 2, height / 2 - 48);
            text('Start!', width / 2, height / 2 - 48);
            if (ball.angle < 270) {
                if (!background_sound.isPlaying()) {
                    background_sound.play();
                }
            } else {
                if (!ball.started) {
                    ball.start();
                }
                game_started = true;
            }
        } else if (ready_step <= 4) {
            ready_step++;
        } else {
            ball.showOrbit = true;
        }
        pop();
    }
}

function changeStage(offset) {
    stage_index += offset;
    if (stage_index < 0) {
        stage_index += 3;
    }
}

function mouseClicked() {
    return;

    if (!game_started && !game_ready) {
        let title_x = width / 2   - translated_x;
        let title_y = height / 7  - translated_y;

        let thumb1_top    = title_y - 35;
        let thumb1_left   = title_x + 150;
        let thumb1_bottom = title_y - 35;
        let thumb1_right  = title_x + 150;

        let thumb2_top    = title_y - 35;
        let thumb2_left   = title_x - 150;
        let thumb2_bottom = title_y - 35;
        let thumb2_right  = title_x - 150;
        
        if (thumb1_left <= mouseX && mouseX <= thumb1_right && thumb1_top <= mouseY && mouseY <= thumb1_bottom) {
            changeStage(+1);
        }
    }
}

function keyPressed() {    
    if (!game_started && !game_ready) {
        game_ready = true;
        ball.prepare();
    }

    if (!game_started || !game_ready) {
        return;
    }

    if (game_overed || game_cleared) {
        reset_game();
        return;
    }

    let current_block = blocks[current_position];
    let next_block = blocks[current_position + 1];
    let target_direction = current_block.direction;
    let target_angle = getTargetAngle(target_direction);

    let angle_difference = ball.angle - target_angle;
    if (target_angle === 0 && ball.angle > 180) {
        angle_difference -= 360;
    }

    let title = getAccurayTitle(next_block.x, next_block.y, angle_difference);
    let tile_angle = getTileAngle(current_block.direction, next_block.direction);
    titles.push(title);
    
    if (abs(angle_difference) <= 75) {
        let a = tile_angle * current_block.bpm * next_block.bpm;
        let b = current_block.bpm * tile_angle - angle_difference * next_block.bpm;
        let new_bpm = a / b;

        ball.angle = target_angle;

        previous_x = current_x;
        previous_y = current_y;

        let x = next_block.x;
        let y = next_block.y;
        ball.move(x, y, new_bpm);

        current_x = width / 2 - x;
        current_y = height / 2 - y;

        delta_x = 0;
        delta_y = 0;
        
        blocks[++current_position].passed = true;
        if (current_position == blocks.length - 1) {
            suspend_game();
            game_cleared = true;
        }
    }
}
