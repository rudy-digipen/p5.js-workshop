function toMillis(bpm) {
    return 60 / bpm * 1000;
}

function toBpm(millis) {
    return 60 * 1000 / millis;
}

function getTileWidth(direction) {
    if (direction === 'LEFT' || direction === 'RIGHT') {
        return tile_width;
    } else {
        return tile_height;
    }
}

function getTileHeight(direction) {
    if (direction === 'LEFT' || direction === 'RIGHT') {
        return tile_height;
    } else {
        return tile_width;
    }
}

function getTileAngle(direction_from, direction_to) {
    if (direction_from === direction_to) {
        return 180;
    } else if (direction_from === 'LEFT' && direction_to === 'DOWN') {
        return 90;
    } else if (direction_from === 'UP' && direction_to === 'LEFT') {
        return 90;
    } else if (direction_from === 'RIGHT' && direction_to === 'UP') {
        return 90;
    } else if (direction_from === 'DOWN' && direction_to === 'RIGHT') {
        return 90;
    } else if (direction_from === 'LEFT' && direction_to === 'UP') {
        return 270;
    } else if (direction_from === 'UP' && direction_to === 'RIGHT') {
        return 270;
    } else if (direction_from === 'RIGHT' && direction_to === 'DOWN') {
        return 270;
    } else if (direction_from === 'DOWN' && direction_to === 'LEFT') {
        return 270;
    }
}

function getTileDuration(bpm, direction_from, direction_to) {
    return toMillis(bpm) * getTileAngle(direction_from, direction_to) / 180;
}

function getTargetAngle(direction) {
    if (direction === 'RIGHT') {
        return 0;
    } else if (direction === 'DOWN') {
        return 90;
    } else if (direction === 'LEFT') {
        return 180;
    } else if (direction === 'UP') {
        return 270;
    }
}

function getAccurayTitle(x, y, angle) {
    // the half of ball must be in the tile
    let perfect_angle = asin(tile_height / tile_width / 2); // about 24 degrees
    
    // the complete ball must be in the tile(not used)
    // let perfect_angle2 = asin((bh - 2 * diameter) / 2 / block_width); // about -17 degrees

    if (angle <= -96) {
        // return new TileTitle(x, y - 60, color('#FF0000'), "너무 빠름");
        return new TileTitle(x, y - 60, color('#FF0000'), "Early!!");
    } else if (angle <= -72) {
        // return new TileTitle(x, y - 60, color('#FF8000'), "빠름");
        return new TileTitle(x, y - 60, color('#FF8000'), "Early!");
    } else if (angle <= -48) {
        // return new TileTitle(x, y - 60, color('#64CD32'), "빠름");
        return new TileTitle(x, y - 60, color('#64CD32'), "EPerfect");
    } else if (angle <= perfect_angle) {
        // return new TileTitle(x, y - 60, color('#32CD32'), "정확");
        return new TileTitle(x, y - 60, color('#32CD32'), "Perfect!");
    } else if (angle <= 48) {
        // return new TileTitle(x, y - 60, color('#64CD32'), "느림");
        return new TileTitle(x, y - 60, color('#64CD32'), "EPerfect!");
    } else if (angle <= 72) {
        // return new TileTitle(x, y - 60, color('#FF8000'), "느림");
        return new TileTitle(x, y - 60, color('#FF8000'), "Late!");
    } else {
        game_overed = true;
        // return new TileTitle(x, y - 60, color('#FF0000'), "매우 느림");
        return new TileTitle(x, y - 60, color('#FF0000'), "Late!!");
    }
}
