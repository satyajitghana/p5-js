var n = 0;
var c = 8;
var angle = 137.5;
var button;
var buttonAngle;
var input;
var defAng;
var off = random(255);

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  colorMode(HSB, 255);
  clearSketch();
  button = createButton("Reset Sketch");
  button.position(0, 800);
  button.mousePressed(clearSketch);
  input = createInput("137.5");
  input.position(button.x+button.width+50, 800);
  buttonAngle = createButton("Set Angle");
  buttonAngle.position(input.x+input.width, 800);
  buttonAngle.mousePressed(setAngle);
  defAngle = createElement("h4", "Default Angle = 137.5");
  defAngle.position(width/2-80, 850); 
  background(0);
}

function setAngle() {
  angle = input.value();
  clearSketch();
}

function clearSketch() {
  background(0);
  n = 0;
  c = 8;
  angle = 137.5;
  off = random(255);
}

function draw() {
  translate(width/2, height/2);
  //var phi = n * 137.5 * PI / 180;
  var phi = n * angle;
  var r = c * sqrt(n);
  n++;
  
  var x = r * cos(phi);
  var y = r * sin(phi);
  noStroke();
  fill((off+r)%256, 255, 255);
  ellipse(x, y, 8, 8);
  
}
