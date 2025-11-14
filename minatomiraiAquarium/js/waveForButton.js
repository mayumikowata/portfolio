document.querySelectorAll(".waveCanvas_forButton").forEach(canvas => {
    const ctx = canvas.getContext("2d");

    const wrapper = canvas.closest(".event_button");

    canvas.width = wrapper.offsetWidth;
    canvas.height = wrapper.offsetHeight * 2.5;
    
    const style = getComputedStyle(wrapper);
    const waveColor = style.getPropertyValue("--wave-color").trim();

    let offset = 0;
    function drawWave() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        
        for (let x = 0; x < canvas.width; x++) {
            let y = 5 * Math.sin((x + offset) * 0.1) + canvas.height / 2;
            ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fillStyle = waveColor;
        ctx.fill();

        offset += 0.8;
        requestAnimationFrame(drawWave);
    }

    drawWave();
});