// create disc making class
// initialize discs with color, size, poleIndex

export default class TowerCanvas {
  constructor(canvas, discs) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.width = canvas.width;
    this.height = canvas.height;

    this.discs = discs;
    this.discHeight = 20;
    this.maxDiscWidth = 100;
    this.minDiscWidth = 40;

    this.colors = [
      "#FF0000",
      "#FF7F00",
      "#FFFF00",
      "#00FF00",
      "#0000FF",
      "#4b0082",
      "#8B00FF"
    ];
  }

  init() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // draw poles
    for (let i = 1; i < 4; i++) {
      const start = (this.width / 4) * i;
      this.ctx.fillRect(start, this.height - 300, 10, 300);
    }

    // draw discs
    // 1 = 100 40 + ((4 - 1)/3) * 60
    // 2 = 80 40 + ((4 - 2)/3) * 60
    // 3 = 60 40 + ((4 - 3)/3) * 60
    // 4 = 40 40 + ((4 - 4)/3) * 60
    for (let i = 1; i <= this.discs; i++) {
      // calculate rect width
      const diff = this.maxDiscWidth - this.minDiscWidth;
      const rectWidth =
        this.minDiscWidth + ((this.discs - i) / (this.discs - 1)) * diff;

      const startX = this.width / 4 - rectWidth / 2 + 10 / 2;
      const startY = this.height - this.discHeight * i;
      const colorIndex = (i - 1) % this.colors.length;
      const color = this.colors[colorIndex];
      this.ctx.fillStyle = color;
      this.ctx.fillRect(startX, startY, rectWidth, this.discHeight);
    }
  }
}
