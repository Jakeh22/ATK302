var x = 0

function setup() {
  createCanvas(700, 700);
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
}

function draw() {
  background('black');

  rect(x, 50, 25, 25,);

  x = x + 1;

  if (x > width) {
      x = 0;
  } 
}
