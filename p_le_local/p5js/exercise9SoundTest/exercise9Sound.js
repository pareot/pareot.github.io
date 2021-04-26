let song;

function preload() {
  song = loadSound('sounds/crack.mp3');
  song1 = loadSound('sounds/fourTap.mp3');
  song2 = loadSound('sounds/oneTap.mp3');
}

function setup() {
  createCanvas(710, 200);
  // song.loop(); // song is ready to play during setup() because it was loaded during preload
  background(0, 255, 0);
}

function mousePressed() {
  song.play();
}

function keyPressed () {
  if (key == 't' || key == 'T') {
    song1.play();
  } else if (key == "b" || key == "B") {
    song2.play();
  }

  // for (var i = 0; i < 5; i++) {
  //   if (i%2 == 0) {
  //     background(0, 0, 0);
  //   } else {
  //     background(255, 255, 255);
  //   }
  // }
}




// Intro scene constructor function
// function Intro()
// {
//     this.setup = function() {
//     }
//
//     this.draw = function() {
//     }
//
//     this.keyPressed = function() {
//         // switch the scene
//         this.sceneManager.showScene( Game );
//     }
// }
//
// // Main games scene constructor function
// function Game()
// {
//     this.setup = function() {
//     }
//
//     this.draw = function() {
//     }
// }
