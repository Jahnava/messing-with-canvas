window.onload = draw; // Execute draw function when DOM is ready
function draw() {
     // Assign our canvas element to a variable
    var canvas = document.getElementById("canvas1");
    // Create the HTML5 context object to enable draw methods
    var ctx = canvas.getContext("2d");
    // fillStyle (r, g, b, alpha);
    ctx.fillStyle = "rgba(100,200,10,1)";
    // fillRect (X, Y, width, height);
    ctx.fillRect (12, 10, 22, 22);
    ctx.fillStyle ="rgba(0,0, 200,1)";
    ctx.fillRect (32, 10, 22, 22);
    ctx.fillStyle ="rgba(100,21, 0,20)";
    ctx.fillRect (52, 10, 22, 22);
    ctx.fillStyle ="rgba(100,0, 0,10)";
    ctx.fillRect (72, 10, 22, 22);
    ctx.fillStyle ="rgba(20,21, 20,20)";
    ctx.fillRect (92, 200, 22, 22);
    ctx.fillStyle ="rgba(0,200, 0,20)";
    ctx.fillRect (112, 10, 22, 22);
    ctx.fillStyle ="rgba(0,21, 200,20)";
    ctx.fillRect (132, 10, 22, 22);
    ctx.fillStyle ="rgba(20,21, 20,20)";
    ctx.fillRect (152, 10, 22, 22);
    ctx.fillStyle ="rgba(20,21, 20,20)";
    ctx.fillRect (172, 10, 22, 22);
    ctx.fillStyle ="rgba(20,21, 20,20)";
    ctx.fillRect (192, 10, 22, 22);
    ctx.fillStyle ="rgba(20,21, 20,20)";
    ctx.fillRect (212, 10, 22, 22);
    ctx.fillStyle ="rgba(20,21, 20,20)";
    ctx.fillRect (232, 10, 22, 22);
    ctx.fillStyle ="rgba(0,200, 20,20)";
    ctx.fillRect (252, 10, 22, 22);
}
