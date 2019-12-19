var posx; //face horizontal position
var posy; //face verticel position
var leftebh; //left eyebrow height
var rightebh; //right eyebrow height
var lefteyeopen; //left eye openness
var righteyeopen; //right eye openness
var jawop; //jaw openness
var nosflare; //nostril flare

function setup () {
  createCanvas(windowWidth, windowHeight);
  background("white");
}

function draw () {
  if (mouseIsPressed) {
  ellipseMode(CENTER); // Drawing the face
  noFill();
  stroke(10);
  ellipse(pmouseX, pmouseY, fscale, fscale);

  noFill();
  stroke(5);
  ellipse(pmouseX - )

  }

}
