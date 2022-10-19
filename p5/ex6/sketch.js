var currentkey = '1';
var bgc;
function setup() {

createCanvas(600, 600);
background(255);
bgc = color(255);
//smooth();
}

function draw() {

// triggering the clear_print function
if(keyIsPressed) {
 clear_print();
 //savef();
}

// triggering the newkeychoice
if(mouseIsPressed) {
  drawChoice();
}
//record(1000);
}

function drawChoice() {

 // key global variable contains whatever key was last pressedchar currentkey = key;
let currentkey = key;

switch(currentkey) {
case '1':
  console.log();("bear");  // make a bear
  push();
  translate(mouseX,mouseY);
  scale(.75);
  bear();
  pop();
 // drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log();("flower");  // red line
  push();
  translate(mouseX,mouseY);
  scale(1.5);
  flower();
  pop();
  //drawline(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log();("heart");  // green line
  push();
  translate(mouseX,mouseY);
  scale(2);
  heart();
  pop();
  //drawline(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log();("bunny");  // fat purple line
 push();
  translate(mouseX,mouseY);
  bunny();
  pop();
 // drawFatLine(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  console.log();("dog");  // erase with bg color
push();
  translate(mouseX,mouseY);
  dog();
  pop();
 // eraser(bgc,mouseX, mouseY,25);
  break;
  case '6':
    //println("pig");  // erase with bg color
  push();
    translate(mouseX,mouseY);
    pig();
    pop();
   // eraser(bgc,mouseX, mouseY,25);
    break;
    case '7':
    //println("pig");  // erase with bg color
  push();
    translate(mouseX,mouseY);
    frog();
    pop();
   // eraser(bgc,mouseX, mouseY,25);
    break;
default:             // Default executes if the case labels
  console.log();("None");   // don't match the switch parameter
  break;
}

}

function bear()   {

  ears(0,0, color (184, 131, 68));
  face(0,0, color(184, 131, 68));
  eyes(-7,0, color(0));
  muzzle(0,5, color(252, 241, 228));
  nose(0,0, color(0));

}

function ears(xp, yp,)  {
  fill(184, 131, 68);
  stroke(141, 97, 45);
  ellipse(xp-25,yp-20,20,15);
  ellipse(xp+25,yp-20,20,15);
}

function face(xp, yp, )  {
  fill(184, 131, 68);
  stroke(141, 97, 45);
  ellipse(xp,yp,60,50);
}

function eyes(xp, yp,)  {
  fill(0);
  ellipse(xp-12,yp-2,5,5);
  ellipse(xp+26,yp-2,5,5);
}

function muzzle(xp, yp,)  {
  fill(252, 241, 228);
  noStroke();
  ellipse(xp,yp,20,15);
}

function nose(xp, yp,)   {
  fill(0);
  ellipse(xp,yp+2,5,5);
}

function flower()  {
  petals(0,0, color(255, 198, 232));
}


function petals(xp, yp,)  {
  if (mouseIsPressed == true) {


  fill(255, 198, 232);
  strokeWeight(1);
  stroke(245, 123, 167);
  ellipse(xp-2,yp-19,20,20);
  ellipse(xp+17,yp-10,20,20);
  ellipse(xp+15,yp+10,20,20);
  ellipse(xp-5,yp+15,20,20);
  ellipse(xp-15,yp-3,20,20);

  fill(254, 218, 114);
  ellipse(xp+2,yp-2,23,23);
}
}

function heart()  {
  //translate(120,-10);
  if (mouseIsPressed == true) {
  bottom(-15,0,color (239, 70, 162));
  left(-10,0, color (239, 70, 162));
  right(10,0, color (239, 70, 162));
}
}
function bottom(xp, yp, )  {
  fill(239, 70, 162);
  stroke(139, 25, 87);
  triangle(xp-4,yp+10,xp+34,yp+10,xp+15,yp+30);
  noStroke();
  ellipse(xp+15,yp+10,10,10);
}

function left(xp, yp, )  {
  fill(239, 70, 162);
  stroke(139, 25, 87);
  ellipse(xp,yp+5,20,20);
}

function right(xp, yp, )  {
  fill(239, 70, 162);
  stroke(139, 25, 87);
  ellipse(xp,yp+5,20,20);

  noStroke();
  fill(239, 70, 162);
  triangle(xp-27,yp+3,xp+9,yp+10,xp-8,yp+30);

  triangle(xp-28,yp+10,xp+9,yp+10,xp-9,yp+30);
}

function bunny()  {
  //translate(180,0);
  if (mouseIsPressed == true) {
  ears2(10,0, color (252, 246, 236));
  inear(7,3, color (255, 198, 232));
  head2(0,0, color (252, 246, 236));
  eyes2(-15,0, color (0));
  nose2(0,5, color (255, 198, 232));
}
}

function ears2(xp, yp, )  {
  fill(252, 246, 236);
  ellipse(xp-23,yp-25,15,35);
  ellipse(xp+3,yp-25,15,35);
}

function inear(xp, yp,)  {
  fill(255, 198, 232);
  ellipse(xp-20,yp-25,6,18);
  ellipse(xp+5,yp-25,6,18);
}

function head2(xp, yp,)  {
  fill(252, 246, 236);
  ellipse(xp,yp,60,50);
}

function eyes2(xp, yp,)  {
  fill(0);
  ellipse(xp-3,yp,5,5);
  ellipse(xp+34,yp,5,5);
}

function nose2(xp, yp,)  {
  fill(255, 198, 232);
  ellipse(xp,yp-3,7,7);
}

function dog()  {
  //translate(260,0);
  if (mouseIsPressed == true) {
  scale(.3);
 head (0,0, color (175, 124, 70));
 nose3 (0,10, color (0));
 eyes3 (-60,5, color (0));
 eyewhite (-65,4, color (255));
 ears3 (-75,-75, color (175, 124, 70));
  }
}

function head(xp, yp,)  {
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

function nose3(xp, yp,)  {
  fill(0);
  ellipse(xp,yp,xp+25,yp+10);

  noFill();
  stroke(0);
  line(0,0,0,25);
  line(0,25,-7,35);
  line(0,25,7,35);
}

function eyes3(xp, yp,)  {
  fill(0);
  ellipse(xp,yp,xp+80,yp+10);
  ellipse(xp+125,yp,xp+80,yp+10);
}

function eyewhite(xp, yp,)  {
  fill(255);
  noStroke();
  ellipse(xp,yp,xp+70,yp+1);
  ellipse(xp+135,yp,xp+70,yp+1);
}

function ears3(xp, yp,)  {
  fill(175, 124, 70);
  stroke(0);
  rect(xp,yp,xp+105,yp+105,30);
  rect(xp+120,yp,xp+105,yp+105,30);
}
function pig()   {

  ears4(0,0);
  face4(0,0);
  eyes4(-7,0);
  muzzle4(0,5);
  nose4(0,0);

}

function ears4(xp,yp )  {
  fill(255, 204, 226);
  stroke(255, 84, 160);
  ellipse(xp-25,yp-20,20,15);
  ellipse(xp+25,yp-20,20,15);
}

function face4(xp,yp)  {
  fill(255, 204, 226);
  stroke(255, 84, 160);
  ellipse(xp,yp,60,50);
}

function eyes4(xp,yp )  {
  stroke(0);
  fill(0);
  ellipse(xp-12,yp-2,5,5);
  ellipse(xp+26,yp-2,5,5);
}

function muzzle4(xp,yp)  {

  stroke(255, 84, 160);
  fill(255, 204, 226);
  ellipse(xp,yp,20,15);
}

function nose4(xp,yp )   {
  stroke(255, 84, 160);
  fill(255, 84, 160);
  ellipse(xp+4,yp+5,2,5);
  ellipse(xp-4,yp+5,2,5);
}
function frog()   {

  ears5(0,0);
  face5(0,0);
  eyes5(-7,0);
  //muzzle5(0,5);
  nose5(0,0);

}

function ears5(xp,yp )  {
  fill(157, 236, 164);
  stroke(51, 177, 62);
  ellipse(xp-20,yp-23,20,20);
  ellipse(xp+20,yp-23,20,20);
}

function eyes5(xp,yp )  {
  fill(255);
  ellipse(xp-12,yp-24,13,13);
  ellipse(xp+26,yp-24,13,13);
  stroke(0);
  fill(0);
  ellipse(xp-12,yp-24,5,5);
  ellipse(xp+26,yp-24,5,5);
}
function face5(xp,yp)  {
  fill(157, 236, 164);
  stroke(51, 177, 62);
  ellipse(xp,yp,60,50);
}

function nose5(xp,yp )   {
  stroke(0);
  fill(0);
  ellipse(xp+4,yp-10,2,5);
  ellipse(xp-4,yp-10,2,5);
}


function clear_print() {

  if (key == 'x' || key == 'X') {
    background(255);
  }



}
