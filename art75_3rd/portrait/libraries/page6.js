saveCount = 0;
function keyPressed() {
  if(keyIsPressed) {
    save("screenshot" + saveCount + ".png");
    print("Hah! I got your info now");
    saveCount++;
  }
}
