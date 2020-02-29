var timer = 0 ;
var myState = 0 ;


function setup(){
  // put setup code here
  createCanvas(800, 800,) ;

}

function draw() {
  // put drawing code here
switch(myState){
  case 0 :
  background('green');
  textSize(35);
  text("Why can't you trust atoms?", 200, 400,) ;
  timer++ ;
  if (timer > 200){
  myState = 1;
  timer = 0;
}
  break ;

  case 1 :
  background('red');
    textSize(35);
text("Because they make up everything", 200, 400,) ;
timer++ ;
if (timer > 200){
myState = 0;
timer = 0;
}
break ;

}
}
