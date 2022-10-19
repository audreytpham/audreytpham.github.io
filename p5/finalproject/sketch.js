
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


var image1_up, image2_over;
let snd1;
let snd2;
let snd3;
//let snd4;
let myButton;
let myButton2;
let myButton3;
//let img1;



// var duration;
// var  slideWidth = 500;

function preload() {

  snd1 = loadSound("assets/shower.mp3");
  snd2 = loadSound("assets/blowdry.mp3");
  snd3 = loadSound("assets/sparkle.mp3");

  //img1 = loadImage("assets/showerwater.png");


}


// define your p5.play sprites as global objects first.
var ghosty;


// global manager object
var mgr;

function setup() {
    createCanvas(800, 800);
  //  console.log(hell);

    //b = loadImage("showerwater.png");

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





function playmysound() {
console.log("*showering*");

if (snd1.isPlaying() ) {
  snd1.stop();
} else {
  snd1.loop();
}

}


function playmysound2() {
console.log("*drying*");

if (snd2.isPlaying() ) {
  snd2.stop();
} else {
  snd2.loop();
}

}


function playmysound3() {
console.log("*sparkle*");

if (snd3.isPlaying() ) {
  snd3.stop();
} else {
  snd3.play();
}

}
