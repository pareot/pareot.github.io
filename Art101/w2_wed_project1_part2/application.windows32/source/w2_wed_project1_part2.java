import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class w2_wed_project1_part2 extends PApplet {

float rand = 0;
float pos = 0;
int counter = 0;

public void setup() {
  
  background(0);

  frameRate(10);
}

public void draw() {


  noStroke();
  

  for (int i = 0; i < height*10; i++) {
    rand = random(300);
    pos = sin(rand);
    fill(rand);
    circle(pos*rand*1000, pos*rand*1000, random(30));
    rect(i, pos*rand*1000, random(100), random(100));
  }
}
  public void settings() {  size(500, 500); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "--present", "--window-color=#666666", "--stop-color=#cccccc", "w2_wed_project1_part2" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
