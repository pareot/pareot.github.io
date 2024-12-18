let loy= 0;
let count = 0;


function intro()  {


  this.setup = function() {
    console.log("We are at setup for intro");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    textAlign(CENTER);
    textSize(29);


    gren.position.x = width/2;
    gren.position.y = height/2 -100;

    pButton.position.x = width/2;
    pButton.position.y = height/2 +100;

    pButton.visible = true;

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


  this.draw = function()  {
    image(img6,0,0,width,height);

    //UI layout
    fill(39, 178, 255);
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

    gren.onMousePressed = function() {
      this.changeAnimation("dead");
      mgr.showScene(help);
    }
    gren.onMouseReleased = function() {
      this.changeAnimation("normal");
    }

    //moving to scene2
    pButton.onMousePressed = function() {
      this.changeAnimation("hover");
    }
    pButton.onMouseReleased = function() {
      mgr.showScene(scene2)
      this.visible = false;
    }
  }
}
















///////////////////////  2  ////////////////////////

function scene2()  {
  let octo1,octo2;

  this.setup = function() {
    background(0);
    console.log("We are at setup for scene2");

    gren.position.x = width -100;
    gren.position.y = height -100;

    pButton.visible = false;
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

    //spawn water particles
    w1.attractionPoint(0.2, random(0, 100), random(200, 250));
    w1.onMousePressed = function() {
      wCount +=1;
      this.visible = false;
    }
    w2.attractionPoint(0.3, random(600, 900), random(100, 350));
    w2.onMousePressed = function() {
      wCount +=1;
      this.visible = false;
    }
    w3.attractionPoint(0.2, random(200, 700), random(0, 50));
    w3.onMousePressed = function() {
      wCount +=1;
      this.visible = false;
    }
    w4.attractionPoint(0.5, random(600, 650), random(50, 750));
    w4.onMousePressed = function() {
      wCount +=1;
      this.visible = false;
    }
    w5.attractionPoint(0.1, mouseX, mouseY);
    w5.onMousePressed = function() {
      wCount +=1;
      this.visible = false;
    }


    //score
    textSize(32);
    fill(0,0,0);
    text('Water collect:' + wCount, 10, 30);

    //UI layout
    fill(39, 178, 255);

    //dragging mechanics on
    if (draggedSprite != null) {
      draggedSprite.position.x = mouseX;
      draggedSprite.position.y = mouseY;
    }


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

    if (wCount == 5) {
      mgr.showScene(scene3);
    }


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

    sprout.position.x = width/2 +50;
    sprout.position.y = height/2 -80;

    pButton.visible = false;
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
    // image(img10, width/2, height/3,100, 100);


    //UI layout
    fill(39, 178, 255);

    drawSprites();


    //spawn rat
    f1.attractionPoint(0.2, width/2, height/2);
    if (f1.overlap(sprout)) {
      mgr.showScene(gameOver);
    }
    f1.onMousePressed = function() {
      fCount +=1;
      this.remove();
    }


    f2.attractionPoint(0.2, width/2, height/2);
    if (f2.overlap(sprout)) {
      mgr.showScene(gameOver);
    }
    f2.onMousePressed = function() {
      fCount +=1;
      this.remove();
    }


    f3.attractionPoint(0.2, width/2, height/2);
    if (f3.overlap(sprout)) {
      mgr.showScene(gameOver);
    }
    f3.onMousePressed = function() {
      fCount +=1;
      this.remove();
    }


    f4.attractionPoint(0.2, width/2, height/2);
    if (f4.overlap(sprout)) {
      mgr.showScene(gameOver);
    }
    f4.onMousePressed = function() {
      fCount +=1;
      this.remove();
    }


    f5.attractionPoint(0.2, width/2, height/2);
    if (f5.overlap(sprout)) {
      mgr.showScene(gameOver);
    }
    f5.onMousePressed = function() {
      fCount +=1;
      this.remove();
    }



    //spawn water particles 2nd
    w1a.attractionPoint(0.2, random(0, 100), random(200, 250));
    w1a.onMousePressed = function() {
      wCount2 +=1;
      this.visible = false;
    }
    w2a.attractionPoint(0.3, random(600, 900), random(100, 350));
    w2a.onMousePressed = function() {
      wCount2 +=1;
      this.visible = false;
    }
    w3a.attractionPoint(0.2, random(200, 700), random(0, 50));
    w3a.onMousePressed = function() {
      wCount2 +=1;
      this.visible = false;
    }
    w4a.attractionPoint(0.5, random(600, 650), random(50, 750));
    w4a.onMousePressed = function() {
      wCount2 +=1;
      this.visible = false;
    }
    w5a.attractionPoint(0.1, mouseX, mouseY);
    w5a.onMousePressed = function() {
      wCount2 +=1;
      this.visible = false;
    }


    //score
    textSize(32);
    fill(0,0,0);
    text('Water collect:' + wCount2, 10, 30);
    text('Rat deflected:' + fCount, 10, 60);




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


    //move to victory scene
    if (wCount2 == 5 && fCount == 5) {
      mgr.showScene(scene4);
    }


    //move to help UI
    gren.onMousePressed = function() {
      this.changeAnimation("dead");
      mgr.showScene(help);
    }
    gren.onMouseReleased = function() {
      this.changeAnimation("normal");
    }
  }


  //moving to next scene
}



















////////////////////////////// 4 /////////////////

function scene4() {

  let loy= 255;

  this.setup = function()  {
    console.log("We are at setup for scene4");

    sprout.position.x = -200;
    sprout.position.y = -200;

    pButton.visible = false;
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

    //draw the sprite
    drawSprites();

    textAlign(CENTER);
    textSize(64);

    push();
    //
    translate(width/2,loy*3);
    fill(100, 255, 250);
    text("You win...", 0, 100);

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


  //moving to next scene
}


















////////////////////////////// lost scene /////////////////

function gameOver() {

  let loy= 255;

  this.setup = function()  {
    console.log("We are at setup for gameOver");

    sprout.position.x = -200;
    sprout.position.y = -200;

    pButton.visible = false;
  }

  this.enter = function()  {
    snd1.pause();
    snd2.pause();
    snd3.pause();

    let loy= 255;
    console.log("We are entering gameOver scene");

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

    //UI layout
    fill(39, 178, 255);
    // rect(0, height/4*3, width, height/4);

    //draw the sprite
    drawSprites();

    textAlign(CENTER);
    textSize(64);

    push();
    //
    translate(width/2,loy*3);
    fill(100, 255, 250);
    text("You lost...", 0, 100);

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

    pButton.visible = false;
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
    image(img12,width/2,height/2,width,height);

    textAlign(CENTER);
    textSize(40);

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
