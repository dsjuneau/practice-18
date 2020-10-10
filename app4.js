const canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
const spots = [];

const sizeWindow = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

sizeWindow();
window.onresize = sizeWindow;


function spotGen (x, y){
    const randomColor = ()=>{
        const r = Math.floor(Math.random()*266);
        const g = Math.floor(Math.random()*266);
        const b = Math.floor(Math.random()*266);
        return `rgb(${r}, ${g}, ${b})`
    }

    this.x = x;
    this.y = y; 
    this.r = 50;
    this.c = randomColor();
    this.dx = Math.floor(Math.random()*7)-3;
    this.dy = Math.floor(Math.random()*7)-3;
    this.updateSpot = ()=>{
        this.x +=this.dx;
        this.y +=this.dy;
        if (this.x+this.r>= canvas.width || this.x-this.r<= 0){
            this.dx = -this.dx;
        }
        if (this.y+this.r>= canvas.height || this.y-this.r<= 0){
            this.dy = -this.dy;
        }
    };
    this.drawCircle = () => {
        c.fillStyle = this.c;
        c.beginPath();
        c.ellipse(this.x, this.y, this.r, this.r, 0, 0, 2 * Math.PI);
        c.fill();
      };

}









//Initiate new circle at mouse position

canvas.addEventListener("click", (e) => {
    spots.push(new spotGen(e.clientX, e.clientY) )
 
});




//Initiate first circle and start animation

spots.push(new spotGen(100, 200, 50));

const drawIt = ()=>  {
    c.clearRect(0, 0, canvas.width, canvas.height);
    spots.forEach(spot =>{
        spot.drawCircle();
       spot.updateSpot();
    })
    requestAnimationFrame(drawIt);
}

drawIt();
