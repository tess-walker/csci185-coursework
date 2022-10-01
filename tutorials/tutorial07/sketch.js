function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100, 75, 'yellow');
    drawCircle(200, 100, 100, 'red');
    drawCircle(300, 100, 125, 'pink');
    drawCircle(400, 100, 25, 'teal');


    // Exercise 2: 
    drawOval(700, 200, 100, 75, 'pink');

    // Exercise 3:
    drawBullseye(700, 700, 100);

    // Exercise 4:
    drawFace(400, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size) {
    fill('teal');
    circle(centerX, centerY, size);
    fill('navy');
    circle(centerX, centerY, size*.75);
    fill('teal');
    circle(centerX, centerY, size*.5);
    fill('navy');
    circle(centerX, centerY, size*.25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size) {
    fill('white');
    circle(centerX, centerY, size);
    fill('black');
    stroke(0)
    circle(centerX-8, centerY-8, size/8);
    circle(centerX+8, centerY-8, size/8);
    noFill();
    arc(centerX, centerY+6, 30, 20, 0, PI); 
}