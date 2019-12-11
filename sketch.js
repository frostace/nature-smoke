var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;   // define the 3rd dimension as time

// var fr;
var particles = [];
var flowfield;
var particleNum = 1000;
var fieldUpdateSpeed = 0.0004;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  cols = floor(width / scl);
  rows = floor(height / scl);
  // fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < particleNum; i++) {
    particles[i] = new Particle();
  }

}

function draw() {
  // background(255);
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;   // use perlin noise to generate a random angle
      var v = p5.Vector.fromAngle(angle);             // generate vector with the random angle
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 40);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);

      pop();
      // fill(r);
      // rect(x * scl, y * scl, scl, scl);
    }
    yoff += inc;
    zoff += fieldUpdateSpeed;
  }

  for (var i = 0; i < particleNum; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].show();
    particles[i].edges();
  }

  // particles[0].update();
  // particles[0].show();

  // fr.html(floor(frameRate()));
}
