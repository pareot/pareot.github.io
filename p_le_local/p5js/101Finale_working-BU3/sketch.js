var snd1,snd2,snd3, snd4, snd5;
var img1,img2,img3, img4, img5, img6, img7, img8, img9, img10, img11, img12;
// var duration;
// var  slideWidth = 500;

var lastS;

var gren, bean, rat, sprout;

var w1, w2, w3, w4, w5;
var w1a, w2a, w3a, w4a, w5a;
var f1, f2, f3, f4, f5;


let wCount =0;
let wCount2 =0;
let fCount =0;

var draggedSprite;

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
  img12 = loadImage("img/help UI2.png");



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

  //gren
  gren = createSprite(-100, -100);
  gren.addAnimation('normal', 'img/char1.png');
  gren.addAnimation('dead', 'img/char2.png');
  gren.scale = 0.3;

  gren.onMousePressed = function() {
    this.changeAnimation('dead');
  }


  //bean
  bean = createSprite(-300, -300);
  bean.addAnimation('seed', 'img/beanA.png');
  bean.addAnimation('sprouting', 'img/beanB.png');
  bean.addAnimation('beansprout', 'img/beanC.png');
  bean.scale = 0.15;

  sprout = createSprite(-300, -300);
  sprout.addAnimation('normal', 'img/seed2.png');
  sprout.scale = 0.15;

  // //rat
  // rat = createSprite(-100, -100);
  // rat.addAnimation('normal', 'img/mouse1.png', 'img/mouse2.png');
  // rat.scale = 0.3;


  //watering can
  wCan = createSprite(-300, -300);
  wCan.addAnimation('normal', 'img/watering can.png');
  wCan.scale = 0.1;


  //fertilizer
  fer = createSprite(-300, -300);
  fer.addAnimation('normal', 'img/fertilizer.png');
  fer.scale = 0.1;


  //water
  w1 = createSprite(-100, -100);
  w1.addAnimation('normal', 'img/water.png');
  w1.scale = 0.1;
  w1.maxSpeed = 5;

  w2 = createSprite(-100, -100);
  w2.addAnimation('normal', 'img/water.png');
  w2.scale = 0.1;
  w2.maxSpeed = 5;

  w3 = createSprite(width +100, -100);
  w3.addAnimation('normal', 'img/water.png');
  w3.scale = 0.1;
  w3.maxSpeed = 5;

  w4 = createSprite(width +100, height +100);
  w4.addAnimation('normal', 'img/water.png');
  w4.scale = 0.1;
  w4.maxSpeed = 5;

  w5 = createSprite(width +100, height +100);
  w5.addAnimation('normal', 'img/water.png');
  w5.scale = 0.1;
  w5.maxSpeed = 5;

  //water 2
  w1a = createSprite(-100, -100);
  w1a.addAnimation('normal', 'img/water.png');
  w1a.scale = 0.1;
  w1a.maxSpeed = 5;

  w2a = createSprite(-100, -100);
  w2a.addAnimation('normal', 'img/water.png');
  w2a.scale = 0.1;
  w2a.maxSpeed = 5;

  w3a = createSprite(width +100, -100);
  w3a.addAnimation('normal', 'img/water.png');
  w3a.scale = 0.1;
  w3a.maxSpeed = 5;

  w4a = createSprite(width +100, height +100);
  w4a.addAnimation('normal', 'img/water.png');
  w4a.scale = 0.1;
  w4a.maxSpeed = 5;

  w5a = createSprite(width +100, height +100);
  w5a.addAnimation('normal', 'img/water.png');
  w5a.scale = 0.1;
  w5a.maxSpeed = 5;

  //set up rat
  f1 = createSprite(-100, -100);
  f1.addAnimation('normal', 'img/mouse1.png', 'img/mouse2.png');
  f1.scale = 0.3;
  f1.maxSpeed = 1.5;

  f2 = createSprite(-100, -100);
  f2.addAnimation('normal', 'img/mouse1.png', 'img/mouse2.png');
  f2.scale = 0.3;
  f2.maxSpeed = 3;

  f3 = createSprite(width +100, height +100);
  f3.addAnimation('normal', 'img/mouse1.png', 'img/mouse2.png');
  f3.scale = 0.3;
  f3.mirrorX(-1);
  f3.maxSpeed = 2;

  f4 = createSprite(width +100, height +100);
  f4.addAnimation('normal', 'img/mouse1.png', 'img/mouse2.png');
  f4.scale = 0.3;
  f4.mirrorX(-1);
  f4.maxSpeed = 3;

  f5 = createSprite(width/2, -100);
  f5.addAnimation('normal', 'img/mouse1.png', 'img/mouse2.png');
  f5.scale = 0.3;
  f5.maxSpeed = 5;







  //setup ends




  // if(mouseButton === LEFT) {
  //   wCan.position.x = mouseX +180;
  //   wCan.position.y = mouseY +50;
  // }
  // if(mouseButton === LEFT) {
  //   fer.position.x = mouseX +180;
  //   fer.position.y = mouseY -100;
  // }
  // wCan.onMousePressed = function() {
  //   bean.changeAnimation("sprouting");
  // }
  // fer.onMousePressed = function() {
  //   bean.changeAnimation("beansprout");
  // }
}




function draw() {
  // pass the current draw function into the SceneManager
  mgr.draw();

  // rdW = random(0, width);
  // rdH = random(0, height);



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
