class Game {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private lastFrameTime: number;
  private player: Player;
  private objects: Object[];

  constructor() {
    this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    this.lastFrameTime = 0;
    this.player = new Player({ x: 100, y: 100 });
    this.objects = [];

    const context = this.canvas.getContext('2d');
    if (!context) throw new Error('NO CONTEXT');
    this.context = context;

    this.gameLoop(this.lastFrameTime);
    this.setupEventListeners();
    this.generateCoins(5);
  }

  gameLoop(currentTime: number) {
    const deltaTime = (currentTime - this.lastFrameTime) / 1000;
    this.lastFrameTime = currentTime;

    this.update(deltaTime);
    this.render();

    requestAnimationFrame((time) => this.gameLoop(time));
  }

  update(deltaTime: number) {
    // Update game logic here.
    this.player.update(deltaTime);
  }

  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Render game objects here.
    this.player.render(this.context);

    for (const object of this.objects) {
      object.render(this.context);
    }
  }

  setupEventListeners() {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      this.handleKeyDown(event);
    });

    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.handleKeyUp(event);
    });
  }

  handleKeyDown(event: KeyboardEvent) {
    this.player.handleKeyDown(event);
  }

  handleKeyUp(event: KeyboardEvent) {
    this.player.handleKeyUp(event);
  }

  /* Randomization. */
  generateCoins(count: number) {
    for (let i = 0; i < count; i++) {
      const coinX = Math.random() * this.canvas.width;
      const coinY = Math.random() * this.canvas.height;
      const coin = new Coin({ x: coinX, y: coinY }, 1);
      this.objects.push(coin);
    }
  }
}

window.onload = () => {
  new Game();
};
