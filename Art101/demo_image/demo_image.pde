int gSize = 50;
PImage b;
PImage b2;

void setup() { 
  size(800, 800); 
  background(0);
  noStroke();  
  // Load in 2 different images and name them below
  // Images must be in the "data" directory to load correctly
  b = loadImage("image1.png"); 
  b2 = loadImage("image2.jpg");
} 

void draw() { 

  if (!mousePressed) {
    noTint();
    image(b, 0, 0, width/2, height/2);
    image(b2, width/2, height/2, width/2, height/2);
  } else {

    int checkCounter = 0; 

    for ( int i = 0; i < height; i+= gSize) {

      // add extra count to make it offset in the next row
      checkCounter++;

      for ( int j = 0; j < width; j+=(gSize) ) {  
        
           // mod operator  %  
        if ( (checkCounter % 2) == 0 ) {
          tint(255, 0, 0);
          image(b2, j, i, gSize, gSize);
        } else {
          tint(255, 40);  // Apply transparency without changing color
          image(b, j, i, gSize, gSize);
        }
        checkCounter++;
      }
    }
  }
}
