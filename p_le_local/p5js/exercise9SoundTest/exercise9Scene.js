var snd1,snd2,snd3;
var img1,img2,img3;
// var duration;
// var  slideWidth = 500;

function preload() {

  snd1 = loadSound("assets/beatbox.mp3");
  snd2 = loadSound("assets/beat.mp3");
  snd3 = loadSound("assets/death.mp3");
  img1 = loadImage("assets/bunker1.jpg");
  img2 = loadImage("assets/bunker2.jpg");
  img3 = loadImage("assets/bunker3.jpg");

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
            mgr.showScene( intro );
            break;
        case '2':
            mgr.showScene( scene2 );
            break;
        case '3':
            mgr.showScene( scene3 );
            break;
        case 'h':
            mgr.showScene( scene3 );
            break;
        case 'H':
            mgr.showScene( scene3 );
            break;
         case 'e':
            mgr.showScene( intro );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}d
