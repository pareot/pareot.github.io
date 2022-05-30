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

  background(0, 0, 0);

  translate(width/2, height/2);
  rotate(-PI/2);

  // //clock's body
  // push();
  // rectMode(CENTER);
  // noStroke();
  // fill(139, 69, 19);
  // rect(0, 0, height*3.5/4, width*3/4);
  // pop();

  //hour mechanism
  push();
  //day & night
  if (hr >= 7 && hr <= 19) {
    fill(255, 248, 220);
  } else {
    fill (118, 118, 137);
  }
  strokeWeight(12);
  stroke(50, 50, 50);
  let hrAngle = map(hr%12, 0, 12, 0, PI*2);
  arc(0, 0, s, s, 0, hrAngle);
  pop();

  //minute mechanism
  push();
  strokeWeight(8);
  stroke(50, 50, 50);
  fill(100, 100, 100);
  let miAngle = map(mi, 0, 60, 0, PI*2);
  arc(0, 0, s*2/3, s*2/3, 0, miAngle);
  pop();

  //second mechanism
  push();
  strokeWeight(4);
  stroke(50, 50, 50);
  fill(200, 200, 200);
  // noFill();
  let scAngle = map(sc, 0, 60, 0, PI*2);
  arc(0, 0, s/3, s/3, 0, scAngle);
  push();
  translate(10, 10);
  rotate(scAngle);
  noStroke();
  fill(0, 0, 118);
  ellipse(0, 0, 20, 20);
  pop();
  pop();

  //deco
  //sun
  push();
  noStroke();
  fill(235, 235, 0);
  ellipse(0, 0, 50, 50);
  pop();

  //earth
  push();
  translate(s/3, s/3);
  rotate(scAngle);
  noStroke();
  fill(0, 0, 118);
  ellipse(0, 0, 20, 20);
  pop();








}
