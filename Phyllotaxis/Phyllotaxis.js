var n = 0;
var c = 8;
var angle = 137.5;
var button;
var buttonAngle;
var input;
var defAng;
var off;
var sizeSlider;
var cSlider;

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
  sizeSlider = createSlider(1, 20, 8, 0.1);
  
  sizeSlider.position(0, 850);
  var sizeText = createElement("h4", "Size");
  sizeText.position(sizeSlider.x*2+sizeSlider.width + 30, 825);
  
  cSlider = createSlider(1, 20, 8, 0.1);
  cSlider.position(0, 880);
  var cText = createElement("h4", "Inter-Distance");
  cText.position(sizeSlider.x*2+sizeSlider.width + 30, 865);
  
  defAngle = createElement("h4", "Default Angle = 137.5");
  defAngle.position(width/2-20, 850); 
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
  //translate(width/2, height/2);
  //var phi = n * 137.5 * PI / 180;
  c = cSlider.value();
  var phi = n * angle;
  var r = c * sqrt(n);
  n++;
  var x = (width/2) + r * cos(phi);
  var y = (height/2) + r * sin(phi);
  //var c = map((off+r), 0, 400, 0, 255);
  noStroke();
  fill((off+r)%256, 255, 255);
  //fill(c, 255, 255);
  ellipse(x, y, sizeSlider.value(), sizeSlider.value());
  
}
