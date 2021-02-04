function setup () {
  createCanvas(windowWidth,windowHeight);
}

saveCount = 0;

function keyPressed() {
  if(keyIsPressed) {
    save("screenshot" + saveCount + ".jpg");
    print("Hah! I got your info now");
    saveCount++;
  }
}
