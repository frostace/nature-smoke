var inc = 0.01;
var scale = 20;
var cols, rows;

function setup() {
  createCanvas(200, 200);
  cols = floor(width / scale);
  rows = floor(height / scale);
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var y = 0; y < rows; y++) {
      var index = (x + y * width) * 4;
      var r = noise(xoff, yoff) * 255;
      xoff += inc;
      fill(random(255));
      rect(x * scale, y * scale, scale, scale);
    }
    yoff += inc;
  }
}
