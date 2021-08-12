function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(220);

    var number1 = '50';
    var number2 = '-6';

    var string = '';

    if (number1 >= 96) {
        string += 'Pitbull';
        string += " ";
        string += 'is ';
    } else if (number1 === 4 && !number2) {
        string += 'Poodle is ';
    } else {
        string += 'Beagle is ';
    }

    switch (number2) {
        case 3: {
            string += 'the best ';
        }
        break;
    case '-6':
        string += 'the sweetest ';
        break;
    case 9:
        string += 'the cuttest ';
    default:
        string += 'dog in world!';
    }

    fill(255, 90, 10);
    textSize(25);
    text(string, 10, height / 2);
}
