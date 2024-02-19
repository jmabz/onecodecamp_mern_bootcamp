const canvas = document.getElementById('display');

// Initialization
{
    function fitCanvasToScreen (event) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    fitCanvasToScreen();
    window.onresize = fitCanvasToScreen;
}

function drawRandomCircle() {
    // Initialize random vars
    let x = Math.floor(Math.random() * canvas.width);
    let y = Math.floor(Math.random() * canvas.height);
    let radius = Math.floor(Math.random() * canvas.width / 12);
    [red, green, blue] = Array(3).fill(0).map(color => Math.floor(Math.random() * 255));

    if (!canvas.getContext) {
        return;
    }

    // Draw the circle
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
    ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
    ctx.fill();
}

canvas.addEventListener('click', drawRandomCircle);