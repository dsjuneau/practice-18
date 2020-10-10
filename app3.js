const canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

const sizeWindow = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

sizeWindow();
window.onresize = sizeWindow;

const randomColor = ()=>{
    const r = Math.floor(Math.random()*266);
    const g = Math.floor(Math.random()*266);
    const b = Math.floor(Math.random()*266);
    return `rgb(${r}, ${g}, ${b})`
}


const drawCircle = (x, y, r, color) => {


  c.fillStyle = color;
  c.beginPath();
  c.ellipse(x, y, r, r, 0, 0, 2 * Math.PI);
  c.fill();
};

drawCircle(100, 200, 50);

canvas.addEventListener("click", (e) => {
    spots.push({
        x: e.clientX,
        y: e.clientY,
        r: 50,
        c: randomColor(),
        dx: Math.floor(Math.random()*7)-3,
        dy: Math.floor(Math.random()*7)-3
    })
  drawCircle(e.clientX, e.clientY, 50);
});

const updateSpot = (s)=>{
    s.x +=s.dx;
    s.y +=s.dy;
    if (s.x+s.r>= canvas.width || s.x-s.r<= 0){
        s.dx = -s.dx;
    }
    if (s.y+s.r>= canvas.height || s.y-s.r<= 0){
        s.dy = -s.dy;
    }
    return s;
}

const spots = [{
    x: 100, 
    y: 200,
    r: 50,
    c: randomColor(),
    dx: 3, 
    dy: 4
}];

const drawIt = ()=>  {
    c.clearRect(0, 0, canvas.width, canvas.height);
    spots.forEach(spot =>{
        drawCircle(spot.x, spot.y, spot.r, spot.c);
       spot = updateSpot(spot);
    })
    requestAnimationFrame(drawIt);
}

drawIt();
