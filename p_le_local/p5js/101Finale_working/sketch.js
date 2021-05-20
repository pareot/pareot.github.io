var snd1,snd2,snd3, snd4, snd5;
var img1,img2,img3, img4, img5, img6, img7, img8, img9, img10, img11;
// var duration;
// var  slideWidth = 500;

var lastS;

var gren;

var w1, w2, w3, w4, w5;

let rdw;
let rdH;

function preload() {

  snd1 = loadSound("sounds/crack.mp3");
  snd2 = loadSound("sounds/fourTap.mp3");
  snd3 = loadSound("sounds/oneTap.mp3");
  snd4 = loadSound("sounds/crack.mp3");
  snd5 = loadSound("sounds/fourTap.mp3");

  img1 = loadImage("img/room.png");
  img2 = loadImage("img/map.jpg");
  img3 = loadImage("img/map1.jpg");
  img4 = loadImage("img/map2.jpg");
  img5 = loadImage("img/map3.png");
  img6 = loadImage("img/layout UI.png");
  img7 = loadImage("img/help UI.png");
  img8 = loadImage("img/card holder.png");
  img9 = loadImage("img/seed.png");
  img10 = loadImage("img/seed2.png");
  img11 = loadImage("img/seed3.png");



}




// global manager object
var mgr;

function setup() {
  createCanvas(1000, 800);
  mgr = new SceneManager();
  // Preload scenes. Preloading is normally optional
  // ... but needed if showNextScene() is used.
  mgr.addScene (intro);
  mgr.addScene (scene2);
  mgr.addScene (scene3);
  mgr.addScene (scene4);
  mgr.addScene (help);
  mgr.showNextScene();


  //setup sprites
  gren = createSprite(-100, -100);
  gren.addAnimation('normal', 'img/char1.png', 'img/char1.png', 'img/char1.png', 'img/char1.png', 'img/char1.png', 'img/char1.png', 'img/char1.png', 'img/char1.png', 'img/char2.png', 'img/char2.png', 'img/char2.png', 'img/char2.png');
  gren.scale = 0.3;

  //water
  w1 = createSprite(-100, -100);
  w1.addAnimation('normal', 'img/water.png');
  w1.scale = 0.1;

  w2 = createSprite(-100, -100);
  w2.addAnimation('normal', 'img/water.png');
  w2.scale = 0.1;

  w3 = createSprite(-100, -100);
  w3.addAnimation('normal', 'img/water.png');
  w3.scale = 0.1;

  w4 = createSprite(-100, -100);
  w4.addAnimation('normal', 'img/water.png');
  w4.scale = 0.1;

  w5 = createSprite(-100, -100);
  w5.addAnimation('normal', 'img/water.png');
  w5.scale = 0.1;

}




function draw() {
  // pass the current draw function into the SceneManager
  mgr.draw();

  rdW = random(0, width);
  rdH = random(0, height);



}




// function mousePressed()
// {
//   // pass the mousePressed message into the SceneManager
//   mgr.mousePressed();
// }1
//
// function mouseMoved()
// {
//   // pass the mouseMoved message into the SceneManager
//   mgr.handleEvent("mouseDragged");
// }
//
// function mouseDragged()
// {
//   // pass the mouseMoved message into the SceneManager
//   mgr.handleEvent("mouseDragged");
// }

function keyPressed()
{
  // You can optionaly handle the key press at global level...
  switch(key)
  {
    case '1':
    mgr.showScene( intro );
    break;
    case '2':
    mgr.showScene( scene2 );
    break;
    case '3':
    mgr.showScene( scene3 );
    break;
    case '4':
    mgr.showScene( scene4 );
    break;
    case 'h':
    mgr.showScene( help );
    break;
  }

  // ... then dispatch via the SceneManager.
  mgr.keyPressed();



}
