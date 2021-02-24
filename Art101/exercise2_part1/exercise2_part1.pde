float event = 0.0;
int bg = 0;
PImage img1;
PImage img2;
PFont f;
float angle = 0;
float incr = QUARTER_PI/80;
int counter = 0;
float rand = 0;
float loc = 0;

void setup() {
  size(700, 700);
  background(255);  

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
  //set value for integer rand
  rand = random (0, PI);
  loc = (sin(rand) +cos(rand) );


  //call box func
  box(pmouseX +50, pmouseY +100);
  
  //call box2 funct
  //box2(mouseX, mouseY);

  ////draw fog
  //for (int i =0; i < width; i++) {
  //  stroke(0, 5);
  //  line(i, 0, i, 0 + sin(angle)*450.0);
  //  line(i, height, i, height/4*3 + sin(angle)*40.0);
  //  //strokeCap(ROUND);
  //  //point(i, +sin(angle)*500);
  //  //point(i, height/4*3 +sin(angle)*40);
  //  angle = angle + incr;
  //}

  //f = createFont("Webdings", 18);
  f = createFont("Georgia", 36);
  textFont(f);
  fill(0, 255, 0);

  if (keyPressed) {
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
        fill(0, 255, 0);
        text("Boo!", width/2, height/2);
      } else {
        background(0);
        push();
        tint(0, 0, 139, 255);
        image(img2, width/2, height/2, width, height);
        pop();
        bg = 0;
        //event = 2;
        fill(255, 0, 0);
        text("Oooo...", loc*100, sin(rand)*100);
      }
    }
  }
} 

void box (float Xpos, float Ypos) {

  rectMode(CENTER);
  fill(255);
  rect(width/2, height/2, width, height);
  
  fill(0, 126);  
  rect(10 +Xpos,10 +Ypos, 40, 40);
}

//void box2 (float Xpos, float Ypos) {
//  push();
//  translate(+Xpos, +Ypos);
//  noFill();
//  noStroke();
//  bezier(85, 20, 10, 10, 90, 90, 15, 80);
//  fill(255);
//  int steps = 10;

//  for (int i=0; i < width; i++) {
//    for (int j=0; j < height; j++) {
//      float t = i / float(steps);
//      float x = bezierPoint(85, 10, 90, 15, t);
//      float y = bezierPoint(20, 10, 90, 80, t);
//      if( (x % 15) == 0) {
//        rect(x +Xpos, y +Ypos, 25, 25);
//      } else {
        
//      }
//    }
//  }
//  pop();
//}
