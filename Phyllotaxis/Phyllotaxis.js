var n = 0;
var c = 8;
var button;
var off = random(255);

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  colorMode(HSB, 255);
  clearSketch();
  button = createButton("Reset Sketch");
  button.mousePressed(clearSketch);
  background(0);
}

function clearSketch() {
  background(0);
  n = 0;
  c = 8;
  off = random(255);
}

function draw() {
  translate(width/2, height/2);
  //var phi = n * 137.5 * PI / 180;
  var phi = n * 137.5;
  var r = c * sqrt(n);
  n++;
  
  var x = r * cos(phi);
  var y = r * sin(phi);
  noStroke();
  fill((off+r)%256, 255, 255);
  ellipse(x, y, 8, 8);
  
}
