function setup () {
  createCanvas(windowWidth,windowHeight);
}

saveCount = 0;

function keyPressed() {
  if(keyIsPressed) {
    save("gotyourpicture" + saveCount + ".png");
    saveCount++;
  }
}
