var counter = 0;

function setup() {
  createCanvas(600, 600);
  background("yellow");
  
}


function draw() {
  if(counter<550) {
    rect(counter+20, height/2, 110, 110, 2, 2, 12, 12);
    rect(counter+20, height/2-60, 110, 110, 2, 2, 12, 12);
    counter+=110; 
    
  }  
  
  if (mouseIsPressed){
    ellipseMode(RADIUS);
    noFill();
    stroke(10);
    ellipse(mouseX, mouseY, 40, 40);
    
    
  }
}
