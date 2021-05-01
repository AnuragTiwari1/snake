let snake;
let food;

function setup() {
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  snake = new Snake(SNAKE_INITIAL_X, SNAKE_INITIAL_Y);
  food = new Food();
}

function draw() {
  background(101, 171, 0);
  snake.draw();
  food.draw();
  if (snake.isDead) {
    push();
    textSize(TEXT_SIZE);
    stroke(0);
    strokeWeight(1);
    text("GaMe OvEr", 210, 210);
    pop();
  } else if (frameCount % UPDATE_FRAME === 0) {
    const isEating = food.x === snake.xCords[0] && food.y === snake.yCords[0];
    snake.update(isEating);
    if (isEating) {
      food = new Food();
    }
  }
}

function keyPressed() {
  snake.handleKeyPress(keyCode);
}
