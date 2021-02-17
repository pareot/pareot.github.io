int x = 0; 

void setup () {
  size(400, 400);
  
}

void draw () {
  background(204);
  if (x < 500) {
    line(x, 0, x, height);
    x = x + 1;
  } else {
    noLoop();
  }
  
  if (frameCount < 50) {
    saveFrame("images/save-######.png");
  } else {
    exit();
  }
}
