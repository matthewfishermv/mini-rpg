class Player {
  private coins: number;
  private position: Coordinate;
  private movementDirections: MovementDirection;
  private movementSpeed: number;

  constructor(coordinate: Coordinate) {
    this.coins = 0;
    this.position = coordinate;
    this.coins = 0;
    this.movementDirections = { up: false, down: false, left: false, right: false };
    this.movementSpeed = 128; // Pixels per second.
  }

  render(context: CanvasRenderingContext2D) {
    // Render player on the canvas.
    context.fillStyle = 'blue';
    context.fillRect(this.getXCoordinate(), this.getYCoordinate(), 50, 50);

    // Render coins count on the canvas.
    context.fillStyle = 'black';
    context.font = '24px Arial';
    context.fillText(`Coins: ${this.getCoins()}`, 10, 30);
  }

  getCoins() {
    return this.coins;
  }

  updateCoins(amount: number) {
    this.coins += amount;
  }

  /* Event listeners. */
  setupEventListeners() {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      this.handleKeyDown(event);
    });

    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.handleKeyUp(event);
    });
  }

  /* Position and movement. */
  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.movementDirections.up = true;
        break;
      case 'ArrowDown':
        this.movementDirections.down = true;
        break;
      case 'ArrowLeft':
        this.movementDirections.left = true;
        break;
      case 'ArrowRight':
        this.movementDirections.right = true;
        break;
    }
  }

  handleKeyUp(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.movementDirections.up = false;
        break;
      case 'ArrowDown':
        this.movementDirections.down = false;
        break;
      case 'ArrowLeft':
        this.movementDirections.left = false;
        break;
      case 'ArrowRight':
        this.movementDirections.right = false;
        break;
    }
  }

  getXCoordinate(): number {
    return this.position.x;
  }

  getYCoordinate(): number {
    return this.position.y;
  }

  update(deltaTime: number) {
    const speed = this.movementSpeed * deltaTime;
    let dx = 0;
    let dy = 0;

    if (this.movementDirections.up) {
      dy -= speed;
    }

    if (this.movementDirections.down) {
      dy += speed;
    }

    if (this.movementDirections.left) {
      dx -= speed;
    }

    if (this.movementDirections.right) {
      dx += speed;
    }

    this.position.x += dx;
    this.position.y += dy;
  }
}
