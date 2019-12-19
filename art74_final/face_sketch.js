var posx = 250; //face horizontal position
var posy = 350; //face verticel position scale
let sket; //data submission
var leftebh; //left eyebrow height
var rightebh; //right eyebrow height
var lefteyeopen; //left eye openness
var righteyeopen; //right eye openness
var jawop; //jaw openness
var nosflare; //nostril flare

function setup () {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(500, 700);
  background("white");

  //posx = createInput();
  //posx.position(20,65);

  //posy = createInput();
  //posy.position(posx.x + posx.width,65);

  //button = createButton('submit');
  //button.position(posy.x + posy.width, 65);
  //button.mousePressed(draw);
}

function sketch () {
  //if (mouseIsPressed) {
  for (let i = 0; i < 1) {
    ellipseMode(RADIUS); //drawing the face: width and length
    noFill();
    stroke(10);
    ellipse(posx, posy, random(-240, 240), random (-180, 180));
  }

//  rectMode(RADIUS); //drawing left eyebrow
//  noFill();
//  stroke(5);
//  rect(leftebh, leftebh, 50, 50);

//  rectMode(RADIUS); //drawing right eyebrow
//  noFill();
//  stroke(5);
//  rect(rightebh, rightebh, 50, 50);

//  ellipseMode(RADIUS); //drawing left eye
//  noFill();
//  stroke(3);
//  ellipse(posx);
//  } // bracket of if (mouseIsPressed)

}
