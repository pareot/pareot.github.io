var img;
var initials ='phle'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = "green"; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
  img = loadImage('https://raw.githubusercontent.com/pareot/pareot.github.io/master/art74_phle_photoshop/avatar_pareot.png');  // 'avatar_pareot.png' needs to be next to this .js file
// you can ALSO link to an image on your github account
}


function setup() {
createCanvas(windowWidth, windowHeight);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function

 if (toolChoice == '1' ) {  // first tool

    stroke("white");
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '2') { // second tool

    stroke("black");
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // third tool

    stroke("gray");
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') { // fourth tool

    stroke("red");
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // this tool calls a function // fifth tool - AKA: testbox

    stroke("blue");
    testbox();
    // make testbox do something!
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') { // sixth tool

    stroke(200, 0, 0);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '7') { // seventh tool

    fill(100, 200, 100);
    image(img, mouseX, mouseY, 120, 120);
  } else if (toolChoice == '8') { // eighth tool

    noStroke();
    fill(200, 100, 0, 80);
    circle(mouseX, mouseY, 120, 120);
  } else if (toolChoice == '9') { // ninth tool

    noStroke();
    fill(0, 100, 200, 80);
    rect(mouseX, mouseY, 140, 140);
  } else if (toolChoice == '0') { // tenth tool - random

    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded

    image(img, mouseX, mouseY);
  } else if(toolChoice == "e" || toolChoice == "E") { // eleventh tool - eraser

    noStroke();
    fill(screenbg);
    circle(mouseX, mouseY, 70);
  } else if(toolChoice == "x" || toolChoice == "X") {

    background(screenbg);
  }

 }

function testbox() {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(200, 20, 20);
  rect(30+x, 120+y, 100, 100);
  fill(20, 20, 200);
  rect(x-34, y-56, 100, 100);
  fill(20, 20, 20);
  rect(x,y,x+34, y+20);
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 's' || key == 'S') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second

}
