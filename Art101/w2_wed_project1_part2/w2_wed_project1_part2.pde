float rand = 0;
float pos = 0;
int counter = 0;
float a =0;
float b=0;

void setup() {
  size(500, 500);
  smooth();
  background(0);
  frameRate(10);
  colorMode(HSB);
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
    //circle(pos*rand*1000, pos*rand*1000, random(30));
    //rect(i, pos*rand*100, random(100), random(100));
  }
  for (int j=0; j < 2; j++) {
    fill(rand, 5);
    quad(width/3, height/2, width/2, height/3, width/3*2, height/2, width/2, height/3*2);
  }

  for (int k=0; k < 3.14 *3; k++) {
    for (int l=0; l < 3.14 *3; l++){
    fill(200, 200, 100, 50);
    arc(width/2, height/2, 300, 300, 0, k);
  }
}
  println(frameCount);
}
