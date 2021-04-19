
var blob;

var nameList = ["phuc", "cris", "jeff", "lc", "yeab"];
var jsonList = [0, 1, 2, 3, 4];

var whichJ = 0;

var sx = 0;
var sy = 0;

function preload() {
  jsonList[0] = loadJSON("ple.json");
  jsonList[1] = loadJSON("cris.json");
  jsonList[2] = loadJSON("jeff.json");
  jsonList[3] = loadJSON("lc.json");
  jsonList[4] = loadJSON("yeab.json");
  // blob = loadJSON("ple.json");
}

function setup() {
  createCanvas(400,400);
  background(0);
  rectMode(CENTER);

  blob = jsonList[whichJ];

  // this shows the whole blob json data package
  console.log(blob);
  noStroke();

}


//visual
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


//switch display
function keyPressed() {
  if (key == ' ') {
    console.log("SPACE");

    if (whichJ === 0) {
      whichJ =1;
      blob = jsonList[whichJ];
    } else if (whichJ === 1) {
      whichJ =2;
      blob = jsonList[whichJ];
    } else if (whichJ === 2) {
      whichJ =3;
      blob = jsonList[whichJ];
    } else if (whichJ === 3) {
      whichJ =4;
      blob = jsonList[whichJ];
    } else {
      whichJ =0;
      blob = jsonList[whichJ];
    }
  }

  function drawChosenOne() {
    var name = nameList[whichJ];
    fill(0);
    rect(0, 0, 50, 20);
    fill(255);
    text(name, 10, 20);
  }
}
