
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes
let loy= 0;
let xPos = 0;

////////////////////////////// 1 /////////////////
function intro()  {


    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      background("blue");
      textAlign(CENTER);
      textSize(29);
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");
        // textX = 10;
        // textY = 0;
      snd3.pause();
      snd4.pause();
      loy = 100;
      background("red");

    }


    this.draw = function()
    {
        background(0,0,255-loy);
        textAlign(CENTER);
        textSize(29);
        // fill(200,0,0);

        push();
        //
        translate(width/2,loy*3);
        fill(255);
        text("We are going deep...", 0, 100);
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

    // this.keyPressed = function() {
    //
    //
    // }

    this.mousePressed = function()
    {
        // if (snd1.isPlaying()) {
        //
        //     snd1.pause(); // .play() will resume from .pause() position
        //
        // } else {
        //     snd1.play();
        //
        // }



        this.sceneManager.showNextScene();
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
snd3.pause();
snd4.pause();
      console.log("We are at  scene2 (again?)");

  }

    this.draw = function()
    {
      background(0);
      noStroke();
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

    this.mousePressed = function()
    {

      //console.log("exit");
      this.sceneManager.showNextScene();
    }



  // this.keyPressed = function()  {
  //
  //       // switch(key)
  //       // {
  //       //     case 'h':
  //       //         mgr.showScene( scene3 );
  //       //     //     break;
  //       //     // case '2':
  //       //     //     mgr.showScene( scene2 );
  //       //     //     break;
  //       //     // case '3':
  //       //     //     mgr.showScene( scene3 );
  //       //     //     break;
  //       // }
  //
  //       // ... then dispatch via the SceneManager.
  //
  //   }





}






////////////////////////////// 3 /////////////////

function scene3() {

  let loy= 255;

    this.setup = function()  {
        console.log("We are at setup for scene3");




    }

    this.enter = function()  {
snd3.pause();
snd4.pause();
        let loy= 255;
        console.log("We are entering scene3");
    }




    this.draw = function() {
      background(0,0,255-loy);
      textAlign(CENTER);
      textSize(29);

        push();
        //
        translate(width/2,loy*3);
        fill(255);
        text("Wiggle the mouse to get their attention...", 0, 100);
        text("Click the mouse or hit 'H' to go back.", 0, 150);

        if (loy < 0) {
          loy = 255;
        } else {
          loy--;
        }
        //
        pop();

    }

    this.mousePressed = function()  {
this.sceneManager.showNextScene();
      //mgr.showScene( scene2 );
    }



    // this.keyPressed = function()  {
    //
    //       switch(key)
    //       {
    //           case 'h':
    //               mgr.showScene( scene2 );
    //           break;
    //           // case '2':
    //           //     mgr.showScene( scene2 );
    //           //     break;
    //           // case '3':
    //           //     mgr.showScene( scene3 );
    //           default:
    //           mgr.showScene( scene1 );
    //
    //       }
    //
    //       // ... then dispatch via the SceneManager.
    //
    //   }

}


function scene4() {
      let bubblestate;


  this.setup = function()  {
      console.log("SCENE 4???");
      myButton = new Clickable();     //Create button
      myButton.locate(20, 20);        //Position Button
      myButton.color = "blue";
      myButton.textColor = "white";
      myButton.text = "Bubbles";
      myButton.locate(600, 100);

      myButton.onPress = function(){  //When myButton is pressed
        this.color = "#AAAAFF";       //Change button color
        //alert("Yay!");                //Show an alert message


        if (bubblestate == 1){
        bubblestate = 0;
        }else{
          bubblestate = 1;
        }

      }

      myButton.onRelease = function(){
        console.log("I have been released!");
        this.color = "#0000FF";
        fill(255,50);
        stroke(255);

      }

  }
  this.enter = function()  {
      bubblestate = 0;


      console.log("enter scene 4");
      if (snd3.isPlaying()){
      snd3.pause();
      }
      else{
      snd3.play();
      }
      snd4.pause();
      console.log("We are entering scene4");
  }

    this.draw = function() {
background(bg);
fill(255, 138, 40);
noStroke();
ellipse(xPos,300,200,175);
triangle(xPos-150,250,xPos-25,300,xPos-150,350);
fill(0);
ellipse(xPos+50,300,20,20);

xPos++;

  if (xPos>width+200)
  {
    xPos=-200;
  }

  if (bubblestate == 1) {
    fill(255,50);
    stroke(255);
  ellipse(random(800),random(500),50,50);
  ellipse(random(800),random(500),50,50);
  ellipse(random(800),random(500),50,50);

}

  // fill(255);
  // ellipse(width/2, height/2, 50, 50);
  myButton.draw();

textSize(30);
text("press 5 to continue to the last scene",50,50);

}
}



function scene5() {
  this.setup = function()  {
      console.log("SCENE 5???");

  }
  this.enter = function()  {
      console.log("enter scene 5");
      if (snd4.isPlaying()){
      snd4.pause();
      }
      else{
      snd4.play();
      }
      snd3.pause();
      console.log("We are entering scene5");
  }

    this.draw = function() {
background(158, 208, 240);
fill(120);
noStroke();
rect(265,400,275,450,70);
fill(150);
noStroke();
ellipse(400,400,300,275);
triangle(275,200,350,300,250,400);
triangle(525,200,450,300,550,400);
fill(0);
ellipse(300,400,20,20);
ellipse(500,400,20,20);
ellipse(400,470,40,40);
rect(390,262,20,60,10);
rect(350,267,20,60,10);
rect(430,267,20,60,10);
fill(255, 194, 223);
ellipse(400,420,40,25);
triangle(280,225,320,280,275,300);
triangle(520,225,525,300,480,280);
fill(180);
rect(200,400,100,300,70);
rect(500,400,100,300,70);
fill(255, 194, 223);
ellipse(250,470,70,50);
ellipse(550,470,70,50);
ellipse(550,430,20,20);
ellipse(250,430,20,20);
ellipse(220,440,20,20);
ellipse(520,440,20,20);
ellipse(280,440,20,20);
ellipse(580,440,20,20);
fill(0);
triangle(280,350,350,375,290,360);
triangle(450,375,525,350,515,360);







}
}




function theend() {

  this.setup = function()  {
      console.log("we are setting up on the result scene");
  }

  this.enter = function() {
     console.log("we are entering the result scene");

  }

 this.draw = function() {
   background(255,0,0);
   text("the result",width/2,height/2);

 }


}
