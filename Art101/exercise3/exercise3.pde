PImage img;

void setup() {
  size(700, 700);
  background(255);
  frameRate(60);
  fill(255, 0, 0);
  img = loadImage("image0.png");
  
}

void draw () {
  noStroke();
  fill(255, 0, 0, 50);
  frameRate(60);
  Paint();
}

void Paint (){
  if (mousePressed) {
    if (mouseButton == LEFT) {
      fill(255, 0, 0, 128);
      circle(mouseX, mouseY, 50);
    } if (mouseButton == RIGHT) {
      fill(0, 255, 0, 128);
      square(mouseX, mouseY, 50);
    } if (mouseButton == CENTER) {
      image(img, mouseX, mouseY, 50, 50); 
    }
  } 
  
//void middle () {
  
//}

  
}

//if (keyPressed) {
//  if (key == "1");
//  Paint();
