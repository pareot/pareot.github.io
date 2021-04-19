
var blob;
var sx = 0;
var sy = 0;

var nameList = ["me", "cris", "jeff", "lc", "yeab"];
ver jsonList = [0, 1, 2, 3, 4];

var whichJ = 0;


function preload() {
  blob = loadJSON("ple.json");
}

function setup() {
  createCanvas(400,400);
  background(0);
  rectMode(CENTER);

  // this shows the whole blob json data package
  console.log(blob);
  noStroke();

}



function draw() {
  background(0);

  updateToon(blob.toons[0]);  // Red
  updateToon(blob.toons[1]);  // Line
  updateToon(blob.toons[2]);  // Box
  updateToon(blob.toons[3]);  // Peanut


}



function updateToon(obj) {

  push();

  if ( int(random(10)) > 8) {
    obj.nextX = int(random(obj.moveX.length));
    obj.nextY = int(random(obj.moveY.length));
  }

  obj.posX += obj.moveX[obj.nextX];
  obj.posY += obj.moveY[obj.nextY];


  // console.log(obj.posX);

  if (obj.posX > width) {
    obj.posX = 0;
  }

  if (obj.posX < 0) {
    obj.posX = width;
  }

  if (obj.posY > height) {
    obj.posY = 0;
  }

  if (obj.posY < 0) {
    obj.posY = height;
  }

  drawToon(obj);

  pop();
}

if (whichJ === 0) {
  whichJ =1;
  blob = jsonList[which];
}




function drawToon(obj) {

  //  console.log(obj.posX[s]);

  push();
  translate(obj.posX , obj.posY);
  // head
  fill(obj.r,obj.g,obj.b);
  rect(0,20,obj.head,obj.head);
  // eyes
  fill(0);
  ellipse(-10,10,5,5);
  ellipse(10,10,5,5);
  //torso
  fill(obj.r,obj.g,obj.b);
  ellipse(0,70,obj.torso,obj.torso);

  //tie
  if(obj.tie == "yes") {
    fill(0);
    quad(0, +50, -5, +70, 0, +80, +5, +70);
  }
  //hair
  fill(obj.r -60, obj.g -70, obj.b -20);
  triangle(-25, 0, 25, 0, 25, +10);
  triangle(5, 0, -25, 0, -25, +10);
  //hat
  if(obj.hat == "yes") {
    fill(255);
    rect(0, -30, 20, 15);
    rect(0, -20, 50, 20);
  }
  //shoes
  fill(165, 42, 42);
  rect(-15, 100, 20, 10);
  rect(15, 100, 20, 10);
  //hands
  fill(obj.r,obj.g,obj.b);
  ellipse(-25, 70, 15, 15);
  ellipse(25, 70, 15, 15);

  //name
  fill(100, 200, 200);
  textSize(20);
  text(obj.name,-20,-40);

  pop();

}