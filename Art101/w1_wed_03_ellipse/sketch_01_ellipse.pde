int counter = 0;
int counter2 = 300;

void setup() {
  size(600,600);
  background(0);   // 0-255
  fill(255,0,0);
  
}

void draw() {
  // (x,y,width,height)
  //ellipse(50,50,10,10);
  //ellipse(counter,50,20,20);
  fill(255,0,0);
  //ellipse(counter,mouseY,20,20);
  ellipse(counter,mouseY,20,20);
  
  //rect(0,0,30,30);
  //rect(width-30, height-30, 30, 30);
  //rect(width/2 -15, height/2 -15, mouseX, counter +mouseY);
  rect(counter2, height/2 -40, mouseX, counter);
  
  //print(random(100));
  println(counter); 
  //println(random(counter)); 
  counter++;
  counter2--;
  
  if (counter > 300) {
    counter = 0;
  }
  
  if (counter2 < 0) {
    counter2 = 300;
  }
}
