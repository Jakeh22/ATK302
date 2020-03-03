var myState = 0 ;
var timer = 0 ;
var x = 0 ;

function setup() {
  // put setup code here
    createCanvas(800,800) ;
}
let angle1 = 0;
let angle2 = 0;
let scalar = 70;

function keyPressed(){
if(myState == 2)
myState = 3
}


function draw() {


switch(myState) {

case 0 :
    background(0) ;
    text('This is state 1. Showing the base of mp1', 100, 100,) ;
    noStroke();
    fill(255);
    rect(220, 360, 280, 250);
    fill(255);
    arc(360, 360, 280, 280, PI, TWO_PI);
    fill(0);
    ellipse(310, 340, 50, 50);
    fill(0);
    ellipse(410, 340, 50, 50);
    fill('white');
    text('Wait a second for state 2! ', 100, 700)
    timer++ ;
    if (timer > 200){
    myState = 1;
    time = 0 ;
    }
break ;

case 1:
    background(0) ;
    text('This is state 2. Showing more of mp1.', 100, 100,) ;
    noStroke();
    fill(255);
    rect(220, 360, 280, 250);
    fill(255);
    arc(360, 360, 280, 280, PI, TWO_PI);
    fill(0);
    ellipse(310, 340, 50, 50);
    fill(0);
    ellipse(410, 340, 50, 50);
    fill("#06D85B");
    ellipse(310, 340, 10, 10);
    fill("#06D85B");
    ellipse(410, 340, 10, 10);
    fill("#000FFF");
    rect(320, 400, 80, 20);
    fill("#000000");
    rect(330, 405, 60, 10);
    fill('white');
    text('click for state 3! ', 100, 700)
break ;

case 2:
    background(0) ;
    text('This is state 3. I started doing fadeaways in the bottom to accent the ghost.', 100, 100,) ;
    noStroke();
    fill(255);
    rect(220, 360, 280, 250);
    fill(255);
    arc(360, 360, 280, 280, PI, TWO_PI);
    fill(0);
    ellipse(310, 340, 50, 50);
    fill(0);
    ellipse(410, 340, 50, 50);
    fill("#06D85B");
    ellipse(310, 340, 10, 10);
    fill("#06D85B");
    ellipse(410, 340, 10, 10);
    fill("#000FFF");
    rect(320, 400, 80, 20);
    fill("#000000");
    rect(330, 405, 60, 10);
    fill("#F0F0F0");
    triangle(220, 610, 360, 510, 500, 610);
    fill("#D3D1D1");
    triangle(220, 610, 360, 520, 500, 610);
    fill("#B4B3B3");
    triangle(220, 610, 360, 530, 500, 610);
    fill("#969494");
    triangle(220, 610, 360, 540, 500, 610);
    fill('white');
    text('Press any key for state 4.', 175, 700)

break ;

case 3:
    background(0) ;
    fill('white');
    text('This is state 4', 100, 100,) ;
    noStroke();
    fill(255);
    rect(220, 360, 280, 250);
    fill(255);
    arc(360, 360, 280, 280, PI, TWO_PI);
    fill(0);
    ellipse(310, 340, 50, 50);
    fill(0);
    ellipse(410, 340, 50, 50);
    fill("#06D85B");
    ellipse(310, 340, 10, 10);
    fill("#06D85B");
    ellipse(410, 340, 10, 10);
    fill("#000FFF");
    rect(320, 400, 80, 20);
    fill("#000000");
    rect(330, 405, 60, 10);
    fill("#F0F0F0");
    triangle(220, 610, 360, 510, 500, 610);
    fill("#D3D1D1");
    triangle(220, 610, 360, 520, 500, 610);
    fill("#B4B3B3");
    triangle(220, 610, 360, 530, 500, 610);
    fill("#969494");
    triangle(220, 610, 360, 540, 500, 610);
    fill("#8B8B8B");
    triangle(220, 610, 360, 550, 500, 610);
    fill("#6E6D6D");
    triangle(220, 610, 360, 560, 500, 610);
    fill("#555555");
    triangle(220, 610, 360, 570, 500, 610);
    fill("#333333");
    triangle(220, 610, 360, 580, 500, 610);
    fill("#000000");
    triangle(220, 610, 360, 590, 500, 610);
    fill('white');
    text('Click for state 5.', 175, 700)
    break ;

case 4:
    background(0) ;
    fill('white');
    text('This is state 5', 100, 100,) ;
    noStroke();
    let ang1 = radians(angle1);
    let ang2 = radians(angle2);
    let x1 = width / 2 + scalar * cos(ang1);
    let x2 = width / 2 + scalar * cos(ang2);
    let y1 = height / 2 + scalar * sin(ang1);
    let y2 = height / 2 + scalar * sin(ang2);
    fill("#F8D60B");
    ellipse(width * 0.5 - 240, y1, scalar, scalar);
    ellipse(width * 0.5 + 210, y2, scalar, scalar);
    fill("#870CFE");
    ellipse(width * 0.5 - 260, y1, scalar, scalar);
    ellipse(width * 0.5 + 230, y2, scalar, scalar);
    fill("#000000");
    ellipse(width * 0.5 - 250, y1, scalar, scalar);
    ellipse(width * 0.5 + 220, y2, scalar, scalar);
    angle1 += 2;
    angle2 += 3;
    fill(255);
    rect(220, 360, 280, 250);
    fill(255);
    arc(360, 360, 280, 280, PI, TWO_PI);
    fill(0);
    ellipse(310, 340, 50, 50);
    fill(0);
    ellipse(410, 340, 50, 50);
    fill("#06D85B");
    ellipse(310, 340, 10, 10);
    fill("#06D85B");
    ellipse(410, 340, 10, 10);
    fill("#000FFF");
    rect(320, 400, 80, 20);
    fill("#000000");
    rect(330, 405, 60, 10);
    fill("#F0F0F0");
    triangle(220, 610, 360, 510, 500, 610);
    fill("#D3D1D1");
    triangle(220, 610, 360, 520, 500, 610);
    fill("#B4B3B3");
    triangle(220, 610, 360, 530, 500, 610);
    fill("#969494");
    triangle(220, 610, 360, 540, 500, 610);
    fill("#8B8B8B");
    triangle(220, 610, 360, 550, 500, 610);
    fill("#6E6D6D");
    triangle(220, 610, 360, 560, 500, 610);
    fill("#555555");
    triangle(220, 610, 360, 570, 500, 610);
    fill("#333333");
    triangle(220, 610, 360, 580, 500, 610);
    fill("#000000");
    triangle(220, 610, 360, 590, 500, 610);
    fill('white');
    text('Final Project.', 175, 700)
    break ;

    }
}

function mouseReleased() {
  myState++ ;

  if (myState > 4) {
    myState = 0 ;
  }

}
