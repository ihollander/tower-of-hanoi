import TowerCanvas from "./canvas";

document.addEventListener("DOMContentLoaded", () => {
  // root node
  const root = document.getElementById("root");

  // create a canvas
  const canvas = document.createElement("canvas");
  canvas.width = 700;
  canvas.height = 500;
  canvas.style.border = "1px solid #000";

  root.appendChild(canvas);

  // draw things
  const tower = new TowerCanvas(canvas, 10);
  tower.init();
});
