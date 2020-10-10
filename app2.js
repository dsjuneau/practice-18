const canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

const sizeWindow = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

sizeWindow();
window.onresize = sizeWindow;

let drawing = false;
c.strokeStyle = "white";
c.fillStyle = "white";
const bLine = (e) => {
  drawing = true;
  c.beginPath();
  c.moveTo(e.clientX, e.clientY);
  c.fillRect(e.clientX, e.clientY, 3, 3);
};

const dLine = (e) => {
  if (!drawing) return;
  c.lineWidth = 3;
  c.lineCap = "round";
  c.lineTo(e.clientX, e.clientY);
  c.stroke();
};
const eLine = (e) => {
  drawing = false;
};

canvas.addEventListener("mousedown", bLine);
canvas.addEventListener("mouseup", eLine);
canvas.addEventListener("mousemove", dLine);
