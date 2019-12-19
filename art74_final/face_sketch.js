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

  noFill(); //drawing left eyebrow height
  stroke(5);
  ellipse(pmouseX - )

  }

}
