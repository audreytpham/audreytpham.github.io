char currentkey = '1';
color bgc = color(255);
function setup() {

createCanvas(600, 600);
background(255);
smooth();
}

function draw() {

// triggering the clear_print function
if(keyPressed) {
 clear_print();
 savef();
}

// triggering the newkeychoice
if(mousePressed) {
  drawChoice();
}
//record(1000);
}

function drawChoice() {

 // key global variable contains whatever key was last pressed
 char currentkey = key;

switch(currentkey) {
case '1':
  println("bear");  // make a bear
  push();
  translate(mouseX,mouseY);
  scale(.75);
  bear();
  pop();
 // drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  println("flower");  // red line
  push();
  translate(mouseX,mouseY);
  scale(1.5);
  flower();
  pop();
  //drawline(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  println("heart");  // green line
  push();
  translate(mouseX,mouseY);
  scale(2);
  heart();
  pop();
  //drawline(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  println("bunny");  // fat purple line
 push();
  translate(mouseX,mouseY);
  bunny();
  pop();
 // drawFatLine(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  println("dog");  // erase with bg color
push();
  translate(mouseX,mouseY);
  dog();
  pop();
 // eraser(bgc,mouseX, mouseY,25);
  break;

default:             // Default executes if the case labels
  println("None");   // don't match the switch parameter
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

function ears(int xp, int yp, color c)  {
  fill(c);
  stroke(141, 97, 45);
  ellipse(xp-25,yp-20,20,15);
  ellipse(xp+25,yp-20,20,15);
}

function face(int xp, int yp, color c)  {
  fill(c);
  stroke(141, 97, 45);
  ellipse(xp,yp,60,50);
}

function eyes(int xp, int yp, color c)  {
  fill(c);
  ellipse(xp-12,yp-2,5,5);
  ellipse(xp+26,yp-2,5,5);
}

function muzzle(int xp, int yp, color c)  {
  fill(c);
  noStroke();
  ellipse(xp,yp,20,15);
}

function nose(int xp, int yp, color c)   {
  fill(c);
  ellipse(xp,yp+2,5,5);
}

function flower()  {
  petals(0,0, color(255, 198, 232));
}


function petals(int xp, int yp, color c)  {
  if (mousePressed == true) {


  fill(c);
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
  if (mousePressed == true) {
  bottom(-15,0,color (239, 70, 162));
  left(-10,0, color (239, 70, 162));
  right(10,0, color (239, 70, 162));
}
}
function bottom(int xp, int yp, color c)  {
  fill(c);
  stroke(139, 25, 87);
  triangle(xp-4,yp+10,xp+34,yp+10,xp+15,yp+30);
  noStroke();
  ellipse(xp+15,yp+10,10,10);
}

function left(int xp, int yp, color c)  {
  fill(c);
  stroke(139, 25, 87);
  ellipse(xp,yp+5,20,20);
}

function right(int xp, int yp, color c)  {
  fill(c);
  stroke(139, 25, 87);
  ellipse(xp,yp+5,20,20);

  noStroke();
  fill(c);
  triangle(xp-27,yp+3,xp+9,yp+10,xp-8,yp+30);

  triangle(xp-28,yp+10,xp+9,yp+10,xp-9,yp+30);
}

function bunny()  {
  //translate(180,0);
  if (mousePressed == true) {
  ears2(10,0, color (252, 246, 236));
  inear(7,3, color (255, 198, 232));
  head2(0,0, color (252, 246, 236));
  eyes2(-15,0, color (0));
  nose2(0,5, color (255, 198, 232));
}
}

function ears2(int xp, int yp, color c)  {
  fill(c);
  ellipse(xp-23,yp-25,15,35);
  ellipse(xp+3,yp-25,15,35);
}

function inear(int xp, int yp, color c)  {
  fill(c);
  ellipse(xp-20,yp-25,6,18);
  ellipse(xp+5,yp-25,6,18);
}

function head2(int xp, int yp, color c)  {
  fill(c);
  ellipse(xp,yp,60,50);
}

function eyes2(int xp, int yp, color c)  {
  fill(c);
  ellipse(xp-3,yp,5,5);
  ellipse(xp+34,yp,5,5);
}

function nose2(int xp, int yp, color c)  {
  fill(c);
  ellipse(xp,yp-3,7,7);
}

function dog()  {
  //translate(260,0);
  if (mousePressed == true) {
  scale(.3);
 head (0,0, color (175, 124, 70));
 nose3 (0,10, color (0));
 eyes3 (-60,5, color (0));
 eyewhite (-65,4, color (255));
 ears3 (-75,-75, color (175, 124, 70));
  }
}

function head(int xp, int yp, color c)  {
  fill(c);
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

function nose3(int xp, int yp, color c)  {
  fill(c);
  ellipse(xp,yp,xp+25,yp+10);

  noFill();
  stroke(0);
  line(0,0,0,25);
  line(0,25,-7,35);
  line(0,25,7,35);
}

function eyes3(int xp, int yp, color c)  {
  fill(c);
  ellipse(xp,yp,xp+80,yp+10);
  ellipse(xp+125,yp,xp+80,yp+10);
}

function eyewhite(int xp, int yp, color c)  {
  fill(c);
  noStroke();
  ellipse(xp,yp,xp+70,yp+1);
  ellipse(xp+135,yp,xp+70,yp+1);
}

function ears3(int xp, int yp, color c)  {
  fill(c);
  stroke(0);
  rect(xp,yp,xp+105,yp+105,30);
  rect(xp+120,yp,xp+105,yp+105,30);
}

function clear_print() {

  if (key == 'x' || key == 'X') {
    background(255);
  }



}
