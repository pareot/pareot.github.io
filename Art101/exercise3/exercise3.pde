PFont f;
int k = 70;
int h = 25;
float r = 4.5;
import processing.pdf.*;
int counter1 = 0;
int counter2 = 0;

void setup () {
  size(700, 700);
  background(255);
  smooth();

  //create font
  f = createFont ("Webdings", 24);
  //set font for drawing
  textFont(f);

  noStroke();
  fill(255);  

  //draw mode
  ellipseMode(CENTER);
  //rectMode(CENTER);
}

void draw () {
  plClock();
}

void plClock() {  
  color wt = color(255, 255, 255);
  color br = color(139, 69, 19);
  
  
  //draw a white square as bg
  plRect(0, 0, width, height, wt);

  //draw clock's body
  plRect(0, +k, 0, 0, br);    

  //draw clock's roof
  plQd(width/4 -k, height/4 +k,    width/2, 0,    width/4*3 +k, height/4 +k,    width/2, height/4 +k,    br, 255);

  //draw face
  plCir(0, +k, -k, -k, wt);

  //draw numbers display
  textAlign(CENTER, CENTER);
  plNums("TWELVES", width/2, height/2 -k +h, 0);
  plNums("SIX", width/2, height/2 +k*3 -h, 0);
  plNums("THREE", width/2 +k + h, height/2 +k, 0);
  plNums("NINE", width/2 -k -h, height/2 +k, 0);

  //draw rotating arms
  push();
  translate(width/2, height/2);
  

  //draw deco
  plCir(0, +k, -k*r, -k*r, br);

  //draw roof's cast shadow
  plQd(width/4 -k, height/4 +k,    width/2, +k,    width/4*3, height/4 +k,   width/4*3, height/4 +k*3,   0, 80);

  //draw left beam
  plQd(width/4 -k, height/4 +k,    width/2, 0,    width/2, +k,    width/4, height/4 +k,    br, 255);

  //draw right beam
  plQd(width/2, +k,    width/2, 0,    width/4*3 +k, height/4 +k,    width/4*3, height/4 +k,    br, 255);
}

  //*****************
 //custom functions
//****************

//draw a triangle roof
void plRoof (int leftX, int leftY, int rightX, int rightY, color rf) {
  fill(rf);
  triangle(width/2, 0, width/4 + leftX, height/4 + leftY, width/4*3 + rightX, height/4 + rightY);
}


//draw a rectangle body shape
void plRect (int xpos, int ypos, int wAdj, int hAdj, color bd) {
  rectMode(CENTER);
  fill(bd);
  rect(width/2 + xpos, height/2 + ypos, width/2 +wAdj, height/2 +hAdj);
}

//draw a circle face
void plCir (int xpos, int ypos, float wAdj, float hAdj, color f) {
  fill(f);
  ellipse(width/2 + xpos, height/2 + ypos, width/2 + wAdj, height/2 + hAdj);
}

//draw a quad
void plQd(int xpos1, int ypos1, int xpos2, int ypos2, int xpos3, int ypos3, int xpos4, int ypos4, color b, int opa) {
  fill(b, opa);
  quad(xpos1, ypos1, xpos2, ypos2, xpos3, ypos3, xpos4, ypos4);
}

//set numbers for display funct
void plNums(String s, int locx, int locy, color n) {
  fill(n);
  text(s, locx, locy);
}

void plArms () {
}

void plDeco () {
}

//void plDisplay(String ss, int locX, locY) {

//}
