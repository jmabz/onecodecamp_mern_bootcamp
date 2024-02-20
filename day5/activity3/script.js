const canvas = document.getElementById('display');
const ctx = canvas.getContext('2d');

// Initialization
{
    function fitCanvasToScreen (event) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    fitCanvasToScreen();
    window.onresize = fitCanvasToScreen;
}

class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

class Circle {
    constructor(ctx, x, y, radius, color) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    };

    draw() {
        let color = this.color;
        let ctx = this.ctx;
        ctx.beginPath();
        ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        ctx.fill();
    }
}

function drawRandomCircle() {
    // Initialize random vars
    
    let x = Math.floor(Math.random() * canvas.width);
    let y = Math.floor(Math.random() * canvas.height);
    let radius = Math.floor(Math.random() * canvas.width / 12);
    [red, green, blue] = Array(3).fill(0).map(color => Math.floor(Math.random() * 255));
    let color = new Color(red, green, blue);
    let circle = new Circle(ctx, x, y, radius, color);
 
    if (!canvas.getContext) {
        return;
    }

    // Draw the circle
    circle.draw();
}

canvas.addEventListener('click', drawRandomCircle);