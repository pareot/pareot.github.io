var posx = mouseX; //Face horizontal position
var posy = mouseY; //Face verticel position
var scale; //Face scale
var leftebh; //Left Eyebrow Height
var rightebh; //Right Eyebrow Height
var lefteyeopen; //Openness of left-eye
var righteyeopen; //Opennes of right-Eyebrow
var skin;

function setup () {
  createCanvas(windowWidth; windowHeight);
  background("white");
}

function draw () {
  ellipseMode(CENTER); // Drawing the face
  fill(skin);
  ellipse(mouseX, mouseY, scale);


}
