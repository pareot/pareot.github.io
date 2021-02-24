int checkEvent = 0;
int bg = 0;
PImage img1;
PImage img2;
PFont f;
float angle = 0;
float incr = QUARTER_PI/80;
int counter = 0;
float rand = 0;
float loc = 0;
float rev = 0;

void setup() {
  size(700, 700);
  background(255);  
  frameRate(10);

  //set MODE for image
  imageMode(CENTER);
  //load image 1 and 2
  img1 = loadImage("image1.png");
  img2 = loadImage("image2.jpg");

  //text setting
  f = createFont("Webdings", 18);
  f = createFont("Georgia", 36);
  textFont(f);
  fill(0, 255, 0);
}

void draw() {
  //set value for integer rand
  rand = random (0, PI);
  loc = (sin(rand) +cos(rand) );  

  //draw surface
  push();
  rectMode(CORNERS);
  fill(112, 128, 144);
  rect(0, height/4*3, width, height);
  pop();  

  //draw sky
  rectMode(CENTER);
  push();
  rectMode(CORNERS);
  fill(255);
  rect(0, 0, width, height/4*3);
  pop();


  //box spawn event
  if (counter % 10 == 0) {

    //rect follow mouse
    push();
    noStroke();
    fill(0, 50);  
    rotate(rev);
    rect(5 +pmouseX, 10 +pmouseY, 40, 40);  
    pop();
    rev++;
  } else {

    //draw fog
    for (int i =0; i < width; i++) {
      stroke(0, 5);
      line(i, 0, i, 0 + sin(angle)*450.0);
      line(i, height, i, height/4*3 + sin(angle)*40.0);

      angle = angle + incr;
    }
  }


  //mouse press event
  if (mousePressed) {
    if (checkEvent == 0) {
      image(img1, width/2, height/2, width, height);
      fill(0, 255, 0);
      text("Boo!", width/2, height/2);

      checkEvent = 1;
    } else if (checkEvent == 1) {
      image(img2, width/2, height/2, width, height);
      fill(255, 0, 0);
      text("Oooo...", loc, sin(rand)*100);
      text("Oooo...", loc +width/4*3, sin(rand)*100);

      checkEvent = 0;
    } else {

      ////draw surface
      //push();
      //rectMode(CORNERS);
      //fill(112, 128, 144);
      //rect(0, height/4*3, width, height);
      //pop();  

      ////draw sky
      //rectMode(CENTER);
      //push();
      //rectMode(CORNERS);
      //fill(255);
      //rect(0, 0, width, height/4*3);
      //pop();
    }
  }
  
  //img for vid
  if (frameCount < 201) {
    saveFrame("images/proj2-######.png");
  } else {
    exit();
  }
}
