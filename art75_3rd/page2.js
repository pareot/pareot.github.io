let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyPressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
