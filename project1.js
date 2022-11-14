const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
let r, g, b;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}
// bird variables 

const yellowbird = {
    x: 275,
    y: 133,
    size: 100,
    speed: 6
}

const redbird = {
    x: 275,
    y: 480,
    size: 180,
    speed: 5
}

// let wavearr = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0, - 1, -2, -3, -4, -5, -6, -7, -6, -5, -4, -3, -2, -1, 0] // ...sorry

// Cloud variables 

let speed = 1;

const cloud1 = {
    x: 100,
    y: 100,
    size : 95, 
    speed: 3
}

const cloud2 = {
    x: 1100,
    y: 250,
    size : 80, 
    speed: 4.25
}

r = random(255); // task 11 - random ass colors
g = random(255);
b = random(255);

function draw() {
    clear();

    // draws landscape:
   drawLandscape()

    yellowbird.x += yellowbird.speed + random(2, -2) // Task one ~ moving creature
    yellowbird.y = yellowbird.y + random(5, -5)  // Task two ~ different kinds of """motion"""

    redbird.x = redbird.x + random(2, -2) // Task four ~ different animations
    redbird.y = redbird.y + random(2, -2) // he's trying his best

    /* for (let i = 0; i < wavearr.length; i++) {
        console.log( wavearr[i] );
        drawCreature2(yellowbird.x, 133 + wavearr[i], yellowbird.size, 'yellow',  'black') // I tried :(
    }  */

    //draws birds

    // "how abstract does a creature have to be to be considered a creature?""

    drawCreature(redbird.x, redbird.y, redbird.size, 120, 'black', 'red');
    drawCreature2(yellowbird.x, yellowbird.y, yellowbird.size, 'yellow',  'black')

    //moves clouds
    cloud1.x += cloud1.speed;
    cloud2.x += cloud2.speed;

    //draws clouds :) "landscape objects"
    drawCloud(cloud1.x, cloud1.y, cloud1.size)
    drawCloud(cloud2.x, cloud2.y, cloud2.size)

    // draws tree
    drawTree(1050, 300, 50, 270 )

    //don't get lost
    if (cloud1.x > window.innerWidth + 100) {
        cloud1.x = -100
    }

    if (cloud2.x > window.innerWidth + 100) {
        cloud2.x = -100
    }

    if (yellowbird.x > window.innerWidth + 100) {
        yellowbird.x = -100
    }

}

function drawLandscape() {
    noStroke();
    fill(145, 168, 245);
    rect(-10000, 0, 100000, canvasHeight);
    fill(97, 133, 74);
    rect(-10000, 550, 100000, canvasHeight);
    fill(95, 71, 50);
    rect(-10000, 645, 100000, canvasHeight);
}

function drawTree(x, y, h, w ) {
    noStroke();
    fill(87, 72, 48);
    rect(x, y, h, w);
    fill(55, 90, 34);
    ellipse(1070, 240, 280, 180);
}

function drawCreature(x, y, w, h, fillColor1, fillColor2){
    fill(fillColor1)
    rect(x, y, w, h);
    fill(r, g, b, 127 )
    rect(x, y, w * .8, h * .8);
    fill("white")
    stroke("black")
    circle(x + (w * .2), y + (h * .2), (h + w) * .05) 
    strokeWeight(1);
    stroke(fillColor1);
    fill(fillColor1);
    beginShape();
    vertex(x, y + ( h * .2));
    vertex(x - (w * .2), y + (h * .3));
    vertex(x, y + (h * .4));
    endShape();
}

function drawCreature2(centerX, centerY, s, fillColorA, fillColorB){
    noStroke();
    fill(fillColorA)
    circle(centerX, centerY, s);
    fill(fillColorB)
    circle(centerX + (s * .3), centerY - (s * .1), s / 13);
    stroke(fillColorB);
    fill(fillColorB);
    beginShape();
    vertex(centerX + (s / 2), centerY + (s * .02));
    vertex(centerX + (s * .8), centerY + (s * .03));
    vertex(centerX + (s / 2), centerY + (s * .04));
    endShape();
}

function drawCloud(x, y, size) {
    noStroke()
    fill(222, 222, 223);
    circle(x, y, size);
    circle(x + 30, y +10, size - 25);
    circle(x - 22.5, y + 8, size - 17.5);
}

    function mousePressed() {
          r = random(255);
          g = random(255);
          b = random(255);
        }