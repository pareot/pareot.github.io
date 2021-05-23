
let loy= 0;
let count = 0;


function intro()  {


  this.setup = function() {
    console.log("We are at setup for intro");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    textAlign(CENTER);
    textSize(29);

  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
    console.log("We are at entering intro");
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

    lastS = intro;


  }


  this.draw = function()
  {
    image(img6,0,0,width,height);

    //UI layout
    fill(39, 178, 255);


    w1.position.x = -200;
    w1.position.y = -200;


    //draw the sprite
    drawSprites();


    textAlign(CENTER);
    textSize(29);


    push();
    //
    translate(width/2,loy*3);
    fill(100, 255, 250);
    text("Scene 1 works...", 0, 100);



    if (loy > 255) {
      loy = 0;
    } else {
      loy++;
    }
    pop();
  }

  //moving to the next scene


}















///////////////////////  2  ////////////////////////

function scene2()  {
  let octo1,octo2;

  this.setup = function() {
    background(0);
    console.log("We are at setup for scene2");

    gren.position.x = width -100;
    gren.position.y = height -100;

    //bean mechanic
    bean.position.x = width/2;
    bean.position.y = height/2;

    bean.onMousePressed = function() {
      if (draggedSprite == null) {
        draggedSprite = this;
      }

      if(mouseButton === LEFT) {
        wCan.position.x = mouseX +180;
        wCan.position.y = mouseY +50;
      }
      if(mouseButton === LEFT) {
        fer.position.x = mouseX +180;
        fer.position.y = mouseY -100;
      }
    };
    bean.onMouseReleased = function() {
      if (draggedSprite == this) {2
        draggedSprite = null;
      }
    };

    wCan.onMousePressed = function() {
      bean.changeAnimation("sprouting");
    }
    fer.onMousePressed = function() {
      bean.changeAnimation("beansprout");
    }
  }

  this.enter = function()
  {
    snd1.pause();
    snd3.pause();
    console.log("We are at  scene2");
    //  snd2.loop();

    if (snd1.isPlaying()) {
      // .isPlaying() returns a boolean
      snd1.pause(); // .play() will resume from .pause() position
      //  background(255, 0, 0);
    } else {
      snd2.play();
      //background(0, 255, 0);
    }

    lastS = scene2;


  }

  this.draw = function()
  {
    image(img6,0,0,width,height);
    image(img9, width/2, height/3,100, 100);

    drawSprites();

    //UI layout
    fill(39, 178, 255);


    //dragging mechanics on
    if (draggedSprite != null) {
      draggedSprite.position.x = mouseX;
      draggedSprite.position.y = mouseY;
    }


    //spawn random water
    w1.velocity.x += 0.05;
    w1.position.y = 25;





    textAlign(CENTER);
    textSize(29);

    push();
    //
    translate(width/2,loy*3);
    fill(100, 255, 250);
    text("Scene 2 works...", 0, 100);



    if (loy < 0) {
      loy = 255;
    } else {
      loy--;
    }
    pop();



    gren.onMousePressed = function() {
      this.changeAnimation("dead");
      mgr.showScene(help);
    }
    gren.onMouseReleased = function() {
      this.changeAnimation("normal");
    }
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

    lastS = scene3;


  }

  this.draw = function()
  {
    image(img6,0,0,width,height);
    image(img10, width/2, height/3,100, 100);

    //UI layout
    fill(39, 178, 255);
    // rect(0, height/4*3, width, height/4);

    w2.position.x = 400;
    w2.position.y = 400;



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
    text("Scene 3 works...", 0, 100);



    if (loy > 255) {
      loy = 0;
    } else {
      loy++;
    }
    pop();
  }


  //moving to next scene


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

    lastS = scene4;


  }

  this.draw = function()
  {
    image(img6,0,0,width,height);
    image(img11, width/2, height/3 -100,100, 200);

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
    text("Scene 4 works...", 0, 100);



    if (loy < 0) {
      loy = 255;
    } else {
      loy--;
    }
    pop();
  }


  //moving to next scene


}
























////////////////////////////// 5 /////////////////

function help() {

  let loy= 255;

  this.setup = function()  {
    console.log("We are at setup for help UI");


    gren.position.x = width -100;
    gren.position.y = height -100;

    bean.visible = 0;
    wCan.visible = 0;
    fer.visible = 0;
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
    text("Help UI works...", 0, 100);
    if (loy > 255) {
      loy = 0;
    } else {
      loy++;
    }

    pop();

    drawSprites();

    gren.onMousePressed = function() {
      this.changeAnimation("dead");
      mgr.showScene(lastS);
    }
    gren.onMouseReleased = function() {
      this.changeAnimation("normal");
    }
  }



  //moving to next scene


}
