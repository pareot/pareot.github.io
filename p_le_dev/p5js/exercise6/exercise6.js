var currentkey;
var bRad;
var pulseOpa;

//color setup
var bg;
var rd;
var yl;
var bl;


function setup () {
  createCanvas(1200, 1200);

  smooth();


  currentkey = '1';
  bRad = 5;
  pulseOpa = 5;

  bg = color(255);
  rd = color(255, 0, 0);
  yl = color(255, 255, 0);
  bl = color(0, 0, 255);


  background(bg);

}

function draw () {
  //clear page function
  if (keyIsPressed) {
    clearPrint();
  }

  //triggering the newkeychoice
  if (mouseIsPressed) {
    chooseBrushes();
  }

  ////img for vid
  //if (frameCount < 600) {
  //  saveFrame("images/proj101-######.png");
  //} else {
  //  exit();
  //}
}

//CREATE***
//MANY******
//BRUSHES****
function chooseBrushes() {
  var currentkey = key;

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
    //atom stamp
    atomStamp();
    break;

    case 'r':
    //red water color
    //var: color and opacity
    waterColor(255, 0 , 0, 5);
    // waterColor(rd, 5);
    break;

    case 'y':
    //red water color
    //var: color and opacity
    waterColor(255, 255, 0, 5);
    // waterColor(yl, 5);
    break;

    case 'b':
    //red water color
    //var: color and opacity
    waterColor(0, 0, 255, 3);
    // waterColor(bl, 3);
    break;

    case '8':
    //clock line
    break;

    case '9':
    //disintegrated line
    break;
  }
}

//MECHANICS
//FOR
//APP

function drawLine( t) {

  push();
  strokeWeight(t);
  stroke(0);
  line(mouseX, mouseY, pmouseX, pmouseY);
  pop();
}

function eraser () {

  push();
  ellipseMode(CENTER);
  noStroke();
  fill(bg);

  ellipse(mouseX, mouseY, 50, 50);
  pop();
}


function normalBrush () {
  //your typical brush

  push();
  strokeWeight(bRad);
  stroke(0);
  line(mouseX, mouseY, pmouseX, pmouseY);
  line(mouseX +1, mouseY +1, pmouseX, pmouseY);
  line(mouseX -1, mouseY -1, pmouseX, pmouseY);

  if (bRad < 10) {
    bRad++;
  }
  if (bRad == 10 || bRad > 10) {
    bRad = 0;
  }
  pop();
}


function waterColor( c1, c2, c3,  opa) {
// function waterColor( c,  opa) {
  noStroke();
  //stroke(1);
  fill(c1, c2, c3, opa);
  // fill(c, opa);
  ellipseMode(CENTER);
  ellipse(mouseX, mouseY, 100, 100);
}

function randomDrips ( r,  rd,  gr,  bl,  low) {
  //int r determine the size of the brush stroke
  //this brush will fill the area with random ellipses; the area of effect is determined by the integer r.


  push();
  fill(random(rd -low), random(gr -low), random(bl -low) );
  ellipse(mouseX + random(-r, r), mouseY + random(-r, r), random(5), random(5));
  ellipse(mouseX + random(-r, r), mouseY + random(-r, r), random(10), random(10));
  ellipse(mouseX + random(-r, r), mouseY + random(-r, r), random(15), random(15));
  ellipse(mouseX + random(-r, r), mouseY + random(-r, r), random(20), random(20));
  ellipse(mouseX + random(-r, r), mouseY + random(-r, r), random(5), random(5));
  pop();
}


function atomStamp () {
  //this brush acts like a stamp
  //you cannot draw it consecutively
  //integer r determine the size of the atom shape and its halo; the halo is always larger than the atom


  push();

  var lightBl = color (135, 206, 250);
  var blVio = color(138, 43, 226);
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
  stroke(blVio, 5);
  line(mouseX, mouseY, pmouseX, pmouseY);

  if (pulseOpa < 50) {
    pulseOpa++;
  }
  if (pulseOpa == 50 || pulseOpa > 50) {
    pulseOpa = 0;
  }
  pop();


  //delay(500);
}


//clear or print function
function clearPrint() {
  if (key == 'n' || key == 'N') {
    background(bg);
  } else if (key == 'p' || key == 'P') {
    saveFrame("ple_101_####.png");
    delay(500);
  }
}
