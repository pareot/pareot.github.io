var snd1,snd2,snd3;
var img1,img2,img3, img4, img5;
// var duration;
// var  slideWidth = 500;

function preload() {

  snd1 = loadSound("assets/crack.mp3");
  snd2 = loadSound("assets/fourTap.mp3");
  snd3 = loadSound("assets/oneTap.mp3");
  img1 = loadImage("assets/map.jpg");
  img2 = loadImage("assets/map1.jpg");
  img3 = loadImage("assets/map2.jpg");
  img4 = loadImage("assets/map3.png");
  img5 = loadImage("assets/room.jpg");

}

// global manager object
var mgr;

function setup() {
    createCanvas(800, 800);
     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (intro);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
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
        // case '4':
        //     mgr.showScene( scene4 );
        //     break;
        // case '5':
        //     mgr.showScene( scene5 );
        //     break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}d
