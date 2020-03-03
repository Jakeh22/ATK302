var myState = 0 ;
var timer = 0 ;
var x = 0 ;

function setup() {
  // put setup code here
    createCanvas(800,800) ;
}

function draw() {

  switch(myState) {

case 0 :
background(100) ;
text('This is state 1', 100, 100,) ;
noStroke();
fill('#06850D');
  ellipse(315, 200, 175, 175)
  fill('white');

  text('wait one second for state 2! ', 100, 700)
timer++ ;
if (timer > 200){
    myState = 1;
    time = 0 ;
}

break ;

case 1:
background('red') ;
text('This is state 2', 100, 100,) ;
noStroke();
fill('purple');
  ellipse(215, 250, 100, 100)
  fill('white');
  text('click for state 3! ', 100, 700)
break ;

case 2:
background('blue') ;
text('This is state 3', 100, 100,) ;
noStroke();
fill('black');
  ellipse(115, 300, 50, 50)
fill('white');
text('Hover over the circle for state 4.', 175, 700)
break ;

case 3:
background('yellow') ;
fill('black');
text('This is state 4', 100, 100,) ;
noStroke();
fill('black');
  ellipse(400, 500, 25, 25)
fill('black');
text('Hover over the circle for state 4.', 175, 700)
break ;

case 4:
background('green') ;
fill('black');
text('This is state 4', 100, 100,) ;
noStroke();
ellipse (x, 100, 100, 100) ;
x = (x + 5) % width
fill('black');
text('Hover over the circle for state 4.', 175, 700)
break ;

  }


}



function mouseReleased() {
  myState++ ;

  if (myState > 4) {
    myState = 0 ;
  }

}
