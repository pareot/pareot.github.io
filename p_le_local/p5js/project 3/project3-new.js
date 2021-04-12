function setup() {
  createCanvas(700, 700);
  angleMode(RADIANS);

}

function draw() {
  background(0);

  translate(widht/2, height/2);
  rotate(PI/2);

  let hr = hour();
  let mi = minute();
  let sec = second();

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();

}
