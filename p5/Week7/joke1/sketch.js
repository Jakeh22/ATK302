var myState = 0 ;

function setup() {
  // put setup code here
    createCanvas(800,800) ;
}

function draw() {

  switch(myState) {

case 0 :
background(100) ;
textSize(35)
text('What kind of trees fit in your hand?', 100, 100,) ;
noStroke();

break ;

case 1:
background('red') ;
textSize(35)
text('Palm Trees!', 100, 100,) ;
noStroke();

break ;


  }

}



function mouseReleased() {
  myState++ ;

  if (myState > 1) {
    myState = 0 ;
  }

}
