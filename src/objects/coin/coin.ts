class Coin extends CollectibleObject {
  private value: number;

  constructor(coordinate: Coordinate, value: number) {
    super(coordinate, true);
    this.value = value;
  }

  render(context: CanvasRenderingContext2D) {
    context.fillStyle = 'orange';
    context.beginPath();
    context.arc(this.coordinate.x, this.coordinate.y, 10, 0, 2 * Math.PI);
    context.fill();
  }

  collect() {
    console.log(`Collected ${this.value} coins!`);
  }
}
