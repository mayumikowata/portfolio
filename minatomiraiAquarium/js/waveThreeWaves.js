document.querySelectorAll(".waveCanvas_three_waves").forEach(canvas => {
    const ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = 100;
    
    const wrapper = canvas.closest(".contents_wrapper");
    const style = getComputedStyle(wrapper);
    const waveColor = style.getPropertyValue("--wave-color").trim();

    let offset = 0;
    function drawWave() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        
        for (let x = 0; x < canvas.width; x++) {
            let y = 20 * Math.sin((x + offset) * 0.01) + 50;
            ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fillStyle = waveColor;
        ctx.fill();

        offset += 0.5;
        requestAnimationFrame(drawWave);
    }

    drawWave();
});






