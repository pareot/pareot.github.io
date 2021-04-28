var snd1,snd2,snd3;
var img1,img2,img3;
// var duration;
// var  slideWidth = 500;

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
    mgr.addScene (scene5);
    mgr.showNextScene();

}

function draw()
{
    // pass the current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

 function mouseMoved()
 {
   // pass the mouseMoved message into the SceneManager
   mgr.handleEvent("mouseDragged");
}

function mouseDragged()
{
   // pass the mouseMoved message into the SceneManager
    mgr.handleEvent("mouseDragged");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( scene1 );
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
         case '5':
            mgr.showScene( scene5 );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
