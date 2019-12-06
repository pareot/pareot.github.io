function setup () {
  createCanvas(windowWidth,windowHeight);
}

saveCount = 0;

function keyPressed() {
  if(keyIsPressed) {
    save("#-unsuspected-picture" + saveCount + .png");
    print("Hah! I got your info now");
    saveCount++;
  }
}
