
var myFont;

function preload() {
  myFont = loadFont('assets/JUNGLETOJUNGLE.ttf');  // find an otf or ttf
}

function setup() {
  createCanvas(1000, 800) ;
}
function draw() {
  fill('#000000');   // SETS the color
  textFont(myFont);  // SETS the font
  textSize(36);	// SETS the size of the font
  text('HELLO, THIS TOOK A WHILE BUT FINALLY WORKED', 10, 300); // DISPLAYS TEXT WITH THE FONT
}
