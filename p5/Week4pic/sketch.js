var bunnyPic;

function setup() {
    // put setup code here
  createCanvas(800, 800);
  bunnyPic = loadImage('assets/bunnyy.jpg');
}

function draw() {
    // put drawing code here
    image(bunnyPic, 10, 10) ;
}
