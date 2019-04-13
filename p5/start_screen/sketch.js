var lines = [];
var stars = [];

let hLines = 60;
let nStars = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 30; i++) {
    lines[i] = new Line(i);
  }
  for (var i = 0; i < nStars; i++) {
    stars[i] = new Star();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  stroke(189, 34, 164);
  line(0, height*548 / 1080, width, (height * 548) / 1080);
  for (var i = 0; i < hLines; i++) {
    stroke(189, 34, 164);
    line(
      (width * i) / hLines,
      (height * 548) / 1080,
      width / 2 + (i - hLines / 2) * 1000,
      width
    );
  }
  for (var i = 0; i < lines.length; i++) {
    lines[i].update();
    lines[i].show();
  }
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function quit(){
  remove();
}
