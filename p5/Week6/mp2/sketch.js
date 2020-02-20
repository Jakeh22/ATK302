var myState = 0 ;
var timer = 0 ;

function setup() {
  // put setup code here
    createCanvas(800,800) ;
}

function draw() {

  switch(myState) {

case 0 :
background(100) ;
text('This is the splash screen', 100, 100,) ;
noStroke();
fill('#06850D');
  ellipse(315, 200, 175, 175)
timer++ ;
if (timer > 100){
    myState = 1;
    time = 0 ;
}

break ;

case 1:
background('red') ;
text('This is the game-playing screen', 100, 100,) ;
noStroke();
fill('purple');
  ellipse(215, 250, 100, 100)
break ;

case 2:
background('blue') ;
text('Yay! You Won!!!', 100, 100,) ;
noStroke();
fill('black');
  ellipse(115, 300, 50, 50)
fill('white');
text('7!', 175, 700)
break ;

  }
fill('white');
text('the score is ', 100, 700)

}



function mouseReleased() {
  myState++ ;

  if (myState > 2) {
    myState = 0 ;
  }

}
