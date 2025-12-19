const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawHUD() {
    ctx.clearRect(0,0,canvas.width, canvas.height);

    // линии по диагонали
    ctx.strokeStyle = 'rgba(0,255,255,0.2)';
    ctx.lineWidth = 2;
    for(let i=0; i<canvas.width; i+=50){
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(canvas.width - i, canvas.height);
        ctx.stroke();
    }

    requestAnimationFrame(drawHUD);
}

drawHUD();

// эффект движения панелей при мыши
document.addEventListener('mousemove', e => {
    document.querySelectorAll('.panel').forEach(panel => {
        const x = (window.innerWidth/2 - e.clientX)/50;
        const y = (window.innerHeight/2 - e.clientY)/50;
        panel.style.transform = `translate(${x}px, ${y}px)`;
    });
});
