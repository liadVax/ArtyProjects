let alpha = 0;
let colors = ["#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
let count = 0;

function setup() {
  createCanvas(400, 200);
}

function drawHorizontalLine(x, y, rectSize, length) {
  for (let i = 0; i < length; i++) {
    drawDot(x + i * rectSize, y, rectSize);
  }
}
function drawVerticalLine(x, y, rectSize, length) {
  for (let i = 0; i < length; i++) {
    drawDot(x, y + i * rectSize, rectSize);
  }
}

function drawDiagonalLineI(x, y, rectSize, length) {
  //- \.
  for (let i = 0; i < length; i++) {
    drawDot(x - i * rectSize + i * 2, y - i * rectSize, rectSize);
  }
}

function drawDiagonalLineII(x, y, rectSize, length) {
  //- ./
  for (let i = 0; i < length; i++) {
    drawDot(x + i * rectSize - i * 2, y - i * rectSize, rectSize);
  }
}

function drawDot(x, y, rectSize) {
  noStroke();
  let param = sin(alpha / 360) * rectSize;
  if (abs(param) < 1) {
    count++;
    count = count % 4;
  }
  fill(colors[count]);
  //rect(x, y, rectSize, rectSize);
  rect(x, y, param, param);
  alpha += 0.15;
}

function drawLiad() {
  //L
  drawHorizontalLine(110, 100, 10, 4);
  drawVerticalLine(110, 60, 10, 5);

  // I
  drawVerticalLine(155, 60, 10, 5);

  //A
  drawVerticalLine(170, 60, 10, 5);
  drawHorizontalLine(170, 60, 10, 3);
  drawVerticalLine(200, 60, 10, 5);
  drawHorizontalLine(170, 80, 10, 3);

  //D
  drawVerticalLine(215, 60, 10, 5);
  drawHorizontalLine(225, 60, 10, 2);
  drawDiagonalLineI(260, 80, 10, 3);
  drawHorizontalLine(225, 100, 10, 2);
  drawDiagonalLineII(245, 100, 10, 3);

  //V
  drawDiagonalLineI(155, 165, 10, 5);
  drawDiagonalLineII(155, 165, 10, 5);

  //A
  drawVerticalLine(200, 125, 10, 5);
  drawHorizontalLine(200, 125, 10, 3);
  drawVerticalLine(230, 125, 10, 5);
  drawHorizontalLine(200, 145, 10, 3);
  //X
  drawDiagonalLineII(250, 165, 10, 5);
  drawDiagonalLineI(281, 165, 10, 5);
}

function draw() {
  background("#264653");
  DebugMousePos();
  drawLiad();
}

function DebugMousePos() {
  if (mouseIsPressed) {
    print(mouseX, mouseY);
  }
}
