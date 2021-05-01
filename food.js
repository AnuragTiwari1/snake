class Food {
  constructor() {
    this.x = floor(random(0, (SCREEN_WIDTH - BLOCK_SIZE) / BLOCK_SIZE)) * BLOCK_SIZE;
    this.y = floor(random(0, (SCREEN_HEIGHT - BLOCK_SIZE) / BLOCK_SIZE)) * BLOCK_SIZE;
    this.foodBlock = BLOCK_SIZE;
  }

  draw() {
    rect(this.x , this.y , this.foodBlock, this.foodBlock);
  }
}
