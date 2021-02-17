int counter = 0;


void setup() {
  size(200,200); 
}



void draw() {
  background(0);
  
   if (counter < 200) {  
    fill(255,0,0);
    rect(width/2,0,20,20);
    
      if (true) {
        fill(255,0,255);
        rect(width/2,150,20,20);
      }
    
    
    
   } else {
    fill(0,255,0);
    rect(width/2,height/2,20,20);   
   }
  
  counter++;
  println(counter);
  
  
}  
