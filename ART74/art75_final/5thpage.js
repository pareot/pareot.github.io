function setup () {
  createCanvas(windowWidth,windowHeight);
}

saveCount = 10;

function keyPressed() {
  if(keyIsPressed) {
    save("gotyourpicture" + saveCount + ".png");
    createVideo
    saveCount++;
  }
}
