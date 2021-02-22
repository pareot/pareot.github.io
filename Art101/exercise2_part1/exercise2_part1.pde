float event = 0.0;
int bg = 0;
PImage img1;
PImage img2;
PFont f;
float angle = 0;
float incr = QUARTER_PI/400;
int counter = 0;

void setup() {
  size(700, 700);
  color sk = color(25, 25, 112);
  background(sk);  

  //set rect MODE
  push();
  rectMode(CORNERS);
  fill(112, 128, 144);
  rect(0, height/4*3, width, height);
  pop();

  //set MODE for image
  imageMode(CENTER);
  //load image 1 and 2
  img1 = loadImage("image1.png");
  img2 = loadImage("image2.jpg");
}

void draw() {
  //draw moving rect
  for (int i =0; i < width; i++) {
    stroke(255, 5);
    line(i, 0, i, 0 + sin(angle)*450.0);
    line(i, height, i, height/4*3 + sin(angle)*40.0);
    //strokeCap(ROUND);
    //point(i, +sin(angle)*500);
    //point(i, height/4*3 +sin(angle)*40);
    angle = angle + incr;
  }

  //f = createFont("Webdings", 18);
  f = createFont("Georgia", 36);
  textFont(f);
  fill(0, 255, 0);
  for (int i=0; i < 300; i++) {
    if ( (event % 1) == 0) {
      fill(0, 255, 0);
      text("Boo!", i+i*100, sin(i)*200);
    } 
    if ( (event % 2) == 0) {
      fill(255, 0, 0);
      text("Oooo...", i+i*100, sin(i)*100);
    }
  }

  //counter++;
  //if (counter > width) {
  //  counter = 0;
  //}
} 

void box (float Xpos, float Ypos) {
  push();
  translate(+Xpos, +Ypos);
  rectMode(CENTER);
  //fill(255, 205, 168);
  fill(bg, 126);
  rect(0, 0, 40, 40);
  pop();
}

void keyPressed() {

  if (key == 'b' || key == 'B') {
    if (bg == 0) {
      bg = 255;
      //display image
      background(255);
      push();
      tint(0, 0, 139, 50);
      image(img1, width/2, height/2, width, height);
      pop();
      //event = 1;
    } else {
      background(0);
      push();
      tint(0, 0, 139, 255);
      image(img2, width/2, height/2, width, height);
      pop();
      bg = 0;
      //event = 2;
    }
  }
  
  ////img for vid
  //if (frameCount < 200) {
  //  saveFrame("images/proj2-######.png");
  //} else {
  //  exit();
  //}
}
