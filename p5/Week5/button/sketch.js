let input, button, greeting;

function setup() {
  // create canvas
  createCanvas(600, 600);

  input = createInput();
  input.position(20, 65);

  button = createButton('click');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h1', 'What is your first name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(30);
}

function greet() {
  const name = input.value();
  greeting.html('Hey ' + name + '!!!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}
