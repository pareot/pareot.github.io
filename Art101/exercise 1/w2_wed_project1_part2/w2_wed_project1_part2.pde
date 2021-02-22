float rand = 0;
float pos = 0;
int counter = 0;
float a = 0.0;
float b = 50.0;
float c = 0.0;
float rev = 45;

void setup() {
  size(500, 500);
  smooth();
  background(0);
  frameRate(10);
  //rand = random (300);
}

void draw() {  
  colorMode(HSB);
  stroke(rand, rand, rand, b);
  cursor(CROSS);

  //set value for global var 'rand'
  rand = random (300);

  //set condition for global var 'b'
  if (b < 255) {
    b+= 25;
  } else {
    b = 50.0;
  }


  //function - press mouse to change background
  if (mousePressed == true) {
    background(random(0, 255));
  }


  //draw a sine wave
  for (int i=0; i < 600; i++) {
    //set local var 'incr'
    float incr = QUARTER_PI/90;

    //draw sine wave
    line(i, 0, i, 0 + sin(c)*40.0);
    line(i, height, i, height + sin(c)*40.0);
    //line(i, 0, i, 0 + sin(a)*40.0);
    //line(i, height, i, height + sin(a)*40.0);

    //draw sine wave vertically
    push();
    translate(width, 0);
    rotate(PI/2);
    line(i, 0, i, 0 + sin(c)*40.0);
    line(i, height, i, height + sin(c)*40.0);
    pop();

    //increase 'incr'
    a = a + incr;
    c++;
  }


  for (int i = 0; i < height*10; i++) {
    rand = random(300);    
    pos = sin(rand);

    colorMode(HSB);
    noStroke();
    fill(rand, 168);

    //draw diagonal moving dots  
    circle(pos*rand*1000, pos*rand*1000, random(30));

    //draw random rectangles
    rect(i, pos*rand*100, random(100), random(100));
  }


  //draw an arc every other quarter pi
  for (int i=0; i < 20; i++) {
    for (int k=0; k < 20; k++) {
      if ( (k % 2) == 0) {
        colorMode(HSB);
        noStroke();
        fill(255, 3);
        arc(width/2, height/2, 330, 330, QUARTER_PI *k/2, QUARTER_PI *(1 +k)/2);
      } else {
        colorMode(HSB);
        noStroke();
        fill(255, 3);
        arc(width/2, height/2, 300, 300, QUARTER_PI *k/2, QUARTER_PI *(1 +k)/2);
      }
    }
  }


  //draw quad shape in the middle
  for (int j=0; j < 2; j++) {
    colorMode(HSB);
    noStroke();
    fill(rand, rand, rand);
    quad(width/3, height/2, width/2, height/3, width/3*2, height/2, width/2, height/3*2);
  }


  ////draw sine in the middle
  //push();
  //translate(width/2, height/2);
  //rotate(rev);
  //rev++;
  //for (int t=0; t < 600; t++) {
  //  stroke(255);
  //  fill(255);

  //  line(0, 0, 0, 100 + sin(c) *40);
  //  point(100 + sin(c) *40, 0);

  //  //increase 'incr'
  //  c = c + t;
  //}
  //pop();


  //draw circle in the middle with arc
  for (int k=0; k < 10; k++) {
    fill(0, 50);
    noStroke();
    //fill(rand, rand, rand, 50);
    arc(width/2, height/2, 200, 200, 0, QUARTER_PI *k);
  }

  //print frame count
  println(frameCount);
  
  ////img for vid
  //if (frameCount < 200) {
  //  saveFrame("images/proj1-######.png");
  //} else {
  //  exit();
  //}
 
}
