class Snake {
  constructor(initialX, initialY) {
    this.xCords = [initialX];
    this.yCords = [initialY];
    this.vel = BLOCK_SIZE;
    this.snakeBlock = BLOCK_SIZE;
    this.direction = "right";
    this.isDead = false;
  }

  update(shouldGrow) {
    console.log(this.isDead ? "snake dead" : "snake updated");
    let size = this.xCords.length;

    let [headX, ...bodyX] = this.xCords;
    let [headY, ...bodyY] = this.yCords;

    let newHeadX = headX;
    let newHeadY = headY;

    for (let i = 0; i < size - 1; i++) {
      if (bodyX[i] === headX && bodyY[i] === headY) {
        this.isDead = true;
        continue;
      }
    }
    if (this.isDead) {
      return;
    }

    switch (this.direction) {
      case "left":
        newHeadX = newHeadX - this.vel > -BLOCK_SIZE ? newHeadX - this.vel : SCREEN_WIDTH;
        break;
      case "right":
        newHeadX = newHeadX + this.vel < SCREEN_WIDTH ? newHeadX + this.vel : 0;
        break;
      case "up":
        newHeadY = newHeadY - this.vel > -BLOCK_SIZE ? newHeadY - this.vel : SCREEN_HEIGHT;
        break;
      case "down":
        newHeadY = newHeadY + this.vel < SCREEN_HEIGHT ? newHeadY + this.vel : 0;
        break;
    }

    if (shouldGrow) {
      size += 1;
    }

    this.xCords = [newHeadX, headX, ...bodyX].slice(0, size);
    this.yCords = [newHeadY, headY, ...bodyY].slice(0, size);
  }

  draw() {
    const size = this.xCords.length;
    for (let i = 0; i < size; i++) {
      rect(this.xCords[i], this.yCords[i], this.snakeBlock, this.snakeBlock);
    }
  }

  handleKeyPress(keyCode) {
    switch (keyCode) {
      case 74:
        if (this.direction !== "right") {
          this.direction = "left";
        }
        break;
      case 76:
        if (this.direction !== "left") {
          this.direction = "right";
        }
        break;
      case 73:
        if (this.direction !== "down") {
          this.direction = "up";
        }
        break;
      case 75:
        if (this.direction !== "up") {
          this.direction = "down";
        }
        break;
    }
  }
}
