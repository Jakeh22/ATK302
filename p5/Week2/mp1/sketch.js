function setup() {
  // put setup code here

}

function draw() {
  // put drawing code here

  background(237, 34, 93);
  fill(0);

  if (mouseIsPressed) {
    ellipse(50, 50, 50, 50);
                      }
  else                {
    rect(25, 25, 50, 50);
                      }

    print(mouseIsPressed);
                }

function mouseReleased() {
  console.log(mouseX + ", "+ mouseY) ;
}
