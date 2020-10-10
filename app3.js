const canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

const sizeWindow = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

sizeWindow();
window.onresize = sizeWindow;

const drawCircle = (x, y, r) => {
  c.fillStyle = "red";
  c.beginPath();
  c.ellipse(x, y, r, r, 0, 0, 2 * Math.PI);
  c.fill();
};

drawCircle(100, 200, 50);

canvas.addEventListener("click", (e) => {
  drawCircle(e.clientX, e.clientY, 50);
});


