function setup() {
  createCanvas(700, 700);
  angleMode(RADIANS);

}

function draw() {
  let s = width/1.5;
  let hr = hour();
  let mi = minute();
  let sc = second();
  let rev = HALF_PI;

  background(255, 248, 220);

  translate(width/2, height/2);
  rotate(PI/2);

  //day & night
  if (hr >= 7 && hr <= 19) {
    background(255, 248, 220);
  } else {
    background (78, 78, 255);
  }

  //clock's body
  push();
  rectMode(CENTER);
  noStroke();
  fill(139, 69, 19);
  rect(0, 0, height*3.5/4, width*3/4);
  pop();

  //clock's face
  strokeWeight(8);
  noFill();
  stroke(255);
  // ellipse(0, 0, s, s);

  //hour mechanism
  push();
  strokeWeight(12);
  stroke(255, 255, 255);
  fill(0, 255, 200);
  let hrEnd = map(hr, 0, 24, 0, 360);
  arc(0, 0, s, s, 0, hrEnd);
  pop();

  //minute mechanism
  push();
  strokeWeight(12);
  stroke(255, 100, 150);
  fill(255, 0, 200);
  let miEnd = map(mi, 0, 60, 0, 360);
  arc(0, 0, s/2, s/2, 0, miEnd);
  pop();

  //second mechanism
  push();
  strokeWeight(12);
  stroke(255, 100, 150);
  fill(200, 0, 255);
  let scEnd = map(sc, 0, 60, 0, 360);
  arc(0, 0, s/3, s/3, 0, scEnd);
  pop();






}