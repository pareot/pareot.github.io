PFont f;
int k = 70;
int h = 25;
float r = 4.7;
import processing.pdf.*;
int counter = 0;
float rev1 = PI;
float rev2 = PI/4*5;
float rev3 = PI;

void setup () {
  size(700, 700);
  background(255);
  smooth();
  frameRate(12);

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
  color yl = color(255, 255, 0);
  color bl = color(0, 0, 255);
  color lm = color(255, 250, 205);
  
  
  //draw a square as bg
  plRect(width/2, height/2, width, height, lm, 255);


  //draw clock's body
  plRect(width/2, height/2 +k, width/2, height/2, br, 255);    

  //draw clock's roof
  plQd(width/4 -k, height/4 +k,    width/2, 0,    width/4*3 +k, height/4 +k,    width/2, height/4 +k,    br, 255);
  
  //draw deco - space between plank
  push();
  translate(width/2, height/2);
  plRect(0, -k*3, width/3, 3, 0, 255);
  plRect(0, -k*2, width/2, 3, 0, 255);
  plRect(0, -k, width/2, 3, 0, 255);
  plRect(0, 0, width/2, 3, 0, 255);
  plRect(0, +k, width/2, 3, 0, 255);
  plRect(0, +k*2, width/2, 3, 0, 255);
  plRect(0, +k*3, width/2, 3, 0, 255);
  pop();

  //draw face
  plCir(width/2, height/2 +k, width/2 -h*2, height/2 -h*2, wt, 255);
  plCir(width/2, height/2 +k, width/2 -k, height/2 -k, 0, 200);  
  
  //scaling 
  push();
  translate(width/2, height/4);
  scale(1, 0.5);
  plCir(0, 0, -k, -k, 0, 255);  
  plCir(0, 0, -k-10, -k -10, lm, 200);  
  //scale(0.2);
  //plArms(0, 0, 100, 100, 15, 0);
  //plArms(0, 0, 100, 100, 15, PI/4);
  //plArms(0, 0, 100, 100, 15, PI/2);
  //plArms(0, 0, 100, 100, 15, PI/4*3);
  //plArms(0, 0, 100, 100, 15, PI);
  //plArms(0, 0, 100, 100, 15, PI/4*5);
  //plArms(0, 0, 100, 100, 15, PI/4*6);
  //plArms(0, 0, 100, 100, 15, PI/4*7);  
  scale(0.5);
  plNums("TWELVES", 0, 0 -h, 0);
  plNums("SIX", 0, 0 +h, 0);
  plNums("THREE", 0 +h, 0, 0);
  plNums("NINE", 0 -h, 0, 0);  
  pop();

  //draw numbers display
  textAlign(CENTER, CENTER);
  plNums("TWELVES", width/2, height/2 -k +h, 255);
  plNums("WELVE", width/2, height/2 -k + h*2, 255);
  plNums("SIX", width/2, height/2 +k*3 -h, 255);
  plNums("THREE", width/2 +k + h, height/2 +k, 255);
  plNums("NINE", width/2 -k -h, height/2 +k, 255);

  //draw rotating arms
  //minute arm
  push();
  translate(width/2, height/2 +k);
  plArms(0, 0, 50 +k/2, 50 +k/2, 5, rev1);
  rev1++;
  pop();
  
  //hour arm
  push();
  translate(width/2, height/2 +k);
  plArms(0, 0, 50 +k/7, 50 +k/7, 7, rev2);  
  //draw blue circle
  translate(50 +k/7 -10, 50 +k/7 -10);  
  plCir(0, 0, width/2 -k*r -3, height/2 -k*r -3, bl, 255);
  
  //draw smaller, white circle
  rotate(rev3);  
  //plArms(0, 0,   0, +20,   3, rev3);
  plCir(0, +20, width/2 -k*r -10, height/2 -k*r -10, wt, 255);
  rev3--;
  
  //mechanic for hour arm
  for (int i = 0; i <= 200; i++) {
    if ( (counter % 60) == 0) {
      rev2--;
      counter = 0;
    } else {
      counter++;
      rev2+=0;
    }
  } 
  pop();  
  
  //draw deco - sun
  plCir(width/2, height/2 +k, width/2 -k*r +k/2, height/2 -k*r +k/2, yl, 200);
  plCir(width/2, height/2 +k, width/2 -k*r, height/2 -k*r, yl, 255);
  

  //draw roof's cast shadow
  //plQd(width/4 -k, height/4 +k,    width/2, +k,    width/4*3, height/4 +k,   width/4*3, height/4 +k*3,   0, 80);
  plQd(width/4 -k, height/4 +k,    width/2, 0,    width/4*3 +k, height/4 +k,    width/2, height/4 +k,    0, 80);
  plQd(width/4, height/4 +k,    width/2, height/2,    width/4*3, height/4 +k*4,    width/4*3, height/4+k,    0, 80);
  

  //draw left beam
  plQd(width/4 -k, height/4 +k,    width/2, 0,    width/2, +k,    width/4, height/4 +k,    br, 255);


  //draw right beam
  //plQd(width/2, +k,    width/2, 0,    width/4*3 +k, height/4 +k,    width/4*3, height/4 +k,    br, 255);
  push();
  translate(width/2, 0);
  rotate(PI/4);
  plQd(0, 0,    350, 0,    300, 50,   0, 50,    br, 255);
  pop();
  
  ////img for vid
  //if (frameCount < 201) {
  //  saveFrame("images/proj3-######.png");
  //} else {
  //  exit();
  //}
}

  //*****************
 //custom functions
//****************

//draw a triangle roof
void plRoof (int topX, int topY, int leftX, int leftY, int rightX, int rightY, color rf) {
  fill(rf);
  triangle(0 +topX, 0 +topY, 0 +leftX, 0 +leftY, 0 +rightX, 0 +rightY);
}

//draw a rectangle body shape
void plRect (int xpos, int ypos, int wAdj, int hAdj, color rec, int opa) {
  rectMode(CENTER);
  fill(rec, opa);
  rect(0 +xpos, 0 +ypos, 0 +wAdj, 0 +hAdj);
}

//draw a circle face
void plCir (int xpos, int ypos, float wAdj, float hAdj, color f, int opa) {
  noStroke();
  fill(f, opa);
  ellipse(0 +xpos, 0 +ypos, 0 +wAdj, 0 +hAdj);
}

//draw a quad
void plQd(int xpos1, int ypos1, int xpos2, int ypos2, int xpos3, int ypos3, int xpos4, int ypos4, color b, int opa) {
  fill(b, opa);
  noStroke();
  quad(xpos1, ypos1, xpos2, ypos2, xpos3, ypos3, xpos4, ypos4);
}

//set numbers for display funct
void plNums(String s, int locx, int locy, color n) {
  fill(n);
  text(s, locx, locy);
}

void plArms (int xpos1, int ypos1, int xpos2, int ypos2, int stWei, float theta) {
  rotate(0 +theta);
  strokeWeight(stWei);  
  stroke(255);
  line(0 +xpos1, 0 +ypos1, 0 +xpos2, 0 +ypos2);
}
