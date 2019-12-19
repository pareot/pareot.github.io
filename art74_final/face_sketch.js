var posx; //Face horizontal position
var posy; //Face verticel position
var fscale = 100; //Face scale
var leftebh; //Left Eyebrow Height
var rightebh; //Right Eyebrow Height
var lefteyeopen; //Openness of left-eye
var righteyeopen; //Opennes of right-Eyebrow

function setup () {
  createCanvas(windowWidth, windowHeight);
  background("white");
}

function draw () {

  if (mouseIsPressed) {
  ellipseMode(CENTER); // Drawing the face
  noFill();
  stroke(5);
  ellipse(pmouseX, pmouseY, fscale, fscale);
  }

}
