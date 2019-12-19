var posx; //face horizontal position
var posy; //face verticel position scale
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
  ellipseMode(RADIUS); //drawing the face: width and length
  noFill();
  stroke(10);
  ellipse(posx, posy, posx - );

  rectMode(RADIUS); //drawing left eyebrow
  noFill();
  stroke(5);
  rect(leftebh, leftebh, 50, 50);

  rectMode(RADIUS); //drawing right eyebrow
  noFill();
  stroke(5);
  rect(rightebh, rightebh, 50, 50);

  ellipseMode(RADIUS); //drawing left eye
  noFill();
  stroke(3);
  ellipse(posx);

  }

}
