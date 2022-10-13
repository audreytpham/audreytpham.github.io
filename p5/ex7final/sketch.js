// example 7.3

    // This uses the transformation matrix tools to move,
    //rotate and scale things as batch operations
    var numbers = [90, 30, 30, 45, 12, 78, 56];

    //7 x 7
    var facearr = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 2, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 2, 2, 1, 2, 2, 1, 2, 2, 0, 0, 0, 0],
      [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 1, 5, 5, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1],
      [0, 0, 1, 5, 4, 4, 5, 1, 1, 1, 5, 4, 4, 5, 1, 1],
      [0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];


       var facearr2 = [ // 7 x 7
         ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
         ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
         ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
         ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
         ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
         ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "ZOOM", "zero", "zero", "zero"],
         ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "ZOOM", "ZOOM", "ZOOM", "ZOOM", "zero"],
         ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "ZOOM", "ZOOM", "ZOOM", "ZOOM", "zero"],
         ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "ZOOM", "ZOOM", "ZOOM", "ZOOM", "ZOOM"],
         ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "ZOOM", "ZOOM", "ZOOM", "ZOOM"],
         ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "ZOOM", "ZOOM"],
         ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
         ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
         ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
         ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
         ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
         ];

          var facearr3 = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 2, 1, 2, 2, 1, 2, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 2, 2, 1, 2, 2, 1, 2, 2, 0, 0, 0, 0],
            [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 5, 5, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1],
            [0, 0, 1, 5, 4, 4, 5, 1, 1, 1, 5, 4, 4, 5, 1, 1],
            [0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ];


             var facearr4 = [ // 7 x 7
               ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
               ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
               ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
               ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
               ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
               ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
               ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "ZOOM", "ZOOM", "ZOOM", "zero"],
               ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "ZOOM", "ZOOM", "ZOOM", "ZOOM", "zero"],
               ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "ZOOM", "ZOOM", "ZOOM", "ZOOM", "zero"],
               ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "ZOOM", "ZOOM", "ZOOM", "ZOOM"],
               ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "ZOOM", "ZOOM"],
               ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
               ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
               ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
               ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
               ["zero", "zero", "zero", "zero", "zero", "zero", "zero","zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero", "zero"],
               ];


               var facearr5 = [
                  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 3, 3, 0, 3, 3, 3, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
                  [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
                  [0, 0, 0, 3, 3, 3, 1, 3, 3, 1, 3, 1, 3, 3, 3, 0],
                  [0, 0, 0, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 0],
                  [0, 0, 3, 1, 1, 1, 1, 3, 1, 2, 1, 3, 1, 1, 3, 0],
                  [0, 3, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0],
                  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                  [0, 0, 0, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 0],
                  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                  ];


                  var facearr6 = [
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 3, 3, 0, 3, 3, 3, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
                     [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
                     [0, 0, 0, 3, 3, 3, 1, 3, 3, 1, 3, 1, 3, 3, 3, 0],
                     [0, 0, 0, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 0],
                     [0, 0, 3, 1, 1, 1, 1, 3, 1, 2, 1, 3, 1, 1, 3, 0],
                     [0, 3, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                     [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0],
                     [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                     [0, 0, 0, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 0],
                     [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                     [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                     [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                     ];


                     var facearr7 = [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 3, 3, 0, 3, 3, 3, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
                        [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
                        [0, 0, 0, 3, 3, 3, 1, 3, 3, 1, 3, 1, 3, 3, 3, 0],
                        [0, 0, 0, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 0],
                        [0, 0, 3, 1, 1, 1, 1, 3, 1, 2, 1, 3, 1, 1, 3, 0],
                        [0, 3, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0],
                        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 0, 0, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        ];

                        var facearr8 = [
                           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                           [0, 0, 0, 0, 0, 0, 3, 3, 0, 3, 3, 3, 0, 0, 0, 0],
                           [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
                           [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
                           [0, 0, 0, 3, 3, 3, 1, 3, 3, 1, 3, 1, 3, 3, 3, 0],
                           [0, 0, 0, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 0],
                           [0, 0, 3, 1, 1, 1, 1, 3, 1, 2, 1, 3, 1, 1, 3, 0],
                           [0, 3, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3],
                           [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0],
                           [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                           [0, 0, 0, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 0],
                           [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                           [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                           [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                           [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0],
                           [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                           ];


    function setup() {
    noStroke();
    createCanvas(800, 800);
    background(169, 224, 245);
    fill(255);
    //translate example


    push();
    translate(300,-50)
    //scale(.75);
    drawfacearray1();
    pop();

    push();
    translate(75, 550);
    rotate(radians(-20));
    //scale(.75);
    drawfacearray2();
    pop();

    push();

    translate(0, 375);
    drawfacearray3();

    pop();


    push();
    translate(15,-80);
    scale(.75);
    rotate(radians(20));
    drawfacearray4();
    pop();

    push();
    translate(0,250);
    scale(.5);
    drawfacearray5();
    pop();

    push();
    translate(350,350);
    rotate(radians(25));
    scale(.25);
    drawfacearray6();
    pop();

    push();
    translate(250,10);
    //rotate(radians(25));
    scale(.25);
    drawfacearray7();
    pop();

    push();
    translate(200,650);
    //rotate(radians(25));
    scale(.15);
    drawfacearray8();
    pop();


    // function drawarray(fade) {
    // for (var i = 0; i < numbers.length; i++) {
    // fill(numbers[i] * 2,fade);
    // rect(i * 10, 20, 10, 10);
    // }
  } //end of set up

//top right corner
function drawfacearray1()  {
for (var i = 0; i < facearr.length; i++){


  for (var j = 0; j < facearr[0].length; j++){

    let data = facearr[i][j]

      if (data == 0) {
        fill(169, 224, 245);
      }
      if (data == 1) {
        fill(225, 55, 45); //red
      }
      if (data == 2) {
        fill(105, 200, 235); //blue windows
      }
      if (data == 3) {
        fill(255, 236, 0); //yellow lights
      }
      if (data == 4) {
        fill(67, 66, 57); //tires
      }
      if (data == 5) {
        fill(200, 14, 14); //red detail
      }

      rect((j * 30), (i * 30), 30, 30);

}
}

}

//bottom right
function drawfacearray2()  {

textSize(40);

for (var i = 0; i < facearr.length; i++){


  for (var j = 0; j < facearr[0].length; j++){

    let data = facearr2[i][j]

      if (data == "zero") {
        fill(169, 224, 245);
      }
      if (data == "ZOOM") {
        fill(255, 236, 0);
      }
      if (data == "0") {
        fill(251, 210, 69);
      }
      if (data == "0") {
        fill(21, 130, 35);
      }
      text(data,(j * 30), (i * 30), 130, 130);

}
}

}

//bottom left corner
function drawfacearray3()  {
for (var i = 0; i < facearr.length; i++){


  for (var j = 0; j < facearr[0].length; j++){

    let data = facearr3[i][j]

      if (data == 0) {
        fill(169, 224, 245);
      }
      if (data == 1) {
        fill(7, 108, 27); //green
      }
      if (data == 2) {
        fill(105, 200, 235); //blue windows
      }
      if (data == 3) {
        fill(255, 236, 0); //yellow lights
      }
      if (data == 4) {
        fill(67, 66, 57); //tires
      }
      if (data == 5) {
        fill(4, 62, 15); //green detail
      }
      rect((j * 30), (i * 30), 30, 30);

}
}

}
//top left corner
function drawfacearray4()  {

textSize(40);

for (var i = 0; i < facearr.length; i++){


  for (var j = 0; j < facearr[0].length; j++){

    let data = facearr4[i][j]

      if (data == "zero") {
        fill(169, 224, 245);
      }
      if (data == "ZOOM") {
        fill(156, 156, 156); //gray smoke
      }
      if (data == "two") {
        fill(251, 210, 69);
      }
      if (data == "three") {
        fill(21, 130, 35);
      }
      //rect((j * 30), (i * 30), 30, 30);
      text(data,(j * 30), (i * 30), 130, 130);

}
}

}


function drawfacearray5()  {
for (var i = 0; i < facearr.length; i++){


  for (var j = 0; j < facearr[0].length; j++){

    let data = facearr5[i][j]

      if (data == 0) {
        fill(169, 224, 245);
      }
      if (data == 1) {
        fill(225, 55, 45);
      }
      if (data == 2) {
        fill(251, 210, 69);
      }
      if (data == 3) {
        fill(21, 130, 35);
      }

      rect((j * 30), (i * 30), 30, 30);

}
}

}


function drawfacearray6()  {

textSize(80);

for (var i = 0; i < facearr.length; i++){


  for (var j = 0; j < facearr[0].length; j++){

    let data = facearr6[i][j]

      if (data == 0) {
        fill(169, 224, 245);
      }
      if (data == 1) {
        fill(255, 147, 209);
      }
      if (data == 2) {
        fill(251, 210, 69);
      }
      if (data == 3) {
        fill(21, 130, 35);
      }
      //rect((j * 30), (i * 30), 30, 30);
      text(data,(j * 30), (i * 30), 130, 130);

}
}

}


function drawfacearray7()  {

textSize(80);

for (var i = 0; i < facearr.length; i++){


  for (var j = 0; j < facearr[0].length; j++){

    let data = facearr7[i][j]

      if (data == 0) {
        fill(169, 224, 245);
      }
      if (data == 1) {
        fill(255, 147, 209);
      }
      if (data == 2) {
        fill(251, 210, 69);
      }
      if (data == 3) {
        fill(21, 130, 35);
      }
      //rect((j * 30), (i * 30), 30, 30);
      rect((j * 30), (i * 30), 30, 30);

}
}

}

function drawfacearray8()  {
for (var i = 0; i < facearr.length; i++){


  for (var j = 0; j < facearr[0].length; j++){

    let data = facearr8[i][j]

      if (data == 0) {
        fill(0);
      }
      if (data == 1) {
        fill(225, 55, 45);
      }
      if (data == 2) {
        fill(251, 210, 69);
      }
      if (data == 3) {
        fill(21, 130, 35);
      }

      rect((j * 30), (i * 30), 30, 30);

}
}

}
