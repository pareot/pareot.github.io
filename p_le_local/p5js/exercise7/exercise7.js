// example #7.2
       // this is a 7x7 array
       var gridarr = [
       [0, 0, 0, 0, 0, 0, 0],
       [0, 0, 1, 0, 1, 0, 0],
       [0, 0, 1, 0, 1, 0, 0],
       [0, 0, 0, 1, 0, 0, 0],
       [0, 1, 0, 1, 0, 1, 0],
       [0, 0, 1, 2, 1, 0, 0],
       [0, 0, 2, 2, 2, 0, 0]
       ];

       var a = 0;

       function setup() {

       createCanvas(240, 240);

       background(120);
       textSize(30);
       for (var i = 0; i < 7; i++) {

               for (var j = 0; j < 7; j++) {
                 a = gridarr[i][j];
                     if (a === 1) {
                       fill(255, 0, 0);
                       ellipse((j * 30) + 15, (i * 30) + 15, 30, 30);
                       //text("FG",(j * 30) + 15, (i * 30) + 15);
                     } else if (a == 0) {
                       fill(0, 0,255);
                       //rect((j * 30) + 15, (i * 30) + 15, 20, 20);
                       text("BG",(j * 30) + 15, (i * 30) + 15);
                     } else {
                       fill(0);
                       ellipse((j * 30) + 15, (i * 30) + 15, 20, 20);
                       text("Beard",(j * 30) + 15, (i * 30) + 15);


                     }




                 // typical way of mapping out a grid (counter * scale) + offset
                 // where counter is a var from the forloop
                 // scale is value that will term the size/position of each drawing
                 // offset is a relative movement to place
                 // the grid collection around on the canvas


               }
           }





       }
