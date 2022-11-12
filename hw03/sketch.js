function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(275, 600, 180, 119.7, 'pink', 'black');
    drawCreature(1000, 133, 100, 100, 'green',  'blue')
    drawCreature(454, 423, 141, 150,'#aebb83', '#227876');
    drawCreature(333, 227, 99, 100,'#94ba77', '#3f5364');
    drawCreature(117, 314, 91, 75,'#648d8e', '#afc272');
    
    drawGrid(canvasWidth, canvasHeight);
}

function drawCreature(x, y, w, h, fillColor1, fillColor2){
    fill(fillColor1)
    rect(x, y, w, h);
    fill(fillColor2)
    rect(x, y, w * .8, h * .8);
    fill(fillColor1)
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
