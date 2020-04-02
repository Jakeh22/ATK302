var cars = [] ;
var frogPos;

function setup() {
  createCanvas(800, 700);

for (var i = 0; i < 25; i++) {
  cars.push(new Car());
  }

  frogPos = createVector(400, height-100) ;

  }
function draw() {
  background('black');

for (var i = 0; i < cars.length; i++) {
  cars[i].display();
  cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 35) {
      cars.splice(i, 1) ;
  }
  }
            // frog
fill('white') ;
    ellipse(frogPos.x, frogPos.y, 50, 50,) ;
    checkForKeys();
  }

function checkForKeys() {
    if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5 ;
    if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5 ;
    if (keyIsDown(UP_ARROW)) frogPos.y -= 5 ;
    if (keyIsDown(DOWN_ARROW)) frogPos.y += 5 ;
  }

function Car() {
            // attributes (change the car)
  this.pos = createVector(random(width), random(height)) ;
  this.vel = createVector(random(-5, 5), random(-5, 5)) ;
  this.r = random(0, 255) ;
  this.g = random(255) ;
  this.b = random(0, 255) ;
  this.diameter = random(10, 20, 30, 65,)

  this.display = function() {
        fill(this.r, this.g, this.b) ;
        rect(this.pos.x, this.pos.y, this.diameter, this.diameter) ;
  }

  this.drive = function() {
      this.pos.add(this.vel) ;
      if (this.pos.x > width) this.pos.x = 0 ;
      if (this.pos.x < 0) this.pos.x = width ;
      if (this.pos.y > height) this.pos.y = 0 ;
      if (this.pos.y < 0) this.pos.y = height ;
  }

}

//code phrase 1. Chicago
//code phrase 2. Tony Stark(Iron Man)
//code phrase 3. favorite hobby is making music
//code phrase 4. favorite food is pizza
