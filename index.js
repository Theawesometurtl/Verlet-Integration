const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Entity {
    constructor() {

        this.position = {
            x : 250,
            y : 250
        }
        this.velocity = {
            x : 0,
            y : 0
        }
        this.radius = 20;
        this.mass = 1;

    }

    draw() {
        ctx.fillStyle = 'gray';
        ctx.beginPath();
        ctx.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI)
        ctx.stroke();
        ctx.closePath();
        ctx.fill();
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        
    }
}
entity = new Entity();

function game() {
    //update();
    draw();
}

function update() {
    pass
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    entity.draw();
    
}

setInterval(game, 15);



//checking for mouse click event
canvas.addEventListener("click", findMousePos);

function findMousePos(event) {
    //needed to get mouse position relative to the canvas
    var rect = canvas.getBoundingClientRect();
    
    console.log(event.clientX - rect.left, event.clientY - rect.top);
    
  }

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
       return; // Do nothing if the event was already processed
    } 
  
    switch (event.key) {
 
       case "s":
          polygon.simulation = true;
          break;
       
       case "r":
          polygon.simulation = false;
          polygon.reset();
 
          break;
 
       default:
          return; // Quit when this doesn't handle the key event.
    }
 })