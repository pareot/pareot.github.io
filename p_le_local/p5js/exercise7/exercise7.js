
var gridarr = [
  [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
];

var a = 0;

function setup() {

  createCanvas(800, 800);

  background(50, 50, 50);
  textSize(30);

  push();
  translate (150, 150)
  rotate(PI/4);
  pop();

  push();
  translate(150, 150);
  for (var i = 0; i < gridarr.length; i++) {

    for (var j = 0; j < gridarr.length; j++) {
      a = gridarr[i][j];
      if (a == 1) {
        fill(34, 139, 34);
        ellipse((j * 30) + 15, (i * 30) + 15, 30, 30);
        //text("FG",(j * 30) + 15, (i * 30) + 15);
      } else if (a == 0) {
        fill(255, 99 ,71);
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





}
