window.onload = draw; // Execute draw function when DOM is ready
function draw() {
    //  Assign our canvas element to a variable
    var canvas = document.getElementById("canvas1");
    // Create the HTML5 context object to enable draw methods
    var ctx = canvas.getContext("2d");
    // fillStyle (r, g, b, alpha)
    // ctx.fillStyle = "rgba(100,200,10,1)";
    // fillRect (X, Y, width, height);
    // ctx.fillRect (12, 80, 22, 22);
    // ctx.fillStyle ="rgba(0,0, 200,1)";
    // ctx.fillRect (32, 80, 22, 22);
    // ctx.fillStyle ="rgba(100,21, 0,20)";
    // ctx.fillRect (52, 80, 22, 22);
    // ctx.fillStyle ="rgba(100,0, 0,10)";
    // ctx.fillRect (72, 80, 22, 22);
    // ctx.fillStyle ="rgba(20,21, 20,20)";
    // ctx.fillRect (92, 80, 22, 22);
    // ctx.fillStyle ="rgba(0,200, 0,20)";
    // ctx.fillRect (112, 80, 22, 22);
    // ctx.fillStyle ="rgba(0,21, 200,20)";
    // ctx.fillRect (132, 80, 22, 22);
    // ctx.fillStyle ="rgba(20,21, 20,20)";
    // ctx.fillRect (152, 80, 22, 22);
    // ctx.fillStyle ="rgba(20,21, 20,20)";
    // ctx.fillRect (172, 80, 22, 22);
    // ctx.fillStyle ="rgba(20,21, 20,20)";
    // ctx.fillRect (192, 80, 22, 22);
    // ctx.fillStyle ="rgba(20,21, 20,20)";
    // ctx.fillRect (212, 80, 22, 22);
    // ctx.fillStyle ="rgba(20,21, 20,20)";
    // ctx.fillRect (232, 80, 22, 22);
    // ctx.fillStyle ="rgba(0,200, 20,20)";
    // ctx.fillRect (252, 80, 22, 22);
    //create html5 context object to enable draw methods
    //triangle
  ctx.beginPath();
  ctx.moveTo(100, 50);
  ctx.lineTo(130, 100);
  ctx.lineTo(70, 100);
  ctx.closePath();
  ctx.stroke();

// horn left
  ctx.beginPath();
  ctx.moveTo(72, 60);
  ctx.lineTo(85, 72);
  ctx.lineTo(71, 94);
  ctx.lineTo(50, 70);
  ctx.lineTo(65, 40);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  //horn right
  ctx.beginPath();
  ctx.moveTo(200-72, 60);
  ctx.lineTo(200-85, 72);
  ctx.lineTo(200-71, 94);
  ctx.lineTo(200-50, 70);
  ctx.lineTo(200-65, 40);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}
