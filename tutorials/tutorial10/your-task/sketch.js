const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawCreature(425, 225, 200);

    drawGrid(canvasWidth, canvasHeight);

    fill('black');
    textAlign(CENTER);
    textSize(16);
    text("Click or drag your mouse.", canvasWidth/2, canvasHeight/2);
    noFill();
    }

    function mouseClicked() {
        circle(mouseX, mouseY, Math.random()* 50 + 50);
    }

    function mouseDragged() {
        circle(mouseX, mouseY, Math.random()* 50 + 50);
    }

// replace this function with YOUR creature!
function drawCreature(x, y, width, primaryColor='hotpink', secondaryColor='black') {
    fill(primaryColor);
    stroke(secondaryColor);
    circle(x, y, width);

    noStroke();
    fill('black');
    textSize(16);
    textAlign(CENTER);
    text("Replace with your creature", x, y);
}
