var cars = [] ;
var frogPos;
var myState = 0 ;
var maxCars = 5 ;
var maxTimer = 12*60 ;
var timer = maxTimer ;

function setup() {
    createCanvas(800, 700);

            // spawn cars
  for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
  }

        frogPos = createVector(400, height-100) ;

        textAlign(CENTER) ;
  }
function draw() {

  switch(myState) {
  case 0:
    background('white') ;
    fill('black') ;
    textSize(32) ;
    text("Welcome to the Game! Click to play.", width/2, height/2) ;
  break ;

  case 1:
    game();
      timer = timer - 1 ;
  if (timer <= 0) {
      timer = maxTimer ;
      myState = 3 ;
    }

  break ;

  case 2:
    background('green') ;
    text("Congratulations! You beat the game :)", width/2, height/2) ;
  break ;

  case 3:
    background('purple') ;
    text("Oh no! You lost :(", width/2, height/2) ;
    text("Click to play again!", 400, 450) ;
  break ;
}

  }

function mouseReleased() {
  switch(myState) {
  case 0:
      myState = 1 ;
  break ;

  case 2: // they won
      timer = maxTimer ;
      cars = [] ;
  for (var i = 0; i < maxCars; i++) {
      cars.push(new Car());
    }
      myState = 0 ;
  break ;

  case 3: // they lost
      timer = maxTimer ;
      cars = [] ;
  for (var i = 0; i < maxCars; i++) {
      cars.push(new Car());
    }
      myState = 0 ;
  break ;
  }

}

function game() {
      background('black');

    for (var i = 0; i < cars.length; i++) {
        cars[i].display();
        cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 35) {
        cars.splice(i, 1) ;
        }
        }


    if (cars.length == 0) {
      myState = 2 ;
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
