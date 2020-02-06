var song1;

function preload() {
  song1 = loadSound('assets/Keys.mp3');
}

function setup() {

  createCanvas(720, 200);
  background(255, 0, 0);
  song1.play();

}

function draw() {

}

function touchStarted() {
  getAudioContext().resume();
}
