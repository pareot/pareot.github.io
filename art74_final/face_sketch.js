var posx; //Face horizontal position
var posy; //Face verticel position
var scale = 10; //Face scale
var leftebh; //Left Eyebrow Height
var rightebh; //Right Eyebrow Height
var lefteyeopen; //Openness of left-eye
var righteyeopen; //Opennes of right-Eyebrow

function setup () {
  createCanvas(windowWidth, windowHeight);
  background("white");
}

function draw () {
  ellipseMode(CENTER); // Drawing the face
  noFill();
  stroke(5);
  ellipse(mouseX, mouseY, scale);


}
