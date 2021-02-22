// static mode example
//size(300, 300);

//for (int i = 0; i < 100; i+=20){
//  fill(100);
//  rect(i,0,8,40);
//}

//active mode example
int counter = 0;

void setup(){
  size(400,400);
  background(0);
  rect(20,20,20,20);
  
}

void draw (){
  ellipse(mouseX, mouseY, 20, 20);
  print(random(100));
  println( random(100) );
  fill(255, 0, 0);
  ellipse(20, counter, 50, 50);
  counter++;
  
}
