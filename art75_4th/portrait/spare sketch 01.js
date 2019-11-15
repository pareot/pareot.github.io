function preload() {
  img = loadImage(shia GIFs.gif);
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
