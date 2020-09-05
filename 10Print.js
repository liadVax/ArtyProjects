let x = 0;
let y = 0;
let offset = 20;
let probe;
let color = ["#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
let quarter = 1;
let flag = 0;
let cnt = 0;

function setup() {
  createCanvas(820, 360);
  background("#264653");
  textAlign(CENTER);
  sel = createSelect();
  sel.position(7, height + 10);
  sel.option("Random");
  sel.option("Diamond");
  sel.option("Zigzag");
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  noLoop();
  background("#264653");
  x = 0;
  y = 0;
  flag = 0;
  cnt = 0;
  quarter = 1;
  loop();
}

function draw() {
  if (y >= height) {
    noLoop();
  }
  probe = random(1);
  strokeWeight(6);
  if (sel.value() == "Random") {
    stroke(color[floor(random(4))]);
    if (probe < 0.4) {
      line(x, y, offset + x, y + offset); //-  \
    } else if (probe > 0.4 && probe < 0.9) {
      line(x, y + offset, x + offset, y); //- /
    } else {
      line(x, y, offset + x, y + offset); //- X
      line(x, y + offset, x + offset, y);
    }
  } else if (sel.value() == "Diamond") {
    if (x <= width / 2 && y <= height / 2) quarter = 1;
    if (x >= width / 2 && y <= height / 2) quarter = 2;
    if (x <= width / 2 && y >= height / 2) quarter = 3;
    if (x >= width / 2 && y >= height / 2) quarter = 4;
    stroke(color[quarter - 1]);
    if (quarter == 1 || quarter == 4) {
      line(x, y + offset, x + offset, y); //- /
    } else if (quarter == 2 || quarter == 3) {
      line(x, y, offset + x, y + offset); //-  \
    }
  } else if (sel.value() == "Zigzag") {
    stroke(color[cnt]);
    if (flag) {
      line(x, y, offset + x, y + offset);
    } else {
      line(x, y + offset, x + offset, y);
    }
  }
  x += offset;
  if (x >= width) {
    flag = !flag;
    cnt++;
    cnt = cnt % 4;
    x = 0;
    y += offset;
  }
}
