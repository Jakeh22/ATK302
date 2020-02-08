var bunnyPic;
var flowerPic;
var lightPic;

function setup() {
    // put setup code here
  createCanvas(800, 800);
  bunnyPic = loadImage('assets/bunnyy.jpg');
  flowerPic = loadImage('assets/flower.jpg');
  lightPic = loadImage('assets/light.jpg');
}

function draw() {
    // put drawing code here
    image(bunnyPic, 10, 10) ;
    image(flowerPic, 500, 60) ;
    image(lightPic, 500, 300) ;
}
