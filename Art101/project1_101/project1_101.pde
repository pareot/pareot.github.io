char currentkey = '1';
int bRad = 5;
int pulseOpa = 5;
color bg = color(255);

void setup () {
  size(1200, 1200);
  background(bg);
  smooth();
}

void draw () {
  //clear page function
  if (keyPressed) {
    clearPrint();
  }

  //triggering the newkeychoice
  if (mousePressed) {
    chooseBrushes();
  }
}

//CREATE*** 
//MANY******
//BRUSHES****
void chooseBrushes() {
  char currentkey = key;

  switch(currentkey) {
  case '1':
    //pen    
    drawLine(1);
    break;

  case '2':
    //big pen   
    drawLine(5);
    break;

  case '3':
    //brush     
    normalBrush();
    break;

  case '4':
    //eraser  
    eraser();
    break;

  case '5':
    //SMALL random drips of paint 
    randomDrips (20, 255, 255, 255, 175);
    break;  

  case '6':
    //random drips of paint  
    randomDrips(100, 175, 200, 150, 0);
    break;

  case '7':
    //clock line     
    break;

  case '8':
    //atom stamp
    atomStamp();
    break;

  case '9':
    //disintegrated line     
    break;
  }
}

//MECHANICS
//FOR
//APP

void drawLine(int t) {
  strokeWeight(t);
  line(mouseX, mouseY, pmouseX, pmouseY);  
}

void eraser () {
  ellipseMode(CENTER);
  noStroke();
  fill(bg);
  
  ellipse(mouseX, mouseY, 50, 50);
}


void normalBrush () {
  //your typical brush

  strokeWeight(bRad);
  line(mouseX, mouseY, pmouseX, pmouseY);

  if (bRad < 33) {
    bRad++;
  } if (bRad == 33 || bRad > 33) {
    bRad = 0;
  }
}


void randomDrips (int r, int rd, int gr, int bl, int low) {
  //int r determine the size of the brush stroke
  //this brush will fill the area with random ellipses; the area of effect is determined by the integer r.


  fill(random(rd -low), random(gr -low), random(bl -low) );
  ellipse(mouseX + random(r), mouseY + random(r), random(5), random(5));
  ellipse(mouseX + random(r), mouseY + random(r), random(10), random(10));
  ellipse(mouseX + random(r), mouseY + random(r), random(15), random(15));
  ellipse(mouseX + random(r), mouseY + random(r), random(20), random(20));
  ellipse(mouseX + random(r), mouseY + random(r), random(5), random(5));
}


void atomStamp () {
  //this brush acts like a stamp
  //you cannot draw it consecutively
  //integer r determine the size of the atom shape and its halo; the halo is always larger than the atom

  color lightBl = color (135, 206, 250);
  color blVio = color(138, 43, 226);  
  noStroke();
  fill(lightBl);

  //atom
  ellipseMode(CENTER);

  //1st ellipse  
  ellipse(mouseX, mouseY, 5, 50);
  //2nd
  push();
  translate(mouseX, mouseY);
  rotate(PI/4);
  ellipse(0, 0, 5, 50);
  pop();
  //3rd
  push();
  translate(mouseX, mouseY);
  rotate(PI/4);
  ellipse(0, 0, 5, 50);
  pop();
  //4th
  push();
  translate(mouseX, mouseY);
  rotate(PI/2);
  ellipse(0, 0, 5, 50);
  pop();
  //5th
  push();
  translate(mouseX, mouseY);
  rotate(PI/4*3);
  ellipse(0, 0, 5, 50);
  pop();
  //6th
  push();
  translate(mouseX, mouseY);
  rotate(PI);
  ellipse(0, 0, 5, 50);
  pop();

  //halo
  strokeWeight(pulseOpa);
  stroke(blVio, 128);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
  if (pulseOpa < 50) {
    pulseOpa++;
  } if (pulseOpa == 50 || pulseOpa > 50) {
    pulseOpa = 0;
  }


  //delay(500);
}


//clear or print function
void clearPrint() {
  if (key == 'n' || key == 'N') {
    background(bg);
  } else if (key == 'p' || key == 'P') {
    saveFrame("ple_101_####.png");
    delay(500);
  }
}
