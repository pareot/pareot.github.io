
var gridarr = [
  [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
  [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

var gridarr2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// var gridarr2 = [
//   [AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE],
//   [AE, AE, AE, AE, AE, AE, AE, B, AE, AE, AE, AE, AE, AE, AE, AE],
//   [AE, AE, AE, AE, AE, AE, AE, B, AE, AE, AE, AE, AE, AE, AE, AE],
//   [AE, AE, AE, AE, AE, AE, AE, B, AE, AE, AE, AE, AE, AE, AE, AE],
//   [AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE],
//   [AE, AE, AE, AE, AE, AE, AE, B, AE, AE, AE, AE, AE, AE, AE, AE],
//   [AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE],
//   [AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE],
//   [AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE],
//   [AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE],
//   [AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE],
//   [AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE],
//   [AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE],
//   [AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE],
//   [AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE],
//   [AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE, AE],
// ];


var a = 0;
var b = 0;

function setup() {

  createCanvas(1200, 1200);

  background(50, 50, 50);
  textSize(30);

  //number array
  push();
  translate(0, 0);
  scale(0.5);
  for (var i = 0; i < gridarr.length; i++) {
    for (var j = 0; j < gridarr.length; j++) {
      a = gridarr[i][j];
      if (a == 1) {
        //blue dots
        noStroke();
        // fill(150, 150, 220);
        fill(50, 70, 90);
        ellipse((j * 30) + 15, (i * 30) + 15, 30, 30);
        // fill(100, 50, 220);
        fill(90, 90, 120);
        ellipse((j * 30) + 15, (i * 30) + 15, 20, 20);
        //text("FG",(j * 30) + 15, (i * 30) + 15);
      } else if (a == 0) {
        //green dots
        noStroke();
        fill(50, 100, 50);
        ellipse((j * 30) + 15, (i * 30) + 15, 30, 30);
        fill(99, 220 ,71);
        ellipse((j * 30) + 15, (i * 30) + 15, 20, 20);
        //rect((j * 30) + 15, (i * 30) + 15, 20, 20);
        // text("BG",(j * 30) + 15, (i * 30) + 15);
      } else {
        fill(0, 255, 0);
        ellipse((j * 30) + 15, (i * 30) + 15, 20, 20);
        // text("Beard",(j * 30) + 15, (i * 30) + 15);
      }
      // typical way of mapping out a grid (counter * scale) + offset
      // where counter is a var from the forloop
      // scale is value that will term the size/position of each drawing
      // offset is a relative movement to place
      // the grid collection around on the canvas
    }
  }
  pop();


  // //2nd number
  push();
  translate(width -240, 0);
  scale(0.5);
  for (var i = 0; i < gridarr.length; i++) {
    for (var j = 0; j < gridarr.length; j++) {
      a = gridarr[i][j];
      if (a == 1) {
        //blue dots
        noStroke();
        // fill(150, 150, 220);
        fill(50, 70, 90);
        ellipse((j * 30) + 15, (i * 30) + 15, 30, 30);
        // fill(100, 50, 220);
        fill(90, 90, 120);
        ellipse((j * 30) + 15, (i * 30) + 15, 20, 20);
        //text("FG",(j * 30) + 15, (i * 30) + 15);
      } else if (a == 0) {
        //green dots
        noStroke();
        fill(50, 100, 50);
        ellipse((j * 30) + 15, (i * 30) + 15, 30, 30);
        fill(99, 220 ,71);
        ellipse((j * 30) + 15, (i * 30) + 15, 20, 20);
        //rect((j * 30) + 15, (i * 30) + 15, 20, 20);
        // text("BG",(j * 30) + 15, (i * 30) + 15);
      } else {
        fill(0, 255, 0);
        ellipse((j * 30) + 15, (i * 30) + 15, 20, 20);
        // text("Beard",(j * 30) + 15, (i * 30) + 15);
      }
    }
  }
  pop();

  //3rd array
  push();
  translate(0, height -240);
  scale(0.5);
  for (var i = 0; i < gridarr.length; i++) {
    for (var j = 0; j < gridarr.length; j++) {
      a = gridarr[i][j];
      if (a == 1) {
        //green dots
        noStroke();
        // fill(150, 150, 220);
        fill(50, 100, 50);
        ellipse((j * 30) + 15, (i * 30) + 15, 30, 30);
        // fill(100, 50, 220);
        fill(0, 255, 0);
        ellipse((j * 30) + 15, (i * 30) + 15, 20, 20);
        //text("FG",(j * 30) + 15, (i * 30) + 15);
      } else if (a == 0) {
        //blue dots
        noStroke();
        fill(50, 70, 90);
        ellipse((j * 30) + 15, (i * 30) + 15, 30, 30);
        fill(99, 220 ,71);
        ellipse((j * 30) + 15, (i * 30) + 15, 20, 20);
        //rect((j * 30) + 15, (i * 30) + 15, 20, 20);
        // text("BG",(j * 30) + 15, (i * 30) + 15);
      } else {
        fill(90, 90, 120);
        ellipse((j * 30) + 15, (i * 30) + 15, 20, 20);
        // text("Beard",(j * 30) + 15, (i * 30) + 15);
      }
    }
  }
  pop();

  //4th array
  push();
  translate(width -240, height -240);
  scale(0.5);
  for (var i = 0; i < gridarr.length; i++) {
    for (var j = 0; j < gridarr.length; j++) {
      a = gridarr[i][j];
      if (a == 1) {
        //green dots
        noStroke();
        // fill(150, 150, 220);
        fill(50, 100, 50);
        ellipse((j * 30) + 15, (i * 30) + 15, 30, 30);
        // fill(100, 50, 220);
        fill(0, 255, 0);
        ellipse((j * 30) + 15, (i * 30) + 15, 20, 20);
        //text("FG",(j * 30) + 15, (i * 30) + 15);
      } else if (a == 0) {
        //blue dots
        noStroke();
        fill(50, 70, 90);
        ellipse((j * 30) + 15, (i * 30) + 15, 30, 30);
        fill(99, 220 ,71);
        ellipse((j * 30) + 15, (i * 30) + 15, 20, 20);
        //rect((j * 30) + 15, (i * 30) + 15, 20, 20);
        // text("BG",(j * 30) + 15, (i * 30) + 15);
      } else {
        fill(90, 90, 120);
        ellipse((j * 30) + 15, (i * 30) + 15, 20, 20);
        // text("Beard",(j * 30) + 15, (i * 30) + 15);
      }
    }
  }
  pop();


  //text array
  push();
  translate(width/2, height/2);
  scale(0.5);
  for (var k = 0; k < gridarr2.length; k++) {
    for (var g = 0; g < gridarr2.length; g++) {
      b = gridarr2[g][k];
      if (b == 1) {
        noStroke();
        fill(255, 0, 0);
        text("AE",(g * 30) + 15, (k * 30) + 15);
      } else if (b == 0) {
        noStroke();
        fill(0, 255, 0);
        text("B",(g * 30) + 15, (k * 30) + 15);
      }
    }
  }
  pop();

  //2nd text
  push();
  translate(width/2, height/2 -300);
  rotate(PI/4);
  for (var k = 0; k < gridarr2.length; k++) {
    for (var g = 0; g < gridarr2.length; g++) {
      b = gridarr2[g][k];
      if (b == 1) {
        noStroke();
        fill(255, 0, 0);
        text("AE",(g * 30) + 15, (k * 30) + 15);
      } else if (b == 0) {
        noStroke();
        fill(0, 255, 0);
        text("B",(g * 30) + 15, (k * 30) + 15);
      }
    }
  }
  pop();

  //3rd text
  push();
  translate(width/2, height/2);
  rotate(PI/2);
  scale(0.5);
  for (var k = 0; k < gridarr2.length; k++) {
    for (var g = 0; g < gridarr2.length; g++) {
      b = gridarr2[g][k];
      if (b == 1) {
        noStroke();
        fill(255, 0, 0);
        text("AE",(g * 30) + 15, (k * 30) + 15);
      } else if (b == 0) {
        noStroke();
        fill(0, 255, 0);
        text("B",(g * 30) + 15, (k * 30) + 15);
      }
    }
  }
  pop();

  //4th text
  push();
  translate(width/2, height/2);
  rotate(PI);
  scale(0.5);
  for (var k = 0; k < gridarr2.length; k++) {
    for (var g = 0; g < gridarr2.length; g++) {
      b = gridarr2[g][k];
      if (b == 1) {
        noStroke();
        fill(255, 0, 0);
        text("AE",(g * 30) + 15, (k * 30) + 15);
      } else if (b == 0) {
        noStroke();
        fill(0, 255, 0);
        text("B",(g * 30) + 15, (k * 30) + 15);
      }
    }
  }
  pop();








}
