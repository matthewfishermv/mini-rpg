class CollectibleObject implements Object {
  constructor(coordinate: Coordinate, isCollectible: boolean) {
    this.coordinate = coordinate;
    this.isCollectible = true;
  }

  render(context: CanvasRenderingContext2D) {
    context.fillStyle = 'black';
    context.fillRect(this.coordinate.x, this.coordinate.y, 10, 10);
  }

  collect(): void {
    console.log('COLELCTED!');
  }
}
