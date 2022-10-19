
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


var image1_up, image2_over,snd1;
//let snd1;
let snd2;
let snd3;
let snd4;
let snd5;
let bg;
let myButton;


// var duration;
// var  slideWidth = 500;

function preload() {

  snd1 = loadSound("assets/beat.mp3");
  snd3 = loadSound("assets/bubbles.mp3");
  snd4 = loadSound("assets/meow.mp3");
  snd5 = loadSound("assets/jeopardy.mp3");
  bg = loadImage("assets/oceanfloor.jpg");

}


// define your p5.play sprites as global objects first.
var ghosty;


// global manager object
var mgr;

function setup() {
    createCanvas(800, 800);
  //  console.log(hell);

     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (intro);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.addScene (scene4);
    mgr.addScene (scene5);
    mgr.addScene (theend);
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
            // snd3.play();
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
        case '5':
            mgr.showScene( scene5 );
            break;
        case 'h':
            mgr.showScene( scene3 );
            break;
        case 'H':
            mgr.showScene( scene3 );
            break;
         case 'e':
            mgr.showScene( theend );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
