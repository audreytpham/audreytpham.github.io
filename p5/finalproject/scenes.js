// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes
//let loy= 0;
let xPos = 0;
let yPos = 0;

////////////////////////////// 1 /////////////////
function intro()  {


    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      background(178, 238, 253);
      textAlign(CENTER);
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");

        // textX = 10;
        // textY = 0;

      //loy = 100;
      background("red");

    }


    this.draw = function()
    {
        background(178, 238, 253);
        textAlign(CENTER);
        textSize(40);
        // fill(200,0,0);

        push();
        //
        //translate(width/2,loy*3);
        fill(255);
        stroke(12, 154, 244);
        strokeWeight(5);
        textSize(90);
        text("PET GROOMER", 400, 300);
        textSize(60);
        text("Click to Continue", 400, 400);
        push();
        rotate(radians(-25));
        textSize(40);
        text("*woof woof*",-150,-250);
        pop();
        // ellipse(0,0,30,30);
        // if (loy > 255) {
        //   loy = 0;
        // } else {
        //   loy++;
        // }
        //
        pop();
        translate(100,-100);
        rotate(radians(10));
        noStroke();
        fill(217, 191, 135);
        rect(500,590,200,75);
        ellipse(500,600,75,75);
        ellipse(500,650,75,75);
        ellipse(700,600,75,75);
        ellipse(700,650,75,75);
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

  this.setup = function() {
      background(135, 185, 217);

      console.log("We are at setup for scene2");

  }

  this.enter = function()
  {

      console.log("We are at  scene2 (again?)");

  }

    this.draw = function()
    {
      //textAlign(CENTER);
      background(98, 219, 255);
      fill(12, 154, 244);
      stroke(0);
      strokeWeight(4);
      textSize(50);
      text("INSTRUCTIONS:",220,100);
      textSize(25);
      fill(255);
      stroke(89, 125, 206);
      text("Help your pet get cleaned up and dressed!",50,200);
      text("Click the buttons to perform actions stated",50,300);
      text("Use keys 1-5 to switch between different scenes",50,400);
      text("Press 1 to restart",50,500);
      text("Press anywhere to begin",50,600);

      noStroke();
      fill(3, 169, 39);
      rect(0,700,width,100);


      push();
      translate(600,550);
      scale(1.2);
      dog();
      pop();
    }

    // this.mouseDragged = function() {
    //   console.log("mouseDragged");
    //   octo1.moveupdate(mouseX,mouseY-40);
    //   octo2.moveupdate(650,200);
    // }

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

  let shower;


this.setup = function()  {
  console.log("SCENE 4???");
  myButton2 = new Clickable();     //Create button
  myButton2.color = "blue";
  myButton2.textColor = "white";
  myButton2.text = "Shower";
  myButton2.textSize = 30;
  myButton2.locate(600, 75);
  myButton2.width = 150;
  myButton2.height = 75;
  //myButton.image = img1;

  myButton2.onPress = function(){  //When myButton is pressed
    this.color = "#AAAAFF";       //Change button color
    playmysound();
    //alert("Yay!");                //Show an alert message



    if (shower == 1){
    shower = 0;
    }else{
      shower = 1;
    }
    // if (snd1.isPlaying()){
    // snd1.pause();
    // }
    // else{
    // snd1.play();
    // }
  }


  myButton2.onRelease = function(){
    console.log("I have been released!");
    this.color = "#0000FF";
    fill(60, 228, 255);
    //stroke(255);

  }

}
this.enter = function()  {
  shower = 0;


        console.log("We are entering scene3");
    }




    this.draw = function() {
      background(246, 249, 195);
      textAlign(CENTER);
      textSize(29);

      push();
      scale(1.2);
      translate(-75,-125);
      table();
      pop();

      push();
      translate(400,400);
      scale(1.2);
      dog();
      pop();

      fill(150);
      rect(375,0,50,75);
      quad(375,75,425,75,475,125,325,125);

      if (shower == 1) {
        fill(155, 225, 255);
        stroke(0, 160, 229);
      rect(360,yPos+120,5,100);
      rect(385,yPos+120,5,100);
      rect(410,yPos+120,5,100);
      rect(435,yPos+120,5,100);

      yPos+=5;

        if (yPos>height/2)
        {
          yPos=0;
        }
        // if (snd1.isPlaying()){
        // snd1.pause();
        // }
        // else{
        // snd1.play();
        // }

    }


     myButton2.draw();

     textSize(40);
     fill(132, 99, 1890)
     noStroke();
     text("Time to get clean!",175,75);
     stroke(132, 99, 189);
     strokeWeight(4);
     textSize(20);
     fill(255);
     text("Press 4 to continue",150,125);

    }



    }
//     this.mousePressed = function()  {
// this.sceneManager.showNextScene();
      //mgr.showScene( scene2 );




function scene4() {
  let blowdry;
  this.setup = function()  {
      console.log("SCENE 4???");
      myButton3 = new Clickable();     //Create button
      myButton3.color = "blue";
      myButton3.textColor = "white";
      myButton3.text = "Blowdry";
      myButton3.textSize = 30;
      myButton3.locate(600, 75);
      myButton3.width = 150;
      myButton3.height = 75;
      //myButton.image = img1;

      myButton3.onPress = function(){  //When myButton is pressed
        this.color = "#AAAAFF";       //Change button color
        playmysound2();
        //alert("Yay!");                //Show an alert message


        if (blowdry == 1){
        blowdry = 0;
        }else{
          blowdry = 1;
        }

      }

      myButton3.onRelease = function(){
        console.log("I have been released!");
        this.color = "#0000FF";
        fill(60, 228, 255);
        //stroke(255);

      }

  }
  this.enter = function()  {
    blowdry = 0;
      console.log("enter scene 4");
      // if (snd3.isPlaying()){
      // snd3.pause();
      // }
      // else{
      // snd3.play();
      // }
      // snd4.pause();
      console.log("We are entering scene4");
  }

    this.draw = function() {
      background(246, 249, 195);
      textAlign(CENTER);
      textSize(29);

      push();
      scale(1.2);
      translate(-75,-125);
      table();
      pop();

      push();
      translate(400,400);
      scale(1.2);
      dog();
      pop();


      if (blowdry == 1) {
        push();
        scale(2);
        translate(200,150);
        dog();
        pop();

        push();
        scale(1.3);
        rotate(radians(25));
        translate(50,-100);
        fill(0,100,255);
        stroke(0);
      rect(100,200,35,60,10);
      quad(100,153,200,175,200,200,100,210);
      ellipse(100,180,55,55);
      pop();

      push();
      rotate(radians(-5));
      translate(-50,-50);
      fill(255);
      stroke(150);
      strokeWeight(2);
      rect(300,300,75,5);
      pop();

      push();
      rotate(radians(15));
      translate(25,-135);
      fill(255);
      stroke(150);
      strokeWeight(2);
      rect(300,300,75,5);
      pop();

      push();
      rotate(radians(35));
      translate(60,-240);
      fill(255);
      stroke(150);
      strokeWeight(2);
      rect(300,300,75,5);
      pop();
    }


     myButton3.draw();

     textSize(50);
     fill(132, 99, 1890)
     noStroke();
     text("Time to get dry!",200,75);
     stroke(132, 99, 189);
     strokeWeight(4);
     textSize(20);
     fill(255);
     text("Press 5 to continue",150,125);

}
}



function scene5() {
  let hat;
  let bow;
  this.setup = function()  {
      console.log("SCENE 5???");
      myButton4 = new Clickable();     //Create button
      myButton4.color = "blue";
      myButton4.textColor = "white";
      myButton4.text = "Hat";
      myButton4.textSize = 30;
      myButton4.locate(600, 75);
      myButton4.width = 150;
      myButton4.height = 75;

      myButton5 = new Clickable();     //Create button
      myButton5.color = "blue";
      myButton5.textColor = "white";
      myButton5.text = "Bow";
      myButton5.textSize = 30;
      myButton5.locate(600, 175);
      myButton5.width = 150;
      myButton5.height = 75;
      //myButton.image = img1;

      myButton6 = new Clickable();     //Create button
      myButton6.color = "blue";
      myButton6.textColor = "white";
      myButton6.text = "Flower";
      myButton6.textSize = 30;
      myButton6.locate(600, 275);
      myButton6.width = 150;
      myButton6.height = 75;

      myButton4.onPress = function(){  //When myButton is pressed
        this.color = "#AAAAFF";       //Change button color
        playmysound3();
        //alert("Yay!");                //Show an alert message


        if (hat == 1){
        hat = 0;
        }else{
          hat = 1;
        }
      }
      myButton5.onPress = function(){  //When myButton is pressed
        this.color = "#AAAAFF";       //Change button color
        playmysound3();
        //alert("Yay!");
        if (bow == 2){
        bow = 0;
        }else{
          bow = 2;
        }

      }

      myButton6.onPress = function(){  //When myButton is pressed
        this.color = "#AAAAFF";       //Change button color
        playmysound3();
        //alert("Yay!");
        if (flower == 2){
        flower = 0;
        }else{
          flower = 2;
        }

      }

      myButton4.onRelease = function(){
        console.log("I have been released!");
        this.color = "#0000FF";
        fill(60, 228, 255);
        //stroke(255);
      }
      myButton5.onRelease = function(){
        console.log("I have been released!");
        this.color = "#0000FF";
        fill(60, 228, 255);
      }

      myButton6.onRelease = function(){
        console.log("I have been released!");
        this.color = "#0000FF";
        fill(60, 228, 255);
      }

  }
  this.enter = function()  {
    hat = 0;
    bow = 0;
    flower = 0;
      console.log("enter scene 5");
      // if (snd4.isPlaying()){
      // snd4.pause();
      // }
      // else{
      // snd4.play();
      // }
      // snd3.pause();
      console.log("We are entering scene5");
  }

    this.draw = function() {
      background(246, 249, 195);
      textAlign(CENTER);
      textSize(29);

      push();
      scale(1.2);
      translate(-75,-125);
      table();
      pop();

      push();
      translate(400,400);
      scale(1.2);
      dog();
      pop();


      textSize(50);
      fill(132, 99, 1890)
      noStroke();
      text("Dress up time!",175,75);
      stroke(132, 99, 189);
      strokeWeight(4);
      textSize(20);
      fill(255);
      text("Help the dog get ready",150,125);
      text("by selecting accessories!",160,160);


      if (hat == 1) {
        fill(0);
        noStroke();
      ellipse(400,325,100,50);
      rect(362,250,75,50);
      fill(255,0,0);
      noStroke();
      rect(362,295,75,20);
      ellipse(400,315,75,25);
      fill(0);
      ellipse(400,295,75,25);
      fill(45);
      ellipse(400,250,75,25);
    }

    if (bow == 2) {
      fill(255, 148, 209);
      stroke(213, 57, 146);
      strokeWeight(3);
      quad(350,290,385,310,385,330,350,350);
      quad(415,310,450,290,450,350,415,330);
      rect(382,308,35,28,10);
  }


  if (flower == 2) {
    fill(255, 148, 209);
    stroke(213, 57, 146);
    strokeWeight(1);
    ellipse(490,368,25,25);
    ellipse(500,330,25,25);
    ellipse(480,345,25,25);
    ellipse(515,367,25,25);
    ellipse(520,342,25,25);
    fill(243, 222, 47);
    stroke(229, 192, 5);
    strokeWeight(2);
    ellipse(500,350,25,25);
}


     myButton4.draw();
     myButton5.draw();
     myButton6.draw();
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

function dog()  {
 strokeWeight(1.5);
 legs (-110,70, color (175, 124, 70));
 body (-100,-25, color (175, 124, 70));
 tummy (-50,77, color (245, 235, 223));
 arms (-90,80, color (175, 124, 70));
 armpit (-90,80, color (175, 124, 70));
 head (0,0, color (175, 124, 70));
 nose (0,10, color (0));
 eyes (-60,5, color (0));
 eyewhite (-65,4, color (255));
 ears (-75,-75, color (175, 124, 70));


  }

function legs(xp, yp)  {
  fill(175, 124, 70);
  stroke(0);
  rect(xp,yp,xp+160,yp+30,100);
  rect(xp+170,yp,xp+160,yp+30,100);
}

function body(xp, yp)  {
  fill(175, 124, 70);
  rect(xp,yp,xp+300,yp+225,100);
}

function tummy(xp, yp)  {
  fill(245, 235, 223);
  noStroke();
  rect(xp,yp,xp+150,yp+23,150);
}

 function arms(xp, yp)  {
   fill(175, 124, 70);
   stroke(0);
   rect(xp,yp,xp+140,yp+20,100);
   rect(xp+130,yp,xp+140,yp+20,100);
 }

function armpit(xp, yp)  {
  fill(175, 124, 70);
  noStroke();
  rect(xp,yp,xp+140,yp-65,100);
  rect(xp+130,yp,xp+140,yp-65,100);
}

function head(xp, yp)  {
  fill(175, 124, 70);
  stroke(0);
  ellipse(xp,yp,xp+200,yp+150);

  fill(245, 235, 223);
  noStroke();
  beginShape();
  vertex(0,0);
  vertex(-60,60);
  vertex(-30,72);
  vertex(0,75);
  vertex(30,72);
  vertex(60,60);
  endShape(CLOSE);
}

function nose(xp, yp)  {
  fill(0);
  ellipse(xp,yp,xp+25,yp+10);

  noFill();
  stroke(0);
  line(0,5,0,25);
  line(0,25,-7,35);
  line(0,25,7,35);
}

function eyes(xp, yp)  {
  fill(0);
  ellipse(xp,yp,xp+80,yp+10);
  ellipse(xp+125,yp,xp+80,yp+10);
}

function eyewhite(xp, yp)  {
  fill(255);
  noStroke();
  ellipse(xp,yp,xp+70,yp+1);
  ellipse(xp+135,yp,xp+70,yp+1);
}

function ears(xp, yp)  {
  fill(175, 124, 70);
  stroke(0);
  rect(xp,yp,xp+105,yp+105,30);
  rect(xp+120,yp,xp+105,yp+105,30);
}

function table(){
  legs2(0,0);
  main(200,200);
}

function legs2(xp, yp){
  fill(136, 99, 23);
  rect(xp+210,yp+600,15,200);
  rect(xp+225,yp+600,20,200);
  rect(xp+520,yp+600,15,200);
  rect(xp+535,yp+600,20,200);
  rect(xp+300,yp+600,15,200);
  rect(xp+315,yp+600,20,200);
  rect(xp+605,yp+700,15,200);
  rect(xp+620,yp+700,20,200);
}

function main(xp, yp){
  fill(136, 99, 23);
  quad(xp,yp+375,xp+350,yp+375,xp+455,yp+500,xp+90,yp+500);
  quad(xp,yp+375,xp+90,yp+500,xp+90,yp+525,xp,yp+402);
  rect(xp+90,yp+500,xp+165,yp-175);
  }
