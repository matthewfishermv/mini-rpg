interface Object {
  coordinate: Coordinate;
  isCollectible: boolean;

  render(context: CanvasRenderingContext2D): void;
}
