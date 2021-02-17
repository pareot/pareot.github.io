float rand = 0;
float pos = 0;
int counter = 0;

void setup() {
  size(500, 500);
  background(0);
  frameRate(10);
}

void draw() {  
  noStroke();

  cursor(CROSS);

  if (mousePressed == true) {
    background(random(0, 255));
  }

  for (int i = 0; i < height*10; i++) {
    rand = random(300);
    pos = sin(rand);
    fill(rand);
    circle(pos*rand*1000, pos*rand*1000, random(30));
    rect(i, pos*rand*100, random(100), random(100));
    //arc(width/2, height/2, 500, 500, 0, QUARTER_PI);
  }
  for (int j=0; j < height*10; j++) {
    fill(rand, 5);
    quad(width/3, height/2, width/2, height/3, width/3*2, height/2, width/2, height/3*2);
  }
  println(frameCount);
}
