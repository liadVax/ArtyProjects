function setup() {
  createCanvas(820, 360);
  background("#264653");
}
function drawLiadVax() {
  //L
  drawVerticalLine(10, 10, 10, 5);
  drawHorizontalLine(10, 50, 10, 4);

  // I
  drawVerticalLine(60, 10, 10, 5);

  //A
  drawVerticalLine(80, 10, 10, 5);
  drawHorizontalLine(90, 10, 10, 3);
  drawVerticalLine(110, 10, 10, 5);
  drawHorizontalLine(80, 30, 10, 3);

  //D
  drawVerticalLine(130, 10, 10, 5);
  drawHorizontalLine(140, 10, 10, 2);
  drawDiagonalLineI(175, 30, 10, 3);
  drawHorizontalLine(140, 50, 10, 2);
  drawDiagonalLineII(160, 50, 10, 3);

  //V
  drawDiagonalLineI(80, 110, 10, 5);
  drawDiagonalLineII(80, 110, 10, 5);

  //A
  drawVerticalLine(130, 70, 10, 5);
  drawHorizontalLine(140, 70, 10, 3);
  drawVerticalLine(160, 70, 10, 5);
  drawHorizontalLine(130, 90, 10, 3);
  //X
  drawDiagonalLineII(180, 110, 10, 5);
  drawDiagonalLineI(211, 110, 10, 5);
}
function draw() {
  if (y <= height) {
    probe = random(1);
    strokeWeight(6);
    stroke(color[floor(random(4))]);
    if (probe < 0.4) {
      line(x, y, offset + x, y + offset); //-  \
    } else if (probe > 0.4 && probe < 0.9) {
      line(x, y + offset, x + offset, y); //- /
    } else {
      line(x, y, offset + x, y + offset); //- X
      line(x, y + offset, x + offset, y);
    }
    x += offset;
    if (x >= width) {
      x = 0;
      y += offset;
    }
  }

  push();
  stroke("#264653");
  smooth();
  fill("#264653");
  rect(width / 3 - 10, height / 3 - 7, 240, 135, 15);
  translate(width / 3, height / 3);
  drawLiadVax();
  pop();
}
