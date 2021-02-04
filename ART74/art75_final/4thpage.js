function setup () {
  createCanvas(windowWidth,windowHeight);
}

saveCount = 4;

function keyPressed() {
  if(keyIsPressed) {
    save("gotyourpicture" + saveCount + ".png");
    saveCount++;
  }
}
