
let bgc;
let shc;


function setup() {
  createCanvas(500,500);
  background(206, 246, 250);
  fill(255);
//dog();
bgc = color(255,231,150);
  shc = color(0);

  textSize(17);
}

function draw() {
background(206, 246, 250);

 let h = hour();

 let m = minute();

 let s = second();

//map(inputvalue, low,high,mlow, mhigh);
 let ms = map(s,0,59,0,width)
 let mm = map(m,0,59,0,width)
 let mh = map(h,0,23,0,width)

 if (h > 16 || h < 7 ) {  // sunset and sunrise
       // nightime
       background(57, 26, 156);
      // bgc = color(20,20,255);
      // shc = color(200);
      //sundown
  } else {
      //daytime
      background(206, 246, 250);
      // bgc = color(255,231,150);
      // shc = color(20);
  }

  //grass
  fill(90, 165, 88);
    rect(0,140,width,20);
    rect(0,300,width,20);
    rect(0,480,width,20);

    fill(0);
     text("hour: " + h, 15,156);
     text("minute: " + m, 15,316);
     text("second: " + s, 15,496);


//dog1 seconds
push();
translate(ms,440);
scale(.25);
dog1();
pop();

//dog2 minutes
push();
translate(mm,260);
scale(.25);
dog2();
pop();

//dog3 hours
push();
translate(mh,100);
scale(.25);
dog3();
pop();

let hh = h;
console.log(hh)
if (hh == 9 || hh == 12 ||  hh == 15 || hh == 18 || hh == 21 || hh == 0) {


    if ( s < 10) {
  //dopoop
console.log("Poop + hh");
  fill(123, 85, 48);
ellipse(250,285,270,155);
ellipse(250,240,240,150);
ellipse(250,200,200,140);
ellipse(250,165,160,110);
ellipse(250,130,120,90);
     }
}


}

//seconds dog
function dog1()  {
 legs (-110,70);
 body (-100,-25);
 tummy (-50,77);
 arms (-90,80);
 armpit (-90,80);
 head (0,0);
 nose (0,10);
 eyes (-60,5);
 eyewhite (-65,4);
 ears (-75,-75);

  }

function legs( xp, yp)  {
  fill(175, 124, 70);
  stroke(0);
  rect(xp,yp,xp+160,yp+30,100);
  rect(xp+170,yp,xp+160,yp+30,100);
}

function body( xp, yp)  {
  fill(175, 124, 70);
  rect(xp,yp,xp+300,yp+225,100);
}

function tummy( xp,yp)  {
  fill(245, 235, 223);
  noStroke();
  rect(xp,yp,xp+150,yp+23,150);
}

 function arms( xp, yp)  {
   fill(175, 124, 70);
   stroke(0);
   rect(xp,yp,xp+140,yp+20,100);
   rect(xp+130,yp,xp+140,yp+20,100);
 }

function armpit( xp, yp)  {
  fill(175, 124, 70);
  noStroke();
  rect(xp,yp,xp+140,yp-65,100);
  rect(xp+130,yp,xp+140,yp-65,100);
}

function head( xp, yp)  {
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

function nose( xp, yp)  {
  fill(0);
  ellipse(xp,yp,xp+25,yp+10);

  noFill();
  stroke(0);
  line(0,0,0,25);
  line(0,25,-7,35);
  line(0,25,7,35);
}

function eyes( xp, yp)  {
  fill(0);
  ellipse(xp,yp,xp+80,yp+10);
  ellipse(xp+125,yp,xp+80,yp+10);
}

function eyewhite( xp, yp)  {
  fill(255);
  noStroke();
  ellipse(xp,yp,xp+70,yp+1);
  ellipse(xp+135,yp,xp+70,yp+1);
}

function ears( xp, yp)  {
  fill(175, 124, 70);
  stroke(0);
  rect(xp,yp,xp+105,yp+105,20);
  rect(xp+120,yp,xp+105,yp+105,20);
}


//minutes dog2

function dog2()  {
 legs2 (-110,70);
 body2 (-100,-25);
 tummy2 (-50,77);
 arms2 (-90,80);
 armpit2 (-90,80);
 head2 (0,0);
 nose2 (0,10);
 eyes2 (-60,5);
 eyewhite2 (-65,4);
 ears2 (-75,-75);

  }

function legs2( xp, yp)  {
  fill(175, 124, 70);
  stroke(0);
  rect(xp,yp,xp+160,yp+30,100);
  rect(xp+170,yp,xp+160,yp+30,100);
}

function body2( xp, yp)  {
  fill(175, 124, 70);
  rect(xp,yp,xp+300,yp+225,100);
}

function tummy2( xp,yp)  {
  fill(245, 235, 223);
  noStroke();
  rect(xp,yp,xp+150,yp+23,150);
}

 function arms2( xp, yp)  {
   fill(175, 124, 70);
   stroke(0);
   rect(xp,yp,xp+140,yp+20,100);
   rect(xp+130,yp,xp+140,yp+20,100);
 }

function armpit2( xp, yp)  {
  fill(175, 124, 70);
  noStroke();
  rect(xp,yp,xp+140,yp-65,100);
  rect(xp+130,yp,xp+140,yp-65,100);
}

function head2( xp, yp)  {
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

function nose2( xp, yp)  {
  fill(0);
  ellipse(xp,yp,xp+25,yp+10);

  noFill();
  stroke(0);
  line(0,0,0,25);
  line(0,25,-7,35);
  line(0,25,7,35);
}

function eyes2( xp, yp)  {
  fill(0);
  ellipse(xp,yp,xp+80,yp+10);
  ellipse(xp+125,yp,xp+80,yp+10);
}

function eyewhite2( xp, yp)  {
  fill(255);
  noStroke();
  ellipse(xp,yp,xp+70,yp+1);
  ellipse(xp+135,yp,xp+70,yp+1);
}

function ears2( xp, yp)  {
  fill(175, 124, 70);
  stroke(0);
  rect(xp,yp,xp+105,yp+105,20);
  rect(xp+120,yp,xp+105,yp+105,20);
}


//dog3 hours
function dog3()  {
 legs3 (-110,70);
 body3 (-100,-25);
 tummy3 (-50,77);
 arms3 (-90,80);
 armpit3 (-90,80);
 head3 (0,0);
 nose3 (0,10);
 eyes3 (-60,5);
 eyewhite3 (-65,4);
 ears3 (-75,-75);

  }

function legs3( xp, yp)  {
  fill(175, 124, 70);
  stroke(0);
  rect(xp,yp,xp+160,yp+30,100);
  rect(xp+170,yp,xp+160,yp+30,100);
}

function body3( xp, yp)  {
  fill(175, 124, 70);
  rect(xp,yp,xp+300,yp+225,100);
}

function tummy3( xp,yp)  {
  fill(245, 235, 223);
  noStroke();
  rect(xp,yp,xp+150,yp+23,150);
}

 function arms3( xp, yp)  {
   fill(175, 124, 70);
   stroke(0);
   rect(xp,yp,xp+140,yp+20,100);
   rect(xp+130,yp,xp+140,yp+20,100);
 }

function armpit3( xp, yp)  {
  fill(175, 124, 70);
  noStroke();
  rect(xp,yp,xp+140,yp-65,100);
  rect(xp+130,yp,xp+140,yp-65,100);
}

function head3( xp, yp)  {
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

function nose3( xp, yp)  {
  fill(0);
  ellipse(xp,yp,xp+25,yp+10);

  noFill();
  stroke(0);
  line(0,0,0,25);
  line(0,25,-7,35);
  line(0,25,7,35);
}

function eyes3( xp, yp)  {
  fill(0);
  ellipse(xp,yp,xp+80,yp+10);
  ellipse(xp+125,yp,xp+80,yp+10);
}

function eyewhite3( xp, yp)  {
  fill(255);
  noStroke();
  ellipse(xp,yp,xp+70,yp+1);
  ellipse(xp+135,yp,xp+70,yp+1);
}

function ears3( xp, yp)  {
  fill(175, 124, 70);
  stroke(0);
  rect(xp,yp,xp+105,yp+105,20);
  rect(xp+120,yp,xp+105,yp+105,20);
}
