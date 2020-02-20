var mic;
var vol;
var y = 0 ;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background('black');

push() ;
translate(y, 0) ;



fill(255);
rect(220, 360, 280, 250);


fill(255);
arc(360, 360, 280, 280, PI, TWO_PI);

fill(0);
ellipse(310, 320, 50, 50);

fill(0);
ellipse(410, 320, 50, 50);

fill("#06D85B");
ellipse(310, 320, 10, 10);

fill("#06D85B");
ellipse(410, 320, 10, 10);

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

pop();

  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 2) {
    // do something
    y++ ;

  }


  textSize(18);
  text("Click the screen first.  My volume is ", + vol, 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
