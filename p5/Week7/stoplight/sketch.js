var myState = 0 ;
var timer = 0 ;

function setup() {
createCanvas (800, 800,) ;
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;

}

function draw() {
background('blue'); 
fill('black');
  rect(width/2, height/2, 150, 400)
  fill('black');


  switch(myState){
    case 0 : // yellow
    fill('red');
    ellipse(width/2,height/2-110,100,100);
    fill('grey');
    ellipse(width/2,height/2,100,100);
    fill('grey');
    ellipse(width/2,height/2+110,100,100);


    timer++ ;
    if (timer > 200) {
      timer = 0 ;
      myState = 2 ;
    }
      break;
    case 1 : // red
  fill('grey');
    ellipse(width/2,height/2-110,100,100);
    fill('yellow');
    ellipse(width/2,height/2,100,100);
    fill('grey');
    ellipse(width/2,height/2+110,100, 100);

    timer++ ;
    if (timer > 200) {
      timer = 0 ;
      myState = 0 ;
    }
      break;
    case 2 : // red
    fill('grey');
      ellipse(width/2,height/2-110,100,100);
      fill('grey');
      ellipse(width/2,height/2,100,100);
      fill('green');
      ellipse(width/2,height/2+110,100, 100);

      timer++ ;
      if (timer > 200) {
        timer = 0 ;
        myState = 1 ;
      }
        break;

}





}
