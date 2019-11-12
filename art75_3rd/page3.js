function preload() {
  img = loadImage();
}

saveCount = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(img);
}

function keyPressed() {
  save("screenshot" + saveCount + ".jpg");
  saveCount++;
}
