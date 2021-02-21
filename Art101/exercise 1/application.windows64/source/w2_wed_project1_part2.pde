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
  

  for (int i = 0; i < height*10; i++) {
    rand = random(300);
    pos = sin(rand);
    fill(rand);
    circle(pos*rand*1000, pos*rand*1000, random(30));
    rect(i, pos*rand*1000, random(100), random(100));
  }
}
