saveCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  fill(200, 200, 200, 20);
  noStroke();
  ellipse(mouseX, mouseY, 30, 30);
}

function keyPressed() {
  save("screenshot" + saveCount + ".png");
  saveCount++;
  }
}