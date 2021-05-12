
let loy= 0;


function intro()  {


  this.setup = function() {
    console.log("We are at setup for scene1");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    textAlign(CENTER);
    textSize(29);
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
    console.log("We are at entering scene1");
    // textX = 10;
    // textY = 0;
    loy = 100;
    background("white");

    if (snd1.isPlaying()) {
      // .isPlaying() returns a boolean
      snd1.pause(); // .play() will resume from .pause() position
      //  background(255, 0, 0);
    } else {
      snd1.play();
      //background(0, 255, 0);
    }
  }


  this.draw = function()
  {
    image(img6,0,0,width,height);

    //UI layout
    fill(39, 178, 255);
    // rect(0, height/4*3, width, height/4);



    // gren.attraction(0.2, mouseX, mouseY);
    // gren.maxSpeed = 5;
    //draw the sprite
    drawSprites();


    textAlign(CENTER);
    textSize(29);

    push();
    //
    translate(width/2,loy*3);
    fill(100, 255, 250);
    text("Scene 1 works...", 0, 100);
    text("Click to Continue", 0, 150);



    if (loy > 255) {
      loy = 0;
    } else {
      loy++;
    }
    pop();
  }


  this.mousePressed = function()
  {

    this.sceneManager.showScene(scene2);
  }
}















///////////////////////  2  ////////////////////////

function scene2()  {
  let octo1,octo2;

  this.setup = function() {
    background(0);
    console.log("We are at setup for scene2");
    octo1 = new Octopi(400,600,color(255,0,0),.40);
    octo2 = new Octopi(650,200,color(0,0,0),.10);
  }

  this.enter = function()
  {
    snd1.pause();
    snd3.pause();
    console.log("We are at  scene2 (again?)");
    //  snd2.loop();

    if (snd1.isPlaying()) {
      // .isPlaying() returns a boolean
      snd1.pause(); // .play() will resume from .pause() position
      //  background(255, 0, 0);
    } else {
      snd2.play();
      //background(0, 255, 0);
    }
  }

  this.draw = function()
  {
    background(0);
    image(img2,0,0,width,height);

    background(0,0,255-loy);
    image(img2,0,0,width,height);

    textAlign(CENTER);
    textSize(29);
    // fill(200,0,0);

    push();
    //
    translate(width/2,loy*3);
    fill(100, 255, 250);
    text("Scene 2 works...", 0, 100);
    text("Click to Continue", 0, 150);
    // ellipse(0,0,30,30);
    if (loy < 0) {
      loy = 255;
    } else {
      loy--;
    }
    //
    pop();

    octo1.update();
    octo1.display();
    octo2.update();
    octo2.display();
  }

  this.mouseDragged = function() {
    console.log("mouseDragged");
    octo1.moveupdate(mouseX,mouseY-40);
    octo2.moveupdate(650,200);
  }

  //moving to next scene
  this.mousePressed = function()
  {

    //console.log("exit");
    this.sceneManager.showNextScene();
  }
}












////////////////////////////// 3 /////////////////

function scene3() {

  let loy= 255;

  this.setup = function()  {
    console.log("We are at setup for scene3");




  }

  this.enter = function()  {
    snd1.pause();
    snd2.pause();

    let loy= 255;
    console.log("We are entering scene3");


    //  snd2.loop();

    if (snd3.isPlaying()) {
      // .isPlaying() returns a boolean
      snd3.pause(); // .play() will resume from .pause() position
      //  background(255, 0, 0);
    } else {
      snd3.play();
      //background(0, 255, 0);
    }
  }

  this.draw = function() {
    background(0,0,255-loy);
    image(img3,0,0,width,height);

    textAlign(CENTER);
    textSize(29);
    // fill(200,0,0);


    push();
    //
    translate(width/2,loy*3);
    fill(100, 255, 250);
    text("Scene 3 works...", 0, 100);
    text("Click to Continue", 0, 150);
    // ellipse(0,0,30,30);
    if (loy > 255) {
      loy = 0;
    } else {
      loy++;
    }
    //
    pop();
  }


  //moving to next scene
  this.mousePressed = function()
  {

    //console.log("exit");
    this.sceneManager.showNextScene();
  }
}



















////////////////////////////// 4 /////////////////

function scene4() {

  let loy= 255;

  this.setup = function()  {
    console.log("We are at setup for scene4");




  }

  this.enter = function()  {
    snd1.pause();
    snd2.pause();
    snd3.pause();

    let loy= 255;
    console.log("We are entering scene4");


    //  snd2.loop();

    if (snd3.isPlaying()) {
      // .isPlaying() returns a boolean
      snd3.pause(); // .play() will resume from .pause() position
      //  background(255, 0, 0);
    } else {
      snd4.play();
      //background(0, 255, 0);
    }
  }

  this.draw = function() {
    background(0,0,255-loy);
    image(img4,0,0,width,height);

    textAlign(CENTER);
    textSize(29);
    // fill(200,0,0);


    push();
    //
    translate(width/2,loy*3);
    fill(100, 255, 250);
    text("Scene 4 works...", 0, 100);
    text("Click to Continue", 0, 150);
    // ellipse(0,0,30,30);
    if (loy < 0) {
      loy = 255;
    } else {
      loy--;
    }
    //
    pop();
  }


  //moving to next scene
  this.mousePressed = function()
  {

    //console.log("exit");
    this.sceneManager.showNextScene();
  }

}
























////////////////////////////// 5 /////////////////

function scene5() {

  let loy= 255;

  this.setup = function()  {
    console.log("We are at setup for scene5");

  }

  this.enter = function()  {
    snd1.pause();
    snd2.pause();
    snd3.pause();
    snd4.pause();

    let loy= 255;
    console.log("We are entering scene4");


    //  snd2.loop();

    if (snd4.isPlaying()) {
      // .isPlaying() returns a boolean
      snd4.pause(); // .play() will resume from .pause() position
      //  background(255, 0, 0);
    } else {
      snd5.play();
      //background(0, 255, 0);
    }
  }

  this.draw = function() {
    imageMode(CENTER);
    image(img7,width/2,height/2,width,height);

    textAlign(CENTER);
    textSize(40);
    // fill(200,0,0);


    push();
    //
    translate(width/2,loy*3);
    fill(100, 255, 250);
    text("Scene 5 works...", 0, 100);
    text("Click to Continue", 0, 150);
    if (loy > 255) {
      loy = 0;
    } else {
      loy++;
    }

    pop();
  }


  //moving to next scene
  this.mousePressed = function()
  {

    //console.log("exit");
    this.sceneManager.showNextScene();
  }

}
