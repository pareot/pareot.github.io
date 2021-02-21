float value = 0;
int gSize = 50;
PImage img;
PImage img2;
PFont f;

void setup() {
  size(700, 700);
  background(0);
  //set MODE for rectangle
  rectMode(CENTER);
  //set MODE for image
  imageMode(CENTER);
  //load image 1 and 2
  img = loadImage("image1.jpg");
  img2 = loadImage("image2.png"); 
}
void draw() {
  //bg
  background(value);  
  //set fill
  fill(value);  
  //draw rectangle
  //rect(width/2, height/2, width/4, height/4);
  
  //load image
  image(img2, width/2, height/2, width*2, height*2);
  tint(255, 20);
  
  printArray(PFont.list());
  f = createFont("Webdings", 18);
  //f = createFont("Georgia", 18);
  textFont(f);
  fill(0, 255, 0);
  text("What would look good here?", mouseX, mouseY, 200, 400);  
} 

void mousePressed() {
  if (mouseButton == LEFT) {
    value = 0;        
  } else if (mouseButton == RIGHT) {
    value = 255;    
  } else if (mouseButton == CENTER) {
    value = 125;
  } else {
    value = 0;
  }
  
//  for (int i=0 ; i < 25; i++) {
//    if (mouseX > i) {
//      value = 0;
//    } else {
//      value = 255;
//    }
//  }
}
